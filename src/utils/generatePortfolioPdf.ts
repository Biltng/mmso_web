import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { services, type ServiceData } from "../data/services";

const BRAND: [number, number, number] = [230, 126, 34];
const GRAPHITE: [number, number, number] = [74, 74, 74];
const STEEL: [number, number, number] = [160, 160, 160];
const WHITE: [number, number, number] = [255, 255, 255];
const LIGHT_BG: [number, number, number] = [246, 246, 246];

type DocWithTable = jsPDF & { lastAutoTable: { finalY: number } };

async function loadLogoDataUrl(): Promise<string | null> {
  try {
    const logoUrl = new URL("images/muthimunye-logo.png", document.baseURI).toString();
    const response = await fetch(logoUrl);
    if (!response.ok) return null;
    const blob = await response.blob();
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () =>
        resolve(typeof reader.result === "string" ? reader.result : null);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

function drawHeader(doc: jsPDF, logoDataUrl: string | null) {
  doc.setFillColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
  doc.rect(0, 0, 210, 38, "F");

  doc.setFillColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.rect(0, 38, 210, 2, "F");

  if (logoDataUrl) {
    doc.addImage(logoDataUrl, "PNG", 15, 7, 16, 16);
  }

  doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("MUTHIMUNYE GROUP OF CO.", 35, 15);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text("Company Services Portfolio", 35, 22);

  doc.setFontSize(7.5);
  doc.setTextColor(200, 200, 200);
  doc.text(
    "eMalahleni, Mpumalanga  |  Langebaan, Western Cape  |  info@mmso.co.za  |  060 988 4542",
    35,
    29
  );
}

function drawPageFooter(doc: jsPDF, pageNum: number) {
  const h = doc.internal.pageSize.getHeight();
  doc.setFillColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
  doc.rect(0, h - 12, 210, 12, "F");
  doc.setFontSize(7);
  doc.setTextColor(STEEL[0], STEEL[1], STEEL[2]);
  doc.text(
    `© ${new Date().getFullYear()} MUTHIMUNYE GROUP OF CO. All rights reserved.`,
    15,
    h - 4.5
  );
  doc.text(`Page ${pageNum}`, 195, h - 4.5, { align: "right" });
}

function checkPageBreak(doc: jsPDF, y: number, needed: number): number {
  if (y + needed > doc.internal.pageSize.getHeight() - 20) {
    doc.addPage();
    drawPageFooter(doc, doc.getNumberOfPages());
    return 18;
  }
  return y;
}

function drawSectionTitle(doc: jsPDF, y: number, title: string): number {
  y = checkPageBreak(doc, y, 14);
  doc.setFillColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.rect(15, y, 3, 8, "F");
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
  doc.text(title, 22, y + 6.5);
  return y + 14;
}

function drawSubTitle(doc: jsPDF, y: number, title: string): number {
  y = checkPageBreak(doc, y, 10);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.text(title, 15, y + 5);
  return y + 9;
}

function drawParagraph(doc: jsPDF, y: number, text: string, maxWidth = 180): number {
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  const lines = doc.splitTextToSize(text, maxWidth);
  for (const line of lines) {
    y = checkPageBreak(doc, y, 5);
    doc.text(line, 15, y + 4);
    y += 4.5;
  }
  return y + 2;
}

function drawBullets(doc: jsPDF, y: number, items: string[]): number {
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(80, 80, 80);
  for (const item of items) {
    const lines = doc.splitTextToSize(item, 170);
    y = checkPageBreak(doc, y, lines.length * 4.5 + 1);
    doc.setFillColor(BRAND[0], BRAND[1], BRAND[2]);
    doc.circle(18, y + 2.5, 1, "F");
    for (let i = 0; i < lines.length; i++) {
      doc.text(lines[i], 22, y + 3.5 + i * 4.5);
    }
    y += lines.length * 4.5 + 1;
  }
  return y + 2;
}

function drawServicePage(
  doc: jsPDF,
  service: ServiceData,
  index: number,
  logoDataUrl: string | null
) {
  if (index > 0) doc.addPage();
  drawPageFooter(doc, doc.getNumberOfPages());

  doc.setFillColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
  doc.rect(0, 0, 210, 22, "F");
  doc.setFillColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.rect(0, 22, 210, 1.5, "F");

  if (logoDataUrl) {
    doc.addImage(logoDataUrl, "PNG", 15, 4.5, 10, 10);
  }

  const categoryLabel =
    service.category === "mining-solutions" ? "MINING SOLUTIONS" : "DEVELOPMENT";
  doc.setFontSize(6.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.text(categoryLabel, 30, 8);

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
  doc.text(service.title, 30, 16);

  let y = 30;

  doc.setFontSize(10);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(BRAND[0], BRAND[1], BRAND[2]);
  const tagLines = doc.splitTextToSize(service.tagline, 180);
  for (const line of tagLines) {
    doc.text(line, 15, y);
    y += 5;
  }
  y += 3;

  y = drawSubTitle(doc, y, "Overview");
  y = drawParagraph(doc, y, service.overview);

  if (service.features.length > 0) {
    y = drawSubTitle(doc, y, "Key Features");
    y = checkPageBreak(doc, y, 8);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(80, 80, 80);
    const featureText = service.features.join("  •  ");
    const fLines = doc.splitTextToSize(featureText, 180);
    for (const line of fLines) {
      y = checkPageBreak(doc, y, 5);
      doc.text(line, 15, y + 3);
      y += 4.5;
    }
    y += 3;
  }

  if (service.details.length > 0) {
    y = drawSubTitle(doc, y, "Key Capabilities");
    y = drawBullets(doc, y, service.details);
  }

  if (service.industries && service.industries.length > 0) {
    y = drawSubTitle(doc, y, "Industries We Serve");
    y = drawBullets(doc, y, service.industries);
  }

  if (service.focusAreas && service.focusAreas.length > 0) {
    y = drawSubTitle(doc, y, "Core Service Areas");
    for (const area of service.focusAreas) {
      y = checkPageBreak(doc, y, 12);
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
      doc.text(area.title, 15, y + 4);
      y += 6;
      y = drawParagraph(doc, y, area.description);
    }
  }

  if (service.keyPoints && service.keyPoints.length > 0) {
    y = drawSubTitle(doc, y, "Key Highlights");
    for (const point of service.keyPoints) {
      y = checkPageBreak(doc, y, 12);
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
      doc.text(point.title, 15, y + 4);
      y += 6;
      y = drawParagraph(doc, y, point.description);
    }
  }

  if (service.products && service.products.length > 0) {
    y = drawSubTitle(doc, y, "Products & Materials");
    for (const group of service.products) {
      y = checkPageBreak(doc, y, 10);
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
      doc.text(group.category, 15, y + 4);
      y += 7;
      y = drawBullets(doc, y, group.items);
    }
  }

  if (service.process.length > 0) {
    y = drawSubTitle(doc, y, "Our Process");
    const tableBody = service.process.map((step, idx) => [
      String(idx + 1).padStart(2, "0"),
      step.step,
      step.description,
    ]);
    y = checkPageBreak(doc, y, 20);
    autoTable(doc, {
      startY: y,
      head: [["#", "Step", "Description"]],
      body: tableBody,
      margin: { left: 15, right: 15 },
      styles: { fontSize: 8, cellPadding: 3, textColor: [60, 60, 60] as [number, number, number] },
      headStyles: {
        fillColor: [BRAND[0], BRAND[1], BRAND[2]] as [number, number, number],
        textColor: [WHITE[0], WHITE[1], WHITE[2]] as [number, number, number],
        fontStyle: "bold",
        fontSize: 8,
      },
      alternateRowStyles: {
        fillColor: [LIGHT_BG[0], LIGHT_BG[1], LIGHT_BG[2]] as [number, number, number],
      },
      columnStyles: {
        0: { cellWidth: 10, halign: "center" },
        1: { cellWidth: 35, fontStyle: "bold" },
      },
      theme: "grid",
    });
    y = (doc as DocWithTable).lastAutoTable.finalY + 6;
  }

  if (service.whyChooseUs.length > 0) {
    y = drawSubTitle(doc, y, "Why Choose MUTHIMUNYE GROUP OF CO.");
    drawBullets(doc, y, service.whyChooseUs);
  }
}

export async function generatePortfolioPdf() {
  const logoDataUrl = await loadLogoDataUrl();
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  // ── Cover Page ──────────────────────────────────────────────
  doc.setFillColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
  doc.rect(0, 0, 210, 297, "F");

  doc.setFillColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.rect(0, 120, 210, 4, "F");

  if (logoDataUrl) {
    doc.addImage(logoDataUrl, "PNG", 52, 60, 28, 28);
  }

  doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("MUTHIMUNYE", 87, 73);
  doc.setFontSize(15);
  doc.text("GROUP OF CO.", 87, 83);

  doc.setFontSize(14);
  doc.setTextColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.text("Company Services Portfolio", 105, 108, { align: "center" });

  doc.setFontSize(9);
  doc.setTextColor(STEEL[0], STEEL[1], STEEL[2]);
  doc.text("Head Office: eMalahleni, Mpumalanga", 105, 140, { align: "center" });
  doc.text("Branch: Langebaan, Western Cape", 105, 147, { align: "center" });
  doc.text("Email: info@mmso.co.za  |  Tel: 060 988 4542", 105, 154, { align: "center" });

  doc.setFontSize(10);
  doc.setTextColor(200, 200, 200);
  const tagline =
    "We are the preferred Mining Solutions company that provides unique problem-solving services in each of our divisions.";
  const tagLines = doc.splitTextToSize(tagline, 160);
  let tY = 175;
  for (const line of tagLines) {
    doc.text(line, 105, tY, { align: "center" });
    tY += 5.5;
  }

  doc.setFontSize(8);
  doc.setTextColor(STEEL[0], STEEL[1], STEEL[2]);
  doc.text(`${new Date().getFullYear()}`, 105, 275, { align: "center" });

  drawPageFooter(doc, 1);

  // ── Table of Contents ───────────────────────────────────────
  doc.addPage();
  drawHeader(doc, logoDataUrl);
  drawPageFooter(doc, 2);

  let y = 50;
  y = drawSectionTitle(doc, y, "Table of Contents");
  y += 4;

  const miningSolutions = services.filter((s) => s.category === "mining-solutions");
  const developmentServices = services.filter((s) => s.category === "development");

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.text("Mining Solutions", 15, y + 4);
  y += 10;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
  for (const s of miningSolutions) {
    doc.text(`•  ${s.title}`, 20, y + 3);
    y += 6;
  }

  y += 6;
  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.text("Development", 15, y + 4);
  y += 10;

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
  for (const s of developmentServices) {
    doc.text(`•  ${s.title}`, 20, y + 3);
    y += 6;
  }

  // ── Company Overview ────────────────────────────────────────
  doc.addPage();
  drawHeader(doc, logoDataUrl);
  drawPageFooter(doc, 3);

  y = 50;
  y = drawSectionTitle(doc, y, "About MUTHIMUNYE GROUP OF CO.");
  y = drawParagraph(
    doc,
    y,
    "MUTHIMUNYE GROUP OF CO. has established itself as a trusted partner in the mining and industrial sectors. With our head office in eMalahleni, Mpumalanga, and a strategic branch in Langebaan, Western Cape, we are well-positioned to serve clients across South Africa with excellence and efficiency."
  );
  y += 2;
  y = drawParagraph(
    doc,
    y,
    "We are the preferred Mining Solutions company that provides unique problem-solving services in each of our divisions. We offer specialised services across industries, from mining to property development, with a mission to deliver excellence, efficiency, and innovation in every project we undertake."
  );
  y += 4;

  y = drawSubTitle(doc, y, "Our Vision");
  y = drawParagraph(
    doc,
    y,
    "To be the preferred Mining Solutions Company that provides unique problem-solving services in each of our divisions."
  );
  y += 2;

  y = drawSubTitle(doc, y, "Our Mission");
  y = drawParagraph(
    doc,
    y,
    "To excel in delivering unparalleled quality and superior service to our customers through comprehensive solutions, competitiveness, efficiency, innovation, and continuous improvement."
  );
  y += 2;

  y = drawSubTitle(doc, y, "B-BBEE Commitment");
  drawParagraph(
    doc,
    y,
    "Level 1 B-BBEE company with 100% compliance with South Africa's B-BBEE regulations. Our goal is to drive transformation and empowerment in our industry."
  );

  // ── Mining Solutions Section Divider ─────────────────────────
  doc.addPage();
  doc.setFillColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
  doc.rect(0, 0, 210, 297, "F");
  doc.setFillColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.rect(0, 140, 210, 3, "F");
  doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("Mining Solutions", 105, 125, { align: "center" });
  doc.setFontSize(11);
  doc.setTextColor(STEEL[0], STEEL[1], STEEL[2]);
  doc.text(`${miningSolutions.length} Integrated Service Lines`, 105, 155, { align: "center" });
  drawPageFooter(doc, doc.getNumberOfPages());

  // ── Mining Solution Pages ───────────────────────────────────
  for (let i = 0; i < miningSolutions.length; i++) {
    drawServicePage(doc, miningSolutions[i], i + 1, logoDataUrl);
  }

  // ── Development Section Divider ─────────────────────────────
  doc.addPage();
  doc.setFillColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
  doc.rect(0, 0, 210, 297, "F");
  doc.setFillColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.rect(0, 140, 210, 3, "F");
  doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
  doc.setFontSize(28);
  doc.setFont("helvetica", "bold");
  doc.text("Development", 105, 125, { align: "center" });
  doc.setFontSize(11);
  doc.setTextColor(STEEL[0], STEEL[1], STEEL[2]);
  doc.text(
    `${developmentServices.length} End-to-End Development Services`,
    105,
    155,
    { align: "center" }
  );
  drawPageFooter(doc, doc.getNumberOfPages());

  // ── Development Pages ───────────────────────────────────────
  for (let i = 0; i < developmentServices.length; i++) {
    drawServicePage(doc, developmentServices[i], i + 1, logoDataUrl);
  }

  // ── Contact Page ────────────────────────────────────────────
  doc.addPage();
  doc.setFillColor(GRAPHITE[0], GRAPHITE[1], GRAPHITE[2]);
  doc.rect(0, 0, 210, 297, "F");
  doc.setFillColor(BRAND[0], BRAND[1], BRAND[2]);
  doc.rect(0, 125, 210, 3, "F");

  doc.setTextColor(WHITE[0], WHITE[1], WHITE[2]);
  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");
  doc.text("Get In Touch", 105, 110, { align: "center" });

  doc.setFontSize(11);
  doc.setTextColor(STEEL[0], STEEL[1], STEEL[2]);
  doc.text("Head Office: eMalahleni, Mpumalanga", 105, 145, { align: "center" });
  doc.text("Branch: Langebaan, Western Cape", 105, 153, { align: "center" });
  doc.text("Tel: 060 988 4542", 105, 165, { align: "center" });
  doc.text("Email: info@mmso.co.za", 105, 173, { align: "center" });

  doc.setFontSize(9);
  doc.setTextColor(180, 180, 180);
  doc.text(
    `© ${new Date().getFullYear()} MUTHIMUNYE GROUP OF CO. All rights reserved.`,
    105,
    200,
    { align: "center" }
  );

  drawPageFooter(doc, doc.getNumberOfPages());

  doc.save("MUTHIMUNYE_GROUP_Services_Portfolio.pdf");
}

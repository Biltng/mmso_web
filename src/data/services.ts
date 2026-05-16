import {
  Shield,
  HardHat,
  Gauge,
  Wrench,
  Zap,
  Truck,
  Package,
  Focus,
  Wifi,
  Building2,
  Hammer,
  PenTool,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  category: "mining-solutions" | "development";
  icon: LucideIcon;
  tagline: string;
  description: string;
  color: string;
  features: string[];
  details: string[];
  overview: string;
  whyChooseUs: string[];
  process: { step: string; description: string }[];
  industries?: string[];
  focusAreas?: { title: string; description: string }[];
  keyPoints?: { title: string; description: string }[];
  products?: { category: string; items: string[] }[];
}

export const services: ServiceData[] = [
  // ─── Mining Solutions ───────────────────────────────────────
  {
    slug: "ceramic-wear-lining",
    title: "Ceramic & Wear Lining",
    category: "mining-solutions",
    icon: Shield,
    tagline: "Protecting equipment for enhanced durability and efficiency",
    description:
      "We offer industry-leading ceramic and wear lining solutions to protect machinery from abrasion and corrosion, ensuring optimal performance and extended lifespan in demanding environments. Our solutions serve a wide range of heavy industries with custom-engineered wear protection systems.",
    color: "from-brand-500 to-brand-600",
    features: ["Ceramic wear linings", "Pipe & cone lining", "Cyclones", "Weld-on tiles", "Plastic sheet linings", "Adhesives & compounds"],
    details: [
      "Ceramic wear resistant linings for chutes, hoppers, and transfer points",
      "Flat surface lining for bins, bunkers, and silos",
      "Pipe and cone lining for pneumatic and slurry transport systems",
      "Fan casing and pulley lagging for optimal traction and protection",
      "Weld-on tiles for extreme impact and abrasion zones",
      "Cyclone lining systems for mineral processing and separation",
      "Plastic sheet linings from 6mm to 100mm thickness in various grades",
      "Tile adhesives, epoxy wearing compounds, silicone, and gel coat adhesives",
    ],
    overview:
      "Custom wear protection solutions for chutes, hoppers, cyclones, pipes, fans, pulleys, and conveyors. Premium ceramics, plastic sheets, rubber compounds, and adhesives deployed across Mining, Iron & Steel, Power Generation, Cement & Lime Manufacture, Mineral Beneficiation, and Petro-Chemical Refining.",
    whyChooseUs: [
      "Comprehensive range covering ceramics, plastics, rubber, and adhesives",
      "In-house design team that models wear patterns",
      "Sheets from 6mm to 100mm in multiple grades and colours",
      "Proven track record of reducing maintenance costs by up to 60%",
    ],
    process: [
      { step: "Site Assessment", description: "Our engineers survey your equipment, analyse wear patterns, bulk material type, flowability, particle size, moisture content, and funnel design to identify critical protection zones." },
      { step: "Material Selection", description: "Based on operating conditions, we select the optimal lining system — ceramic tiles, plastic sheets, rubber, or composite — matched to your specific application." },
      { step: "Design & Engineering", description: "We model material flow and design a custom lining layout optimised for maximum wear life, including adhesive selection and fixing methodology." },
      { step: "Fabrication & Supply", description: "Liner panels, tiles, sheets, and adhesives are manufactured and assembled in our workshop or sourced from certified suppliers to exact specifications." },
      { step: "Installation & Support", description: "Our certified teams install the lining system on-site with minimal disruption. Ongoing wear monitoring and scheduled maintenance maximise lining life." },
    ],
    industries: [
      "Mining",
      "Iron and Steel",
      "Power Generation",
      "Cement and Lime Manufacture",
      "Mineral and Beneficiation",
      "Base and Precious Metal Smelting",
      "Petro-Chemical Refining and Production",
    ],
    focusAreas: [
      { title: "Ceramic Wear Resistant Linings", description: "High-density alumina ceramic tiles and composite liners for chutes, hoppers, transfer points, and high-wear zones." },
      { title: "Flat Surface & Pipe Lining", description: "Lining solutions for bin floors, bunker walls, silos, and pneumatic/slurry pipelines." },
      { title: "Cyclones & Rotating Equipment", description: "Custom ceramic lining systems for cyclones, fan casings, pulleys, and conveyor drums." },
    ],
    keyPoints: [
      { title: "Premium Materials & Customization", description: "Sheets from 6mm to 100mm with anti-static and flame retardant options for hazardous environments." },
      { title: "Superior Performance", description: "Temperature resistance to 110°C, outstanding sliding properties, and up to 60% maintenance cost reduction." },
      { title: "Visual Replacement Indicators", description: "Two-coloured sheets clearly indicate when replacement is needed, enabling planned maintenance." },
    ],
    products: [
      { category: "Ceramic & Plastic Linings", items: ["Alumina ceramic tiles (various grades)", "Flat surface liner panels", "Pipe and cone liners", "Fan casing liners", "Pulley lagging systems", "Weld-on ceramic tiles", "Cyclone lining kits", "Plastic sheets (6mm – 100mm, multiple grades and colours)"] },
      { category: "Adhesives & Compounds", items: ["Tile adhesive — high-strength bonding for ceramic tiles", "Epoxy wearing compound (Ceramic) — abrasion-resistant surface rebuilding", "Epoxy wearing compound (Steel) — metal surface repair and protection", "Silicone adhesive — flexible bonding for thermal cycling applications", "Gel coat — protective surface finish and corrosion barrier"] },
    ],
  },
  {
    slug: "civil-construction",
    title: "Civil Construction",
    category: "mining-solutions",
    icon: HardHat,
    tagline: "Structural, building, and infrastructure works",
    description:
      "Comprehensive civil engineering, building, and construction services for mining, industrial, commercial, and infrastructure projects — from structural works to interior finishes and external civil packages.",
    color: "from-brand-600 to-brand-700",
    features: ["Building works", "Concrete", "Roadworks", "Fencing", "Roofing", "Plumbing"],
    details: [
      "General building construction and structural works",
      "Concrete, paving, curbs, and roadworks",
      "Plumbing, partitioning, and aluminium installations",
      "Doors, ceilings, cornice, flooring, and painting",
      "Roofing, fencing, and site finishing packages",
      "Integrated project delivery for industrial and civil applications",
    ],
    overview:
      "End-to-end construction capability for mining, industrial, commercial, and infrastructure projects. We execute structural works, building packages, interior finishing, and external civil scope with focus on quality workmanship, safety, and reliable coordination.",
    whyChooseUs: [
      "Multi-disciplinary capability across building, civil, and finishing trades",
      "Experienced in mining and industrial environments",
      "Integrated coordination of structural and infrastructure packages",
      "Strong focus on quality, safety, and schedule control",
    ],
    process: [
      { step: "Scope Review", description: "We review drawings, requirements, site conditions, and sequencing to define the full construction scope and trade interfaces." },
      { step: "Planning & Procurement", description: "Materials, subcontractors, labour, and programme milestones are planned to support efficient project delivery." },
      { step: "Construction Execution", description: "Our teams carry out the structural, building, finishing, and external civil works in line with project specifications." },
      { step: "Quality & Safety Control", description: "All activities are monitored through inspections, site supervision, and adherence to quality and safety standards." },
      { step: "Completion & Handover", description: "Works are completed, snagged, tested where required, and handed over with the necessary documentation." },
    ],
    focusAreas: [
      { title: "Structural & Concrete Works", description: "Foundations, slabs, bases, structural pours, and general reinforced concrete for industrial and mining projects." },
      { title: "Building & Interior Finishing", description: "Partitioning, aluminium installations, plumbing, painting, flooring, ceilings, doors, and interior fit-out." },
      { title: "External & Civil Works", description: "Roofing, paving, curbs, fencing, roadworks, and yard surface construction and reinstatement." },
    ],
    keyPoints: [
      { title: "Broad Trade Coverage", description: "Structural, building, finishing, and external civil works all delivered under one service." },
      { title: "Mining & Industrial Expertise", description: "Equipped for heavy industrial and mining environments with strong safety and coordination focus." },
      { title: "New Build & Refurbishment", description: "Capable delivery across new construction, expansions, refurbishments, and maintenance works." },
    ],
  },
  {
    slug: "roof-bolter-torque-indicating-system",
    title: "Roof Bolter Torque Indicating System",
    category: "mining-solutions",
    icon: Gauge,
    tagline: "OEM trusted supplier of the Roof Bolter Torque Indicating System",
    description:
      "We are an OEM trusted supplier of the Roof Bolter Torque Indicating System, providing specialist underground visual torque indication solutions that help ensure every roof bolt is installed in the safest and most effective way possible.",
    color: "from-graphite-600 to-graphite-700",
    features: ["High visual indication", "Standard systems", "Data logging", "Real-time management"],
    details: [
      "High visual torque indicating systems underground on roof bolter drill chuck",
      "Standard system configurations for core underground applications",
      "Data logging systems for tracking performance and compliance",
      "Real-time management systems for live operational visibility",
      "Clear visual indication of low, high, or optimal torque conditions",
      "Alignment with COP standards for roof bolt torque and thrust",
    ],
    overview:
      "OEM trusted supplier of the Roof Bolter Torque Indicating System — a patented safety system providing clear visual indication of roof bolter drill chuck torque conditions. Supports safer, first-time roof bolt installation across South African collieries, with standard, data logging, and real-time management system configurations.",
    whyChooseUs: [
      "OEM trusted supply partner with proven underground torque indication systems",
      "Supports safer first-time roof bolt installation practices",
      "Reduces operator-error and system-failure related torque issues",
      "Standard, data logging, and real-time management system options available",
    ],
    process: [
      { step: "Operational Review", description: "We review your roof bolting environment, equipment setup, and compliance requirements to determine the most suitable torque indication solution." },
      { step: "System Selection", description: "The correct configuration is selected based on your needs, whether a standard system, a data logging system, or a real-time management system." },
      { step: "Installation & Integration", description: "The Roof Bolter Torque Indicating System is supplied and integrated to work effectively with the roof bolter drill chuck and operating procedures." },
      { step: "Training & Visual Control", description: "Operators, miners, and technicians are trained to interpret the clear visual indicators for low, high, and optimal torque conditions during operation." },
      { step: "Monitoring & Support", description: "We provide ongoing support, system monitoring assistance, and service guidance to help maintain compliance and safe installation practices." },
    ],
    focusAreas: [
      { title: "High Visual Torque Indicating Systems", description: "Specialist underground systems installed on roof bolter drill chuck, providing immediate visual torque indication." },
      { title: "System Configurations", description: "Standard systems, data logging systems, and real-time management systems for varied operational needs." },
      { title: "COP Standard Compliance", description: "Systems aligned to COP standards for roof bolt torque and thrust during operation." },
    ],
    keyPoints: [
      { title: "6.5 Million Annual Bolts", description: "Approximately 6.5 million roof bolts are installed annually in South African collieries — clear visual indication is critical for safety." },
      { title: "First-Time Safe Installation", description: "Every roof bolt should be installed safely the first time, reducing risk and improving underground safety outcomes." },
      { title: "Patented System", description: "Unique safety system providing clear visual indication of whether torque is too low, too high, or optimal during operation." },
    ],
  },
  {
    slug: "mechanical",
    title: "Mechanical",
    category: "mining-solutions",
    icon: Wrench,
    tagline: "Fabrication, maintenance, hydraulics, pumps, valves, and piping systems",
    description:
      "Our Mechanical division covers steel fabrication, component repairs, surface and underground hydraulic support, pumps, gearboxes, valves, piping systems, thermoplastic engineering, liners, hoses, fittings, and de-watering support.",
    color: "from-brand-500 to-brand-600",
    features: ["Steel fabrication", "Hydraulics", "Pumps", "Piping systems", "Thermoplastic engineering", "Plant maintenance"],
    details: [
      "Steel fabrication for chutes, launders, tanks, pipe bends, cyclones, and structures",
      "Repairs on all of the above fabrication items",
      "Sandblasting and spray painting of components and equipment on and off site",
      "Hydraulics support for plant, surface, and underground machines including parts, fittings, hoses, fault-finding, and new designs",
      "Supply, installation, repairs, and refurbishments for valves, gearboxes, and pumps",
      "Plant maintenance including oil, filter, and breather change, laser alignments, problem solving, and general plant maintenance",
      "Piping systems (16mm – 1200mm) in HDPE, polypropylene, UPVC, and PVDF",
      "Thermoplastic engineering including tanks, manifolds, manholes, junction boxes, stormwater displacement, and barges",
      "Supply and installation of HDPE / PVC dam-liners, industrial hoses, fittings, and de-watering pump solutions",
    ],
    overview:
      "Practical workshop and field support for fabrication, maintenance, piping, pumps, hydraulics, and thermoplastic applications. We manufacture, repair, and support critical items including chutes, launders, tanks, pipe bends, and cyclones, plus hydraulic fault-finding, gearbox and pump supply, plant maintenance, and de-watering solutions.",
    whyChooseUs: [
      "Steel fabrication and repairs for chutes, launders, tanks, cyclones, and structures",
      "On-site and off-site sandblasting and spray painting capability",
      "Hydraulic support for plant, surface, and underground machines",
      "Supply, installation, repairs of valves, gearboxes, and pumps",
    ],
    process: [
      { step: "Assessment", description: "We review the mechanical scope, operating conditions, and equipment requirements to identify the correct fabrication, repair, piping, or maintenance solution." },
      { step: "Design & Selection", description: "Where required, new designs are developed, equipment is selected, and the correct material or component specification is confirmed." },
      { step: "Fabrication / Supply", description: "Components are fabricated, prepared, repaired, or supplied according to the approved scope and operating requirements." },
      { step: "Installation / Service", description: "Our teams carry out installation, maintenance, fault-finding, refurbishment, blasting, coating, or piping works on site or off site as required." },
      { step: "Support & Continuity", description: "We provide ongoing maintenance, replacement support, de-watering assistance, and operational problem-solving to keep systems running efficiently." },
    ],
    focusAreas: [
      { title: "Steel Fabrication & Blasting", description: "Chutes, launders, tanks, cyclones, and structures. On and off-site sandblasting and spray painting." },
      { title: "Hydraulics & Flow Systems", description: "Hydraulic parts, hoses, fault-finding, valves, gearboxes, pumps, and plant maintenance." },
      { title: "Piping, Thermoplastic & De-Watering", description: "Piping systems (16–1200mm), thermoplastic engineering, dam-liners, hoses, fittings, and de-watering solutions." },
    ],
    keyPoints: [
      { title: "Fabricate & Repair", description: "Critical process and plant items including chutes, launders, tanks, pipe bends, cyclones, and structures." },
      { title: "Complete Flow Control", description: "Valves, pumps, gearboxes, piping systems, hoses, and fittings across industrial applications." },
      { title: "Sustainable Approach", description: "Active involvement in recycling HDPE pipes and fittings to reduce carbon footprint." },
    ],
    products: [
      {
        category: "Mechanical Fabrication & Surface Treatment",
        items: [
          "Steel fabrication: chutes, launders, tanks, pipe bends, cyclones, structures",
          "Repairs on all of the above",
          "Sandblasting of components and equipment (on and off site)",
          "Spray painting of components and equipment (on and off site)",
        ],
      },
      {
        category: "Hydraulics, Plant & Flow Systems",
        items: [
          "Hydraulic parts, fittings, hoses, and fault-finding for plant, surface, and underground machines",
          "New hydraulic system designs",
          "Valves: diaphragm, knife gate, wedge gate, air release, butterfly, float, ball, and check valves",
          "Gearboxes: supply, installation, repairs, and refurbishments",
          "Pumps: self-priming, KSB, borehole, submersible, centrifugal, diesel/petrol powered, booster pumps",
          "Plant maintenance: oil, filter and breather change, laser alignments, problem solving, general plant maintenance",
        ],
      },
      {
        category: "Piping, Thermoplastic & De-Watering",
        items: [
          "Piping systems (16mm – 1200mm): HDPE, polypropylene, UPVC, PVDF",
          "Thermoplastic engineering: tanks, manifolds, manholes, junction boxes, stormwater displacement, barges",
          "Dam-liners: supply & installation of HDPE / PVC liners",
          "Hoses: lay-flat, heli-flex, green line, suction irrigation, dust suppression",
          "Fittings: compression, galvanised, PVC, and related fittings",
          "De-watering pump hire and de-watering pump supplies",
        ],
      },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical",
    category: "mining-solutions",
    icon: Zap,
    tagline: "Plant maintenance, electrical design, automation, and compliant installations",
    description:
      "Our Electrical division provides plant and equipment maintenance, electrical systems design, cable locating, cable joints, power distribution and control systems, industrial installations and construction, renewable energy solutions, automation and instrumentation, and compliance and certification services.",
    color: "from-graphite-700 to-graphite-800",
    features: ["Plant maintenance", "Power distribution", "Automation", "Compliance", "Industrial installations", "New cable installations"],
    details: [
      "Plant and equipment maintenance",
      "Electrical systems design",
      "Cable locating",
      "Cable joints",
      "Power distribution and control systems",
      "Industrial installations and construction",
      "Renewable energy solutions",
      "Automation and instrumentation",
      "Compliance and certification",
      "Supply, installations and maintenance of motors, mini substations, generators, high mast lights, and new cable installations",
      "COC's (Three phase | Single Phase)",
    ],
    overview:
      "Plant and equipment maintenance, electrical systems design, cable locating, power distribution and control systems, industrial installations and construction, renewable energy solutions, automation and instrumentation, compliance and certification. We supply, install, and maintain motors, mini substations, generators, high mast lights, new cable installations, and COC certificates.",
    whyChooseUs: [
      "Plant and equipment maintenance for operational continuity",
      "Electrical systems design tailored to site and plant requirements",
      "Cable locating and jointing for fault finding and new work",
      "Supply and installation of motors, generators, mini substations, and related assets",
    ],
    process: [
      { step: "Assessment", description: "We assess the plant, equipment, or installation requirements to determine the correct maintenance, design, supply, or compliance scope." },
      { step: "Design & Planning", description: "Electrical systems, layouts, cable requirements, control philosophy, and installation planning are developed according to project needs." },
      { step: "Supply & Installation", description: "We supply and install the required electrical equipment, cabling, control systems, and associated infrastructure safely and efficiently." },
      { step: "Testing & Certification", description: "Systems are tested, faults are addressed, and compliance and certification requirements such as COC's are completed where applicable." },
      { step: "Maintenance & Support", description: "Ongoing maintenance, fault-finding, cable support, and equipment servicing help keep systems performing reliably." },
    ],
    focusAreas: [
      { title: "Plant Maintenance & Design", description: "Equipment maintenance, electrical systems design, cable locating, and cable jointing." },
      { title: "Power Systems & Installations", description: "Power distribution, control systems, industrial installations, and compliance certification." },
      { title: "Supply & Support", description: "Motors, generators, mini substations, high mast lights, cable installations, and renewable energy solutions." },
    ],
    keyPoints: [
      { title: "Integrated Electrical Support", description: "Design, locating, installation, control, automation, maintenance, and certification all under one service." },
      { title: "Assets & Compliance", description: "Motors, generators, mini substations, high mast lights, and COC certificates for three-phase and single-phase systems." },
      { title: "Modern Solutions", description: "Renewable energy and automation support for efficient and contemporary power operations." },
    ],
    products: [
      {
        category: "Electrical Services",
        items: [
          "Plant and equipment maintenance",
          "Electrical systems design",
          "Cable locating",
          "Cable joints",
          "Power distribution and control systems",
          "Industrial installations and construction",
          "Renewable energy solutions",
          "Automation and instrumentation",
          "Compliance and certification",
        ],
      },
      {
        category: "Supply, Installation and Maintenance",
        items: [
          "Motors",
          "Mini Substation",
          "Generators",
          "High Mast Lights",
          "New Cable Installations",
          "COC's (Three phase | Single Phase)",
        ],
      },
    ],
  },
  {
    slug: "earth-moving-parts",
    title: "Earth Moving Parts",
    category: "mining-solutions",
    icon: Truck,
    tagline: "New and used parts, large components, repairs, exchanges, and undercarriage support",
    description:
      "No matter what the requirement — new or used parts — we are registered importers and can supply parts and large components at very competitive prices, mostly ex USA.",
    color: "from-brand-600 to-brand-700",
    features: ["Imported parts", "Service exchange", "Undercarriage", "Hydraulic components", "Turbo & injector repairs", "Used parts"],
    details: [
      "Registered importers supplying new and used parts and large components at competitive prices, mostly ex USA",
      "Service exchange and repairs on all cylinders",
      "Fleetguard filters, anti-freeze, and Valvoline lubricants",
      "Official Cummins diesel parts and filters agents",
      "Dozer, grader, front end loader, and TLB cutting edges and tips",
      "Hydraulic company support specialising in pumps and motors",
      "P&H rope shovel mechanical parts and certain electrical components",
      "Local agents for a large foundry supplying castings of all sizes, liners, pump parts, and complete vacuum pumps",
      "Bolts and nuts of all sizes",
      "Good used parts mainly for Caterpillar, Komatsu, and Liebherr",
      "Dozer and excavator tracks, rollers, idlers, and sprockets — supply and repair for mines and earthmoving contractors",
      "Supply of all makes of forklift parts",
      "All turbo repairs and service exchanges",
      "All injector repairs and service exchanges",
      "All types of auto electrical parts",
    ],
    overview:
      "Supply, sourcing, exchange, and repair of heavy equipment parts and major components. Registered importers providing new or used parts at competitive prices, mostly ex USA. Offering includes service exchange components, hydraulic parts, undercarriage systems, filters, lubricants, castings, cutting edges, shovel parts, and turbo/injector repairs.",
    whyChooseUs: [
      "Registered importers sourcing new or used parts competitively, mostly ex USA",
      "Service exchange and repair capability on cylinders, turbos, and injectors",
      "Access to Cummins diesel parts, filters, and Fleetguard lubricants",
      "Strong availability of parts for Caterpillar, Komatsu, and Liebherr equipment",
    ],
    process: [
      { step: "Requirement Review", description: "We determine whether the requirement is for a new part, good used part, service exchange item, or a repair/refurbishment solution." },
      { step: "Sourcing & Selection", description: "Parts and components are sourced through our import channels, agency partners, specialist suppliers, or used parts network depending on the requirement." },
      { step: "Supply / Exchange / Repair", description: "The required item is supplied, exchanged, repaired, or refurbished according to the application and equipment need." },
      { step: "Delivery & Fitment Support", description: "Components are delivered with support for selection, fitment, and compatibility where required." },
      { step: "Ongoing Support", description: "We continue to support clients with repeat sourcing, replacement planning, and service exchange requirements for operating fleets." },
    ],
    focusAreas: [
      { title: "New & Used Parts Import", description: "Registered importers supplying new or good used parts and large components competitively, mostly ex USA." },
      { title: "Service Exchange & Repairs", description: "Cylinder, turbo, and injector exchange and repair services. Hydraulic pump and motor support." },
      { title: "Undercarriage & Wear Parts", description: "Supply and repair of tracks, rollers, idlers, sprockets, and cutting edges for earthmoving fleets." },
    ],
    keyPoints: [
      { title: "New or Used Parts", description: "Sourcing either new or good used parts to suit application and budget." },
      { title: "Competitive Imports", description: "Registered importers supplying parts and large components at competitive prices, mostly ex USA." },
      { title: "Major Brand Support", description: "Specialising in Caterpillar, Komatsu, Liebherr, Cummins, P&H, and all forklift equipment." },
    ],
    products: [
      {
        category: "Parts, Components & Consumables",
        items: [
          "New and used parts and large components, mostly ex USA",
          "Fleetguard filters, anti-freeze, and Valvoline lubricants",
          "Official Cummins diesel parts and filters",
          "Bolts and nuts — all sizes",
          "All types of auto electrical parts",
          "All makes of forklift parts",
        ],
      },
      {
        category: "Repairs, Exchanges & Specialist Components",
        items: [
          "Service exchange and repairs on all cylinders",
          "All turbo repairs and service exchanges",
          "All injector repairs and service exchanges",
          "Hydraulic pump and motor support",
          "P&H rope shovel mechanical parts and certain electrical components",
          "Castings, liners, pump parts, and complete vacuum pumps",
        ],
      },
      {
        category: "Undercarriage, Wear Parts & Used Equipment Parts",
        items: [
          "Dozer, grader, front end loader, and TLB cutting edges and tips",
          "Dozer and excavator tracks, rollers, idlers, and sprockets — supply and repair",
          "Good used parts mainly for Caterpillar, Komatsu, and Liebherr",
        ],
      },
    ],
  },
  {
    slug: "logistics-and-supply",
    title: "Logistics and Supply",
    category: "mining-solutions",
    icon: Package,
    tagline: "Mining-focused logistics and supply solutions built for continuity and cost efficiency",
    description:
      "Our Logistics and Supply services are designed to meet the unique demands of the mining industry, ensuring uninterrupted operations and cost efficiency through reliable sourcing, delivery, and end-to-end support.",
    color: "from-brand-500 to-brand-700",
    features: ["Comprehensive supply solutions", "Reliable delivery", "Flexibility and scalability", "End-to-end support"],
    details: [
      "Sourcing and delivering high-quality mining materials, tools, and equipment to meet project needs",
      "Tailored supply chain strategies aligned with project goals and timelines",
      "On-time delivery of critical resources to mining sites, including challenging locations",
      "Transport logistics management that minimizes downtime and maintains operational efficiency",
      "Flexible support for both small-scale operations and large industrial ventures",
      "Scalable logistics and supply solutions that adapt to growth and changing project demands",
      "Expert support throughout the supply process from procurement to final delivery",
      "Streamlined logistics that save time and reduce operational costs",
    ],
    overview:
      "Mining-focused logistics and supply solutions designed for uninterrupted operations and cost efficiency. From sourcing materials, tools, and equipment to managing transport logistics and final delivery, we ensure mining operations receive critical resources at the right time.",
    whyChooseUs: [
      "Mining-focused logistics tailored to operational realities",
      "Comprehensive sourcing and delivery of high-quality materials and equipment",
      "Reliable delivery to remote or challenging mining locations",
      "Scalable service that grows with changing project demands",
    ],
    process: [
      { step: "Requirement Planning", description: "We assess project needs, timelines, and operational priorities to define the most effective logistics and supply approach." },
      { step: "Sourcing & Procurement", description: "High-quality mining materials, tools, and equipment are sourced in line with the scope, budget, and programme requirements." },
      { step: "Logistics Coordination", description: "Transport and delivery planning is managed to ensure critical resources reach site efficiently, even in challenging locations." },
      { step: "Delivery & Site Support", description: "Resources are delivered on time with coordinated support that helps maintain operational continuity and reduce delays." },
      { step: "Ongoing Optimisation", description: "As project demands change, we adapt and scale our supply solutions to support growth, continuity, and cost efficiency." },
    ],
    focusAreas: [
      { title: "Supply & Sourcing", description: "High-quality mining materials, tools, and equipment sourced with tailored supply chain strategies." },
      { title: "Transport & Logistics", description: "Planning and delivery management to remote and challenging mining locations, minimising downtime." },
      { title: "Flexibility & Scale", description: "Adaptable support from small operations to large industrial ventures with changing project demands." },
    ],
    keyPoints: [
      { title: "Mining Industry Focus", description: "Services structured around the unique operational demands of mining." },
      { title: "Uninterrupted Operations", description: "Critical materials and equipment delivered when and where needed to maintain continuity." },
      { title: "Professional End-to-End Delivery", description: "From procurement to final delivery, we manage the process so clients focus on productivity." },
    ],
    products: [
      {
        category: "Supply & Delivery Support",
        items: [
          "Mining materials supply",
          "Tools and equipment sourcing",
          "Project-aligned supply chain strategies",
          "Transport logistics coordination",
          "On-time delivery to operational sites",
        ],
      },
      {
        category: "Operational Value Delivered",
        items: [
          "Reduced downtime through reliable supply planning",
          "Support for challenging and remote delivery locations",
          "Flexible logistics support for changing project demands",
          "Scalable solutions for growth and larger ventures",
          "End-to-end procurement-to-delivery support",
        ],
      },
    ],
  },
  {
    slug: "precision-laser-alignment",
    title: "Precision Laser Alignment",
    category: "mining-solutions",
    icon: Focus,
    tagline: "Fast, accurate, and cost-effective laser alignment for rotating equipment and machine installations",
    description:
      "Precision laser alignment services for motors, gearboxes, pumps, couplings, and machine trains — delivering speed, accuracy, documented results, and reduced energy consumption.",
    color: "from-graphite-600 to-graphite-700",
    features: ["Motor & pump alignment", "Coupling alignment", "Machine train alignment", "Base twist measurement", "PDF reporting"],
    details: [
      "Laser shaft alignment for motor, gearbox, and pump couplings",
      "Alignment for fluid drive, Bibby, tyre, spider, N-Eupex, feathering, beam, bellows, jaw, diaphragm, disc, and gear couplings",
      "Vertical and flange-mounted machine alignment (4, 6, 8, and 10 bolt patterns)",
      "Three-machine train alignment (2 couplings)",
      "Twist measurement of machine base and foundation flatness checks",
      "Digital dial indicator (Values program) with laser precision and automatic recording",
      "Bearing clearance and shaft load checks",
      "PDF reports generated directly from the instrument with before and after results",
    ],
    overview:
      "Speed and precision of laser shaft alignment typically pays for itself within 3–6 months. Laser tools make measurement repeatable and disciplined — rulers and dial gauges lack the accuracy modern machines demand. Laser alignment is ten times faster and 100% more accurate than dial gauges, with resolution down to 0.001mm, plus expanded capability for base flatness, twist, and straightness measurements.",
    whyChooseUs: [
      "Speed and precision that typically pays for itself within 3–6 months",
      "Disciplined and repeatable process — same result regardless of operator",
      "PDF reports generated with before and after alignment results",
      "Ten times faster and 100% more accurate than dial gauges or straight edges",
    ],
    process: [
      { step: "Assessment", description: "We review the machine setup, coupling type, mounting arrangement, and alignment requirements to determine the correct approach." },
      { step: "Laser Measurement", description: "Precision laser tools are used to take fast, accurate alignment measurements — down to 0.001mm resolution." },
      { step: "Correction", description: "Alignment adjustments are carried out based on live laser feedback, ensuring machines are brought within tolerance." },
      { step: "Verification & Reporting", description: "Post-correction measurements confirm alignment is within specification. PDF reports with before and after results are generated directly from the instrument." },
      { step: "Extended Checks", description: "Where required, additional checks for base flatness, twist, soft foot, bearing clearance, and shaft load are completed." },
    ],
    focusAreas: [
      { title: "Motor, Pump & Coupling Alignment", description: "High-precision laser alignment for fluid drive, Bibby, tyre, spider, bellows, jaw, diaphragm, and gear couplings." },
      { title: "Vertical & Flange-Mounted Machines", description: "Measurement and alignment of vertically and flange-mounted machines with 4, 6, 8, and 10 bolt patterns." },
      { title: "Advanced Checks", description: "Base flatness, twist measurement, bearing clearance, shaft load, and three-machine train alignment." },
    ],
    keyPoints: [
      { title: "Fast & Accurate Pays for Itself", description: "Speed and precision mean the investment usually pays for itself within 3–6 months." },
      { title: "0.001mm Resolution", description: "Laser resolution far exceeds dial gauge capability, with instant PDF reports before/after alignment." },
      { title: "Energy & Environment", description: "Precise alignment reduces energy consumption and improves machine performance long-term." },
    ],
  },
  {
    slug: "digital-infrastructure",
    title: "Digital Infrastructure",
    category: "mining-solutions",
    icon: Wifi,
    tagline: "Telecommunications and connectivity solutions tailored to operational needs",
    description:
      "We offer comprehensive telecommunications and connectivity solutions, with our expert team ensuring reliable, efficient, and customized solutions for all your connectivity needs.",
    color: "from-brand-500 to-brand-600",
    features: ["Fiber optic solutions", "Satellite & microwave", "Wi-Fi & wireless", "Data centers", "Last-mile connectivity", "Maintenance & support"],
    details: [
      "Turnkey fiber optic solutions from design to implementation",
      "Microwave and bulk satellite installations",
      "Big screen and mall connectivity",
      "Data center installations (Cat 5 to Cat 6)",
      "Wi-Fi, wireless, and last-mile connectivity",
      "Fiber floating, cable hauling, and trenching with surface reinstatement",
      "Maintenance plans, on-site support, and equipment repairs",
    ],
    overview:
      "Our Digital Infrastructure services are focused on delivering comprehensive telecommunications and connectivity solutions across a wide range of operational environments. From turnkey fiber optic projects and data centre installations to microwave, satellite, wireless, and last-mile connectivity, we provide practical and dependable infrastructure support. Our expert team ensures reliable, efficient, and customized solutions that are aligned to each client’s technical, operational, and site-specific requirements.",
    whyChooseUs: [
      "Comprehensive telecommunications and connectivity capability under one service offering",
      "Turnkey fiber optic solutions from design through implementation",
      "Expert support for microwave and bulk satellite installations",
      "Capability in big screen and mall connectivity projects",
      "Data centre installations covering Cat 5 through Cat 6 requirements",
      "Wi-Fi, wireless, and last-mile connectivity solutions tailored to site needs",
      "Field capability for fiber floating, cable hauling, trenching, and surface reinstatement",
      "Ongoing maintenance plans, on-site support, and equipment repair services",
      "Reliable, efficient, and customized delivery from an experienced technical team",
    ],
    process: [
      { step: "Assessment & Design", description: "We assess the connectivity requirement and develop a design tailored to the environment, scope, and performance needs." },
      { step: "Planning & Preparation", description: "Materials, routing, installation requirements, and implementation activities are planned for efficient execution." },
      { step: "Installation", description: "Fiber, satellite, microwave, wireless, data centre, or related connectivity infrastructure is installed according to the project scope." },
      { step: "Testing & Commissioning", description: "Installed systems are tested, commissioned, and verified to ensure reliable and efficient performance." },
      { step: "Support & Maintenance", description: "We provide maintenance plans, on-site support, and equipment repairs to keep connectivity systems operating effectively." },
    ],
    focusAreas: [
      { title: "Turnkey Fiber Optic Solutions", description: "Complete fiber optic solutions delivered from design through implementation." },
      { title: "Microwave and Bulk Satellite Installations", description: "Installation support for microwave links and bulk satellite connectivity systems." },
      { title: "Big Screen and Mall Connectivity", description: "Connectivity solutions for big screen systems and mall-related installations." },
      { title: "Data Center Installations", description: "Structured data centre installations covering Cat 5 to Cat 6 infrastructure requirements." },
      { title: "Wi-Fi, Wireless, and Last-Mile Connectivity", description: "Wireless and last-mile solutions that improve access, communication, and operational coverage." },
      { title: "Fiber Floating, Cable Hauling, and Trenching", description: "Practical infrastructure works including fiber floating, cable hauling, trenching, and surface reinstatement." },
      { title: "Maintenance and Support", description: "Maintenance plans, on-site support, and equipment repairs for ongoing reliability and continuity." },
    ],
    keyPoints: [
      { title: "Reliable Solutions", description: "Our expert team ensures dependable connectivity solutions for a wide range of operational environments." },
      { title: "Efficient Delivery", description: "We focus on efficient planning, installation, and support to minimize delays and improve performance." },
      { title: "Customized Approach", description: "Every solution is shaped around the client’s specific connectivity requirements and site conditions." },
      { title: "End-to-End Capability", description: "From design and implementation to maintenance and repairs, we support the full infrastructure lifecycle." },
      { title: "Field Installation Support", description: "We provide practical site execution capability for trenching, hauling, floating, and reinstatement work." },
      { title: "Ongoing Operational Support", description: "Maintenance plans, on-site support, and equipment repair services help ensure long-term system reliability." },
    ],
    products: [
      {
        category: "Connectivity Solutions",
        items: [
          "Turnkey fiber optic solutions from design to implementation",
          "Microwave installations",
          "Bulk satellite installations",
          "Big screen connectivity",
          "Mall connectivity",
          "Wi-Fi, wireless, and last-mile connectivity",
        ],
      },
      {
        category: "Infrastructure & Support Services",
        items: [
          "Data center installations (Cat 5 to Cat 6)",
          "Fiber floating",
          "Cable hauling",
          "Trenching with surface reinstatement",
          "Maintenance plans",
          "On-site support",
          "Equipment repairs",
        ],
      },
    ],
  },

  // ─── Development ────────────────────────────────────────────
  {
    slug: "property-development",
    title: "Property Development",
    category: "development",
    icon: Building2,
    tagline: "From concept to completion, we bring your vision to life with sustainable and innovative solutions",
    description:
      "Our property development services cover every step of the process, from initial planning and feasibility studies to land acquisition, zoning, and construction.",
    color: "from-brand-500 to-brand-600",
    features: ["Planning", "Feasibility studies", "Land acquisition", "Zoning", "Construction", "Sustainable development"],
    details: [
      "Initial planning and concept development",
      "Feasibility studies and project assessments",
      "Land acquisition support",
      "Zoning and development approvals coordination",
      "Construction delivery from start to finish",
      "Sustainable and innovative development solutions",
      "Residential estate development",
      "Commercial property development",
      "Mixed-use development projects",
    ],
    overview:
      "From concept to completion, we bring your vision to life with sustainable and innovative solutions. Our property development services cover every step of the process, from initial planning and feasibility studies to land acquisition, zoning, and construction. We prioritize sustainable practices and innovative solutions, ensuring that your investment not only meets but exceeds expectations. Whether it is a residential estate, commercial property, or mixed-use development, we transform ideas into thriving spaces.",
    whyChooseUs: [
      "Concept-to-completion delivery across the full development lifecycle",
      "Strong focus on sustainable practices and innovative solutions",
      "Support from initial planning through land acquisition, zoning, and construction",
      "Capability across residential, commercial, and mixed-use developments",
      "Structured project delivery that protects and enhances your investment",
      "A practical approach that transforms ideas into successful, thriving spaces",
    ],
    process: [
      { step: "Concept & Planning", description: "We work with you from the earliest concept stage to define the development vision, priorities, and project direction." },
      { step: "Feasibility Studies", description: "Detailed feasibility work is completed to assess viability, risks, and the best path forward for the project." },
      { step: "Land & Zoning", description: "We support land acquisition and zoning processes to align the development with legal and planning requirements." },
      { step: "Construction Delivery", description: "The project is taken through construction with a focus on quality, efficiency, and controlled execution." },
      { step: "Completion & Value Realisation", description: "The final development is delivered as a sustainable, functional, and high-value space that is ready for occupation or use." },
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    category: "development",
    icon: Hammer,
    tagline: "High-quality building services tailored to residential, commercial, and specialised projects",
    description:
      "Our construction team delivers precision, quality, and efficiency across all projects, with a focus on robust structures, high-quality finishes, and timely project delivery.",
    color: "from-graphite-600 to-graphite-700",
    features: ["Residential projects", "Commercial projects", "Specialised builds", "Off-grid solutions", "Sustainable building", "Custom construction"],
    details: [
      "High-quality building services tailored to residential, commercial, and specialised projects",
      "Robust structures built for long-term performance",
      "High-quality finishes delivered to specification",
      "Timely project delivery with a focus on efficiency",
      "Off-grid construction solutions",
      "Sustainable building practices",
      "Customised construction aligned to unique client requirements",
    ],
    overview:
      "Our construction team delivers precision, quality, and efficiency across all projects. From residential homes to large-scale commercial developments, we focus on robust structures, high-quality finishes, and timely project delivery. Our expertise also includes off-grid solutions, sustainable building practices, and customised construction that aligns with your unique requirements.",
    whyChooseUs: [
      "High-quality building services tailored to residential, commercial, and specialised projects",
      "Precision execution with strong focus on quality and efficiency",
      "Robust structures and durable building outcomes",
      "High-quality finishes that elevate the final product",
      "Timely project delivery supported by disciplined planning and site control",
      "Capability in off-grid solutions and sustainable building practices",
      "Customised construction aligned to each client’s unique requirements",
    ],
    process: [
      { step: "Project Definition", description: "We establish the project scope, technical requirements, and desired outcomes for the residential, commercial, or specialised build." },
      { step: "Planning & Coordination", description: "Programme, resources, procurement, and site activities are planned to support efficient and timely delivery." },
      { step: "Construction Execution", description: "The building works are executed with a focus on robust structures, quality workmanship, and site efficiency." },
      { step: "Finishes & Optimisation", description: "High-quality finishes and any off-grid or sustainable building elements are installed and refined to meet project objectives." },
      { step: "Completion & Handover", description: "The completed project is finalised and handed over in line with quality expectations and the client’s unique requirements." },
    ],
  },
  {
    slug: "architecture-design",
    title: "Architecture Design",
    category: "development",
    icon: PenTool,
    tagline: "Innovative and customised designs that blend creativity with functionality, tailored to your unique vision",
    description:
      "Our architectural design services bring your dream projects to life through innovative and functional designs tailored to your unique vision.",
    color: "from-brand-600 to-brand-700",
    features: ["Innovative design", "Functional planning", "Tailor-made solutions", "Sustainable thinking", "Residential & commercial design"],
    details: [
      "Innovative and customised designs tailored to your unique vision",
      "A balance of creativity, practicality, and sustainability",
      "Close collaboration with clients throughout the design journey",
      "Solutions for modern, traditional, and cutting-edge design styles",
      "Attention to detail to ensure the final design reflects your personal or business identity",
    ],
    overview:
      "Innovative and customised designs that blend creativity with functionality, tailored to your unique vision. Our architectural design services bring your dream projects to life through innovative and functional designs. We work closely with clients to understand their vision and deliver tailor-made solutions that balance aesthetic appeal, practicality, and sustainability. Whether you’re looking for modern, traditional, or cutting-edge designs, our team ensures every detail reflects your unique style.",
    whyChooseUs: [
      "Design solutions tailored to your unique vision and requirements",
      "Strong balance between creativity, practicality, and sustainability",
      "Capability across modern, traditional, and cutting-edge design approaches",
      "Collaborative process keeping client vision at the centre of design",
    ],
    process: [
      { step: "Vision & Brief", description: "We engage with you to understand your vision, style preferences, objectives, and functional requirements." },
      { step: "Concept Development", description: "Initial architectural ideas are developed into innovative and practical design concepts." },
      { step: "Design Refinement", description: "The preferred concept is refined to align aesthetic appeal, usability, and sustainability goals." },
      { step: "Documentation", description: "Drawings and design information are prepared to support the next stages of project delivery." },
      { step: "Design Support", description: "We remain involved to help ensure the final outcome continues to reflect your unique style and intent." },
    ],
  },
  {
    slug: "property-management",
    title: "Property Management",
    category: "development",
    icon: ClipboardList,
    tagline: "End-to-end management services to optimise property operations, ensuring seamless experiences for owners and tenants",
    description:
      "We handle every aspect of property management to maximise the value of your property while minimising stress for owners and tenants.",
    color: "from-graphite-700 to-graphite-800",
    features: ["Tenant placement", "Lease management", "Rent collection", "Routine inspections", "Residential, commercial & industrial"],
    details: [
      "End-to-end management services to optimise property operations",
      "Tenant placement and lease management",
      "Rent collection and routine inspections",
      "Efficient and transparent services for owners and tenants",
      "Support for residential complexes, commercial spaces, and industrial sites",
      "Management that keeps investments running smoothly",
    ],
    overview:
      "End-to-end management services to optimise property operations, ensuring seamless experiences for owners and tenants. We handle every aspect of property management, including tenant placement, lease management, rent collection, and routine inspections. Our goal is to maximise the value of your property while minimising stress. Whether you own residential complexes, commercial spaces, or industrial sites, our efficient and transparent services keep your investments running smoothly.",
    whyChooseUs: [
      "End-to-end property management across full operational cycle",
      "Efficient and transparent management for owners and tenants",
      "Capability across residential, commercial, and industrial properties",
      "Practical systems that reduce pressure and minimise stress for owners",
    ],
    process: [
      { step: "Property Setup", description: "We establish the management framework, operational requirements, and tenant-facing processes for the property." },
      { step: "Tenant Placement", description: "Tenant placement and lease management processes are handled to support stable occupancy and clear administration." },
      { step: "Operational Management", description: "Daily management activities including rent collection, communication, and routine inspections are carried out efficiently." },
      { step: "Performance Monitoring", description: "The property is monitored to maintain standards, support tenant satisfaction, and protect asset value." },
      { step: "Ongoing Support", description: "Continuous management support keeps the property operating smoothly for owners, tenants, and stakeholders." },
    ],
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    category: "development",
    icon: Wrench,
    tagline: "Reliable upkeep and repairs for residential, commercial, and industrial properties, offering peace of mind",
    description:
      "Our property maintenance services keep properties safe, functional, and aesthetically appealing through reliable inspections, repairs, and preventative care.",
    color: "from-brand-500 to-brand-700",
    features: ["Regular inspections", "Repairs", "Preventative care", "Refurbishments", "Residential, commercial & industrial"],
    details: [
      "Reliable upkeep and repairs for residential, commercial, and industrial properties",
      "Regular inspections and preventative care to keep properties in top condition",
      "Minor repairs carried out promptly and professionally",
      "Large-scale refurbishments delivered with the same attention to quality and functionality",
      "Support to ensure spaces remain safe, functional, and aesthetically appealing",
      "Peace of mind through dependable maintenance response and ongoing care",
    ],
    overview:
      "Reliable upkeep and repairs for residential, commercial, and industrial properties, offering peace of mind. Our property maintenance services include regular inspections, repairs, and preventative care to keep your property in top condition. From minor repairs to large-scale refurbishments, we ensure your space remains safe, functional, and aesthetically appealing. Our dedicated team is equipped to handle all maintenance needs promptly and professionally.",
    whyChooseUs: [
      "Reliable upkeep and repairs across residential, commercial, and industrial properties",
      "Regular inspections and preventative care that support long-term asset condition",
      "Capability to handle both minor repairs and large-scale refurbishments",
      "Prompt and professional response from dedicated maintenance team",
    ],
    process: [
      { step: "Inspection", description: "We carry out regular inspections to identify maintenance requirements, risks, and opportunities for preventative care." },
      { step: "Planning", description: "Maintenance priorities are scheduled to address urgent repairs while supporting the overall condition of the property." },
      { step: "Repair & Upkeep", description: "Minor repairs, routine upkeep, and larger refurbishment works are executed promptly and professionally." },
      { step: "Preventative Care", description: "Preventative measures are applied to help reduce recurring issues and protect the long-term condition of the asset." },
      { step: "Ongoing Support", description: "Our team continues to provide responsive maintenance support to keep the property safe, functional, and presentable." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: "mining-solutions" | "development"): ServiceData[] {
  return services.filter((s) => s.category === category);
}

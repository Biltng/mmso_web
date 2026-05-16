# ✅ Vercel Deployment Checklist

## Pre-Deployment Tasks

### Local Testing
- [ ] Run `npm install` to ensure all dependencies are installed
- [ ] Run `npm run build` to verify TypeScript compilation
- [ ] Run `npm run preview` to test production build locally
- [ ] Test all routes in production build (use arrow keys or manual URL changes)
- [ ] Verify PDF download works (desktop browser only)
- [ ] Test contact form submission
- [ ] Check responsive design on mobile/tablet
- [ ] Verify logo displays correctly

### Code Quality
- [ ] Run `npm audit` and verify no vulnerabilities
- [ ] Check for console errors: `npm run build` (TypeScript strict mode)
- [ ] Verify no hardcoded secrets or sensitive data in code
- [ ] Confirm all API calls use HTTPS (FormSubmit does)
- [ ] Check that image paths are correct

### Git Repository
- [ ] All changes committed: `git status` should be clean
- [ ] Latest changes pushed: `git log` shows recent commits
- [ ] `.gitignore` includes: `node_modules/`, `dist/`, `.vercel`
- [ ] README is helpful (optional but recommended)
- [ ] Git branch is `main` (or your default branch)

### Files Verified
- [ ] `package.json` - Dependencies are correct
- [ ] `tsconfig.json` - TypeScript config is valid
- [ ] `vite.config.ts` - Build config is optimal
- [ ] `vercel.json` - Deployment config added ✅
- [ ] `index.html` - Entry point is correct
- [ ] `src/main.tsx` - React app initializes correctly

### Assets
- [ ] Logo exists: `public/images/muthimunye-logo.png`
- [ ] All images referenced exist
- [ ] No 404 errors for static assets

---

## Deployment on Vercel

### Initial Setup
- [ ] Created GitHub account (if not already)
- [ ] Repository is public or Vercel has access
- [ ] Logged in to [vercel.com](https://vercel.com)

### Import Project
- [ ] Clicked "New Project"
- [ ] Selected GitHub repository
- [ ] Framework auto-detected as "Vite"
- [ ] Build Command: `npm run build`
- [ ] Output Directory: `dist`
- [ ] Environment variables: None needed ✅

### Deploy
- [ ] Clicked "Deploy" button
- [ ] Waited for build to complete (1-2 minutes)
- [ ] Received deployment URL: `https://<project>.vercel.app`
- [ ] No build errors in deployment logs

---

## Post-Deployment Verification

### Functionality Tests
- [ ] Homepage loads at root URL (`/`)
- [ ] Navigation works (click all menu items)
- [ ] Services pages load correctly
- [ ] Individual service pages work (`/services/:slug`)
- [ ] Contact page form is visible and interactive
- [ ] Privacy Policy page loads
- [ ] Terms of Service page loads
- [ ] Page refresh doesn't cause 404 errors (thanks to `vercel.json`)

### Feature Tests
- [ ] PDF download works (opens new window/tab)
- [ ] Contact form sends successfully
- [ ] Email received at info@mmso.co.za
- [ ] Consent banner appears on first visit
- [ ] Consent banner disappears after accepting
- [ ] localStorage works (return visitor doesn't see banner)

### Cross-Browser Testing
- [ ] Chrome/Edge (latest) ✅
- [ ] Firefox (latest) ✅
- [ ] Safari (latest) ✅
- [ ] Mobile Chrome (Android) ✅
- [ ] Mobile Safari (iOS) ✅

### Performance Checks
- [ ] Page loads in under 2 seconds
- [ ] Images load properly
- [ ] No console errors (open DevTools F12)
- [ ] No 404 errors for any resources
- [ ] Network requests are cached efficiently

### Visual Checks
- [ ] Logo displays correctly
- [ ] Colors match design (brand orange, grays)
- [ ] Text is readable
- [ ] Buttons are clickable and hover states work
- [ ] Responsive design works (resize browser window)
- [ ] No layout shifts or flickering

### URLs to Test
- [ ] `https://<project>.vercel.app/` - Home
- [ ] `https://<project>.vercel.app/#/about` - About
- [ ] `https://<project>.vercel.app/#/mining-solutions` - Mining
- [ ] `https://<project>.vercel.app/#/development` - Development
- [ ] `https://<project>.vercel.app/#/contact` - Contact
- [ ] `https://<project>.vercel.app/#/privacy-policy` - Privacy
- [ ] `https://<project>.vercel.app/#/terms-of-service` - Terms
- [ ] `https://<project>.vercel.app/#/services/ceramic-wear-lining` - Service

---

## Continuous Integration Setup

### GitHub Actions (Optional)
- [ ] Consider adding automated tests
- [ ] GitHub Actions can run `npm run build` on every push
- [ ] Fails if build errors detected

### Vercel Integrations
- [ ] Analytics enabled (Settings → Analytics)
- [ ] Monitoring active (Deployments section)
- [ ] Email notifications configured (Settings → Notifications)

---

## Custom Domain Setup (Optional)

### Add Custom Domain
- [ ] Go to Vercel Dashboard → Your Project
- [ ] Settings → Domains
- [ ] Add custom domain (e.g., `muthimunye.co.za`)
- [ ] Copy DNS records
- [ ] Add DNS records to domain registrar
- [ ] Wait 24 hours for propagation
- [ ] Verify HTTPS works with custom domain

### DNS Configuration Types
Choose based on registrar:
- [ ] A Records: Point to Vercel's IP
- [ ] CNAME Records: Alias to Vercel domain
- [ ] TXT Records: Verification (if required)

---

## Monitoring & Maintenance

### Weekly
- [ ] Check Vercel Dashboard for any errors
- [ ] Monitor deployment logs for issues
- [ ] Test key functionality manually

### Monthly
- [ ] Review analytics (if enabled)
- [ ] Check for dependency updates: `npm outdated`
- [ ] Verify form submissions are being received

### Quarterly
- [ ] Run `npm audit` for security updates
- [ ] Update critical dependencies
- [ ] Performance review with PageSpeed Insights

---

## Common Deployment Issues & Fixes

### Issue: Build Fails
- [ ] Check build logs in Vercel Dashboard
- [ ] Run `npm run build` locally to debug
- [ ] Fix errors locally, commit, and redeploy

### Issue: 404 on Page Refresh
- [ ] ✅ Fixed by `vercel.json` rewrites
- [ ] If still occurring, verify `vercel.json` is in root directory

### Issue: Logo Not Showing
- [ ] Check that `public/images/muthimunye-logo.png` exists
- [ ] Verify file path in `generatePortfolioPdf.ts`
- [ ] Check Vercel deployment logs

### Issue: Form Not Sending
- [ ] Check browser console (F12 → Console tab)
- [ ] Look for CORS errors
- [ ] Verify FormSubmit endpoint is correct
- [ ] Test form at [formsubmit.co](https://formsubmit.co)

### Issue: Slow Performance
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check bundle size: `npm run build` → `dist/` folder
- [ ] Verify images are optimized
- [ ] Check Vercel Analytics for slow pages

### Issue: Can't Connect to GitHub
- [ ] Verify Vercel has GitHub access
- [ ] Check GitHub OAuth token permissions
- [ ] Reconnect GitHub account in Vercel Settings

---

## Troubleshooting: Step-by-Step

### If Deployment Fails

1. **Check Build Logs**
   - Vercel Dashboard → Deployments → Failed → Logs
   - Look for error messages

2. **Common Errors**
   - `Module not found` → Missing dependency, run `npm install`
   - `TypeScript error` → Fix in code, run `npm run build` locally
   - `Port already in use` → Restart computer or kill process

3. **Fix Locally First**
   ```bash
   npm run build  # This mimics Vercel build
   npm run preview  # Test production build
   ```

4. **Redeploy**
   - Fix issue in local code
   - Commit and push to GitHub
   - Vercel auto-rebuilds (check Dashboard)

### If Site is Live But Has Issues

1. **Check Console Errors**
   - Open browser DevTools (F12)
   - Go to Console tab
   - Look for red error messages

2. **Check Network Errors**
   - DevTools → Network tab
   - Look for failed requests (red)
   - Check status codes (should be 200, not 404)

3. **Clear Cache**
   - Try incognito/private browsing
   - Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
   - Clear site data if needed

4. **Verify DNS** (if using custom domain)
   - Use [DNS Checker](https://dnschecker.org/)
   - Verify domain resolves to Vercel's servers

---

## Rollback Procedure

### If Something Goes Wrong After Deployment

1. Go to Vercel Dashboard
2. Find previous working deployment
3. Click "Promote to Production"
4. Site rolls back immediately (< 30 seconds)
5. No downtime during rollback

---

## Success Checklist ✅

After deployment, verify:

- [ ] Website is live at `https://<project>.vercel.app`
- [ ] All pages load without errors
- [ ] Navigation works correctly
- [ ] Contact form submits successfully
- [ ] PDF download works
- [ ] Mobile design is responsive
- [ ] Performance is acceptable (PageSpeed > 85)
- [ ] No console errors
- [ ] Logo and images display correctly
- [ ] HTTPS certificate is valid

---

## Final Status

Once all items are checked:

✅ **Deployment Complete**  
✅ **Production Ready**  
✅ **Monitoring Active**  
✅ **Ready for Users**

---

**Print this checklist or save as reference for future deployments.**

Updated: 2026-05-16

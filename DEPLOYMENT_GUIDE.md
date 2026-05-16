# Deployment Guide - Vercel

## ✅ Pre-Deployment Checklist

- [x] Code is compatible with Vercel
- [x] All dependencies are production-ready
- [x] `vercel.json` configuration created
- [x] TypeScript builds without errors
- [x] No hardcoded secrets or API keys
- [x] Environment variables configured (none needed for this project)

---

## Deployment Steps

### Step 1: Local Verification

Test the build locally to ensure everything works:

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Preview the production build locally
npm run preview
```

Expected output:
- ✅ Build completes without errors
- ✅ `dist/` folder created with ~100-150KB gzipped size
- ✅ Website works correctly in preview

### Step 2: Push to GitHub

```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Add Vercel deployment configuration and cleanup PDF portfolio"

# Push to main branch
git push origin main
```

### Step 3: Connect Repository to Vercel

1. Visit **[vercel.com](https://vercel.com)**
2. Sign in with GitHub account
3. Click **"New Project"** or **"Add New"**
4. Select your repository (`agents-pdf-portfolio-cleanup`)
5. Vercel will auto-detect:
   - ✅ Framework: Vite
   - ✅ Build Command: `npm run build`
   - ✅ Output Directory: `dist`
6. Click **"Deploy"**

### Step 4: Automatic Deployment

Vercel will:
1. Clone your repository
2. Install dependencies (`npm install`)
3. Build the project (`npm run build`)
4. Deploy the `dist/` folder as a static site
5. Provide a `.vercel.com` URL immediately

**Typical deployment time**: 1-2 minutes

### Step 5: Custom Domain (Optional)

After first deployment, add your custom domain:

1. Go to Vercel Dashboard → Your Project
2. Settings → Domains
3. Add custom domain (e.g., `muthimunye.com`)
4. Follow DNS configuration instructions
5. Domain will be live within 24 hours

---

## Post-Deployment Verification

### ✅ Automated Tests (Run These)

1. **Check Build Output**
   ```bash
   # View your deployment
   https://<your-project>.vercel.app
   ```

2. **Test Core Functionality**
   - [ ] Homepage loads completely
   - [ ] Navigation links work (all routes)
   - [ ] Logo displays correctly
   - [ ] Page refresh doesn't cause 404 errors
   - [ ] Contact form submission works
   - [ ] PDF download functions (Desktop only)

3. **Test in Different Browsers**
   - [ ] Chrome/Edge (latest)
   - [ ] Firefox (latest)
   - [ ] Safari (latest)
   - [ ] Mobile (Chrome on Android, Safari on iOS)

4. **Check Performance**
   - Run: [PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: > 85 on both mobile and desktop
   - Check: First Contentful Paint < 2s

### ⚠️ Common Issues & Fixes

**Issue**: 404 errors on page refresh
- **Fix**: ✅ Already configured in `vercel.json` with rewrites
- **Why**: HashRouter needs fallback to index.html

**Issue**: Logo not displaying
- **Fix**: Ensure `public/images/muthimunye-logo.png` exists
- **Verify**: Check in Vercel deployment logs

**Issue**: Contact form not submitting
- **Fix**: Check browser console for errors
- **Common Cause**: FormSubmit.co might need email verification

**Issue**: Slow load times
- **Fix**: Check bundle size: `npm run build`
- **Target**: < 500KB total gzipped

---

## Continuous Deployment

After initial deployment, any push to `main` branch will:
1. ✅ Trigger automatic rebuild
2. ✅ Deploy to production immediately (no approval needed)
3. ✅ Create a unique preview URL for each pull request

### Disable Auto-Deploy (If Needed)

Go to Vercel Dashboard → Project Settings → Git → Uncheck "Deploy on push"

---

## Monitoring & Analytics

### View Deployment Logs

1. Vercel Dashboard → Your Project
2. Deployments tab → Click latest deployment
3. Build logs show any errors or warnings

### Enable Analytics (Optional)

1. Settings → Analytics
2. Enable Vercel Web Analytics for free insights on:
   - Page views
   - User sessions
   - Geographic data
   - Device types

---

## Rollback (If Issues Found)

If deployment has problems:

1. Vercel Dashboard → Deployments
2. Find previous working deployment
3. Click "Promote to Production"
4. Site immediately rolls back (< 30 seconds)

---

## Environment Variables (If Needed in Future)

If you ever need to add environment variables:

1. Vercel Dashboard → Settings → Environment Variables
2. Add key-value pairs
3. Redeploy project
4. Access in code via `import.meta.env.VITE_*`

Example:
```tsx
// In component
const API_URL = import.meta.env.VITE_API_URL;
```

**Note**: Currently not needed for this project ✅

---

## Maintenance & Updates

### Regular Tasks

**Monthly**:
- Check for dependency updates: `npm outdated`
- Review deployment logs for errors

**Quarterly**:
- Run `npm audit` to check for security updates
- Test all features after any updates

**Update Dependencies**:
```bash
# Check outdated packages
npm outdated

# Update specific package
npm update package-name

# Update all packages (carefully)
npm update
```

---

## Troubleshooting Deployment

### If Build Fails

1. **Check logs**:
   - Vercel Dashboard → Deployments → Failed deployment → Logs

2. **Common failures**:
   - Missing environment variable → Add to Vercel Settings
   - TypeScript errors → Run `npm run build` locally to debug
   - Dependency issues → Clear `node_modules` and rebuild

3. **Rebuild**:
   - Push a new commit to trigger rebuild
   - Or manually redeploy in Vercel Dashboard

### If Site is Slow

1. Run [PageSpeed Insights](https://pagespeed.web.dev/)
2. Check bundle size: `npm run build`
3. Consider:
   - Image optimization
   - Code splitting for large components
   - Removing unused dependencies

### If Form Doesn't Work

1. Check browser Network tab for FormSubmit requests
2. Verify CORS is working (should see 200 status)
3. Test manually at [formsubmit.co](https://formsubmit.co)

---

## Quick Commands Reference

```bash
# Development
npm run dev                 # Start dev server (localhost:5173)

# Production
npm run build              # Build for production
npm run preview            # Preview production build locally

# Maintenance
npm install                # Install dependencies
npm audit                  # Check security vulnerabilities
npm outdated              # Check for updates
npm update                # Update dependencies

# Deployment
git add .                 # Stage changes
git commit -m "message"   # Commit changes
git push origin main      # Push to GitHub (auto-deploys)
```

---

## Support & Resources

### Vercel Documentation
- [Vercel Docs](https://vercel.com/docs)
- [Vite + Vercel Guide](https://vercel.com/guides/vite)
- [React on Vercel](https://vercel.com/docs/frameworks/react)

### Community & Help
- Vercel Discord: [discord.gg/vercel](https://discord.gg/vercel)
- GitHub Issues: Create issues in your repository
- Stack Overflow: Tag with `vercel` and `vite`

---

## Summary

Your portfolio is **production-ready** and **fully compatible with Vercel**. 

**Expected results after deployment**:
- ✅ Website live in 1-2 minutes
- ✅ Free HTTPS certificate
- ✅ Global CDN distribution
- ✅ Automatic updates on every GitHub push
- ✅ Professional performance (> 85 Lighthouse score)

**Ready to deploy?** Follow **Step 1-5** above.

---

**Last Updated**: 2026-05-16  
**Status**: ✅ Ready for Production

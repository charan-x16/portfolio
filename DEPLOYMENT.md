# Vercel Deployment Guide

## Quick Deploy

The fastest way to deploy your portfolio is using Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/charan-x16/portfolio)

## Manual Deployment Steps

### 1. Prerequisites
- GitHub account
- Vercel account (free tier available)
- Git installed locally

### 2. Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: AI Engineer Portfolio"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
   - Install Command: `npm install`
5. Click "Deploy"

### 4. Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Update DNS settings as instructed by Vercel

### 5. Environment Variables (If Needed)

If you add environment variables later:
1. Go to project settings in Vercel
2. Click "Environment Variables"
3. Add your variables
4. Redeploy the project

## Post-Deployment

### Update Resume
1. Replace `public/Sridhar_Charan_Resume.pdf` with your latest resume
2. Push changes to GitHub
3. Vercel will automatically redeploy

### Custom Modifications
After any changes:
```bash
git add .
git commit -m "Description of changes"
git push
```
Vercel will automatically detect changes and redeploy.

## Performance Monitoring

Vercel provides built-in analytics:
1. Go to your project dashboard
2. Click "Analytics" tab
3. View performance metrics, visitor data, and Core Web Vitals

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### 404 Errors
- Check that all routes are properly configured
- Verify file paths are correct

### Styling Issues
- Clear browser cache
- Check if Tailwind CSS is building correctly
- Verify postcss.config.js is present

## Advanced Configuration

### Custom Build Settings
Create `vercel.json` in project root:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Redirects and Rewrites
Add to `next.config.js`:
```javascript
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/new-path',
        permanent: true,
      },
    ]
  },
}
```

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

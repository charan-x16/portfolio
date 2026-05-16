# 🚀 Quick Start Guide

Get your portfolio running in 5 minutes!

## Step 1: Install Dependencies (2 min)

```bash
npm install
```

This will install all required packages:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- TypeScript
- And more...

## Step 2: Run Development Server (30 sec)

```bash
npm run dev
```

Your portfolio will be available at: **http://localhost:3000**

## Step 3: Customize Your Content (1 min)

Open these files and update with your information:

### Minimum Required Changes:
1. **components/Hero.tsx** - Your name and roles
2. **components/Contact.tsx** - Your contact info
3. **public/** - Add your resume PDF

### Recommended Changes:
4. **components/About.tsx** - Your bio
5. **components/Projects.tsx** - Your projects
6. **components/Experience.tsx** - Your work history
7. **components/Skills.tsx** - Your skills

## Step 4: Build for Production (1 min)

```bash
npm run build
npm run start
```

## Step 5: Deploy to Vercel (30 sec)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or use the GitHub integration:
1. Push to GitHub
2. Import to Vercel
3. Done! 🎉

---

## 📝 Detailed Customization

See **CUSTOMIZATION.md** for complete guide on:
- Updating all content
- Changing colors and themes
- Adding new sections
- Customizing animations

## 🚀 Deployment Options

See **DEPLOYMENT.md** for guides on deploying to:
- Vercel (recommended)
- Netlify
- AWS
- Self-hosted

## 📚 Additional Resources

- **README.md** - Full documentation
- **PROJECT_OVERVIEW.md** - Architecture and features
- **CUSTOMIZATION.md** - Customization guide
- **DEPLOYMENT.md** - Deployment instructions

## 🆘 Common Issues

### Port already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Styling not working
```bash
# Make sure Tailwind is processing
# Check that tailwind.config.js exists
# Clear browser cache
```

## 💡 Pro Tips

1. **Test on mobile**: Open on your phone to check responsiveness
2. **Use dark mode**: Toggle between themes to test both
3. **Check all links**: Make sure GitHub, LinkedIn links work
4. **Add your resume**: Place PDF in `/public` folder
5. **Commit often**: Save your progress with git commits

## 🎯 What's Next?

1. ✅ Get it running locally
2. ✅ Update with your information
3. ✅ Test on different devices
4. ✅ Deploy to production
5. ✅ Share your portfolio!

---

**Need help?** Check the full documentation in README.md

**Questions?** Open an issue on GitHub

**Ready to deploy?** See DEPLOYMENT.md

---

Happy building! 🎨✨

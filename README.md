# Sridhar Charan Chekka - AI/ML Engineer Portfolio

A modern, responsive, and production-ready portfolio website built with Next.js, Tailwind CSS, and Framer Motion. This portfolio showcases expertise in AI/ML Engineering, Generative AI, RAG systems, and intelligent automation.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4.5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design**: Clean, futuristic AI-inspired aesthetic with glassmorphism effects
- 🌓 **Dark/Light Mode**: Seamless theme switching with persistent preference
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- ⚡ **Performance Optimized**: Fast loading with Next.js 14 and optimized assets
- 🎭 **Smooth Animations**: Elegant transitions using Framer Motion
- 🎯 **SEO Optimized**: Meta tags and structured data for better search visibility
- ♿ **Accessible**: WCAG compliant with semantic HTML
- 🔧 **Easy to Customize**: Clean component architecture for easy modifications

## 🚀 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Language**: TypeScript

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: 18.x or higher
- **npm** or **yarn**: Latest version

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/charan-x16/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and Tailwind imports
├── components/
│   ├── About.tsx           # About section
│   ├── Certifications.tsx  # Certifications showcase
│   ├── Contact.tsx         # Contact form and info
│   ├── Education.tsx       # Education timeline
│   ├── Experience.tsx      # Work experience
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section with typing animation
│   ├── Navbar.tsx          # Navigation bar
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills grid
│   └── ThemeProvider.tsx   # Theme context provider
├── public/
│   └── Sridhar_Charan_Resume.pdf  # Resume file
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Customization

### Updating Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Update name, roles, and description
   - Modify social links

2. **About Section** (`components/About.tsx`):
   - Edit bio and highlights
   - Update statistics

3. **Skills** (`components/Skills.tsx`):
   - Add/remove skill categories
   - Update skill lists

4. **Projects** (`components/Projects.tsx`):
   - Add your projects with descriptions, tags, and links

5. **Experience** (`components/Experience.tsx`):
   - Update work history and achievements

6. **Education** (`components/Education.tsx`):
   - Modify educational background
   - Update achievements

7. **Certifications** (`components/Certifications.tsx`):
   - Add your certifications

8. **Contact** (`components/Contact.tsx`):
   - Update contact information
   - Configure form submission (currently uses console.log)

### Styling Customization

- **Colors**: Edit `tailwind.config.js` to modify the color scheme
- **Fonts**: Update font in `app/layout.tsx`
- **Animations**: Customize animation timing in `tailwind.config.js`

## 📦 Building for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `.next` directory.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure build settings
   - Click "Deploy"

3. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard

### Deploy to Netlify

1. **Push your code to GitHub**

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Deploy**

### Other Deployment Options

- **AWS Amplify**: Follow [Next.js deployment guide](https://nextjs.org/docs/deployment)
- **Docker**: Use the provided Dockerfile configuration
- **Self-hosted**: Build and serve the `.next` directory with a Node.js server

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Resume Download

Place your resume PDF in the `public` folder as `Sridhar_Charan_Resume.pdf` for the download functionality to work.

## 🎯 Performance Optimization Tips

1. **Image Optimization**: Use Next.js Image component for all images
2. **Code Splitting**: Next.js automatically splits code by route
3. **Lazy Loading**: Components below the fold are lazy loaded
4. **Font Optimization**: Fonts are automatically optimized by Next.js
5. **SEO**: Update metadata in `app/layout.tsx` for better search rankings

## 🐛 Troubleshooting

### Development server not starting
- Ensure Node.js version is 18.x or higher
- Delete `node_modules` and `.next` folders, then run `npm install`

### Build errors
- Check for TypeScript errors with `npm run lint`
- Ensure all dependencies are installed

### Styling issues
- Clear browser cache
- Check if Tailwind classes are properly configured

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/charan-x16/portfolio/issues).

## 👤 Contact

**Sridhar Charan Chekka**
- GitHub: [@charan-x16](https://github.com/charan-x16)
- LinkedIn: [@charanx16](https://linkedin.com/in/charanx16)
- Email: sridharcharanchekka@gmail.com

## ⭐ Show Your Support

If you find this project helpful, please consider giving it a ⭐!

---

Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion

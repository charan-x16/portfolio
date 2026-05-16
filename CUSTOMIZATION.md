# Customization Guide

This guide will help you personalize the portfolio website with your own information.

## 🎯 Quick Customization Checklist

### 1. Personal Information
- [ ] Update name and title in Hero section
- [ ] Change profile image/initials
- [ ] Update bio in About section
- [ ] Modify contact information
- [ ] Update social media links
- [ ] Add your resume PDF

### 2. Content Updates
- [ ] Add/modify skills
- [ ] Update project details
- [ ] Edit work experience
- [ ] Update education information
- [ ] Add certifications

### 3. Styling
- [ ] Choose color scheme
- [ ] Update favicon
- [ ] Customize animations

---

## 📝 Detailed Customization Instructions

### Hero Section (`components/Hero.tsx`)

**Update Your Name:**
```typescript
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
  Your Name{' '}
  <span className="text-gradient">Here</span>
</h1>
```

**Modify Job Roles:**
```typescript
const roles = [
  'Your Role 1',
  'Your Role 2',
  'Your Role 3',
  'Your Role 4',
  'Your Role 5',
]
```

**Update Description:**
```typescript
<p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mb-8">
  Your professional summary here...
</p>
```

**Update Social Links:**
```typescript
<a href="https://github.com/YOUR_USERNAME" ...>
<a href="https://linkedin.com/in/YOUR_USERNAME" ...>
<a href="mailto:YOUR_EMAIL@example.com" ...>
```

**Change Profile Initials:**
```typescript
<div className="w-full h-full rounded-full bg-gray-900 dark:bg-gray-800 flex items-center justify-center text-4xl md:text-5xl font-bold text-white">
  YI  {/* Your Initials */}
</div>
```

### About Section (`components/About.tsx`)

**Update Bio:**
```typescript
<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  Your professional bio paragraph 1...
</p>
<p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
  Your professional bio paragraph 2...
</p>
```

**Modify Highlights:**
```typescript
const highlights = [
  {
    icon: YourIcon,
    title: 'Your Highlight',
    description: 'Description here',
  },
  // Add more highlights
]
```

**Update Statistics:**
```typescript
{[
  { number: '3+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '10+', label: 'Certifications' },
  { number: '95%', label: 'Client Satisfaction' },
].map((stat, index) => (
  // ...
))}
```

### Skills Section (`components/Skills.tsx`)

**Add/Remove Skill Categories:**
```typescript
const skillCategories = [
  {
    icon: YourIcon,
    title: 'Category Name',
    skills: [
      'Skill 1',
      'Skill 2',
      'Skill 3',
    ],
  },
  // Add more categories
]
```

### Projects Section (`components/Projects.tsx`)

**Add Your Projects:**
```typescript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description goes here...',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    link: 'https://project-demo-link.com',
    github: 'https://github.com/username/repo',
    gradient: 'from-blue-500 to-purple-500', // Choose gradient
  },
  // Add more projects
]
```

**Available Gradient Options:**
- `from-blue-500 to-cyan-500`
- `from-purple-500 to-pink-500`
- `from-green-500 to-teal-500`
- `from-orange-500 to-red-500`
- `from-yellow-500 to-orange-500`
- `from-pink-500 to-violet-500`

### Experience Section (`components/Experience.tsx`)

**Update Work History:**
```typescript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start Date – End Date',
    description: 'Brief job description...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more experiences
]
```

### Education Section (`components/Education.tsx`)

**Update Education:**
```typescript
const education = [
  {
    degree: 'Degree Name',
    field: 'Field of Study',
    period: 'Start – End',
    cgpa: '8.5',
    color: 'from-blue-500 to-cyan-500',
  },
  // Add more education entries
]
```

**Update Achievements:**
```typescript
const achievements = [
  {
    title: 'Achievement Title',
    position: 'Position/Award',
    description: 'Description here',
  },
  // Add more achievements
]
```

### Certifications Section (`components/Certifications.tsx`)

**Add Your Certifications:**
```typescript
const certifications = [
  {
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    year: '2024',
    color: 'from-purple-500 to-pink-500',
  },
  // Add more certifications
]
```

### Contact Section (`components/Contact.tsx`)

**Update Contact Information:**
```typescript
const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Your City, Country',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 234 567 8900',
    href: 'tel:+12345678900',
  },
]
```

**Configure Form Submission:**

Replace the console.log with actual form handling:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  // Option 1: Send to email service (e.g., EmailJS, SendGrid)
  // await sendEmail(formData)
  
  // Option 2: Send to backend API
  // await fetch('/api/contact', {
  //   method: 'POST',
  //   body: JSON.stringify(formData)
  // })
  
  alert('Thank you for your message!')
  setFormData({ name: '', email: '', message: '' })
}
```

### Metadata & SEO (`app/layout.tsx`)

**Update SEO Information:**
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Your Title',
  description: 'Your professional description here',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name | Your Title',
    description: 'Your description',
    type: 'website',
  },
}
```

### Footer (`components/Footer.tsx`)

**Update Footer Text:**
```typescript
<p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
  Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> by Your Name
</p>
```

---

## 🎨 Styling Customization

### Color Scheme (`tailwind.config.js`)

**Change Primary Colors:**
```javascript
colors: {
  primary: {
    50: '#your-color',
    100: '#your-color',
    // ... customize all shades
    900: '#your-color',
  },
}
```

**Popular Color Schemes:**
- **Blue Theme**: Primary: #0ea5e9, Accent: #4f46e5
- **Green Theme**: Primary: #10b981, Accent: #059669
- **Purple Theme**: Primary: #8b5cf6, Accent: #7c3aed
- **Orange Theme**: Primary: #f97316, Accent: #ea580c

### Animations (`tailwind.config.js`)

**Customize Animation Speed:**
```javascript
animation: {
  'float': 'float 6s ease-in-out infinite', // Change 6s to adjust speed
  'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
```

### Typography

**Change Font (`app/layout.tsx`):**
```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })

// In body tag:
<body className={yourFont.className}>
```

Popular Google Fonts:
- Inter (current)
- Poppins
- Roboto
- Montserrat
- Open Sans

---

## 🖼️ Adding Your Resume

1. Export your resume as PDF
2. Name it: `Sridhar_Charan_Resume.pdf` (or update the filename in components)
3. Place in `/public` folder
4. The download buttons will automatically link to it

---

## 🚀 Testing Your Changes

After making changes:

1. **Development Mode:**
```bash
npm run dev
```
Visit http://localhost:3000

2. **Build for Production:**
```bash
npm run build
npm run start
```

3. **Check for Errors:**
```bash
npm run lint
```

---

## 💡 Tips

1. **Gradual Customization**: Start with personal info, then move to styling
2. **Test Regularly**: Check your site after each major change
3. **Keep Backups**: Commit changes to Git frequently
4. **Responsive Design**: Test on mobile, tablet, and desktop
5. **Performance**: Keep images optimized and code clean

---

## 🆘 Need Help?

- Check the main README.md for troubleshooting
- Review component files for inline comments
- Test changes in development mode first
- Commit working versions before major changes

---

Happy customizing! 🎉

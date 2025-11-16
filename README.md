# hyperCircle - Company Website

A modern, professional website for hyperCircle - an AI, Data Science, and Software Engineering company specializing in complete SMB and Enterprise solutions.

## 🚀 Features

- **Modern Tech Stack**: Built with React, TypeScript, Tailwind CSS, and Framer Motion
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Engaging animations and transitions using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Fast Performance**: Optimized for quick loading and smooth interactions

## 📋 Pages

1. **Home** - Hero section, services overview, stats, testimonials, and CTA
2. **Services** - Detailed AI, Data Science, and Software Engineering services
3. **About** - Company mission, vision, values, and expertise
4. **Portfolio** - Case studies and project showcases
5. **Contact** - Contact form with EmailJS integration and FAQ section

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **Form Handling**: EmailJS
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AmrrSalem/hypercircle.github.io.git
   cd hypercircle.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure EmailJS** (for contact form)
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new email service
   - Create an email template
   - Update the credentials in `src/pages/Contact.tsx`:
     ```typescript
     const serviceId = 'YOUR_SERVICE_ID';
     const templateId = 'YOUR_TEMPLATE_ID';
     const publicKey = 'YOUR_PUBLIC_KEY';
     ```

4. **Run development server**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

### GitHub Pages

1. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/hypercircle.github.io/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🎨 Customization

### Colors

Colors can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: { /* Your primary color shades */ },
  secondary: { /* Your secondary color shades */ },
  accent: { /* Your accent color shades */ },
}
```

### Fonts

The website uses **Inter** and **Space Grotesk** from Google Fonts. You can change fonts in `src/index.css`.

### Images and Branding

- Add your logo by replacing the placeholder in `src/components/Navigation.tsx`
- Add custom graphics using Canva Pro as mentioned in the project requirements
- Update favicon by replacing `/vite.svg`

### Content

All content is directly in the component files for easy editing:
- `src/pages/Home.tsx` - Homepage content
- `src/pages/Services.tsx` - Services descriptions
- `src/pages/About.tsx` - Company information
- `src/pages/Portfolio.tsx` - Case studies
- `src/pages/Contact.tsx` - Contact information and FAQ

## 📁 Project Structure

```
hypercircle.github.io/
├── public/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx     # Header with navigation
│   │   ├── Footer.tsx         # Footer component
│   │   └── Layout.tsx         # Layout wrapper
│   ├── pages/
│   │   ├── Home.tsx           # Homepage
│   │   ├── Services.tsx       # Services page
│   │   ├── About.tsx          # About page
│   │   ├── Portfolio.tsx      # Portfolio/case studies
│   │   └── Contact.tsx        # Contact page
│   ├── assets/                # Images and static files
│   ├── types/                 # TypeScript type definitions
│   ├── App.tsx                # Main app with routing
│   ├── main.tsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is proprietary and confidential.

## 🤝 Contributing

This is a private project for hyperCircle. For any changes or improvements, please contact the development team.

## 📞 Support

For technical support or questions, contact:
- Email: contact@hypercircle.com
- Phone: +1 (234) 567-890

## 🎯 Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section with CMS integration
- [ ] Client portal
- [ ] Multi-language support
- [ ] Advanced analytics integration
- [ ] Live chat widget

---

**Built with ❤️ by hyperCircle**

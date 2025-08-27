# GradPipe Landing Page

A modern, conversion-optimized marketing website for GradPipe - an AI-powered career outreach automation platform for university students.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with vibrant accent colors
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Performance Optimized**: Built with Next.js 14 and optimized for speed
- **SEO Ready**: Proper meta tags, structured data, and semantic HTML
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GradPipeOrg/gradpipe-landing
   cd gradpipe-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
gradpipe-landing/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero section with CTA
│   ├── SocialProofSection.tsx # University logos and testimonials
│   ├── HowItWorksSection.tsx # 3-step process
│   ├── FeaturesSection.tsx  # Feature cards
│   ├── PricingSection.tsx   # Pricing tiers
│   ├── TeamSection.tsx      # Team members
│   └── Footer.tsx           # Footer with links
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Primary**: Dark theme with slate grays
- **Accent**: Green (#22c55e) for CTAs and highlights
- **Primary Blue**: Blue tones for secondary elements

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700, 800, 900

### Components
- **Buttons**: Primary (accent) and secondary (outline) variants
- **Cards**: Hover effects with scale and shadow transitions
- **Animations**: Staggered entrance animations with Framer Motion

## 📱 Sections

1. **Hero Section**: Main headline, sub-headline, CTA, and dashboard mockup
2. **Social Proof**: University logos and customer testimonial
3. **How It Works**: 3-step process with visual flow
4. **Features**: 3 main feature cards with detailed benefits
5. **Pricing**: 3-tier pricing table with FAQ
6. **Team**: 5 IIT Bombay founders with stats
7. **Footer**: Links, social media, and company info

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project is compatible with any static hosting platform.

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary colors */ },
  accent: { /* your accent colors */ },
  dark: { /* your dark theme colors */ }
}
```

### Content
- Update text content in each component file
- Replace placeholder images with your actual assets
- Update team member information in `TeamSection.tsx`
- Modify pricing in `PricingSection.tsx`

### Styling
- Custom styles in `app/globals.css`
- Component-specific styles in each component file
- Tailwind utility classes for rapid styling

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Bundle Size**: Minimal with tree shaking
- **Images**: Optimized with Next.js Image component

## 🔍 SEO

- Meta tags for all social platforms
- Structured data for rich snippets
- Semantic HTML structure
- Optimized headings and content
- Sitemap generation ready

## 📞 Support

For questions or support:
- Email: contact@gradpipe.com
- GitHub Issues: Create an issue in this repository

## 📄 License

This project is proprietary to GradPipe. All rights reserved.

---

Built with ❤️ by the GradPipe team

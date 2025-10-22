# Ebb'nFlow Therapeutics Website

A dual-purpose website that works as both a Next.js application (for v0 preview) and exports to static HTML (for Cloudflare Pages deployment).

## 🚀 Quick Start

### Development (Next.js Preview)

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit http://localhost:3000

### Build for Cloudflare Pages

\`\`\`bash
npm run build:static
\`\`\`

This will create an `out/` folder with static HTML files ready for Cloudflare Pages deployment.

## 📁 Project Structure

\`\`\`
├── app/
│   ├── page.tsx                 # Homepage
│   ├── about/page.tsx           # About page
│   ├── contact/page.tsx         # Contact page  
│   ├── movement/page.tsx        # Movement page
│   ├── what-to-expect/page.tsx  # What to Expect page
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── Modal.tsx
│   ├── layout.tsx
│   └── globals.css
├── public/
│   └── images/                  # All images
├── next.config.ts               # Configured for static export
└── package.json
\`\`\`

## 🌐 Deployment Options

### Option 1: Cloudflare Pages (Recommended)

1. Build the static files:
   \`\`\`bash
   npm run build:static
   \`\`\`

2. Deploy the `out/` folder to Cloudflare Pages:
   - Go to Cloudflare Dashboard
   - Create new Pages project
   - Upload the `out/` folder

### Option 2: v0 Preview

The project works natively in v0 for live preview and iteration.

## 🎨 Features

- **Dual Mode**: Works as Next.js app (dev) and static HTML (production)
- **Image Optimization**: Uses Next.js Image component with unoptimized export
- **Responsive Design**: Mobile-first approach
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance**: Static generation for fast loading

## 📝 Development Notes

- Images are in `/public/images/` and referenced as `/images/filename.jpg`
- Navigation uses Next.js Link for client-side routing in dev
- Modal functionality is client-side with React hooks
- All pages export as static HTML with proper routing

## 🔧 Configuration

### next.config.ts
\`\`\`typescript
const nextConfig = {
  output: 'export',        // Enables static export
  images: {
    unoptimized: true,     // Required for static export
  },
  trailingSlash: true,     // Adds trailing slash to URLs
}
\`\`\`

## 📞 Contact

**Ebb'nFlow Therapeutics**
- 📍 59 Wellington Street, St. Catharines, ON L2R 5P9
- 📞 (289) 969-3219
- ✉️ info@ebbnflowtherapeutics.com

---

© 2025 Ebb'nFlow Therapeutics. All rights reserved.

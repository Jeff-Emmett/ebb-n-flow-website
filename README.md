# Ebb'nFlow Therapeutics Website

A static HTML/CSS/JavaScript website for Ebb'nFlow Therapeutics massage therapy practice.

## 🚨 Current Issue & Fix

Your site at https://ebb-n-flow-website.pages.dev/ isn't working because Cloudflare is looking for Next.js files. 

### **Quick Fix:**

1. **Delete the current Cloudflare Pages project:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to Pages → ebb-n-flow-website
   - Settings → Delete project

2. **Create a new deployment with ONLY these files:**
   - `index.html`
   - `about.html`
   - `contact.html`
   - `movement.html`
   - `what-to-expect.html`
   - `styles.css`
   - `script.js`
   - `_routes.json`
   - `_headers`
   - `images/` folder

3. **Upload Method:**
   - Choose "Upload assets" (not Git integration)
   - Drag and drop the files listed above
   - Deploy!

## 📁 Files to Deploy

**Root files:**
\`\`\`
index.html
about.html
contact.html
movement.html
what-to-expect.html
styles.css
script.js
_routes.json
_headers
\`\`\`

**Images folder:**
\`\`\`
images/
├── logo.jpg
├── dahlia-portrait.jpg
├── treatment-room.jpg
├── reception-area.jpg
├── clinic-exterior.jpg
├── clinic-entrance.jpg
├── yellow-door.jpg
├── bioflex-laser.png
├── movement-class.png
├── olivia-cat.png
└── rmt-certification.png
\`\`\`

## 🚀 Deployment Options

### Option 1: Cloudflare Pages (Direct Upload) ⭐ RECOMMENDED

1. Go to [Cloudflare Pages](https://dash.cloudflare.com/)
2. Click "Create a project"
3. Select "Upload assets"
4. Upload ONLY the files listed above
5. Build settings: **LEAVE EMPTY** (no build needed)
6. Deploy!

### Option 2: Wrangler CLI

\`\`\`bash
# Install wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy from project root
wrangler pages deploy . --project-name=ebb-n-flow-website
\`\`\`

### Option 3: GitHub Integration

1. Create a new repository with ONLY the files listed above
2. In Cloudflare Pages, connect to Git
3. Build settings:
   - **Build command:** (leave empty)
   - **Build output directory:** `/`
   - **Root directory:** `/`

## 🌐 Local Development

\`\`\`bash
# Option 1: Python
python -m http.server 8000

# Option 2: Node.js
npx serve .

# Option 3: PHP
php -S localhost:8000
\`\`\`

Visit: http://localhost:8000

## ✅ Verification Checklist

After deploying, verify:
- [ ] Homepage loads at https://ebb-n-flow-website.pages.dev/
- [ ] All navigation links work
- [ ] Images load correctly
- [ ] Booking button links to ClinicSense
- [ ] Mobile menu works
- [ ] All pages (about, contact, movement, what-to-expect) load

## 🎨 Features

- Pure HTML/CSS/JavaScript (no frameworks)
- Mobile responsive design
- Smooth scroll navigation
- Modal popups for service info
- Collapsible mobile menu
- Integrated booking system

## 📞 Contact Information

**Ebb'nFlow Therapeutics**
- 📍 59 Wellington Street, St. Catharines, ON L2R 5P9
- 📞 (289) 969-3219
- ✉️ info@ebbnflowtherapeutics.com
- 🌐 [Book Online](https://ebbnflowmassage.clinicsense.com)

## 🐛 Troubleshooting

**Site shows 404 or doesn't load?**
- Make sure you uploaded ALL files (especially index.html)
- Check that files are in the root directory, not in a subfolder

**Images not loading?**
- Verify the `images/` folder was uploaded
- Check image paths in HTML files (should be `images/filename.jpg`)

**Styles not working?**
- Ensure `styles.css` is in the root directory
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

**JavaScript not working?**
- Make sure `script.js` is in the root directory
- Check browser console for errors (F12)

---

© 2025 Ebb'nFlow Therapeutics. All rights reserved.

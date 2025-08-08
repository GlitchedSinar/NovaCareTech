# NovaCare Tech - Simplified Version

A clean, minimal website for NovaCare Tech technology consultation services.

## Files Overview

### Main Files (For Easy Local Editing)

1. **`simple-index.html`** - Complete standalone website
   - Single HTML file with all content
   - Uses Tailwind CSS via CDN
   - Includes Font Awesome icons
   - Simple JavaScript for smooth scrolling and form handling
   - Easy to edit text, colors, and content

2. **`simple-server.js`** - Basic Node.js server (optional)
   - Express.js server for handling contact forms
   - In-memory storage for form submissions
   - Static file serving for production

3. **`simple-package.json`** - Minimal dependencies
   - Only requires Express.js for the server
   - Simple scripts for development

### Current TypeScript/React Version

- **`client/src/pages/simplified-home.tsx`** - Consolidated React component
- All sections in one file for easier editing
- TypeScript with form validation
- Styled with Tailwind CSS

## Quick Start Options

### Option 1: Static HTML (Easiest)
```bash
# Just open the file in a browser
open simple-index.html
```

### Option 2: Simple Node.js Server
```bash
# Copy the simple files
cp simple-package.json package.json
cp simple-server.js server.js

# Install dependencies
npm install

# Create a dist folder and copy the HTML file
mkdir dist
cp simple-index.html dist/index.html

# Start server
npm start
```

### Option 3: Full React Development
```bash
# Use the existing setup
npm install
npm run dev
```

## Customization Guide

### Editing Content

**In `simple-index.html`:**
- Company name: Search for "NovaCare Tech" and replace
- Phone number: Search for "(555) 668-2832" and replace
- Email: Search for "hello@novacaretech.ca" and replace
- Services: Edit the three service cards in the Services section
- Pricing: Modify the pricing cards with your actual prices
- Colors: Edit the Tailwind classes (text-blue-600, bg-blue-600, etc.)

### Key Sections to Customize

1. **Hero Section**
   - Main headline: "Technology Made Simple"
   - Subtitle description
   - Call-to-action buttons

2. **Services Section**
   - Three service cards
   - Pricing for each service
   - Service descriptions

3. **About Section**
   - Company benefits/features
   - Founder quote

4. **Pricing Section**
   - Three pricing tiers
   - Features for each tier
   - Pricing amounts

5. **Contact Section**
   - Contact information
   - Business hours
   - Contact form fields

### Color Customization

The website uses a blue color scheme. To change:

- **Primary Blue**: Replace `text-blue-600`, `bg-blue-600`, `border-blue-600`
- **Accent Green**: Replace `text-green-600`, `bg-green-50`
- **Text Colors**: `text-gray-800` (headings), `text-gray-600` (body)
- **Background**: `bg-gray-50` (sections), `bg-white` (cards)

### Adding New Sections

1. Create a new `<section>` with appropriate `id`
2. Add navigation link in the header
3. Follow the existing pattern for spacing: `py-24` for sections
4. Use container classes: `container mx-auto px-6`

## Deployment Options

1. **Static Hosting** (Netlify, Vercel, GitHub Pages)
   - Upload `simple-index.html` as `index.html`
   - No server needed for basic functionality

2. **Replit Deployment**
   - Use the current React/TypeScript version
   - Deploy directly from Replit

3. **Custom Server**
   - Use `simple-server.js` for form handling
   - Deploy to any Node.js hosting service

## Features

- ✅ Fully responsive design
- ✅ Clean, minimal template style
- ✅ Senior-friendly large text and clear navigation
- ✅ Contact form with validation
- ✅ Smooth scrolling navigation
- ✅ Professional color scheme
- ✅ Font Awesome icons
- ✅ Mobile-optimized layout

## Browser Compatibility

- Chrome, Firefox, Safari, Edge (modern versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Uses standard HTML5, CSS3, and vanilla JavaScript

## Need Help?

- For simple text changes: Edit directly in `simple-index.html`
- For styling changes: Modify Tailwind CSS classes
- For advanced features: Use the React/TypeScript version in the `client` folder

The simplified version maintains all the styling and functionality while being much easier to edit locally.
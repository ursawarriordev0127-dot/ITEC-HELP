# ITEC HELP - Next.js Website

A modern, responsive website for ITEC HELP, Sydney's premier IT support and managed services company.

## Features

- **Modern Design**: Clean, professional design with animated backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Hover effects, animations, and smooth scrolling
- **Service Showcase**: Six comprehensive IT service offerings
- **Contact Integration**: Direct phone and email contact options
- **Performance Optimized**: Built with Next.js for optimal performance

## Technologies Used

- Next.js 14
- React 18
- CSS Modules
- CSS Animations
- Responsive Design

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── pages/
│   ├── _app.js          # App component with global styles
│   ├── _document.js     # Document structure
│   └── index.js         # Main homepage
├── components/
│   ├── Header.js        # Navigation header
│   ├── Hero.js          # Hero section with stats
│   ├── Services.js      # Services grid
│   ├── CTA.js           # Call to action section
│   └── Footer.js        # Footer with links
├── styles/
│   ├── globals.css      # Global CSS variables
│   ├── Home.module.css  # Main page styles
│   ├── Header.module.css # Header component styles
│   ├── Hero.module.css   # Hero component styles
│   ├── Services.module.css # Services component styles
│   ├── CTA.module.css   # CTA component styles
│   └── Footer.module.css # Footer component styles
└── package.json
```

## Key Components

### Header
- Fixed navigation with logo and menu items
- Mobile-responsive hamburger menu
- Emergency contact button with pulse animation
- Scroll-based header styling

### Hero Section
- Animated gradient background with floating shapes
- Statistics cards with hover effects
- Call-to-action buttons
- Scroll indicator

### Services Section
- Grid layout showcasing 6 IT services
- Interactive service cards with hover animations
- Icon-based service representation

### CTA Section
- Contact information and call-to-action
- Background gradient with decorative elements

### Footer
- Company information and social links
- Organized link sections
- Contact details

## Customization

The website uses CSS custom properties (variables) defined in `styles/globals.css`:

```css
:root {
  --primary: #e65100;
  --secondary: #ff9800;
  --accent: #ff5722;
  --dark: #1a1a1a;
  --light: #f5f5f5;
}
```

## Deployment

Build for production:
```bash
npm run build
```

Start production server:
```bash
npm start
```

## License

This project is private and proprietary to ITEC HELP.

<div align="center">

  <img src="public/asme.png" alt="ASME NIT Silchar Logo" width="100" />

  # ASME NIT SILCHAR • OFFICIAL WEBSITE
  
  **American Society of Mechanical Engineers — Student Section**  
  *National Institute of Technology Silchar (NITS), Assam, India*

  <p align="center">
    <a href="https://asme-nits.github.io/ASME-NITS/"><strong>Explore Live Website »</strong></a>
  </p>

  [![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.1.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)](https://asme-nits.github.io/ASME-NITS/)
  [![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📌 Overview

This repository hosts the official web application for the **ASME Student Section at National Institute of Technology Silchar (NIT Silchar)**. 

The platform is designed to promote innovation, multidisciplinary engineering, advanced robotics, aerospace prototyping, and technical competitions organized by ASME NITS. It features a futuristic cybernetic engineering theme with responsive dark-mode glassmorphism, interactive navigation, and automated CI/CD deployments.

---

## 🚀 Live Demo

- **Production URL:** [https://asme-nits.github.io/ASME-NITS/](https://asme-nits.github.io/ASME-NITS/)
- **Organization Profile:** [github.com/ASME-NITS](https://github.com/ASME-NITS)

---

## ✨ Key Features & Pages

* **Futuristic Engineering Design System**:
  * Curated aerospace dark theme with ambient cyber-grid and neon glow effects.
  * Frosted glassmorphism surfaces (`.cyber-card`) with dynamic hover lighting.
  * Modern typography pairing: **Orbitron** (cyber tech headings), **Space Grotesk** (subheadings), and **Outfit / Inter** (clean readable body).
* **🏠 Home & Hero Showcase**:
  * High-impact hero section with glowing floating robotics illustration.
  * Real-time Stats HUD bar highlighting members, competitions, and technical divisions.
  * The Robotics Collection showcasing Autonomous Cobots, Mech-Activity, and Bionic Prototyping.
* **🏆 Flagship Events & Competitions**:
  * Dedicated event showcases for **AeroStrike** (Flight modeling & aerodynamics), **Bridge It** (Structural truss challenges), **Escape The Room** (Logic puzzles & circuits), and **Effecto Cascada** (Domino & marble maze challenges).
  * Challenge metadata, team sizing, and interactive registration triggers.
* **👥 Leadership & About Us**:
  * Chapter mission, core values, and practical innovation pillars.
  * Executive Board directory with avatar glow rings, operational tags, and social profiles.
* **🌐 Sections & Technical Divisions**:
  * Directory explaining ASME Professional Sections, Student Sections, and Specialized Technical Divisions with direct portal links.
* **📬 Interactive Contact Hub**:
  * Validated contact form using `react-hook-form` with submission feedback.
  * Direct campus headquarters address, department email, and official social handles.
* **⚡ Production-Ready Infrastructure**:
  * Universal relative base path configuration (`base: './'`).
  * `HashRouter` integration ensuring seamless direct links without 404 errors on static hosts.
  * Automated GitHub Actions CI/CD pipeline deploying to GitHub Pages on every push.

---

## 🛠️ Tech Stack

* **Frontend Framework**: [React 18](https://react.dev/)
* **Build Tool & Bundler**: [Vite 5](https://vitejs.dev/)
* **Routing**: [React Router DOM v6](https://reactrouter.com/) (HashRouter)
* **Form Management**: [React Hook Form](https://react-hook-form.com/)
* **Iconography**: [React Icons](https://react-icons.github.io/react-icons/) (FontAwesome)
* **Styling**: Vanilla CSS3 Custom Properties (Design System tokens, Flexbox, CSS Grid, Glassmorphism)
* **Deployment**: GitHub Pages & GitHub Actions CI/CD

---

## 📂 Project Structure

```text
ASME-NITS/
├── .github/
│   └── workflows/
│       └── deploy.yml        # Automated GitHub Pages build & deployment workflow
├── public/
│   ├── .nojekyll             # Prevents Jekyll processing on GitHub Pages
│   └── asme.png              # Favicon asset
├── src/
│   ├── assets/               # Event artwork, team photos, and brand graphics
│   ├── Components/
│   │   ├── styles/           # Scoped component stylesheets
│   │   │   ├── AboutUsTeam.css
│   │   │   ├── Contact.css
│   │   │   ├── Events.css
│   │   │   ├── Footer.css
│   │   │   ├── Header.css
│   │   │   ├── home.css
│   │   │   └── LearnMore.css
│   │   ├── About.jsx         # Chapter mission & overview
│   │   ├── AboutUsTeam.jsx   # Executive team grid
│   │   ├── Contact.jsx       # Contact form & HQ information
│   │   ├── Events.jsx        # Flagship competitions
│   │   ├── Footer.jsx        # Global site footer
│   │   ├── Header.jsx        # Floating glassmorphism navbar & drawer
│   │   └── Home.jsx          # Hero, stats HUD & robotics collection
│   ├── Pages/
│   │   └── LearnMore.jsx     # Sections & Technical Divisions
│   ├── App.jsx               # Application shell & HashRouter configuration
│   ├── index.css             # Core design system tokens, reset & cyber-grid
│   └── main.jsx              # Application entry point
├── index.html                # HTML5 root with Google Fonts & meta tags
├── package.json              # Project dependencies and deployment scripts
└── vite.config.js            # Vite configuration with relative base path
```

---

## 💻 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18 or higher) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ASME-NITS/ASME-NITS.git
   cd ASME-NITS
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with Hot Module Replacement (HMR).

---

## 📦 Build & Deployment

### Creating a Production Build
To create a minified and optimized production bundle:
```bash
npm run build
```
The compiled static assets will be output to the `./dist` directory.

### Previewing the Production Build
```bash
npm run preview
```

### Deploying to GitHub Pages

#### Option 1: Automated Deployment via GitHub Actions (Recommended)
Any push to the `main` branch automatically triggers the workflow at `.github/workflows/deploy.yml`, which tests, builds, and publishes the project to GitHub Pages.

#### Option 2: Manual Deployment Script
You can also build and deploy directly to the `gh-pages` branch by running:
```bash
npm run deploy
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📬 Contact & Social Channels

* **Institution**: National Institute of Technology Silchar (NIT Silchar), Cachar, Assam 788010
* **Official Facebook**: [facebook.com/asmenits](https://facebook.com/asmenits)
* **ASME Global**: [asme.org](https://www.asme.org)
* **NIT Silchar Portal**: [nits.ac.in](http://www.nits.ac.in)

---

<div align="center">
  <sub>Crafted with passion for engineering and innovation by the <strong>ASME NIT Silchar Student Section</strong> • © 2026</sub>
</div>

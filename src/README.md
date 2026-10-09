# ✨ The Cosmic Crumb — Retro Digital Café

A cozy, retro-inspired single-page restaurant application built entirely with dynamic JavaScript DOM manipulation and bundled seamlessly using modern build tooling.

## 🚀 Live Demo
[👉 Click here to experience The Cosmic Crumb live!] https://khahlisosekoto.github.io/restaurant-page/

---

## 🎨 The Design Concept
Instead of sticking to standard tutorial styling templates, **The Cosmic Crumb** features an entirely unique visual theme:
- Cozy retro pastel color blocking 
- Thick neo-brutalist structural borders
- High-contrast asymmetrical drop shadows

---

## 🛠️ Core Features & Engineering
- **Single Page Application (SPA):** The entire application lifecycle is mounted dynamically onto a single root HTML structural entry point (`<div id="content">`).
- **Dynamic Tab Switching:** Tab items (Home, Menu, and Contact view layouts) are managed using clean rendering lifecycles that completely purge and swap content nodes without refreshing the user browser.
- **Modular ES6 Architecture:** Codebase logic is clean, separated, and organized into dedicated JavaScript modules (`index.js`, `home.js`, `menu.js`, `contact.js`).
- **Modern Build Tooling:** Implemented Webpack configuration to handle production resource compilation, development local servers (`webpack-dev-server`), asset tracking, and asset modular parsing.

---

## 🧱 The Learning Journey & Core Takeaways
Building this application marked a significant architectural transition from basic scripting into scalable web engineering:
- **Overcoming the Webpack Wall:** Successfully configured modular loaders, asset pathways, and development environments.
- **State Management:** Learned to trace file imports carefully, resolve dynamic file paths, and cleanly empty layout elements before processing incoming elements to prevent duplication.

---

## 💻 Tech Stack
- **Languages:** JavaScript (ES6 Modules), HTML5, CSS3
- **Tools:** Webpack, npm, Git/GitHub, VS Code
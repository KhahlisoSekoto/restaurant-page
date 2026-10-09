import "./style.css";
// 1. Import dynamic layout modules
import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderContact } from "./contact.js"; // <-- Add this new import line!

// 2. Target global elements
const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

// 3. A core helper function to wipe the canvas clean before swapping tabs
function clearContent() {
  contentDiv.textContent = "";
}

// 4. Hook up click listeners to trigger tab switches smoothly
homeBtn.addEventListener("click", () => {
  clearContent();
  contentDiv.appendChild(renderHome());
});

menuBtn.addEventListener("click", () => {
  clearContent();
  contentDiv.appendChild(renderMenu());
});

// 5. Hook up the formal contact template renderer here
contactBtn.addEventListener("click", () => {
  clearContent();
  contentDiv.appendChild(renderContact()); // <-- Updated to mount the contact node!
});

// 6. Mount the homepage on the initial page visit
contentDiv.appendChild(renderHome());
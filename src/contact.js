export function renderContact() {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-tab");

  // Main Header Banner
  const mainHeader = document.createElement("div");
  mainHeader.classList.add("cute-card", "brand-banner");
  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Connect With Us 💌";
  mainHeader.appendChild(mainTitle);
  contactContainer.appendChild(mainHeader);

  // Intro Card
  const introCard = document.createElement("div");
  introCard.classList.add("cute-card");
  const introText = document.createElement("p");
  introText.textContent = "We would love to host you in our cozy corner of the universe. Get in touch for custom cake orders, private events, or just to say hello!";
  introCard.appendChild(introText);
  contactContainer.appendChild(introCard);

  // Phone Details Card
  const phoneCard = document.createElement("div");
  phoneCard.classList.add("cute-card");
  const phoneTitle = document.createElement("h3");
  phoneTitle.textContent = "📞 Phone Number";
  const phoneText = document.createElement("p");
  phoneText.textContent = "+1 (555) 839-2021";
  phoneCard.appendChild(phoneTitle);
  phoneCard.appendChild(phoneText);
  contactContainer.appendChild(phoneCard);

  // Location Details Card
  const addressCard = document.createElement("div");
  addressCard.classList.add("cute-card");
  const addressTitle = document.createElement("h3");
  addressTitle.textContent = "📍 Bakery Address";
  const addressText = document.createElement("p");
  addressText.textContent = "404 Pastry Lane, Sugar Plum District";
  addressCard.appendChild(addressTitle);
  addressCard.appendChild(addressText);
  contactContainer.appendChild(addressCard);

  return contactContainer;
}
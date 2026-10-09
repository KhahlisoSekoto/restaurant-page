export function renderHome() {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-tab");

  // Retro Header Card
  const headerCard = document.createElement("div");
  headerCard.classList.add("cute-card", "brand-banner");
  const title = document.createElement("h1");
  title.textContent = "The Cosmic Crumb ✨";
  const subtitle = document.createElement("p");
  subtitle.className = "brand-subtitle";
  subtitle.textContent = "Baking the universe a sweeter place, one crumb at a time.";
  headerCard.appendChild(title);
  headerCard.appendChild(subtitle);

  // Review Section Card
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("cute-card", "speech-bubble");
  const reviewText = document.createElement("p");
  reviewText.textContent = "The cinnamon rolls here are literally out of this world! The staff treats you like family, and the cozy retro aesthetic makes me want to sit here and read all day long. A neighborhood treasure!";
  const reviewer = document.createElement("h4");
  reviewer.textContent = "— Penelope Sweettooth";
  reviewCard.appendChild(reviewText);
  reviewCard.appendChild(reviewer);

  // Hours Section Card
  const hoursCard = document.createElement("div");
  hoursCard.classList.add("cute-card");
  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "⏳ Baking Hours";
  hoursCard.appendChild(hoursTitle);
  
  const hoursList = [
    "Mon - Fri: 7:00 AM - 6:00 PM",
    "Saturday: 8:00 AM - 8:00 PM",
    "Sunday: 8:00 AM - 4:00 PM"
  ];
  hoursList.forEach(time => {
    const p = document.createElement("p");
    p.textContent = time;
    hoursCard.appendChild(p);
  });

  // Location Section Card
  const locationCard = document.createElement("div");
  locationCard.classList.add("cute-card");
  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "📍 Find the Crumb";
  const locationAddress = document.createElement("p");
  locationAddress.textContent = "404 Pastry Lane, Sugar Plum District";
  locationCard.appendChild(locationTitle);
  locationCard.appendChild(locationAddress);

  homeContainer.appendChild(headerCard);
  homeContainer.appendChild(reviewCard);
  homeContainer.appendChild(hoursCard);
  locationCard.appendChild(locationAddress);
  homeContainer.appendChild(locationCard);

  return homeContainer;
}
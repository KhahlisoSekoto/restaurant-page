export function renderMenu() {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-tab");

  const mainHeader = document.createElement("div");
  mainHeader.classList.add("cute-card", "brand-banner");
  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "The Sweet Menu 🥐";
  mainHeader.appendChild(mainTitle);
  menuContainer.appendChild(mainHeader);

  // Category Title
  const categoryHeader = document.createElement("div");
  categoryHeader.classList.add("cute-card", "category-tag");
  const categoryTitle = document.createElement("h2");
  categoryTitle.textContent = "Signature Treats";
  categoryHeader.appendChild(categoryTitle);
  menuContainer.appendChild(categoryHeader);

  // Menu Item Builder
  function createMenuItem(name, description, price) {
    const itemCard = document.createElement("div");
    itemCard.classList.add("cute-card", "menu-item-card");

    const itemName = document.createElement("h3");
    itemName.textContent = name;

    const itemDesc = document.createElement("p");
    itemDesc.textContent = description;

    const itemPrice = document.createElement("span");
    itemPrice.className = "price-tag";
    itemPrice.textContent = price;

    itemCard.appendChild(itemName);
    itemCard.appendChild(itemDesc);
    itemCard.appendChild(itemPrice);
    return itemCard;
  }

  const treat1 = createMenuItem(
    "Nebula Cinnamon Roll", 
    "Fluffy, warm brioche dough swirled with brown sugar cinnamon and smothered in our top-secret vanilla bean cream cheese glaze.", 
    "$4.50"
  );
  
  const treat2 = createMenuItem(
    "Cosmic Velvet Latte", 
    "Rich espresso mixed with toasted marshmallow syrup, steamed milk, and topped with whimsical pink glitter dust.", 
    "$5.25"
  );
  
  menuContainer.appendChild(treat1);
  menuContainer.appendChild(treat2);
  return menuContainer;
}
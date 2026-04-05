export interface MenuItem {
  name: string;
  description?: string;
  price?: string | { small: string; large: string } | { two: string; four: string };
  category: 'Tacos' | 'Main' | 'Sides' | 'Catering';
}

export const MENU_ITEMS: MenuItem[] = [
  {
    name: "Tinga (shredded chicken)",
    category: "Tacos",
    price: { two: "$6", four: "$12" }
  },
  {
    name: "Chorizo / Carnitas / Pastor",
    description: "Fried pork or marinated pork",
    category: "Tacos",
    price: { two: "$6.50", four: "$13" }
  },
  {
    name: "Ground Beef / Shredded Beef",
    category: "Tacos",
    price: { two: "$7", four: "$14" }
  },
  {
    name: "Shrimp / Asada (steak)",
    category: "Tacos",
    price: { two: "$8", four: "$16" }
  },
  {
    name: "Torta",
    description: "Cheese, lettuce, tomatoes, avocado, jalapeño, mayonnaise, pinto beans, & choice of meat (+$3 for steak or shrimp)",
    category: "Main",
    price: "$11"
  },
  {
    name: "Quesadilla",
    description: "Spinach, vegetables, or choice of meat (+$3 for steak or shrimp)",
    category: "Main",
    price: "$11"
  },
  {
    name: "Burrito",
    description: "Rice, hot salsa, cheese, sour cream, black or pinto beans, & choice of meat (+$3 for steak or shrimp)",
    category: "Main",
    price: "$13"
  },
  {
    name: "California Burrito",
    description: "Steak, fries, guacamole, cheese, pico de gallo, & hot salsa",
    category: "Main",
    price: "$18"
  },
  {
    name: "Breakfast Burrito",
    description: "Cheese, eggs, hot salsa, & your choice of chorizo, mexicana, or ham (Served 10 AM - Noon)",
    category: "Main",
    price: "$10"
  },
  {
    name: "Enchilada Dinner",
    description: "Shredded chicken or ground beef served with rice & black or pinto beans",
    category: "Main",
    price: "$16"
  },
  {
    name: "Grilled Chicken Fajita Dinner",
    description: "Flour or corn tortillas, served with rice & black or pinto beans",
    category: "Main",
    price: "$16"
  },
  {
    name: "Tlayudas",
    description: "Black bean spread, Oaxaca cheese, cabbage, choice of meat, & side of avocado salsa",
    category: "Main",
    price: "$18"
  },
  {
    name: "Chicken Mole",
    description: "Chicken breast, mole sauce, rice, black or pinto beans, & side of corn or flour tortillas",
    category: "Main",
    price: "$16"
  },
  {
    name: "Guacamole",
    category: "Sides",
    price: { small: "$4", large: "$8" }
  },
  {
    name: "Pico de Gallo",
    category: "Sides",
    price: { small: "$2", large: "$4" }
  },
  {
    name: "Chips",
    category: "Sides",
    price: { small: "$1", large: "$3" }
  },
  {
    name: "Churro (1)",
    category: "Sides",
    price: "$2"
  }
];

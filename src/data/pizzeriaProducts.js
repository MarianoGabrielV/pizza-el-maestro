// PIZZAS
export const pizzas = [
  {
    id: "pizza-muzarella",
    name: "Muzzarella",
    category: "Pizzas",
    description: "Salsa de tomate, muzza, aceitunas y orégano.",
    price: 18000,
    img: "/images/pizzas/pizza-muzarella.png",
  },
  {
    id: "pizza-napolitana",
    name: "Napolitana",
    category: "Pizzas",
    description: "Tomate en rodajas, muzza, ajo y orégano.",
    price: 6200,
    img: "/images/pizzas/pizza-napo.png",
  },
  {
    id: "pizza-fugazzeta",
    name: "Fugazzeta",
    category: "Pizzas",
    description: "Cebolla caramelizada, muzza y orégano.",
    price: 6000,
    img: "/images/pizzas/fugazeta.jpg",
  },
  {
    id: "pizza-calabresa",
    name: "Calabresa",
    category: "Pizzas",
    description: "Muzza, longaniza calabresa y aceitunas.",
    price: 6800,
    img: "/images/pizzas/calabresa.png",
  },
  {
    id: "pizza-cuatro quesos",
    name: "Cuatro Quesos",
    category: "Pizzas",
    description: "Muzza, roquefort, parmesano y provolone.",
    price: 7200,
    img: "/images/pizzas/4quesos.avif",
  },
  // agregás más pizzas...
];

// EMPANADAS
export const empanadas = [
  {
    id: "emp-docena",
    name: "Docena de empanadas",
    category: "Empanadas",
    description: "12 empanadas a elección.",
    price: 10800,
    img: "/images/empanadas/doce.jpg",
    upsell: true, // abre el modal
  },
  {
    id: "emp-media-docena",
    name: "Media docena de empanadas",
    category: "Empanadas",
    description: "6 empanadas a elección.",
    price: 5400,
    img: "/images/empanadas/media.png",
    upsell: true, // abre el modal
  },
  {
    id: "emp-jyq",
    name: "Empanada de jamón y queso",
    category: "Empanadas",
    description: "Jamón cocido y muzza.",
    price: 900,
    img: "/images/empanadas/empanada-jyq.png",
  },
  {
    id: "emp-pollo",
    name: "Empanada de Pollo",
    category: "Empanadas",
    description: "Pollo trozado y condimentos.",
    price: 900,
    img: "/images/empanadas/empanadapollo.jpg",
  },
  {
    id: "emp-atun",
    name: "Empanada de Atun",
    category: "Empanadas",
    description: "Atun condimentos.",
    price: 900,
    img: "/images/empanadas/atun.png",
  },
  {
    id: "emp-cyq",
    name: "Empanada de Cebolla y Queso",
    category: "Empanadas",
    description: "Cebolla y Queso.",
    price: 900,
    img: "/images/empanadas/cyq.jpg",
  },
];

// BEBIDAS
export const bebidas = [
  {
    id: "coca-15",
    name: "Coca Cola 1.5L",
    category: "Bebidas",
    description: "Gaseosa sabor cola.",
    price: 2500,
    img: "/images/bebidas/cocacola.png",
  },
  {
    id: "agua-500",
    name: "Agua 500ml",
    category: "Bebidas",
    description: "Agua mineral sin gas.",
    price: 1200,
    img: "/images/bebidas/agua.png",
  },
];

// POSTRES
export const postres = [
  {
    id: "flan-casero",
    name: "Flan casero",
    category: "Postres",
    description: "Flan casero con dulce de leche o crema.",
    price: 2000,
    img: "/images/postres/flan.png",
  },
  {
    id: "helado-1k",
    name: "Helado 1kg",
    category: "Postres",
    description: "Varios sabores a elección.",
    price: 4500,
    img: "/images/postres/helado.png",
  },
];

// Agregados
// Extras para pizzas
export const extrasPizza = [
  {
    id: "al-molde",
    name: "Al Molde 🍕🟫",
    price: 0,
    category: "Extras",
  },
  {
    id: "ala-piedra",
    name: "A la Piedra 🔥🍕",
    price: 0,
    category: "Extras",
  },
  {
    id: "extra-queso",
    name: "Extra queso 🧀",
    price: 800,
    category: "Extras",
  },
  {
    id: "extra-jamon",
    name: "Extra Jamón 🐖",
    price: 1200,
    category: "Extras",
  },
  {
    id: "extra-salsa",
    name: "Extra salsa 🍅",
    price: 600,
    category: "Extras",
  },
  {
    id: "albahaca-fresca",
    name: "Extra Albahaca fresca 🌿",
    price: 500,
    category: "Extras",
  },
  {
    id: "anchoas",
    name: "Extra Anchoas 🍤 ",
    price: 1500,
    category: "Extras",
  },
  {
    id: "huevo",
    name: "Extra Huevo 🍳",
    price: 1500,
    category: "Extras",
  },
  {
    id: "cebolla",
    name: "Extra Cebolla 🧅",
    price: 1500,
    category: "Extras",
  },
];

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 30,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 30,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: 30,
    category: "Computer Accessories",
    inStock: false,
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 30,
    category: "Electronics",
    inStock: true,
  },
  { id: 5, name: "Laptop Stand", price: 30, category: "Office", inStock: true },
  { id: 6, name: "Desk Lamp", price: 30, category: "Home", inStock: true },
  {
    id: 7,
    name: "USB Cable",
    price: 30,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 8,
    name: "HDMI Adapter",
    price: 30,
    category: "Electronics",
    inStock: false,
  },
  {
    id: 9,
    name: "Wireless Mouse",
    price: 30,
    category: "Computer Gadgets",
    inStock: true,
  },
  {
    id: 10,
    name: "Mechanical Keyboard",
    price: 30,
    category: "Computer Gadgets",
    inStock: true,
  },
  {
    id: 11,
    name: "Water Bottle",
    price: 30,
    category: "Home & Kitchen",
    inStock: true,
  },
  {
    id: 12,
    name: "Travel Bag",
    price: 30,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 13,
    name: "Phone Stand",
    price: 30,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 14,
    name: "LED Strip Light",
    price: 30,
    category: "Home Decor",
    inStock: true,
  },
  {
    id: 15,
    name: "Notebook",
    price: 30,
    category: "Stationery",
    inStock: true,
  },
  { id: 16, name: "Pen Set", price: 30, category: "Stationery", inStock: true },
  {
    id: 17,
    name: "Power Bank",
    price: 30,
    category: "Electronics",
    inStock: false,
  },
  {
    id: 18,
    name: "Wireless Charger",
    price: 30,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 19,
    name: "Flash Drive 32GB",
    price: 30,
    category: "Computer Accessories",
    inStock: true,
  },
  {
    id: 20,
    name: "Webcam HD",
    price: 30,
    category: "Computer Accessories",
    inStock: true,
  },
  {
    id: 21,
    name: "Tripod Stand",
    price: 30,
    category: "Photography",
    inStock: false,
  },
  {
    id: 22,
    name: "Ring Light",
    price: 30,
    category: "Photography",
    inStock: true,
  },
  { id: 23, name: "Microphone", price: 30, category: "Audio", inStock: true },
  { id: 24, name: "Headset", price: 30, category: "Audio", inStock: true },
  {
    id: 25,
    name: "Smartphone Case",
    price: 30,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 26,
    name: "Screen Protector",
    price: 30,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 27,
    name: "Portable Fan",
    price: 30,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 28,
    name: "Desk Organizer",
    price: 30,
    category: "Office",
    inStock: true,
  },
  {
    id: 29,
    name: "Mini Projector",
    price: 30,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 30,
    name: "Laptop Sleeve",
    price: 30,
    category: "Accessories",
    inStock: true,
  },
];

// console.log(products);

// let filteredProduct = products.filter(product => product.id >= 20);
// console.log(filteredProduct);

// let electronicsProducts = products.filter(product => product.category === "Electronics");
// console.log(electronicsProducts);

// let inStock = products
//   .filter((product) => product.category === "Electronics")
//   .map((product) =>product);

// console.log(inStock);

// let totalPrice = products.reduce((accumulator, current) => {
//   return accumulator + current.price;
// }, 0)

// console.log(totalPrice);

let premiumProducts = products
  .filter((product) => product.inStock)
  .filter((product) => product.category === "Electronics")
  .map((product) => ({
    name: product.name.toUpperCase(),
    price: product.price,
  }))
  .reduce(
    (acc, cur) => {
      acc.totalPrice += cur.price;
      acc.products.push(cur);
      return acc;
    },
    { totalPrice: 0, products: [] }
  );


console.log(premiumProducts);
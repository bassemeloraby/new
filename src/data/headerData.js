export const mainPages = [
  {
    id: 1,
    url: "/medicine",
    text: "Medicine",

    ping: [
      { name: "search", link: "/medicine" },
      { name: "medicine calculation", link: "/medCalc" },
      { name: "Food Supplement", link: "/foodSupplement" }
    ]
  },
  {
    id: 2,
    url: "/AllScientificName",
    text: "Cosmotic",

    ping: [{ name: "products", link: "/products" }]
  },
  {
    id: 3,
    url: "/projects",
    text: "Insurance",

    ping: [{ name: "insurance", link: "/insurance" }]
  }
];

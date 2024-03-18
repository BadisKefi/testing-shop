// Define interfaces
interface Product {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  label: string;
  price: number;
  images: string[];
  description: string;
  detailedDescription: string;
  informations: string;
  categoryId?: string;
  stock?: number;
}

interface Category {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  label: string;
  image: string;
  description: string;
  detailedDescription: string;
  products: Product[];
}

// Array of images urls from edgestore
const ImagesURLs = [
  "https://files.edgestore.dev/yhek3s7dpua031no/publicFiles/_public/1819e61c-af08-4d50-abfd-a02e74b3261a.png",
  "https://files.edgestore.dev/yhek3s7dpua031no/publicFiles/_public/15680a6e-ff43-45b2-8e9a-2ec91aaf9300.png",
  "https://files.edgestore.dev/yhek3s7dpua031no/publicFiles/_public/77a64276-cbdc-4f6a-aa3c-cbfebe5a753b.png",
];

const products: Product[] = [
  {
    id: "1",
    createdAt: new Date(2023, 5, 12),
    updatedAt: new Date(2024, 1, 20),
    label: "Smartphone",
    price: 699,
    images: [ImagesURLs[0]],
    description: "A powerful smartphone with advanced features.",
    detailedDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    informations: "Brand: ABC, Model: XYZ",
    categoryId: "1",
    stock: 50,
  },
  {
    id: "2",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "3",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "4",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "5",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "6",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "7",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "8",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "9",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "10",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "11",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "12",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "13",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "14",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },

  {
    id: "15",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "16",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "17",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "18",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "19",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "20",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "21",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "22",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
  {
    id: "23",
    createdAt: new Date(2023, 6, 25),
    updatedAt: new Date(2024, 2, 15),
    label: "Laptop",
    price: 1299,
    images: [ImagesURLs[1], ImagesURLs[2]],
    description: "A high-performance laptop for professionals.",
    detailedDescription:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    informations: "Brand: XYZ, Model: ABC123",
    categoryId: "1",
    stock: 30,
  },
];

// Static data for categories
const categories: Category[] = [
  {
    id: "1",
    createdAt: new Date(2023, 3, 8),
    updatedAt: new Date(2023, 11, 18),
    label: "Electronics",
    image: ImagesURLs[0],
    description: "Explore our range of electronic gadgets.",
    detailedDescription:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    products: [products[0], products[1]],
  },
  {
    id: "2",
    createdAt: new Date(2023, 2, 15),
    updatedAt: new Date(2023, 10, 30),
    label: "Clothing",
    image: ImagesURLs[1],
    description: "Discover trendy fashion for all occasions.",
    detailedDescription:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    products: [],
  },
];

export type { Product, Category };
export { products, categories };

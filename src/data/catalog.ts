import menJacket from "@/assets/p-men-jacket.jpg";
import womenSet from "@/assets/p-women-set.jpg";
import kidsDenim from "@/assets/p-kids-denim.jpg";
import sneakerWhite from "@/assets/p-sneaker-white.jpg";
import sneakerBlack from "@/assets/p-sneaker-black.jpg";

export type Category = "MEN" | "WOMEN" | "KIDS";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: Category;
  colors?: string[];
  sizes?: string[];
  rating?: number;
  inStock?: boolean;
  description?: string;
};

export const products: Product[] = [
  {
    id: "m1",
    name: "Signature Bomber Jacket",
    brand: "U.S. Polo Assn.",
    price: 4299,
    image: menJacket,
    category: "MEN",
    colors: ["Black", "Navy", "Olive"],
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.8,
    inStock: true,
    description: "Premium weather-resistant luxury bomber jacket with soft inner lining and metallic zip accents."
  },
  {
    id: "m2",
    name: "Court Low Sneakers",
    brand: "Nike",
    price: 6999,
    image: sneakerWhite,
    category: "MEN",
    colors: ["White", "Gold"],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.9,
    inStock: true,
    description: "Iconic court sneakers with cushioned sole and premium leather finish."
  },
  {
    id: "m3",
    name: "Midnight Runner",
    brand: "Adidas",
    price: 7499,
    image: sneakerBlack,
    category: "MEN",
    colors: ["Black", "Gold"],
    sizes: ["7", "8", "9", "10"],
    rating: 4.7,
    inStock: true,
    description: "High-performance responsive running shoes engineered for all-day urban comfort."
  },
  {
    id: "m4",
    name: "Onyx Layer Jacket",
    brand: "Puma",
    price: 3899,
    image: menJacket,
    category: "MEN",
    colors: ["Black", "Beige"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    inStock: true,
    description: "Lightweight wind-cheater jacket designed for modern active street style."
  },
  {
    id: "m5",
    name: "Street Classic Kicks",
    brand: "Puma",
    price: 5299,
    image: sneakerWhite,
    category: "MEN",
    colors: ["White", "Navy"],
    sizes: ["8", "9", "10", "11"],
    rating: 4.8,
    inStock: true,
    description: "Retro street sneakers with contrast branding and durable rubber outsole."
  },
  {
    id: "w1",
    name: "Ivory Co-ord Set",
    brand: "Vero Moda",
    price: 5499,
    image: womenSet,
    category: "WOMEN",
    colors: ["Beige", "White"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    inStock: true,
    description: "Chic luxury knitted co-ord set with tailored silhouette and breathable fabric."
  },
  {
    id: "w2",
    name: "Champagne Tailored Set",
    brand: "ONLY",
    price: 6299,
    image: womenSet,
    category: "WOMEN",
    colors: ["Gold", "Beige"],
    sizes: ["S", "M", "L"],
    rating: 4.8,
    inStock: true,
    description: "Sophisticated champagne lounge set featuring gold hardware and smooth drape."
  },
  {
    id: "w3",
    name: "Studio White Sneakers",
    brand: "Adidas",
    price: 5999,
    image: sneakerWhite,
    category: "WOMEN",
    colors: ["White", "Gold"],
    sizes: ["5", "6", "7", "8"],
    rating: 4.7,
    inStock: true,
    description: "Minimalist studio white trainers with soft memory foam insoles."
  },
  {
    id: "w4",
    name: "Noir Trainer",
    brand: "Nike",
    price: 6899,
    image: sneakerBlack,
    category: "WOMEN",
    colors: ["Black"],
    sizes: ["6", "7", "8"],
    rating: 4.9,
    inStock: true,
    description: "Sleek all-black fitness trainers with breathable mesh upper."
  },
  {
    id: "w5",
    name: "Sand Linen Suit",
    brand: "Levi's",
    price: 4899,
    image: womenSet,
    category: "WOMEN",
    colors: ["Beige", "White"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.6,
    inStock: true,
    description: "Relaxed linen blazer and pants set designed for effortless summer chic."
  },
  {
    id: "k1",
    name: "Junior Denim Jacket",
    brand: "U.S. Polo Assn.",
    price: 2199,
    image: kidsDenim,
    category: "KIDS",
    colors: ["Navy", "Black"],
    sizes: ["4Y", "6Y", "8Y", "10Y"],
    rating: 4.8,
    inStock: true,
    description: "Durable classic denim jacket tailored for comfortable active play."
  },
  {
    id: "k2",
    name: "Play Day Sneakers",
    brand: "Puma",
    price: 2799,
    image: sneakerWhite,
    category: "KIDS",
    colors: ["White", "Gold"],
    sizes: ["1Y", "2Y", "3Y", "4Y"],
    rating: 4.7,
    inStock: true,
    description: "Flexible lightweight sneakers with easy Velcro straps for kids."
  },
  {
    id: "k3",
    name: "Denim & Tee Combo",
    brand: "Levi's",
    price: 2499,
    image: kidsDenim,
    category: "KIDS",
    colors: ["Navy", "White"],
    sizes: ["6Y", "8Y", "10Y", "12Y"],
    rating: 4.9,
    inStock: true,
    description: "Comfortable cotton t-shirt paired with stretch denim jeans."
  },
  {
    id: "k4",
    name: "Mini Runner",
    brand: "Adidas",
    price: 3199,
    image: sneakerBlack,
    category: "KIDS",
    colors: ["Black", "Red"],
    sizes: ["2Y", "3Y", "4Y", "5Y"],
    rating: 4.8,
    inStock: true,
    description: "Cushioned mini sports shoes designed for school and athletic play."
  },
  {
    id: "k5",
    name: "Weekend Denim Fit",
    brand: "Puma",
    price: 1999,
    image: kidsDenim,
    category: "KIDS",
    colors: ["Navy"],
    sizes: ["4Y", "6Y", "8Y"],
    rating: 4.5,
    inStock: true,
    description: "Soft washed casual denim pants with adjustable elastic waist."
  },
];

export const footwear: Product[] = [
  { id: "f1", name: "Air Court Low", brand: "Nike", price: 6999, image: sneakerWhite, category: "MEN", colors: ["White"], sizes: ["8", "9", "10"], rating: 4.9, inStock: true, description: "Cushioned court shoes." },
  { id: "f2", name: "Ultra Glide Gold", brand: "Adidas", price: 7899, image: sneakerBlack, category: "MEN", colors: ["Black", "Gold"], sizes: ["7", "8", "9", "10"], rating: 4.8, inStock: true, description: "Gold accent runners." },
  { id: "f3", name: "Suede Classic", brand: "Puma", price: 4499, image: sneakerWhite, category: "WOMEN", colors: ["White", "Beige"], sizes: ["6", "7", "8"], rating: 4.7, inStock: true, description: "Classic suede sneakers." },
  { id: "f4", name: "Night Trainer Pro", brand: "Nike", price: 8299, image: sneakerBlack, category: "MEN", colors: ["Black"], sizes: ["8", "9", "10", "11"], rating: 4.9, inStock: true, description: "Pro trainer edition." },
  { id: "f5", name: "Mini Runner", brand: "Adidas", price: 3199, image: sneakerWhite, category: "KIDS", colors: ["White"], sizes: ["2Y", "3Y", "4Y"], rating: 4.8, inStock: true, description: "Mini runners for kids." },
];

export const suggestions: Product[] = ["m1", "w1", "k1", "m3", "w4", "k3", "m5"]
  .map((id) => products.find((p) => p.id === id))
  .filter((p): p is Product => Boolean(p));

export const brands = [
  "PUMA",
  "ADIDAS",
  "NIKE",
  "U.S. POLO ASSN.",
  "LEVI'S",
  "JACK & JONES",
  "VERO MODA",
  "ONLY",
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const WHATSAPP = "https://wa.me/919999999999?text=Hi%20Prime%20Outlet!";
export const PHONE = "+91 99999 99999";
export const INSTAGRAM = "https://instagram.com/primeoutlet";

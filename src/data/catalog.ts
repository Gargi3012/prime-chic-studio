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
};

export const products: Product[] = [
  { id: "m1", name: "Signature Bomber Jacket", brand: "U.S. Polo Assn.", price: 4299, image: menJacket, category: "MEN" },
  { id: "m2", name: "Court Low Sneakers", brand: "Nike", price: 6999, image: sneakerWhite, category: "MEN" },
  { id: "m3", name: "Midnight Runner", brand: "Adidas", price: 7499, image: sneakerBlack, category: "MEN" },
  { id: "m4", name: "Onyx Layer Jacket", brand: "Puma", price: 3899, image: menJacket, category: "MEN" },
  { id: "m5", name: "Street Classic Kicks", brand: "Puma", price: 5299, image: sneakerWhite, category: "MEN" },
  { id: "w1", name: "Ivory Co-ord Set", brand: "Vero Moda", price: 5499, image: womenSet, category: "WOMEN" },
  { id: "w2", name: "Champagne Tailored Set", brand: "ONLY", price: 6299, image: womenSet, category: "WOMEN" },
  { id: "w3", name: "Studio White Sneakers", brand: "Adidas", price: 5999, image: sneakerWhite, category: "WOMEN" },
  { id: "w4", name: "Noir Trainer", brand: "Nike", price: 6899, image: sneakerBlack, category: "WOMEN" },
  { id: "w5", name: "Sand Linen Suit", brand: "Levi's", price: 4899, image: womenSet, category: "WOMEN" },
  { id: "k1", name: "Junior Denim Jacket", brand: "U.S. Polo Assn.", price: 2199, image: kidsDenim, category: "KIDS" },
  { id: "k2", name: "Play Day Sneakers", brand: "Puma", price: 2799, image: sneakerWhite, category: "KIDS" },
  { id: "k3", name: "Denim & Tee Combo", brand: "Levi's", price: 2499, image: kidsDenim, category: "KIDS" },
  { id: "k4", name: "Mini Runner", brand: "Adidas", price: 3199, image: sneakerBlack, category: "KIDS" },
  { id: "k5", name: "Weekend Denim Fit", brand: "Puma", price: 1999, image: kidsDenim, category: "KIDS" },
];

export const footwear: Product[] = [
  { id: "f1", name: "Air Court Low", brand: "Nike", price: 6999, image: sneakerWhite, category: "MEN" },
  { id: "f2", name: "Ultra Glide Gold", brand: "Adidas", price: 7899, image: sneakerBlack, category: "MEN" },
  { id: "f3", name: "Suede Classic", brand: "Puma", price: 4499, image: sneakerWhite, category: "WOMEN" },
  { id: "f4", name: "Night Trainer Pro", brand: "Nike", price: 8299, image: sneakerBlack, category: "MEN" },
  { id: "f5", name: "Mini Runner", brand: "Adidas", price: 3199, image: sneakerWhite, category: "KIDS" },
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
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const WHATSAPP = "https://wa.me/919999999999?text=Hi%20Prime%20Outlet!";
export const PHONE = "+91 99999 99999";
export const INSTAGRAM = "https://instagram.com/primeoutlet";

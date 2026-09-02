export type Category = "MEN" | "WOMEN";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: Category;
  colors?: string[];
  sizes?: string[];
  rating?: number;
  reviewsCount?: number;
  tags?: string[];
  inStock?: boolean;
  description?: string;
};

export const products: Product[] = [
  // ==================== MEN'S COLLECTION (4 Exact Showcase Cards) ====================
  {
    id: "m1",
    name: "Oatmeal Unstructured Suit",
    brand: "Ralph Lauren",
    price: 5899,
    originalPrice: 11999,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["Oatmeal", "Sand"],
    sizes: ["38", "40", "42", "44"],
    rating: 4.9,
    reviewsCount: 38,
    tags: ["Runway Edit", "Tailored"],
    inStock: true,
    description: "Italian structured oatmeal wool blend unstructured suit.",
  },
  {
    id: "m2",
    name: "Tobacco Suede Overshirt",
    brand: "Zara Man",
    price: 3999,
    originalPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["Tobacco", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviewsCount: 29,
    tags: ["Suede Edit", "Outerwear"],
    inStock: true,
    description: "Plush tobacco faux-suede overshirt with brass button hardware.",
  },
  {
    id: "m3",
    name: "Crisp Linen Resort Shirt",
    brand: "Armani",
    price: 2899,
    originalPrice: 5999,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["Ecru White", "Sage"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviewsCount: 24,
    tags: ["Pure Linen", "Resort"],
    inStock: true,
    description: "Garment-washed pure European linen camp shirt.",
  },
  {
    id: "m4",
    name: "Italian Leather Court Kicks",
    brand: "Vault Archive",
    price: 4499,
    originalPrice: 8999,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["White/Gold", "Triple Black"],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.9,
    reviewsCount: 52,
    tags: ["Vault Drop", "Authentic"],
    inStock: true,
    description: "Iconic court sneakers with tumbled Italian calfskin leather.",
  },

  // ==================== WOMEN'S COLLECTION (4 Exact Showcase Cards) ====================
  {
    id: "w1",
    name: "Oatmeal Tailored Blazer Set",
    brand: "Zara Studio",
    price: 4899,
    originalPrice: 8999,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Oatmeal", "Soft Ivory"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviewsCount: 41,
    tags: ["Runway Edit", "Tailored Set"],
    inStock: true,
    description: "High-fashion structured linen blazer and pleated trousers.",
  },
  {
    id: "w2",
    name: "Linen Trench & Tailoring",
    brand: "Massimo Dutti",
    price: 5499,
    originalPrice: 9999,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Sand Beige", "Olive Mist"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviewsCount: 35,
    tags: ["Couture Drop", "Water Resistant"],
    inStock: true,
    description: "Double-breasted storm flap trench coat crafted in water-repellent gabardine.",
  },
  {
    id: "w3",
    name: "Silk Column Slip Gown",
    brand: "Armani Privé",
    price: 6299,
    originalPrice: 11999,
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=600&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Champagne Silk", "Midnight Noir"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviewsCount: 32,
    tags: ["Evening Edit", "Pure Silk"],
    inStock: true,
    description: "Floor-length slip gown in flowing satin silk with delicate drape.",
  },
  {
    id: "w4",
    name: "Sculpted Mini Leather Tote",
    brand: "Polène Paris",
    price: 7899,
    originalPrice: 13999,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Cognac Tan", "Noir Black"],
    sizes: ["One Size"],
    rating: 4.9,
    reviewsCount: 22,
    tags: ["Leathercraft", "Gold Hardware"],
    inStock: true,
    description: "Supple full-grain calf leather structured tote with magnetic fold closure.",
  },
];

export const footwear: Product[] = [];

export const suggestions: Product[] = ["m1", "w1", "m2", "w3"]
  .map((id) => products.find((p) => p.id === id))
  .filter((p): p is Product => Boolean(p));

export const brands = [
  "RALPH LAUREN",
  "ARMANI EXCHANGE",
  "ZARA",
  "MASSIMO DUTTI",
  "POLÈNE PARIS",
  "ARMANI PRIVÉ",
  "CALVIN KLEIN",
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const WHATSAPP = "https://wa.me/919999999999?text=Hi%20Prime%20Outlet!";
export const PHONE = "+91 99999 99999";
export const INSTAGRAM = "https://instagram.com/primeoutlet";

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
  // ==================== MEN'S COLLECTION ====================
  {
    id: "m1",
    name: "Cashmere Double-Breasted Coat",
    brand: "Ralph Lauren",
    price: 4999,
    originalPrice: 9999,
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["Camel", "Charcoal", "Black"],
    sizes: ["M", "L", "XL", "XXL"],
    rating: 4.9,
    reviewsCount: 38,
    tags: ["Runway Edit", "Cashmere"],
    inStock: true,
    description:
      "Italian structured camel wool double-breasted coat with handcrafted horn buttons and satin lining.",
  },
  {
    id: "m2",
    name: "Court Low Retro Sneakers",
    brand: "Nike Lab",
    price: 3499,
    originalPrice: 6999,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["White/Gold", "Black/White"],
    sizes: ["7", "8", "9", "10", "11"],
    rating: 4.9,
    reviewsCount: 52,
    tags: ["Vault Drop", "Authentic"],
    inStock: true,
    description:
      "Iconic retro court sneakers with premium tumbled leather upper and responsive cushioned cupsole.",
  },
  {
    id: "m3",
    name: "Italian Structured Navy Blazer",
    brand: "Armani Exchange",
    price: 4599,
    originalPrice: 8999,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["Navy", "Slate Grey", "Black"],
    sizes: ["38", "40", "42", "44"],
    rating: 4.8,
    reviewsCount: 29,
    tags: ["Tailored Suit", "Bespoke"],
    inStock: true,
    description:
      "Tailored slim-fit formal blazer cut from fine Italian wool blend with notched lapels and pocket square accent.",
  },
  {
    id: "m4",
    name: "Espresso Brushed Suede Bomber",
    brand: "Zara Man",
    price: 3999,
    originalPrice: 7499,
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["Espresso Brown", "Onyx Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviewsCount: 24,
    tags: ["Limited Drop", "Streetwear"],
    inStock: true,
    description:
      "Plush faux-suede bomber jacket with ribbed knit cuffs, antique brass zip closure, and interior phone pocket.",
  },
  {
    id: "m5",
    name: "Air Max Runner Performance",
    brand: "Adidas Originals",
    price: 3899,
    originalPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["Infrared Red", "Triple Black"],
    sizes: ["8", "9", "10", "11"],
    rating: 4.9,
    reviewsCount: 46,
    tags: ["Speed Edition", "Air Cushion"],
    inStock: true,
    description:
      "Engineered mesh lightweight trainers with responsive foam midsole and high-traction rubber outsole.",
  },
  {
    id: "m6",
    name: "Relaxed Linen Overshirt",
    brand: "Calvin Klein",
    price: 2899,
    originalPrice: 5499,
    image:
      "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["Ecru White", "Sage Green", "Black"],
    sizes: ["S", "M", "L", "XL"],
    rating: 4.8,
    reviewsCount: 19,
    tags: ["New Arrival", "Pure Linen"],
    inStock: true,
    description:
      "Garment-washed pure European linen overshirt with chest patch pockets and relaxed camp collar.",
  },

  // ==================== WOMEN'S COLLECTION ====================
  {
    id: "w1",
    name: "Oatmeal Tailored Blazer Set",
    brand: "Zara Studio",
    price: 3899,
    originalPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Oatmeal", "Soft Ivory", "Charcoal"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviewsCount: 41,
    tags: ["Runway Edit", "Tailored Set"],
    inStock: true,
    description:
      "High-fashion structured linen blazer paired with high-waisted pleated trousers in elegant neutral oatmeal.",
  },
  {
    id: "w2",
    name: "Sand Classic Storm Trench",
    brand: "Massimo Dutti",
    price: 4199,
    originalPrice: 8499,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Sand Beige", "Olive Mist"],
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviewsCount: 35,
    tags: ["Couture Drop", "Water Resistant"],
    inStock: true,
    description:
      "Double-breasted storm flap trench coat crafted in water-repellent gabardine with belted waist.",
  },
  {
    id: "w3",
    name: "Air Force 1 Velvet Pastel",
    brand: "Nike Luxe",
    price: 3299,
    originalPrice: 6499,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Pastel Lilac", "Clean White"],
    sizes: ["5", "6", "7", "8"],
    rating: 4.9,
    reviewsCount: 63,
    tags: ["Kicks Vault", "Limited Drop"],
    inStock: true,
    description:
      "Iconic low-top sneakers in soft pastel colorblocking with premium leather overlays and elevated sole.",
  },
  {
    id: "w4",
    name: "Ivory Knitted Co-ord Set",
    brand: "Mango Luxe",
    price: 3499,
    originalPrice: 6999,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Ivory", "Butter Beige"],
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviewsCount: 28,
    tags: ["Spring Capsule", "Soft Knit"],
    inStock: true,
    description:
      "Relaxed-fit ribbed knit cardigan and wide-leg trousers set in lightweight breathable cotton blend.",
  },
  {
    id: "w5",
    name: "Emerald Silk Wrap Gown",
    brand: "Vero Moda",
    price: 4499,
    originalPrice: 8999,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Emerald Green", "Midnight Blue"],
    sizes: ["S", "M", "L"],
    rating: 4.9,
    reviewsCount: 32,
    tags: ["Evening Edit", "Pure Silk Feel"],
    inStock: true,
    description:
      "Floor-length wrap gown in flowing satin silk with deep V-neckline and elegant side sash tie.",
  },
  {
    id: "w6",
    name: "Leather Minimalist Shoulder Tote",
    brand: "Coach Curation",
    price: 3999,
    originalPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Cognac Tan", "Noir Black"],
    sizes: ["One Size"],
    rating: 4.8,
    reviewsCount: 22,
    tags: ["Leather Edit", "Gold Hardware"],
    inStock: true,
    description:
      "Supple grain leather shoulder bag with magnetic snap closure and interior zip compartment.",
  },
];

export const footwear: Product[] = [
  {
    id: "f1",
    name: "Court Low Retro Sneakers",
    brand: "Nike Lab",
    price: 3499,
    originalPrice: 6999,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["White/Gold", "Black/White"],
    sizes: ["8", "9", "10", "11"],
    rating: 4.9,
    reviewsCount: 52,
    tags: ["Vault Drop"],
    inStock: true,
    description: "Iconic retro court sneakers with premium leather.",
  },
  {
    id: "f2",
    name: "Air Max Runner Performance",
    brand: "Adidas Originals",
    price: 3899,
    originalPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop",
    category: "MEN",
    colors: ["Infrared Red", "Triple Black"],
    sizes: ["7", "8", "9", "10"],
    rating: 4.8,
    reviewsCount: 46,
    tags: ["Speed Edition"],
    inStock: true,
    description: "Gold accent high-performance runners.",
  },
  {
    id: "f3",
    name: "Air Force 1 Velvet Pastel",
    brand: "Nike Luxe",
    price: 3299,
    originalPrice: 6499,
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["Pastel Lilac"],
    sizes: ["5", "6", "7", "8"],
    rating: 4.9,
    reviewsCount: 63,
    tags: ["Kicks Vault"],
    inStock: true,
    description: "Classic pastel luxury low sneakers.",
  },
  {
    id: "f4",
    name: "Minimalist Leather Court Trainers",
    brand: "Puma Luxe",
    price: 3199,
    originalPrice: 5999,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    category: "WOMEN",
    colors: ["White/Tan"],
    sizes: ["6", "7", "8"],
    rating: 4.7,
    reviewsCount: 31,
    tags: ["Suede Finish"],
    inStock: true,
    description: "Clean court trainers with soft leather finish.",
  },
];

export const suggestions: Product[] = ["m1", "w1", "m3", "w4", "m5"]
  .map((id) => products.find((p) => p.id === id))
  .filter((p): p is Product => Boolean(p));

export const brands = [
  "RALPH LAUREN",
  "ARMANI EXCHANGE",
  "ZARA",
  "MASSIMO DUTTI",
  "NIKE",
  "ADIDAS",
  "PUMA",
  "TOMMY HILFIGER",
  "LEVI'S",
  "VERO MODA",
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export const WHATSAPP = "https://wa.me/919999999999?text=Hi%20Prime%20Outlet!";
export const PHONE = "+91 99999 99999";
export const INSTAGRAM = "https://instagram.com/primeoutlet";

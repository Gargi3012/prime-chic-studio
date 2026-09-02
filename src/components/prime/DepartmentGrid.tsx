import { useState, useMemo } from "react";
import { ShoppingBag, Eye, ArrowUpRight, Check } from "lucide-react";
import { inr, WHATSAPP, type Category, type Product } from "@/data/catalog";
import { useCart } from "@/context/CartContext";

// Import 4 Bespoke Quiet-Luxury Women's Campaign Photos
import silkDressImg from "@/assets/category-silk-dress.jpg";
import tailoredBlazerImg from "@/assets/category-tailored-blazer.jpg";
import leatherBagImg from "@/assets/category-leather-bag.jpg";
import footwearImg from "@/assets/category-footwear.jpg";

// Import 4 Bespoke Quiet-Luxury Men's Campaign Photos
import menTailoringImg from "@/assets/category-men-tailoring.jpg";
import menShirtImg from "@/assets/category-men-shirt.jpg";
import menOuterwearImg from "@/assets/category-men-outerwear.jpg";
import menFootwearImg from "@/assets/category-men-footwear.jpg";

interface DepartmentGridProps {
  category: Category;
  onGenderChange?: (gender: Category) => void;
  onQuickView?: (product: Product) => void;
}

interface DepartmentTile {
  id: string;
  num: string;
  tag: string;
  typeLabel: string;
  title: string;
  subtitle: string;
  image: string;
}

interface CuratedProduct extends Product {
  itemType: string;
}

// ==================== 4 DISTINCT DEPARTMENT TILES (Pillars / Gateways) ====================
const WOMEN_TILES: DepartmentTile[] = [
  {
    id: "w_tile_1",
    num: "01",
    tag: "dresses",
    typeLabel: "SILHOUETTES",
    title: "Silk Dresses & Gowns",
    subtitle: "Fluid evening wear & slip dresses",
    image: silkDressImg,
  },
  {
    id: "w_tile_2",
    num: "02",
    tag: "blazers",
    typeLabel: "OUTERWEAR",
    title: "Tailored Blazers & Coats",
    subtitle: "Linen tailoring & trench coats",
    image: tailoredBlazerImg,
  },
  {
    id: "w_tile_3",
    num: "03",
    tag: "bags",
    typeLabel: "LEATHERCRAFT",
    title: "Artisanal Leather Bags",
    subtitle: "Italian calfskin totes & shoulder bags",
    image: leatherBagImg,
  },
  {
    id: "w_tile_4",
    num: "04",
    tag: "footwear",
    typeLabel: "FOOTWEAR",
    title: "Footwear Archive",
    subtitle: "Sculpted mules & court sneakers",
    image: footwearImg,
  },
];

const MEN_TILES: DepartmentTile[] = [
  {
    id: "m_tile_1",
    num: "01",
    tag: "suits",
    typeLabel: "TAILORING",
    title: "Structured Tailoring",
    subtitle: "Italian wool suits & unstructured blazers",
    image: menTailoringImg,
  },
  {
    id: "m_tile_2",
    num: "02",
    tag: "shirts",
    typeLabel: "SHIRTS",
    title: "Resort Linen Shirts",
    subtitle: "Pure European linen button-downs",
    image: menShirtImg,
  },
  {
    id: "m_tile_3",
    num: "03",
    tag: "outerwear",
    typeLabel: "OUTERWEAR",
    title: "Suede & Outerwear",
    subtitle: "Plush suede overshirts & jackets",
    image: menOuterwearImg,
  },
  {
    id: "m_tile_4",
    num: "04",
    tag: "footwear",
    typeLabel: "FOOTWEAR",
    title: "Vault Footwear",
    subtitle: "Burnished loafers & court trainers",
    image: menFootwearImg,
  },
];

// ==================== RICH PRODUCT DATA (WOMEN & MEN) ====================
const WOMEN_PRODUCTS: CuratedProduct[] = [
  {
    id: "w_p1",
    name: "Sand Silk Slip Gown",
    brand: "MASSIMO DUTTI",
    price: 5499,
    originalPrice: 9999,
    image: silkDressImg,
    category: "WOMEN",
    itemType: "dresses",
    colors: ["Champagne Silk", "Noir"],
    sizes: ["XS", "S", "M", "L"],
    description: "Pure mulberry silk bias-cut slip gown with cascading drape.",
  },
  {
    id: "w_p2",
    name: "Liquid Satin Evening Gown",
    brand: "SAINT LAURENT",
    price: 8499,
    originalPrice: 15999,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop",
    category: "WOMEN",
    itemType: "dresses",
    colors: ["Onyx Noir"],
    sizes: ["S", "M", "L"],
    description: "Backless liquid satin floor-length evening silhouette.",
  },
  {
    id: "w_p3",
    name: "Oatmeal Tailored Blazer",
    brand: "ZARA STUDIO",
    price: 4899,
    originalPrice: 8999,
    image: tailoredBlazerImg,
    category: "WOMEN",
    itemType: "blazers",
    colors: ["Oatmeal", "Stone"],
    sizes: ["XS", "S", "M", "L"],
    description: "Structured double-breasted linen wool blend blazer.",
  },
  {
    id: "w_p4",
    name: "Linen Trench & Tailoring",
    brand: "MASSIMO DUTTI",
    price: 6499,
    originalPrice: 11999,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
    category: "WOMEN",
    itemType: "blazers",
    colors: ["Sand Camel"],
    sizes: ["S", "M", "L"],
    description: "Double-breasted storm flap trench coat crafted in water-repellent gabardine.",
  },
  {
    id: "w_p5",
    name: "Sculpted Cognac Leather Tote",
    brand: "POLÈNE PARIS",
    price: 7899,
    originalPrice: 13999,
    image: leatherBagImg,
    category: "WOMEN",
    itemType: "bags",
    colors: ["Cognac", "Noir"],
    sizes: ["One Size"],
    description: "Full-grain Italian calfskin tote with folded architectural contours.",
  },
  {
    id: "w_p6",
    name: "Half-Moon Leather Shoulder Bag",
    brand: "THE ROW",
    price: 8299,
    originalPrice: 14999,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=600&auto=format&fit=crop",
    category: "WOMEN",
    itemType: "bags",
    colors: ["Espresso"],
    sizes: ["One Size"],
    description: "Curved ergonomic minimalist shoulder bag in smooth nappa leather.",
  },
  {
    id: "w_p7",
    name: "Minimalist Nude Stiletto & Mules",
    brand: "GIANVITO",
    price: 5299,
    originalPrice: 9499,
    image: footwearImg,
    category: "WOMEN",
    itemType: "footwear",
    colors: ["Nude Sand"],
    sizes: ["36", "37", "38", "39", "40"],
    description: "Square-toe minimal leather mules with architectural tapered heel.",
  },
  {
    id: "w_p8",
    name: "Court Low Minimalist Trainers",
    brand: "VAULT ARCHIVE",
    price: 4499,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=600&auto=format&fit=crop",
    category: "WOMEN",
    itemType: "footwear",
    colors: ["White / Gold"],
    sizes: ["36", "37", "38", "39", "40"],
    description: "Minimalist luxury leather court trainer with gold serial stamping.",
  },
];

const MEN_PRODUCTS: CuratedProduct[] = [
  {
    id: "m_p1",
    name: "Oatmeal Unstructured Suit",
    brand: "RALPH LAUREN",
    price: 5899,
    originalPrice: 11999,
    image: menTailoringImg,
    category: "MEN",
    itemType: "suits",
    colors: ["Oatmeal", "Sand"],
    sizes: ["38", "40", "42", "44"],
    description: "Italian structured oatmeal wool blend unstructured suit.",
  },
  {
    id: "m_p2",
    name: "Italian Wool Single-Breasted Suit",
    brand: "BRUNELLO CUCINELLI",
    price: 7999,
    originalPrice: 15999,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop",
    category: "MEN",
    itemType: "suits",
    colors: ["Midnight Navy"],
    sizes: ["38", "40", "42", "44"],
    description: "Virgin wool tailored two-piece suit with mother-of-pearl buttons.",
  },
  {
    id: "m_p3",
    name: "Resort Pure Linen Shirt",
    brand: "RALPH LAUREN",
    price: 2999,
    originalPrice: 5999,
    image: menShirtImg,
    category: "MEN",
    itemType: "shirts",
    colors: ["Ecru White", "Sage"],
    sizes: ["S", "M", "L", "XL"],
    description: "Garment-washed pure European linen resort button-down shirt.",
  },
  {
    id: "m_p4",
    name: "Camp Collar Silk-Linen Shirt",
    brand: "JACQUEMUS",
    price: 3699,
    originalPrice: 7499,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=600&auto=format&fit=crop",
    category: "MEN",
    itemType: "shirts",
    colors: ["Terracotta"],
    sizes: ["S", "M", "L"],
    description: "Flowing boxy silhouette woven in breathable silk-linen yarn.",
  },
  {
    id: "m_p5",
    name: "Tobacco Suede Overshirt",
    brand: "ZARA MAN",
    price: 3999,
    originalPrice: 7999,
    image: menOuterwearImg,
    category: "MEN",
    itemType: "outerwear",
    colors: ["Tobacco", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    description: "Plush tobacco suede overshirt with brass button hardware.",
  },
  {
    id: "m_p6",
    name: "Minimalist Leather Duffle Bag",
    brand: "BOTTEGA VENETA",
    price: 8999,
    originalPrice: 16999,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=600&auto=format&fit=crop",
    category: "MEN",
    itemType: "outerwear",
    colors: ["Vintage Cognac"],
    sizes: ["One Size"],
    description: "Hand-finished saddle leather travel holdall with brass padlock hardware.",
  },
  {
    id: "m_p7",
    name: "Penny Loafer in Burnished Calfskin",
    brand: "GUCCI",
    price: 6899,
    originalPrice: 13999,
    image: menFootwearImg,
    category: "MEN",
    itemType: "footwear",
    colors: ["Cognac Brown", "White"],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Blake-stitched Italian dress loafer with hand-burnished apron.",
  },
  {
    id: "m_p8",
    name: "Court Low Minimalist Sneakers",
    brand: "NIKE LAB",
    price: 4299,
    originalPrice: 7999,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=600&auto=format&fit=crop",
    category: "MEN",
    itemType: "footwear",
    colors: ["White / Gold", "Triple Black"],
    sizes: ["7", "8", "9", "10", "11"],
    description: "Minimalist luxury leather court trainer with gold serial stamping.",
  },
];

export function DepartmentGrid({ category, onGenderChange, onQuickView }: DepartmentGridProps) {
  const { addToCart } = useCart();
  const [selectedTag, setSelectedTag] = useState<string>("all");

  const tiles = category === "MEN" ? MEN_TILES : WOMEN_TILES;
  const products = category === "MEN" ? MEN_PRODUCTS : WOMEN_PRODUCTS;

  // Dynamic filter based on selected category tile
  const filteredProducts = useMemo(() => {
    if (selectedTag === "all") return products;
    return products.filter((p) => p.itemType === selectedTag);
  }, [products, selectedTag]);

  const handleGenderToggle = (newGender: Category) => {
    onGenderChange?.(newGender);
    setSelectedTag("all");
  };

  const handleTileClick = (tag: string) => {
    // Toggle: if clicking active, revert to all
    if (selectedTag === tag) {
      setSelectedTag("all");
    } else {
      setSelectedTag(tag);
      const el = document.getElementById("catalog-products-section");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <section id="catalog-section" className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-14 bg-[#FAF8F5]">
      
      {/* 1. Segmented Gender Switch Bar */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-[#F2EEE9] p-1.5 rounded-full border border-[#ECE8E1] shadow-inner">
          <button
            onClick={() => handleGenderToggle("WOMEN")}
            className={`px-8 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
              category === "WOMEN"
                ? "bg-[#181614] text-white shadow-sm font-bold"
                : "text-[#6E6963] hover:text-[#181614]"
            }`}
          >
            FOR HER
          </button>
          <button
            onClick={() => handleGenderToggle("MEN")}
            className={`px-8 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
              category === "MEN"
                ? "bg-[#181614] text-white shadow-sm font-bold"
                : "text-[#6E6963] hover:text-[#181614]"
            }`}
          >
            FOR HIM
          </button>
        </div>
      </div>

      {/* 2. CATEGORY PORTALS (WIDE EDITORIAL PANORAMA - Clearly distinct from individual items) */}
      <div className="mb-14">
        <div className="flex items-center justify-between mb-4 px-1">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9E6738] font-semibold block mb-0.5">
              ✦ ARCHITECTURAL DEPARTMENTS
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#181614] font-normal tracking-wide">
              Explore By Department
            </h2>
          </div>
          
          {selectedTag !== "all" && (
            <button
              onClick={() => setSelectedTag("all")}
              className="text-xs font-serif uppercase tracking-wider text-[#9E6738] hover:text-[#181614] font-semibold underline cursor-pointer"
            >
              Reset to All ↺
            </button>
          )}
        </div>

        {/* 4 Wide Panorama Department Cards (aspect-[16/10] on desktop, distinct wide cards on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-5">
          {tiles.map((tile) => {
            const isSelected = selectedTag === tile.tag;
            return (
              <div
                key={tile.id}
                onClick={() => handleTileClick(tile.tag)}
                className={`relative h-[180px] sm:h-[220px] md:h-[240px] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ${
                  isSelected
                    ? "ring-2 ring-[#9E6738] ring-offset-2 ring-offset-[#FAF8F5] shadow-lg scale-[1.02]"
                    : "border border-[#ECE8E1] shadow-xs hover:border-[#9E6738]/60 hover:shadow-md"
                }`}
              >
                {/* Background Image */}
                <img
                  src={tile.image}
                  alt={tile.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Editorial Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20 group-hover:via-black/45 transition-colors" />

                {/* Top Number / Status Indicator */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between text-white/80">
                  <span className="text-[10px] font-mono tracking-widest bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-full border border-white/10">
                    {tile.num}
                  </span>
                  {isSelected ? (
                    <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider bg-[#9E6738] text-white px-2 py-0.5 rounded-full font-bold shadow-xs">
                      <Check className="w-2.5 h-2.5" /> ACTIVE
                    </span>
                  ) : (
                    <span className="text-xs font-serif opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                      ↗
                    </span>
                  )}
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-3.5 inset-x-3.5 text-white">
                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37] font-semibold block mb-0.5">
                    {tile.typeLabel}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base font-medium leading-tight text-white drop-shadow-xs mb-1">
                    {tile.title}
                  </h3>
                  <p className="text-[10px] text-[#E0D8D0] font-light line-clamp-1 opacity-90 hidden sm:block">
                    {tile.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. INDIVIDUAL SHOPPABLE WARDROBE PRODUCTS (Vertical Portrait E-Commerce Product Cards) */}
      <div id="catalog-products-section" className="w-full pt-2">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 pb-3 border-b border-[#E5DFD7] gap-2 px-1">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#9E6738] font-semibold block mb-0.5">
              ✦ SHOPPABLE INVENTORY
            </span>
            <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#181614] font-normal tracking-wide">
              {selectedTag === "all"
                ? (category === "WOMEN" ? "The Women's Collection (All Pieces)" : "The Men's Collection (All Pieces)")
                : `Curated Selection • ${tiles.find((t) => t.tag === selectedTag)?.title}`}
            </h3>
          </div>

          <span className="text-xs font-serif text-[#6E6963]">
            Showing {filteredProducts.length} pieces
          </span>
        </div>

        {/* Product Cards Grid: Vertical Portrait [3/4] Clean E-Commerce Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              onClick={() => onQuickView?.(product)}
              className="group relative cursor-pointer overflow-hidden rounded-xl border border-[#E5DFD7] bg-[#F2EEE9] shadow-xs transition-all duration-300 hover:border-[#9E6738]/60 hover:shadow-md flex flex-col justify-between"
            >
              {/* Vertical Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#EAE5DF]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Quick View on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 p-3">
                  <span className="flex items-center gap-1.5 rounded-full border border-[#E5DFD7] bg-[#FAF8F5]/95 px-3 py-1.5 text-[0.65rem] font-serif font-bold tracking-wider text-[#181614] shadow-sm">
                    <Eye className="h-3 w-3 text-[#9E6738]" />
                    QUICK VIEW
                  </span>
                </div>
              </div>

              {/* Product Info Panel */}
              <div className="p-3 sm:p-4 bg-[#F2EEE9] flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#9E6738] font-semibold block mb-0.5 sm:mb-1">
                    {product.brand}
                  </span>
                  <h4 className="text-xs sm:text-sm font-serif text-[#181614] font-medium line-clamp-1 mb-1">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-serif font-bold text-[#181614]">
                      {inr(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-[10px] text-[#8C827A] line-through">
                        {inr(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions Row */}
                <div className="pt-2.5 sm:pt-3 mt-2 sm:mt-3 border-t border-[#E5DFD7]/80 flex items-center justify-between gap-1.5">
                  <a
                    href={`${WHATSAPP}?text=${encodeURIComponent(`Inquiry about ${product.brand} ${product.name} (${inr(product.price)})`)}`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[9px] sm:text-[10px] font-serif uppercase tracking-wider text-[#6E6963] hover:text-[#9E6738] flex items-center gap-0.5 transition-colors truncate"
                  >
                    <span>Reserve WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3 shrink-0" />
                  </a>

                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(e, product)}
                    aria-label="Add to cart"
                    className="grid h-7 w-7 sm:h-8 sm:w-8 shrink-0 place-items-center rounded-full border border-[#E5DFD7] bg-[#FAF8F5] text-[#181614] transition-all duration-300 hover:bg-[#181614] hover:text-white shadow-xs"
                  >
                    <ShoppingBag className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

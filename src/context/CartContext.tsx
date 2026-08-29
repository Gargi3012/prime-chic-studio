import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { Product } from "@/data/catalog";

export interface CartItem {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
}

export interface AppliedCoupon {
  code: string;
  discountPercent?: number;
  discountAmount?: number;
  description: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, color?: string, size?: string, quantity?: number) => void;
  addMultipleToCart: (items: { product: Product; color?: string; size?: string; quantity?: number }[]) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  totalItems: number;
  subtotalPrice: number;
  totalPrice: number;
  discountAmount: number;
  earnedPoints: number;
  appliedCoupon: AppliedCoupon | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("prime_chic_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState<AppliedCoupon | null>(() => {
    try {
      const saved = localStorage.getItem("prime_applied_coupon");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("prime_chic_cart", JSON.stringify(cart));
    } catch {
      // Ignore storage errors
    }
  }, [cart]);

  useEffect(() => {
    try {
      if (appliedCoupon) {
        localStorage.setItem("prime_applied_coupon", JSON.stringify(appliedCoupon));
      } else {
        localStorage.removeItem("prime_applied_coupon");
      }
    } catch {
      // Ignore storage errors
    }
  }, [appliedCoupon]);

  const addToCart = (product: Product, color?: string, size?: string, quantity = 1) => {
    const defaultColor = color || (product.colors?.[0] ?? "Standard");
    const defaultSize = size || (product.sizes?.[0] ?? "Standard");

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === defaultColor &&
          item.selectedSize === defaultSize
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      }

      return [
        ...prev,
        {
          product,
          selectedColor: defaultColor,
          selectedSize: defaultSize,
          quantity,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const addMultipleToCart = (
    items: { product: Product; color?: string; size?: string; quantity?: number }[]
  ) => {
    items.forEach((item) => {
      addToCart(item.product, item.color, item.size, item.quantity || 1);
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(index);
      return;
    }

    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = quantity;
      return updated;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code: string): { success: boolean; message: string } => {
    const cleanCode = code.trim().toUpperCase();

    if (!cleanCode) {
      return { success: false, message: "Please enter a valid coupon code." };
    }

    if (cleanCode === "PRIME10" || cleanCode === "SPIN10") {
      setAppliedCoupon({
        code: cleanCode,
        discountPercent: 10,
        description: "10% Extra Discount Applied",
      });
      return { success: true, message: "10% Coupon Applied Successfully!" };
    } else if (cleanCode === "VOUCHER500") {
      setAppliedCoupon({
        code: cleanCode,
        discountAmount: 500,
        description: "₹500 In-Store Voucher Applied",
      });
      return { success: true, message: "₹500 Voucher Applied Successfully!" };
    } else if (cleanCode === "FREESOCKS") {
      setAppliedCoupon({
        code: cleanCode,
        discountAmount: 299,
        description: "Free Premium Socks Reward (₹299 Value)",
      });
      return { success: true, message: "Free Socks Reward Applied!" };
    } else if (cleanCode === "VIPGOLD") {
      setAppliedCoupon({
        code: cleanCode,
        discountPercent: 15,
        description: "VIP Gold 15% Pass Applied",
      });
      return { success: true, message: "15% VIP Gold Pass Applied!" };
    } else if (cleanCode === "OUTFIT10") {
      setAppliedCoupon({
        code: cleanCode,
        discountPercent: 10,
        description: "10% Complete Outfit Bundle Discount",
      });
      return { success: true, message: "10% Outfit Bundle Coupon Applied!" };
    }

    return { success: false, message: "Invalid promo code. Try SPIN10 or PRIME10." };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.discountPercent) {
      discountAmount = Math.round((subtotalPrice * appliedCoupon.discountPercent) / 100);
    } else if (appliedCoupon.discountAmount) {
      discountAmount = Math.min(subtotalPrice, appliedCoupon.discountAmount);
    }
  }

  const totalPrice = Math.max(0, subtotalPrice - discountAmount);
  const earnedPoints = Math.floor(totalPrice / 10);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        addMultipleToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        totalItems,
        subtotalPrice,
        totalPrice,
        discountAmount,
        earnedPoints,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

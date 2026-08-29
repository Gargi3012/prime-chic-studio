import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { inr } from "@/data/catalog";

export function CartDrawer() {
  const {
    cart,
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
  } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [orderType, setOrderType] = useState<"TRY_ON" | "HOME_DELIVERY">("TRY_ON");
  const [promoCodeInput, setPromoCodeInput] = useState("");
  const [couponMessage, setCouponMessage] = useState<{ success: boolean; text: string } | null>(null);

  const handleApplyPromo = () => {
    if (!promoCodeInput.trim()) return;
    const res = applyCoupon(promoCodeInput);
    setCouponMessage({ success: res.success, text: res.message });
    if (res.success) {
      setPromoCodeInput("");
    }
  };

  // Direct WhatsApp Chat (general inquiry)
  const handleDirectChat = () => {
    const message = "Hi Prime Outlet! I'm browsing your online collection and have a question.";
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Place Formatted Order on WhatsApp
  const handlePlaceOrder = () => {
    if (cart.length === 0) return;

    let itemsList = cart
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.product.name}* (${item.product.brand})\n   Color: ${item.selectedColor} | Size: ${item.selectedSize}\n   Qty: ${item.quantity} x ${inr(item.product.price)} = ${inr(item.product.price * item.quantity)}`
      )
      .join("\n\n");

    const couponLine = appliedCoupon
      ? `\n*Coupon Applied:* ${appliedCoupon.code} (-${inr(discountAmount)})`
      : "";

    const message = `🛍️ *NEW ORDER REQUEST — PRIME OUTLET*

*Customer Name:* ${customerName ? customerName : "Store Visitor"}
*Order Type:* ${orderType === "TRY_ON" ? "In-Store Try-On Reservation (Ganaur)" : "Home Delivery Request"}

*ITEMS:*
${itemsList}${couponLine}

*SUBTOTAL:* ${inr(subtotalPrice)}
*DISCOUNT:* ${discountAmount > 0 ? `-${inr(discountAmount)}` : "₹0"}
*FINAL AMOUNT:* ${inr(totalPrice)}
*POINTS EARNED:* +${earnedPoints} Gold Points

Please confirm item availability and store timing!`;

    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  // Tier Calculation
  const tierName = totalPrice >= 20000 ? "Platinum VIP Elite 👑" : totalPrice >= 10000 ? "Gold Member ✨" : "Silver Member 🥈";
  const tierProgress = Math.min(100, Math.round((totalPrice / 20000) * 100));

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full max-w-md flex-col justify-between border-l border-gold/40 bg-black/95 p-5 shadow-2xl sm:p-6"
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border border-gold/40 bg-gold/10 text-gold">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-foreground">YOUR SHOPPING BAG</h2>
                    <p className="text-[0.65rem] font-bold tracking-[0.15em] text-gold uppercase">
                      {totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"} SELECTED
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close Bag"
                  className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* VIP Loyalty Tier Badge */}
              {cart.length > 0 && (
                <div className="mt-3 rounded-xl border border-gold/30 bg-surface/80 p-2.5 text-xs">
                  <div className="flex justify-between font-bold text-gold">
                    <span>VIP Tier Status:</span>
                    <span>{tierName}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-black/60 overflow-hidden">
                    <div
                      className="h-full bg-gold-gradient transition-all duration-500"
                      style={{ width: `${tierProgress}%` }}
                    />
                  </div>
                  <div className="mt-1 flex justify-between text-[0.6rem] text-muted-foreground">
                    <span>+ {earnedPoints} Gold Points Earned</span>
                    <span>Goal: Platinum VIP (₹20,000)</span>
                  </div>
                </div>
              )}

              {/* Cart Item List */}
              <div className="no-scrollbar mt-4 max-h-[35vh] space-y-3 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <ShoppingBag className="h-12 w-12 text-muted-foreground/40" />
                    <p className="mt-3 text-sm font-semibold text-muted-foreground">Your bag is currently empty.</p>
                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="mt-4 rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-xs font-bold text-gold transition-colors hover:bg-gold hover:text-black"
                    >
                      EXPLORE COLLECTION
                    </button>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                      className="flex gap-3 rounded-2xl border border-border/80 bg-surface-2/60 p-3"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-20 w-16 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-[0.55rem] font-bold tracking-[0.2em] text-gold uppercase">
                                {item.product.brand}
                              </p>
                              <h4 className="truncate text-xs font-bold text-foreground sm:text-sm">
                                {item.product.name}
                              </h4>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart(index)}
                              aria-label="Remove item"
                              className="text-muted-foreground transition-colors hover:text-rose-400"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          <p className="mt-1 text-[0.65rem] font-semibold text-muted-foreground">
                            Color: <span className="text-foreground font-bold">{item.selectedColor}</span> | Size:{" "}
                            <span className="text-foreground font-bold">{item.selectedSize}</span>
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <p className="text-xs font-extrabold text-gold">{inr(item.product.price * item.quantity)}</p>

                          {/* Quantity Controls */}
                          <div className="flex items-center rounded-lg border border-border bg-surface px-1.5 py-0.5">
                            <button
                              type="button"
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              className="p-1 text-muted-foreground hover:text-foreground"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-2 text-xs font-bold">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="p-1 text-muted-foreground hover:text-foreground"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Drawer Footer & Promo Code & WhatsApp Ordering Options */}
            {cart.length > 0 && (
              <div className="border-t border-border/80 pt-3 space-y-3">
                
                {/* Promo Code Input Box */}
                <div className="rounded-xl border border-border/60 bg-surface/70 p-2.5 space-y-2">
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between text-xs font-semibold text-emerald-400">
                      <span>🎟️ {appliedCoupon.description}</span>
                      <button
                        onClick={removeCoupon}
                        className="text-[0.65rem] text-rose-400 hover:underline font-bold"
                      >
                        REMOVE
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <input
                        type="text"
                        placeholder="Promo Code (e.g. SPIN10)"
                        value={promoCodeInput}
                        onChange={(e) => setPromoCodeInput(e.target.value)}
                        className="flex-1 rounded-lg border border-border bg-black/60 px-2.5 py-1.5 text-xs text-foreground focus:border-gold focus:outline-none"
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="rounded-lg bg-gold px-3 py-1.5 text-xs font-bold text-black hover:bg-gold/90"
                      >
                        APPLY
                      </button>
                    </div>
                  )}

                  {couponMessage && !appliedCoupon && (
                    <p
                      className={`text-[0.65rem] font-bold ${
                        couponMessage.success ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {couponMessage.text}
                    </p>
                  )}
                </div>

                {/* Customer Details & Pickup Options */}
                <div className="space-y-2">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full rounded-xl border border-border bg-surface-2 px-3 py-1.5 text-xs text-foreground focus:border-gold focus:outline-none"
                  />

                  <div className="grid grid-cols-2 gap-2 text-[0.65rem] font-bold">
                    <button
                      type="button"
                      onClick={() => setOrderType("TRY_ON")}
                      className={`flex items-center justify-center gap-1 rounded-lg border p-1.5 ${
                        orderType === "TRY_ON"
                          ? "border-gold bg-gold/20 text-gold"
                          : "border-border bg-surface-2 text-muted-foreground"
                      }`}
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      In-Store Try-On
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType("HOME_DELIVERY")}
                      className={`flex items-center justify-center gap-1 rounded-lg border p-1.5 ${
                        orderType === "HOME_DELIVERY"
                          ? "border-gold bg-gold/20 text-gold"
                          : "border-border bg-surface-2 text-muted-foreground"
                      }`}
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      Home Delivery
                    </button>
                  </div>
                </div>

                {/* Subtotal & Discount Breakdown */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal:</span>
                    <span>{inr(subtotalPrice)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-400 font-bold">
                      <span>Discount ({appliedCoupon?.code}):</span>
                      <span>-{inr(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm font-extrabold text-foreground pt-1 border-t border-border/40">
                    <span>FINAL TOTAL</span>
                    <span className="text-lg text-gold">{inr(totalPrice)}</span>
                  </div>
                </div>

                {/* Dual Action Buttons */}
                <div className="space-y-2">
                  {/* Button 1: Place Order on WhatsApp */}
                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className="glow-gold flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-4 py-2.5 text-xs font-bold tracking-[0.12em] text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95 sm:text-sm"
                  >
                    <Send className="h-4 w-4" />
                    PLACE ORDER ON WHATSAPP
                  </button>

                  {/* Button 2: Direct WhatsApp Chat */}
                  <button
                    type="button"
                    onClick={handleDirectChat}
                    className="flex min-h-[40px] w-full items-center justify-center gap-2 rounded-full border border-gold/60 bg-black/40 px-4 py-2 text-xs font-bold tracking-[0.12em] text-gold transition-colors hover:bg-gold/10 active:scale-95"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-400" />
                    DIRECT WHATSAPP CHAT
                  </button>
                </div>

              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

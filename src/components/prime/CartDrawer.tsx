import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag, Plus, Minus, Trash2, MessageCircle, Send, CheckCircle2, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { inr } from "@/data/catalog";

export function CartDrawer() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
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

  const handleDirectChat = () => {
    const message = "Hi Prime Outlet! I'm browsing your online collection and have a question.";
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

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

  const tierName = totalPrice >= 20000 ? "Platinum VIP 👑" : totalPrice >= 10000 ? "Gold Member ✨" : "Silver Member 🥈";
  const tierProgress = Math.min(100, Math.round((totalPrice / 20000) * 100));

  return (
    <AnimatePresence>
      {isCartOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full max-w-md flex-col justify-between border-l border-black/[0.08] bg-white p-5 shadow-2xl sm:p-6"
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between border-b border-black/[0.06] pb-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#FAF9F6] border border-black/[0.06] text-[#C59B27]">
                    <ShoppingBag className="h-4.5 w-4.5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-extrabold text-[#18181B] tracking-tight">SHOPPING BAG</h2>
                    <p className="text-[0.62rem] font-bold tracking-wider text-[#C59B27] uppercase">
                      {totalItems} {totalItems === 1 ? "ITEM" : "ITEMS"} SELECTED
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  aria-label="Close Bag"
                  className="grid h-8 w-8 place-items-center rounded-full border border-black/[0.08] bg-[#FAF9F6] text-[#18181B] transition-transform hover:scale-105"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Loyalty Tier Progress */}
              {cart.length > 0 && (
                <div className="mt-3 rounded-2xl border border-[#C59B27]/25 bg-[#FAF9F6] p-2.5 text-xs">
                  <div className="flex justify-between font-bold text-[#18181B]">
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-[#C59B27]" />
                      Loyalty Tier:
                    </span>
                    <span className="text-[#C59B27]">{tierName}</span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full rounded-full bg-black/10 overflow-hidden">
                    <div
                      className="h-full bg-gold-gradient transition-all duration-500"
                      style={{ width: `${tierProgress}%` }}
                    />
                  </div>
                  <div className="mt-1 flex justify-between text-[0.6rem] text-[#71717A]">
                    <span>+{earnedPoints} Gold Points</span>
                    <span>Goal: Platinum VIP (₹20k)</span>
                  </div>
                </div>
              )}

              {/* Cart Items */}
              <div className="no-scrollbar mt-3 max-h-[36vh] space-y-2.5 overflow-y-auto pr-1">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <ShoppingBag className="h-10 w-10 text-neutral-300" />
                    <p className="mt-2 text-xs font-semibold text-[#71717A]">Your shopping bag is empty.</p>
                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="mt-3 rounded-full border border-[#C59B27]/40 bg-[#FAF9F6] px-4 py-1.5 text-xs font-bold text-[#18181B] hover:border-[#C59B27]"
                    >
                      BROWSE DROPS
                    </button>
                  </div>
                ) : (
                  cart.map((item, index) => (
                    <div
                      key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                      className="flex gap-3 rounded-2xl border border-black/[0.06] bg-[#FAF9F6] p-2.5"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-16 w-14 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-[0.55rem] font-bold tracking-wider text-[#C59B27] uppercase">
                                {item.product.brand}
                              </p>
                              <h4 className="truncate text-xs font-bold text-[#18181B]">
                                {item.product.name}
                              </h4>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart(index)}
                              aria-label="Remove item"
                              className="text-[#71717A] transition-colors hover:text-[#800020]"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          <p className="text-[0.62rem] font-medium text-[#71717A]">
                            Color: <span className="text-[#18181B] font-bold">{item.selectedColor}</span> · Size:{" "}
                            <span className="text-[#18181B] font-bold">{item.selectedSize}</span>
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                          <p className="text-xs font-extrabold text-[#18181B]">{inr(item.product.price * item.quantity)}</p>

                          <div className="flex items-center rounded-lg border border-black/[0.08] bg-white px-1.5 py-0.5">
                            <button
                              type="button"
                              onClick={() => updateQuantity(index, item.quantity - 1)}
                              className="p-0.5 text-[#71717A] hover:text-[#18181B]"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="px-2 text-xs font-bold text-[#18181B]">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(index, item.quantity + 1)}
                              className="p-0.5 text-[#71717A] hover:text-[#18181B]"
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

            {/* Bottom Checkout Controls */}
            {cart.length > 0 && (
              <div className="border-t border-black/[0.06] pt-3 space-y-2.5">
                {/* Coupon Code */}
                <div className="rounded-xl border border-black/[0.06] bg-[#FAF9F6] p-2 space-y-1.5">
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between text-xs font-bold text-[#800020]">
                      <span>🎟️ {appliedCoupon.description}</span>
                      <button
                        onClick={removeCoupon}
                        className="text-[0.62rem] text-[#800020] hover:underline"
                      >
                        REMOVE
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <input
                        type="text"
                        placeholder="Promo Code (e.g. LUXURY10)"
                        value={promoCodeInput}
                        onChange={(e) => setPromoCodeInput(e.target.value)}
                        className="flex-1 rounded-lg border border-black/[0.08] bg-white px-2.5 py-1.5 text-xs text-[#18181B] focus:border-[#C59B27] focus:outline-none"
                      />
                      <button
                        onClick={handleApplyPromo}
                        className="rounded-lg bg-[#C59B27] px-3 py-1.5 text-xs font-bold text-white hover:bg-[#B8860B]"
                      >
                        APPLY
                      </button>
                    </div>
                  )}

                  {couponMessage && !appliedCoupon && (
                    <p
                      className={`text-[0.62rem] font-bold ${
                        couponMessage.success ? "text-[#8C6D1F]" : "text-[#800020]"
                      }`}
                    >
                      {couponMessage.text}
                    </p>
                  )}
                </div>

                {/* Reservation / Delivery Mode */}
                <div className="space-y-1.5">
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full rounded-xl border border-black/[0.08] bg-[#FAF9F6] px-3 py-1.5 text-xs text-[#18181B] focus:border-[#C59B27] focus:outline-none"
                  />

                  <div className="grid grid-cols-2 gap-2 text-[0.62rem] font-bold">
                    <button
                      type="button"
                      onClick={() => setOrderType("TRY_ON")}
                      className={`flex items-center justify-center gap-1 rounded-lg border p-1.5 ${
                        orderType === "TRY_ON"
                          ? "border-[#C59B27] bg-[#C59B27]/10 text-[#C59B27]"
                          : "border-black/[0.06] bg-[#FAF9F6] text-[#71717A]"
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
                          ? "border-[#C59B27] bg-[#C59B27]/10 text-[#C59B27]"
                          : "border-black/[0.06] bg-[#FAF9F6] text-[#71717A]"
                      }`}
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      Home Delivery
                    </button>
                  </div>
                </div>

                {/* Subtotal & Final */}
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-[#71717A]">
                    <span>Subtotal:</span>
                    <span>{inr(subtotalPrice)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#800020] font-bold">
                      <span>Discount ({appliedCoupon?.code}):</span>
                      <span>-{inr(discountAmount)}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm font-extrabold text-[#18181B] pt-1 border-t border-black/[0.06]">
                    <span>FINAL TOTAL</span>
                    <span className="text-base text-[#18181B]">{inr(totalPrice)}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={handlePlaceOrder}
                    className="glow-gold flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-4 py-2.5 text-xs font-bold tracking-wider text-white shadow-md transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    <Send className="h-3.5 w-3.5" />
                    CONFIRM ORDER ON WHATSAPP
                  </button>

                  <button
                    type="button"
                    onClick={handleDirectChat}
                    className="flex min-h-[38px] w-full items-center justify-center gap-2 rounded-full border border-black/[0.08] bg-[#FAF9F6] px-4 py-2 text-xs font-bold tracking-wider text-[#18181B] transition-colors hover:border-[#C59B27] active:scale-95"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-[#C59B27]" />
                    QUICK WHATSAPP INQUIRY
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

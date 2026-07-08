export const PRODUCT_CATEGORIES = [
  {
    id: "calling-cards",
    name: "Calling Cards",
    description: "Professional business cards for your brand",
  },
  {
    id: "flyers",
    name: "Flyers",
    description: "Eye-catching promotional flyers",
  },
  {
    id: "brochures",
    name: "Brochures",
    description: "Multi-page marketing brochures",
  },
  {
    id: "posters",
    name: "Posters",
    description: "Large format posters for maximum impact",
  },
  {
    id: "stickers",
    name: "Stickers",
    description: "Custom stickers for branding",
  },
  {
    id: "banners",
    name: "Banners",
    description: "Display banners in various sizes",
  },
  {
    id: "invitations",
    name: "Invitations",
    description: "Event invitations and announcements",
  },
  {
    id: "certificates",
    name: "Certificates",
    description: "Professional certificates and awards",
  },
  {
    id: "tshirts",
    name: "T-Shirts",
    description: "Custom printed t-shirts",
  },
  {
    id: "mugs",
    name: "Mugs",
    description: "Personalized coffee mugs",
  },
] as const;

export const PAPER_TYPES = [
  { name: "Glossy", priceModifier: 0 },
  { name: "Matte", priceModifier: 0.05 },
  { name: "Cardstock", priceModifier: 0.1 },
  { name: "Textured", priceModifier: 0.08 },
  { name: "Linen", priceModifier: 0.15 },
] as const;

export const FINISHES = [
  { name: "Standard", priceModifier: 0 },
  { name: "Glossy Finish", priceModifier: 0.05 },
  { name: "Matte Finish", priceModifier: 0.05 },
  { name: "Embossed", priceModifier: 0.2 },
  { name: "Foil Stamping", priceModifier: 0.3 },
  { name: "UV Coating", priceModifier: 0.1 },
] as const;

export const DELIVERY_METHODS = [
  { id: "delivery", label: "Delivery", description: "Standard delivery to your address" },
  { id: "pickup", label: "Pickup", description: "Pick up from our store" },
] as const;

export const PAYMENT_METHODS = [
  { id: "stripe", label: "Credit/Debit Card", icon: "💳" },
  { id: "bank_transfer", label: "Bank Transfer", icon: "🏦" },
  { id: "cash_on_pickup", label: "Cash on Pickup", icon: "💵" },
] as const;

export const ORDER_STATUSES = [
  { value: "PENDING", label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  { value: "PAYMENT_PENDING", label: "Payment Pending", color: "bg-blue-100 text-blue-800" },
  { value: "ARTWORK_REVIEW", label: "Artwork Review", color: "bg-purple-100 text-purple-800" },
  { value: "PRINTING", label: "Printing", color: "bg-indigo-100 text-indigo-800" },
  { value: "QUALITY_CHECK", label: "Quality Check", color: "bg-pink-100 text-pink-800" },
  { value: "READY_FOR_PICKUP", label: "Ready for Pickup", color: "bg-green-100 text-green-800" },
  { value: "OUT_FOR_DELIVERY", label: "Out for Delivery", color: "bg-cyan-100 text-cyan-800" },
  { value: "COMPLETED", label: "Completed", color: "bg-emerald-100 text-emerald-800" },
  { value: "CANCELLED", label: "Cancelled", color: "bg-red-100 text-red-800" },
] as const;

export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "application/postscript",
  "application/vnd.adobe.illustrator",
  "image/vnd.adobe.photoshop",
];

export const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

export const SITE_CONFIG = {
  name: "PrintPro",
  description: "Premium printing services for your business",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/printpro",
    github: "https://github.com/printpro",
  },
};

import type { NextAuthOptions } from "next-auth";

export type UserRole = "CUSTOMER" | "ADMIN" | "SUPER_ADMIN";

export interface UserSession {
  id: string;
  email: string | null;
  name: string | null;
  image: string | null;
  role: UserRole;
}

export interface CreateUserInput {
  email: string;
  password: string;
  name: string;
}

export interface LoginUserInput {
  email: string;
  password: string;
}

export interface ProductInput {
  name: string;
  slug: string;
  description?: string;
  categoryId: string;
  basePrice: number;
  image: string;
  images: string[];
  inStock: boolean;
  featured: boolean;
}

export interface CartItem {
  id: string;
  productId: string;
  variantId?: string;
  quantity: number;
  isDoubleSided: boolean;
  isFullColor: boolean;
  specialInstructions?: string;
  uploadedFileId?: string;
}

export interface OrderInput {
  shippingAddressId: string;
  deliveryMethod: "DELIVERY" | "PICKUP";
  pickupLocation?: string;
  paymentMethod: "STRIPE" | "BANK_TRANSFER" | "CASH_ON_PICKUP";
  couponCode?: string;
  customerNotes?: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

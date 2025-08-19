import { Injectable, signal } from '@angular/core';
import { CartItem, MenuItem } from '../models/menu-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  cartItems = signal<CartItem[]>([]);

  addItem(menuItem: MenuItem) {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find(item => item.id === menuItem.id);
    
    if (existingItem) {
      existingItem.quantity++;
      this.cartItems.set([...currentItems]);
    } else {
      const cartItem: CartItem = { ...menuItem, quantity: 1 };
      this.cartItems.set([...currentItems, cartItem]);
    }
  }

  removeItem(id: number) {
    this.cartItems.set(this.cartItems().filter(item => item.id !== id));
  }

  updateQuantity(id: number, quantity: number) {
    const items = this.cartItems().map(item => 
      item.id === id ? { ...item, quantity } : item
    );
    this.cartItems.set(items);
  }

  getTotal(): number {
    return this.cartItems().reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getItemCount(): number {
    return this.cartItems().reduce((total, item) => total + item.quantity, 0);
  }

  clearCart() {
    this.cartItems.set([]);
  }
}
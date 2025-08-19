import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../../components/cart-item/cart-item';

@Component({
  selector: 'app-cart',
  imports: [CommonModule,RouterLink,CartItemComponent],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {
  constructor(public cartService: CartService) {}

  trackByItemId(index: number, item: any): number {
    return item.id;
  }

  updateQuantity(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
  }

  removeItem(id: number) {
    this.cartService.removeItem(id);
  }

  clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
      this.cartService.clearCart();
    }
  }

  getTotalWithFees(): number {
    const subtotal = this.cartService.getTotal();
    const deliveryFee = subtotal >= 25 ? 0 : 2.99;
    const tax = subtotal * 0.1;
    return subtotal + deliveryFee + tax;
  }

  checkout() {
    alert('Redirecting to checkout... 🛒✨');
    // Implement checkout logic here
  }
}

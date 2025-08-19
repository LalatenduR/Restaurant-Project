import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-item.html',
  styleUrls: ['./cart-item.css']
})
export class CartItemComponent {
  @Input({ required: true }) item!: CartItem;
  @Output() quantityChange = new EventEmitter<{ id: number; quantity: number }>();
  @Output() removeItem = new EventEmitter<number>();

  increaseQuantity() {
    this.quantityChange.emit({ id: this.item.id, quantity: this.item.quantity + 1 });
  }

  decreaseQuantity() {
    if (this.item.quantity > 1) {
      this.quantityChange.emit({ id: this.item.id, quantity: this.item.quantity - 1 });
    }
  }

  removeFromCart() {
    this.removeItem.emit(this.item.id);
  }
}

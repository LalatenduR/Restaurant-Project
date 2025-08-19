import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  constructor(public cartService: CartService) {}
}

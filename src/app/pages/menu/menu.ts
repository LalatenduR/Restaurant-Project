import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuCard } from '../../components/menu-card/menu-card';
import { CartService } from '../../services/cart.service';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu-item.model';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, MenuCard],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {
  categories = [
    { value: 'all', label: 'All Items', icon: '🍽️' },
    { value: 'appetizer', label: 'Appetizers', icon: '🥗' },
    { value: 'main', label: 'Main Course', icon: '🍝' },
    { value: 'dessert', label: 'Desserts', icon: '🍰' },
    { value: 'beverage', label: 'Beverages', icon: '🥤' }
  ];

  menuItems: MenuItem[] = [];
  selectedCategory: string = 'all';

  constructor(
    private cartService: CartService,
    public menuService: MenuService // <-- make public
  ) {}

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredItems(): MenuItem[] {
    if (this.selectedCategory === 'all') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  addToCart(item: MenuItem) {
    this.cartService.addItem(item);
    // Optional: Show toast notification
  }
}
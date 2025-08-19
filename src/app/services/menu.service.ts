import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item.model';

@Injectable({ providedIn: 'root' })
export class MenuService {
  private menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Margherita Pizza',
      image: 'margherita.jpg',
      isVegetarian: true,
      isSpicy: false,
      category: 'main',
      price: 299,
      description: 'Classic delight with 100% real mozzarella cheese.',
      rating: 4.5,
      prepTime: '20 min'
    },
    {
      id: 2,
      name: 'Paneer Tikka',
      image: 'paneer-tikka.jpg',
      isVegetarian: true,
      isSpicy: true,
      category: 'appetizer',
      price: 199,
      description: 'Chunks of paneer marinated in spicy masala and grilled to perfection.',
      rating: 4.7,
      prepTime: '15 min'
    },
    {
      id: 3,
      name: 'Chicken Biryani',
      image: 'chicken-biryani.jpg',
      isVegetarian: false,
      isSpicy: true,
      category: 'main',
      price: 349,
      description: 'Aromatic basmati rice cooked with tender chicken and spices.',
      rating: 4.8,
      prepTime: '30 min'
    },
    {
      id: 4,
      name: 'Veg Spring Rolls',
      image: 'spring-rolls.jpg',
      isVegetarian: true,
      isSpicy: false,
      category: 'appetizer',
      price: 149,
      description: 'Crispy rolls stuffed with fresh vegetables.',
      rating: 4.3,
      prepTime: '10 min'
    },
    {
      id: 5,
      name: 'Butter Chicken',
      image: 'butter-chicken.jpg',
      isVegetarian: false,
      isSpicy: false,
      category: 'main',
      price: 399,
      description: 'Creamy tomato-based curry with tender chicken pieces.',
      rating: 4.9,
      prepTime: '25 min'
    },
    {
      id: 6,
      name: 'Chocolate Lava Cake',
      image: 'lava-cake.jpg',
      isVegetarian: true,
      isSpicy: false,
      category: 'dessert',
      price: 179,
      description: 'Warm chocolate cake with a gooey molten center.',
      rating: 4.8,
      prepTime: '12 min'
    },
    {
      id: 7,
      name: 'Caesar Salad',
      image: 'caesar-salad.jpg',
      isVegetarian: true,
      isSpicy: false,
      category: 'appetizer',
      price: 169,
      description: 'Fresh lettuce, parmesan, and croutons tossed in Caesar dressing.',
      rating: 4.4,
      prepTime: '8 min'
    },
    {
      id: 8,
      name: 'Mango Lassi',
      image: 'mango-lassi.jpg',
      isVegetarian: true,
      isSpicy: false,
      category: 'beverage',
      price: 99,
      description: 'Refreshing yogurt-based mango drink.',
      rating: 4.6,
      prepTime: '5 min'
    },
    {
      id: 9,
      name: 'Tandoori Chicken',
      image: 'tandoori-chicken.jpg',
      isVegetarian: false,
      isSpicy: true,
      category: 'main',
      price: 329,
      description: 'Chicken marinated in spices and roasted in a tandoor.',
      rating: 4.7,
      prepTime: '22 min'
    },
    {
      id: 10,
      name: 'Gulab Jamun',
      image: 'gulab-jamun.jpg',
      isVegetarian: true,
      isSpicy: false,
      category: 'dessert',
      price: 129,
      description: 'Soft milk-solid balls soaked in rose-flavored syrup.',
      rating: 4.9,
      prepTime: '10 min'
    }
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}
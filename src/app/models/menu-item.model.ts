export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'appetizer' | 'main' | 'dessert' | 'beverage';
  isVegetarian?: boolean;
  isSpicy?: boolean;
  rating: number;
  prepTime: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
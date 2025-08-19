import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-card',
  imports: [CommonModule],
  templateUrl: './menu-card.html',
  styleUrls: ['./menu-card.css']
})
export class MenuCard {
  @Input() item!: MenuItem;
  @Output() addToCart = new EventEmitter<MenuItem>();
}
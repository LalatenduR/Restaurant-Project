import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Menu,Footer,Navbar,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('RestroApp');
  
}

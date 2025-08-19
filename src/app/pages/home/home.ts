import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [CommonModule,Navbar,Footer,RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})

export class Home {}

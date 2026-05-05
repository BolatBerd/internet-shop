import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { CategoriesComponent } from './categories/categories.component';
import { WorksComponent } from './works/works.component';
import { AboutComponent } from './about/about.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AdvantagesComponent,
    CategoriesComponent,
    WorksComponent,
    AboutComponent,
    ReviewsComponent,
    ContactFormComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

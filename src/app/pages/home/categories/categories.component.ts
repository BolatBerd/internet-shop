import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Category } from '../../../core/models';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, CardComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  private dataService = inject(DataService);
  categories: Category[] = this.dataService.getCategories();
}

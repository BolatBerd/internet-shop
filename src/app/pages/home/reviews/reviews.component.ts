import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { Review } from '../../../core/models';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {
  private dataService = inject(DataService);
  reviews: Review[] = this.dataService.getReviews();
}



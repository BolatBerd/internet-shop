import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent {
  private dataService = inject(DataService);
  works: string[] = this.dataService.getWorks();
}



import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { CardComponent } from '../../../shared/components/card/card.component';
import { Advantage } from '../../../core/models';
import { DataService } from '../../../core/services/data.service';

@Component({
  selector: 'app-advantages',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent, CardComponent],
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss'
})
export class AdvantagesComponent {
  private dataService = inject(DataService);
  advantages: Advantage[] = this.dataService.getAdvantages();
}

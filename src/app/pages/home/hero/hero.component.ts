import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslatePipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {}

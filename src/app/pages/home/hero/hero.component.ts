import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { FloatingContactComponent } from '../../../shared/components/floating-contact/floating-contact.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ButtonComponent, TranslatePipe, FloatingContactComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  @ViewChild(FloatingContactComponent)
  floatingContact?: FloatingContactComponent;

  openFloatingContact(): void {
    this.floatingContact?.openModal();
  }

}

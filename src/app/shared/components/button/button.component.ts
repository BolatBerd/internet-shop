import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatingContactComponent } from '../floating-contact/floating-contact.component';


@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text = '';
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled = false;
  // @Output() clickOpenModal = new EventEmitter<void>();

  // openModal(): void {
  //   this.clickOpenModal.emit();
  // }
}




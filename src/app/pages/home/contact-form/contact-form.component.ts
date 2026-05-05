import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { TranslatePipe } from '../../../core/i18n/translate.pipe';
import { Contact } from '../../../core/models';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule, SectionTitleComponent, ButtonComponent, TranslatePipe],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contact: Contact = {
    name: '',
    phone: ''
  };

  onSubmit() {
    console.log('Contact form submitted:', this.contact);
    // Handle form submission
  }
}

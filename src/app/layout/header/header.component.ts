import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TranslatePipe } from '../../core/i18n/translate.pipe';
import { TranslationService } from '../../core/i18n/translation.service';
import { Language } from '../../core/i18n/language.types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, AsyncPipe, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLanguage$!: Observable<Language>;

  constructor(private translationService: TranslationService) {
    this.currentLanguage$ = this.translationService.currentLanguage$;
  }

  changeLanguage(language: Language): void {
    this.translationService.switchLanguage(language);
  }
}

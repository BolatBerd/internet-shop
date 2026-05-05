import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from './language.types';
import enTranslations from './translations/en.json';
import ruTranslations from './translations/ru.json';

type Translations = Record<string, string>;

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly fallbackTranslations: Translations = ruTranslations;
  private readonly translationStore: Record<Language, Translations> = {
    en: enTranslations,
    ru: ruTranslations
  };

  private currentLanguageSubject = new BehaviorSubject<Language>('ru');
  currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: Translations = this.fallbackTranslations;

  constructor() {
    const savedLanguage = this.getSavedLanguage();
    this.loadTranslations(savedLanguage);
    this.currentLanguageSubject.next(savedLanguage);
  }

  loadTranslations(language: Language): void {
    this.translations = this.translationStore[language] ?? this.fallbackTranslations;
  }

  switchLanguage(language: Language): void {
    if (language === this.currentLanguageSubject.value) {
      return;
    }

    this.loadTranslations(language);
    localStorage.setItem('app-language', language);
    this.currentLanguageSubject.next(language);
  }

  translate(key: string): string {
    if (!key) {
      return '';
    }

    return this.translations[key] ?? this.fallbackTranslations[key] ?? key;
  }

  private getSavedLanguage(): Language {
    const stored = localStorage.getItem('app-language');
    return stored === 'en' ? 'en' : 'ru';
  }
}

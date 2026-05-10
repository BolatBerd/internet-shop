import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionTitleComponent } from '../../../shared/components/section-title/section-title.component';
import { ICardAdvantages } from '../interfaces/ICard-advantages';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, SectionTitleComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories: ICardAdvantages[] = [
    {
      id: 1,
      image: '/assets/images/1-1.jpg',
      img_replace: 'advantages_ALL',
      title: 'Бесплатная доставка',
      description: 'Мы доставляем мебель по всей России бесплатно. Независимо от размера заказа, мы обеспечиваем быструю и надежную доставку прямо к вашей двери.'
    },
    {
      id: 2,
      image: '/assets/images/2-1.jpg',
      img_replace: 'advantages_ALL',
      title: 'Гарантия качества',
      description: 'Мы гарантируем высокое качество нашей мебели. Все изделия проходят строгий контроль качества, чтобы обеспечить долговечность и удовлетворение наших клиентов.'
    },
    {
      id: 3,
      image: '/assets/images/3-1.jpg',
      img_replace: 'advantages_ALL',
      title: 'Индивидуальный подход',
      description: 'Мы ценим каждого клиента и предлагаем индивидуальный подход к каждому заказу. Наши специалисты помогут вам выбрать идеальную мебель, учитывая ваши предпочтения и потребности.'
    },
    {
      id: 4,
      image: '/assets/images/3-2.jpg',
      img_replace: 'advantages_ALL',
      title: 'Гибкие условия оплаты',
      description: 'Мы предлагаем гибкие условия оплаты, чтобы сделать покупку максимально удобной для вас. Вы можете выбрать наиболее подходящий способ оплаты и оформить заказ без лишних хлопот.'
    },
    {
      id: 5,
      image: '/assets/images/1-2.jpg',
      img_replace: 'advantages_ALL',
      title: 'Профессиональная консультация',
      description: 'Наши эксперты всегда готовы предоставить профессиональную консультацию по выбору мебели. Мы поможем вам сделать правильный выбор, учитывая стиль, функциональность и бюджет.'
    },
    {
      id: 6,
      image: './assets/images/2-2.jpg',
      img_replace: 'advantages_ALL',
      title: 'Экологически чистые материалы',
      description: 'Мы используем только экологически чистые материалы в производстве нашей мебели. Это гарантирует безопасность для вас и вашей семьи, а также заботу о окружающей среде.'
    }
  ];

currentIndex = 0;
cardWidth = 344; // 320px карточка + 24px gap

// nextSlide(): void {
//   if (this.currentIndex < this.categories.length - 1) {
//     this.currentIndex++;
//   }
// }

// prevSlide(): void {
//   if (this.currentIndex > 0) {
//     this.currentIndex--;
//   }
// }
  nextSlide(): void {

  const firstItem = this.categories.shift();

  if (firstItem) {
    this.categories.push(firstItem);
  }

}

prevSlide(): void {

  const lastItem = this.categories.pop();

  if (lastItem) {
    this.categories.unshift(lastItem);
  }

}

}

import { Injectable } from '@angular/core';
import { Advantage, Category, Review } from '../models';
import { ICardAdvantages } from '../../pages/home/interfaces/ICard-advantages';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getAdvantages(): Advantage[] {
    return [
      {
        title: 'Quality Materials',
        description: 'We use only the finest woods and materials to ensure durability and longevity.'
      },
      {
        title: 'Custom Design',
        description: 'Personalized furniture solutions tailored to your unique style and needs.'
      },
      {
        title: 'Expert Craftsmanship',
        description: 'Our skilled artisans bring decades of experience to every piece.'
      },
      {
        title: 'Sustainable Practices',
        description: 'Eco-friendly materials and production methods for a better tomorrow.'
      }
    ];
  }

  getCategories(): ICardAdvantages[] {
    return [
    //   {
    //     title: 'Living Room',
    //     description: 'Comfortable sofas, chairs, and entertainment centers',
    //     image: 'https://via.placeholder.com/300x200?text=Living+Room'
    //   },
    //   {
    //     title: 'Bedroom',
    //     description: 'Elegant beds, dressers, and nightstands',
    //     image: 'https://via.placeholder.com/300x200?text=Bedroom'
    //   },
    //   {
    //     title: 'Dining Room',
    //     description: 'Beautiful dining tables and chairs for family gatherings',
    //     image: 'https://via.placeholder.com/300x200?text=Dining+Room'
    //   },
    //   {
    //     title: 'Office',
    //     description: 'Functional desks and chairs for productive workspaces',
    //     image: 'https://via.placeholder.com/300x200?text=Office'
    //   }
    // ];

    // cards: ICardAdvantages[] = [
      {
        id: 1,
        image: '/assets/images/1-1.png',
        img_replace: 'advantages_ALL',
        title: 'Бесплатная доставка',
        description: 'Мы доставляем мебель по всей России бесплатно. Независимо от размера заказа, мы обеспечиваем быструю и надежную доставку прямо к вашей двери.'
      },
      {
        id: 2,
        image: '/assets/images/2-1.png',
        img_replace: 'advantages_ALL',
        title: 'Гарантия качества',
        description: 'Мы гарантируем высокое качество нашей мебели. Все изделия проходят строгий контроль качества, чтобы обеспечить долговечность и удовлетворение наших клиентов.'
      },
      {
        id: 3,
        image: '/assets/images/3-1.png',
        img_replace: 'advantages_ALL',
        title: 'Индивидуальный подход',
        description: 'Мы ценим каждого клиента и предлагаем индивидуальный подход к каждому заказу. Наши специалисты помогут вам выбрать идеальную мебель, учитывая ваши предпочтения и потребности.'
      },
      {
        id: 4,
        image: '/assets/images/3-2.png',
        img_replace: 'advantages_ALL',
        title: 'Гибкие условия оплаты',
        description: 'Мы предлагаем гибкие условия оплаты, чтобы сделать покупку максимально удобной для вас. Вы можете выбрать наиболее подходящий способ оплаты и оформить заказ без лишних хлопот.'
      },
      {
        id: 5,
        image: '/assets/images/1-2.png',
        img_replace: 'advantages_ALL',
        title: 'Профессиональная консультация',
        description: 'Наши эксперты всегда готовы предоставить профессиональную консультацию по выбору мебели. Мы поможем вам сделать правильный выбор, учитывая стиль, функциональность и бюджет.'
      },
      {
        id: 6,
        image: '/assets/images/2-2.png',
        img_replace: 'advantages_ALL',
        title: 'Экологически чистые материалы',
        description: 'Мы используем только экологически чистые материалы в производстве нашей мебели. Это гарантирует безопасность для вас и вашей семьи, а также заботу о окружающей среде.'
      }
    ];
  }

  getReviews(): Review[] {
    return [
      {
        name: 'Sarah Johnson',
        text: 'Absolutely love my new dining set! The quality is outstanding and it fits perfectly in our home.',
        rating: 5
      },
      {
        name: 'Mike Chen',
        text: 'Great customer service and beautiful craftsmanship. Highly recommend this furniture store.',
        rating: 5
      },
      {
        name: 'Emily Davis',
        text: 'The bedroom furniture I purchased exceeded my expectations. Comfortable and stylish!',
        rating: 5
      }
    ];
  }

  getWorks(): string[] {
    return [
      'https://via.placeholder.com/400x300?text=Work+1',
      'https://via.placeholder.com/400x300?text=Work+2',
      'https://via.placeholder.com/400x300?text=Work+3',
      'https://via.placeholder.com/400x300?text=Work+4',
      'https://via.placeholder.com/400x300?text=Work+5',
      'https://via.placeholder.com/400x300?text=Work+6'
    ];
  }
}

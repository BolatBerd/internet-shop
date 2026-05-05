import { Injectable } from '@angular/core';
import { Advantage, Category, Review } from '../models';

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

  getCategories(): Category[] {
    return [
      {
        title: 'Living Room',
        description: 'Comfortable sofas, chairs, and entertainment centers',
        image: 'https://via.placeholder.com/300x200?text=Living+Room'
      },
      {
        title: 'Bedroom',
        description: 'Elegant beds, dressers, and nightstands',
        image: 'https://via.placeholder.com/300x200?text=Bedroom'
      },
      {
        title: 'Dining Room',
        description: 'Beautiful dining tables and chairs for family gatherings',
        image: 'https://via.placeholder.com/300x200?text=Dining+Room'
      },
      {
        title: 'Office',
        description: 'Functional desks and chairs for productive workspaces',
        image: 'https://via.placeholder.com/300x200?text=Office'
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

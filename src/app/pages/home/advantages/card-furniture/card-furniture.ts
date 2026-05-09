import { Component } from '@angular/core';
import { ICardFurniture } from '../../interfaces/ICard-furniture';

@Component({
  selector: 'app-card-furniture',
  standalone: true,
  templateUrl: './card-furniture.html',
  styleUrls: ['./card-furniture.scss'],
})
export class CardFurniture {

  cards: ICardFurniture[] = [
    {
      id: 1,
      img: 'furniture1',
      title: 'Раскладной диван Аура',
      description: 'Классический стиль с лаконичными Раскладной диван линиями и средней жёсткостью. Объёмные длинные подушки, просторное спальное место и вместительные ниши для хранения делают эту модель образцом практичной элегантности.',
      salse: 20,
    },
    {
      id: 2,
      img: 'furniture2',
      title: 'Модульный диван Шоко',
      description: 'Множество вариантов исполнения, которые идеально дополнят пространство в вашем доме. Оснащен удобным механизмом раскладывания «Тик-так», а каждый модуль имеет просторную нишу для хранения.',
      salse: 25,
    },
    {
      id: 3,
      img: 'furniture3',
      title: 'Диван по вашему дизайн проекту',
      description: 'Создаём диваны по дизайн-проектам — точно, как на визуализации. Подбираем размер, цвет и фактуру ткани под ваш интерьер. Индивидуальное производство без ограничений.',
      salse: null,
    }
  ];

}

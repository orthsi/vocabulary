import { animate, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { WordPair, WordsPairService } from 'src/app/services/word-pair.service';

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(-100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(100%)' }))], {
      optional: true,
    }),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
  group([
    query(':enter', [style({ transform: 'translateX(100%)' }), animate('.3s ease-out', style({ transform: 'translateX(0%)' }))], {
      optional: true,
    }),
    query(':leave', [style({ transform: 'translateX(0%)' }), animate('.3s ease-out', style({ transform: 'translateX(-100%)' }))], {
      optional: true,
    }),
  ]),
];

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css'],
  animations: [trigger('cardAnimator', [transition(':increment', right), transition(':decrement', left)])],
})
export class WordCardComponent {
  activeIndex = 0;
  animationState = '';
  flipped = false;
  displayCard = true;

  constructor(private wordPairService: WordsPairService) {}

  onSwipeLeft() {
    if (this.activeIndex != this.wordPairService.getWordsLength() - 1) {
      this.activeIndex++;
    } else {
      this.activeIndex = 0;
    }
  }

  onSwipeRight() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    } else {
      this.activeIndex = this.wordPairService.getWordsLength() - 1;
    }
  }

  flipCard() {
    this.flipped = !this.flipped;
  }

  get currentWord() {
    return this.wordPairService.getWordAtIndex(this.activeIndex);
  }
}

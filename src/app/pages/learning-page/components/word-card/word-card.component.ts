import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css'],
})
export class WordCardComponent implements OnInit {
  ngOnInit(): void {
    this.originalText = 'Danke';
    this.translationText = 'Salamat';
  }
  flipped = false;
  originalText = '';
  translationText = '';

  flipCard() {
    this.flipped = !this.flipped;
  }
}

import { Injectable } from '@angular/core';

interface WordPair {
  original: string;
  translation: string;
}

@Injectable({
  providedIn: 'root',
})
export class WordsServiceService {
  private wordPairs: WordPair[] = [
    { original: 'Danke', translation: 'Salamat' },
    { original: 'Hallo', translation: 'Kamusta' },
    { original: 'Tschüss', translation: 'Paalam' },
    { original: 'Ja', translation: 'Oo' },
    {
      original: 'Sprechen Sie englisch oder deutsch?',
      translation: 'Nagsasalita ka ba ng Ingles o Aleman?',
    },

    // add more words here - create db and requests later
  ];
  private currentIndex = 0;

  nextWord(): WordPair {
    if (this.currentIndex >= this.wordPairs.length) {
      this.currentIndex = 0; // reset to the first pair if we've reached the end
    }
    return this.wordPairs[this.currentIndex++];
  }
}

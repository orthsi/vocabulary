import { Injectable } from '@angular/core';

export interface WordPair {
  original: string;
  translation: string;
}

@Injectable({
  providedIn: 'root',
})
export class WordsPairService {
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
  startWords() {
    this.currentIndex = 0;
    return this.wordPairs[0];
  }

  nextWord(): WordPair {
    if (this.currentIndex >= this.wordPairs.length) {
      this.currentIndex = 0; // reset to the first pair if we've reached the end
    }
    return this.wordPairs[this.currentIndex++];
  }

  earlierWord(): WordPair {
    if (this.currentIndex <= 0) {
      this.currentIndex = this.wordPairs.length; // reset to the first pair if we've reached the end
    }
    return this.wordPairs[this.currentIndex--];
  }

  getWordAtIndex(index: number) {
    return this.wordPairs[index];
  }

  getCurrentIndex() {
    return this.currentIndex;
  }

  getWordsLength() {
    return this.wordPairs.length;
  }
}

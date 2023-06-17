import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WordCardComponent } from './word-card/word-card.component';
import { LearningPageComponent } from './learning-page/learning-page.component';
import { CardTextComponent } from './word-card/card-text/card-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WordCardComponent,
    LearningPageComponent,
    CardTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

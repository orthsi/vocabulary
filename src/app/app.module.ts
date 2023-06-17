import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WordCardComponent } from './pages/learning-page/components/word-card/word-card.component';
import { LearningPageComponent } from './pages/learning-page/learning-page.component';
import { CardTextComponent } from './pages/learning-page/components/card-text/card-text.component';
import { StartPageComponent } from './pages/start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WordCardComponent,
    LearningPageComponent,
    CardTextComponent,
    StartPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

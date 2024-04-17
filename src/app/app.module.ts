import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerSearchComponent } from './components/player-search/player-search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { FrontPageButtonComponent } from './components/front-page-button/front-page-button.component';
import { FrontStadiumButtonComponent } from './components/front-stadium-button/front-stadium-button.component';
import { FrontNewsButtonComponent } from './components/front-news-button/front-news-button.component';
import { TitleCardComponent } from './components/title-card/title-card.component';
@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    PlayerSearchComponent,
    NavbarComponent,
    FrontPageComponent,
    FrontPageButtonComponent,
    FrontStadiumButtonComponent,
    FrontNewsButtonComponent,
    TitleCardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}

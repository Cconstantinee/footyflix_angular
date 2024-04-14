import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerCardComponent } from './components/player-card/player-card.component';
import { PlayerSearchComponent } from './components/player-search/player-search.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PlayerCardComponent,
    PlayerSearchComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule, FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'footyflix_angular';
  imageUrl: string = '';
  title_card_text: string='FOOTYFLIX';
  title_card_description: string='Your friendly neighborhood platform uniting players, football  enthusiasts, and sporting facility owners in one goal-scoring community!';
  
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent {
  @Input() imageUrl: string="../../../assets/default-card.svg"; // Input for image URL
  text: string='________';
  onMouseOver() {
    this.text='Add player';
  }

  onMouseOut() {
    this.text='________';
  }
}

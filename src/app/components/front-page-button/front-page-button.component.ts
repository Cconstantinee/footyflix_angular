import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-front-page-button',
  templateUrl: './front-page-button.component.html',
  styleUrl: './front-page-button.component.css'
})
export class FrontPageButtonComponent {
  @Output() clickEvent=new EventEmitter<string>();
  teams_console_clicked(){
    this.clickEvent.emit('open_teams_console');
  }
  tournaments_console_clicked(){
    this.clickEvent.emit('open_tournaments_console');
  }
}

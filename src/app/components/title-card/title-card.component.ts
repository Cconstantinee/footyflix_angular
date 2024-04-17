import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrl: './title-card.component.css'
})
export class TitleCardComponent {
  @Input() title_varient:string ='';
  @Input() consoleActive:boolean=false;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-deck',
  templateUrl: './navigation-deck.component.html',
  styleUrl: './navigation-deck.component.css'
})
export class NavigationDeckComponent {
@Input() ConsolesActive:boolean=false;
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() clickEvent=new EventEmitter<string>();
  main_clicked(){
    this.clickEvent.emit('open_main_page');
  }
}

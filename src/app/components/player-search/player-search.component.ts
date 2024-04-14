import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrl: './player-search.component.css'
})
export class PlayerSearchComponent implements OnInit {

  selectedCar: string='Select a player';

  cars = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];
  isSubmitted:boolean=false;
  onPost= ()=>this.isSubmitted=true;

frm!:FormGroup;
ngOnInit(): void {
  this.frm=this.fb.group({
    'cars':[],
    'descriptions':['']
  })
}

  constructor(private fb:FormBuilder){

  }

}

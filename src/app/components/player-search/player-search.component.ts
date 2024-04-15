import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-player-search',
  templateUrl: './player-search.component.html',
  styleUrls: ['./player-search.component.css']
})
export class PlayerSearchComponent implements OnInit {
  
  @Output() messageEvent = new EventEmitter<string>();
  selectedCar: number | null = null; // Change the type to number and initialize with null
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' }
  ];

  sendMessage() {
    if (this.selectedCar !== null) { // Check if selectedCar is not null
      const selectedPlayerId = this.selectedCar;
      const selectedPlayerName = this.cars.find(car => car.id === selectedPlayerId)?.name;
      if (selectedPlayerName) {
        this.messageEvent.emit(selectedPlayerName);
        console.log("Selected player:", selectedPlayerName, " " ,selectedPlayerId);
      }
    }
  }

  isSubmitted = false;
  onPost = () => this.isSubmitted = true;

  frm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.frm = this.fb.group({
      'cars': []
    });
  }
}

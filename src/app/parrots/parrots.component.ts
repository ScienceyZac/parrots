import { Component } from '@angular/core';

@Component({
  selector: 'app-parrots',
  templateUrl: './parrots.component.html',
  styleUrls: ['./parrots.component.css'],
})
export class ParrotsComponent {
  parrots = [];
  constructor() {
    this.getParrots();
  }
  addParrot = (parrot) => {
    localStorage.setItem(parrot.name, JSON.stringify(parrot));
    this.parrots.push(parrot);
    console.log(this.parrots);
  };
  getParrots = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let parrot = localStorage.getItem(localStorage.key(i));
      console.log('hi');
      // console.log(parrot);
      this.parrots.push(JSON.parse(parrot));
      console.log(this.parrots);
    }
  };
}

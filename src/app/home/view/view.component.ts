import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  parrots = [];
  constructor() {
    this.getParrots();
  }
  getParrots = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let parrot = localStorage.getItem(localStorage.key(i));
      console.log(parrot);
      this.parrots.push(JSON.parse(parrot));
      console.log(this.parrots);
    }
  };
  getDetails = (name) => {
    document.location.pathname = `/parrot/${name}`;
  };
}

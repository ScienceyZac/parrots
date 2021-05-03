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
    if (!parrot.name) return alert('you need to provide a name');
    if (!parrot.img) return alert('you need to provide a image');
    if (!parrot.desc) return alert('you need to provide a description');
    if (this.parrots.filter((p) => p.name == parrot.name)[0])
      return alert(`the parrot: "${parrot.name}" already exists`);
    console.log(parrot);
    localStorage.setItem(parrot.name, JSON.stringify(parrot));
    this.parrots.push(parrot);
    console.log(this.parrots);
  };
  getParrots = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let parrot = localStorage.getItem(localStorage.key(i));
      console.log(parrot);
      this.parrots.push(JSON.parse(parrot));
      console.log(this.parrots);
    }
  };
  delete = (name) => {
    for (let i = 0; i < this.parrots.length; i++) {
      if (this.parrots[i].name == name) {
        this.parrots.splice(i, 1);
      }
    }
    // this.parrots.filter((n) => n.name == name)[0] = null;
    localStorage.removeItem(name);
    console.log(this.parrots);
    console.log(this.parrots.filter((n) => n.name == name));
    console.log(this.parrots.filter((n) => n.name == name)[0]);
  };
}

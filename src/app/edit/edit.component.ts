import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

console.log('sup, ur in the edit component');
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  parrot;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params);
      console.log(params.name);
      console.log(params['name']);
      const name = params['name'].replace(/%20/g, ' ');
      this.getParrot(`${name}`);
    });
  }
  getParrot = (name) => {
    let parrot = localStorage.getItem(name);
    this.parrot = JSON.parse(parrot);
    console.log(this.parrot, 'parrot in get function');
  };
  save = (newParrot) => {
    if (this.parrot.name != newParrot.name) {
      localStorage.removeItem(this.parrot.name);
      localStorage.setItem(newParrot.name, JSON.stringify(newParrot));
    } else {
      localStorage.setItem(this.parrot.name, JSON.stringify(newParrot));
    }
    document.location.pathname = '/';
  };
  cancle = async () => {
    const sure = await prompt(
      'are you sure you want to remove all ur changes?'
    );
    if (sure == 'yes') {
      document.location.pathname = '/';
    } else {
      alert('ok, cancled the cancle');
    }
  };
}

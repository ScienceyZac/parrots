import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-parrot',
  templateUrl: './parrot.component.html',
  styleUrls: ['./parrot.component.css'],
})
export class ParrotComponent {
  parrot;
  constructor(private route: ActivatedRoute, private control: ControlService) {
    this.route.params.subscribe((params) => {
      console.log(params, 'params');
      console.log(params.name);
      console.log(params['name']);
      const name = params['name'].replace(/%20/g, ' ');
      this.getParrot(`${name}`);
    });
  }
  getParrot = (name) => {
    let parrot = localStorage.getItem(name);
    if (!parrot) return (this.parrot = 'invalid');
    this.control.setName(name);
    this.parrot = JSON.parse(parrot);
    console.log(this.parrot, 'parrot in get function');
  };
}

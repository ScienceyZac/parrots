import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css'],
})
export class ImgComponent {
  parrot;
  constructor(private control: ControlService) {
    if (!control.getName()) return;
    this.parrot = JSON.parse(localStorage.getItem(control.getName()));
    console.log(this.parrot);
    document.body.innerHTML = `<div *ngIf="parrot">
    <img src="${this.parrot.img}" />
  </div>
  `;
  }
}

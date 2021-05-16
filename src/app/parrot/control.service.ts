import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControlService {
  name: string;
  constructor() {}
  getName = () => {
    if (!this.name) return;
    return this.name;
  };
  setName = (name) => {
    return (this.name = name);
  };
  getParrot = (name?) => {
    if (!name) name = this.name;
    if (!localStorage.getItem(name)) return;
    return JSON.parse(localStorage.getItem(name));
  };
}

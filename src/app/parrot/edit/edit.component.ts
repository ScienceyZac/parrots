import { Component } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  parrot;
  constructor(private control: ControlService) {
    this.parrot = control.getParrot();
    // window.onload = () => {
    //   const button = document.getElementById('fakeButton');
    //   console.log(button);
    //   button.click();
    // };
  }
  save = (newParrot) => {
    if (
      this.parrot.name != newParrot.name &&
      localStorage.getItem(newParrot.name)
    )
      return alert('there is already another parrot with that new name');
    if (this.parrot.name != newParrot.name) {
      localStorage.removeItem(this.parrot.name);
      localStorage.setItem(newParrot.name, JSON.stringify(newParrot));
    } else {
      localStorage.setItem(this.parrot.name, JSON.stringify(newParrot));
    }
    document.location.pathname = `/parrot/${newParrot.name}`;
  };
  cancle = async () => {
    const sure = await prompt(
      'are you sure you want to remove all ur changes?'
    );
    if (sure == 'yes') {
      document.location.pathname = `/parrot/${this.parrot.name}`;
    } else {
      alert('ok, cancled the cancle');
    }
  };
  // correctTags = (optionOne, optionTwo, optionThree) => {
  //   console.log('hi');
  //   optionOne = true;
  //   optionTwo = true;
  //   optionThree = true;
  //   console.log(optionOne);
  //   console.log(optionTwo);
  //   console.log(optionThree);
  // };
}

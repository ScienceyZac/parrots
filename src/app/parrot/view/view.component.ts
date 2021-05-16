import { Component } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  parrot;
  constructor(private control: ControlService) {
    this.parrot = control.getParrot();
    this.parrot.options.forEach((option) => {
      if (option[1]) {
        console.log(document.getElementsByClassName(option[0]));
      }
    });
  }
  delete = async (name) => {
    const sure = await prompt(
      `are you sure you want to delete ${this.parrot.name}?`
    );
    if (sure == 'yes') {
      localStorage.removeItem(name);
      this.back();
    } else {
      alert('ok, cancled the delete');
    }
  };
  edit = (name) => {
    document.location.pathname = `/parrot/${name}/edit`;
  };
  back = () => {
    document.location.pathname = ``;
  };
  share = () => {
    const url = `https://parrots.netlify.app/share?${JSON.stringify(
      this.parrot
    )}`;
    const el = document.createElement('textarea');
    el.value = url;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert(
      `sup, now you ca go share this lovely parrot to your friends with this link!\n${url}\nIt has also been added to your clipboard so all you need to do is past the link!`
    );
  };
}

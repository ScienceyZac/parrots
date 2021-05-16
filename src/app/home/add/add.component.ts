import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  addParrot = (parrot, url?: string) => {
    if (url) {
      console.log(url, 'theres a url');
      url = url.replace(
        /(http(s)?:\/\/((localhost:\d+)|(\w|\.)+))\/share\?/,
        ''
      );
      const json = JSON.parse(url);
      this.addParrot(json);
      console.log(json, 'json');
    } else {
      if (!parrot.name) return alert('you need to provide a name');
      if (!parrot.img) return alert('you need to provide a image');
      if (!parrot.desc) return alert('you need to provide a description');
      if (localStorage.getItem(parrot.name))
        return alert(`the parrot: "${parrot.name}" already exists`);
      console.log(parrot);
      localStorage.setItem(parrot.name, JSON.stringify(parrot));
      document.location.pathname = '/';
    }
  };
  back = () => [(document.location.pathname = '/')];
}

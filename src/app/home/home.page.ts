import { Component } from '@angular/core';
import {flash} from "ionicons/icons";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public active: boolean;

  constructor() {
    this.active = false;
  }

  flash() {

  }
}

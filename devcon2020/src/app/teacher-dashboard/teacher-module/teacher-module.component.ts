import { Component, OnInit } from '@angular/core';
import {SLIDE_UP_DOWN, FLYIN, APPEAR_DOWN, CARD_ANIMATION, APPEAR_SIDE} from '../../app-animations';

@Component({
  selector: 'app-teacher-module',
  templateUrl: './teacher-module.component.html',
  styleUrls: ['./teacher-module.component.scss'],
  animations: [
    SLIDE_UP_DOWN, FLYIN, APPEAR_DOWN, APPEAR_SIDE, CARD_ANIMATION
  ]
})
export class TeacherModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

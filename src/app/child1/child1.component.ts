import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
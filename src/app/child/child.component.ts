import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated
  // encapsulation: ViewEncapsulation.None
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

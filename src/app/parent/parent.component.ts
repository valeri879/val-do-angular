import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public parentText: string = 'parent text from compoent.ts';
  public textFromParent: string = 'text from parent';
  public textFromChild: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  dataFromChild($event: any) {
    this.textFromChild = $event;
  }

}

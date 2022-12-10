import { Component, OnInit } from '@angular/core';

interface Data {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public data: Data[] = [
    { id: '1', name: 'Val do' },
    { id: '2', name: 'Jon doe' },
    { id: '3', name: 'Lorem name' },
  ]

  constructor() {}

  ngOnInit(): void {

  }
  
}

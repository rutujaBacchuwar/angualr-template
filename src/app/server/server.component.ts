import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `
  <app-servers></app-servers>
  <h1> In angular project </h1>
  <app-servers></app-servers>
  `,
  styles: [`
  h1{
    color: blue;
  }
  `]
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

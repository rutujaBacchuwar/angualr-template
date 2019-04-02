import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  template: `
  <app-servers></app-servers>
  <app-servers></app-servers>
  `,
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

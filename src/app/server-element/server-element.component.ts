import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Makes this css global to the whole file with ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
// tslint:disable-next-line: no-input-rename
  @Input() element: {
    type: string,
    name: string,
    content: string
  };

  constructor() { }

  ngOnInit() {
  }

}

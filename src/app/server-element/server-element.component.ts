import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Makes this css global to the whole file with ViewEncapsulation.None
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
// tslint:disable-next-line: no-input-rename
  @Input() element: {
    type: string,
    name: string,
    content: string
  };
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
   }

   ngOnChanges(changes: SimpleChanges) {
     console.log('ngOnChanges called!');
     console.log(changes);
   }

   ngOnInit() {
     console.log('ngOnInit called!');
   }

   ngDoCheck() {
     console.log('ngDoCheck Called!')
   }

   ngAfterContentInit() {
     console.log('ngAfterContentInit Called!');
   }

   ngAfterContentChecked() {
     console.log('ngAfterContentChecked!')
   }

   ngAfterViewInit() {
    console.log('ngAfterViewInit Called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Checked!')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called!')
  }


}

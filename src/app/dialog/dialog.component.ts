
import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger,  style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  animations: [
  trigger('dialog', [
    transition('void => *', [
      style({ transform: 'scale3d(.3, .3, .3)' }),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
    ])
  ])
]})

export class DialogComponent implements OnInit {
  
  @Input() visible?:boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() clearErrors?:boolean;
  @Output() clearErrorsChange: EventEmitter<boolean> =new EventEmitter<boolean>();
  @Input() clearData?:any;
  
  

  constructor() { }

  ngOnInit(): void {}
    close() {
      this.clearData.reset();
      this.clearErrors=false;
      this.visible = false;
      this.visibleChange.emit(this.visible);
      this.clearErrorsChange.emit(this.clearErrors);
      
    }
}

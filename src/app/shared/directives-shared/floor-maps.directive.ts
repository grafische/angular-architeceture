import { RoomType } from './../../core/enum/room-type.enum';
import { Directive, ElementRef, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFloorMaps]'
})
export class FloorMapsDirective {

  @Input() top: number;
  @Input() left: number;
  @Input() type: RoomType;

  constructor( private el: ElementRef ) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes.top && changes.left) {
      this.el.nativeElement.style.top = changes.top.currentValue + 'px';
      this.el.nativeElement.style.left = changes.left.currentValue + 'px';
    }
  }

}

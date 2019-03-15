import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseEventDirective]'
})
export class MouseEventDirective {

  constructor() { }

  @Output() mouseUp: EventEmitter<MouseEvent> = new EventEmitter();

  @HostListener('mouseup', ['$event'])
  public onListenerTriggered(event: any): void {
      this.mouseUp.emit(event);
  }


}

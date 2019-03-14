import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseEvent]'
})
export class MouseEventDirective {

  constructor() { }

  @Output() onFocusOut: EventEmitter<MouseEvent> = new EventEmitter();

  @HostListener("mouseup", ["$event"])
  public onListenerTriggered(event: any): void {
      this.onFocusOut.emit(event);
  }
  

}

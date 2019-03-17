import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputEventDirective]'
})
export class InputEventDirective {

  constructor() { }

  @Output() mouseEvent: EventEmitter<Event> = new EventEmitter();
  @Output() keyboardEvent: EventEmitter<Event> = new EventEmitter();

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
      this.mouseEvent.emit(event);
  }

  @HostListener('keydown', ['$event'])
  public onKeyDown(event: any): void {
      this.keyboardEvent.emit(event);
  }
}

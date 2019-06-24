import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputEventDirective]'
})
export class InputEventDirective {

  constructor() { }

  @Output() mouseEvent: EventEmitter<MouseEvent> = new EventEmitter();
  @Output() keyboardEvent: EventEmitter<Event> = new EventEmitter();

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
      this.mouseEvent.emit(event);
  }

  @HostListener('mousemove', ['$event'])
  public onMouseMove(event: any): void {
      this.mouseEvent.emit(event);
  }

  @HostListener('mouseup', ['$event'])
  public onMouseUp(event: any): void {
      this.mouseEvent.emit(event);
  }

  @HostListener('mousedown', ['$event'])
  public onMouseDown(event: any): void {
      this.mouseEvent.emit(event);
  }

  @HostListener('keydown', ['$event'])
  public onKeyDown(event: any): void {
      this.keyboardEvent.emit(event);
  }
}

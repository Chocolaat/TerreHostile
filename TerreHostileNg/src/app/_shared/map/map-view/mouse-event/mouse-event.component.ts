import { Directive } from '@angular/core';

@Directive({
  selector: 'map-view'
})
export class FocusOutDirective {
  @Output() onFocusOut: EventEmitter<boolean> = new EventEmitter<false>();

  @HostListener("focusout", ["$event"])
  public onListenerTriggered(event: any): void {
      this.onFocusOut.emit(true);
  }
}

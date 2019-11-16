
import {Component, Output, EventEmitter} from '@angular/core';


/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-large-crud-table-content',
  template: `
  <div class="tableHeader">
  <button mat-button (click)="this.openDialog.emit('Add',{})" mat-flat-button color="primary">Add Row</button>
  <button mat-button (click)="this.refresh.emit()" mat-flat-button color="primary">Refresh</button>
  </div>

  <ng-content></ng-content>

    <div class="example-container mat-elevation-z8">
    <div class="example-loading-shade"
         *ngIf="isLoadingResults || isRateLimitReached">
      <mat-spinner *ngIf="isLoadingResults"></mat-spinner>
      <div class="example-rate-limit-reached" *ngIf="isRateLimitReached">
        GitHub's API rate limit has been reached. It will be reset in one minute.
      </div>
    </div>
    </div>
  `
})


// TODO : get local_data from outer template

export class LargeCRUDTableContentComponent {

  @Output()
  refresh = new EventEmitter<any>();

  @Output()
  openDialog = new EventEmitter<any>();



}

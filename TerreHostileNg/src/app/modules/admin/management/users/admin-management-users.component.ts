import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_shared/user/user.service';
import { User } from 'src/app/_shared/user/user';




@Component({
  selector: 'app-admin-management-users',
  template: `
    Users

    <mat-table [dataSource]="userList" class="mat-elevation-z8">
    <!-- Position Column -->
    <ng-container matColumnDef="name">
      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
    </ng-container>

    <!-- Name Column -->
    <ng-container matColumnDef="email">
      <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.email}} </mat-cell>
    </ng-container>

    <!-- Weight Column -->
    <ng-container matColumnDef="startXCoord">
      <mat-header-cell *matHeaderCellDef> startXCoord </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.startXCoord}} </mat-cell>
    </ng-container>

    <!-- Symbol Column -->
    <ng-container matColumnDef="startYCoord">
      <mat-header-cell *matHeaderCellDef> startYCoord </mat-header-cell>
      <mat-cell *matCellDef="let element"> {{element.startYCoord}} </mat-cell>
    </ng-container>

    <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
    <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
  </mat-table>

  `,
  styleUrls: ['./admin-management-users.component.css']
})
export class AdminManagementUsersComponent implements OnInit {
    displayedColumns: string[] = ['name', 'email', 'startXCoord', 'startYCoord'];
    private userList: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
/*     this.userList.push({name: 'hey', email: 'hoy', id: 45, startXCoord:240, startYCoord: 456}); */
/*     this.userList.push({name: 'hey', email: 'hoy', id: 45, startXCoord:240, startYCoord: 456}); */
     this.userService.getAll().subscribe((userListResult) => {
        this.userList = userListResult;
    });
  }

}

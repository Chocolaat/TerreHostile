import { DataSource } from '@angular/cdk/table';
import { User } from 'src/app/_shared/user/user';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserService } from 'src/app/_shared/user/user.service';
import { CollectionViewer } from '@angular/cdk/collections';
import { FilterSortPaginateParams } from 'src/app/_shared/ui-components/grids/model/filterSortPaginateParams';
import { catchError, finalize } from 'rxjs/operators';

export class AdminManagementUsersDataSource implements DataSource<User> {

    private usersSubject = new BehaviorSubject<User[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private userService: UserService) {}

    connect(collectionViewer: CollectionViewer): Observable<User[]> {
        return this.usersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    }

    loadUsers(filterSortPaginateParams: FilterSortPaginateParams) {

        this.loadingSubject.next(true);

        this.userService.getAllForGrid(filterSortPaginateParams).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(users => {
            this.usersSubject.next(users);
            console.log(users);
        });
    }
}

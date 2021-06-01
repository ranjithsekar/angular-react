import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { User } from '../models/user';

import { UserService } from './../services/user.service';
import { GIT_USER_TABLE_COLS } from './../constants/unit-test.constants';

@Component({
    selector: 'app-users',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    providers: [UserService]
})
export class UserComponent implements OnInit, OnDestroy {

    public displayedColumns = GIT_USER_TABLE_COLS;
    public datasource: MatTableDataSource<User>;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.userService.getUsers().subscribe(
            (response: User[]) => {
                this.datasource = new MatTableDataSource<User>(response);
                this.datasource.sort = this.sort;
            },
            (error) => {
                console.error();
            },
            () => { console.log('completed'); }
        );
    }

    ngOnDestroy(): void {

    }
}

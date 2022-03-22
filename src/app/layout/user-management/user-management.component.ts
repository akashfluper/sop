import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  s_no:number;
  user_name: string;
  user_id: string;
  email: string;
  contact: string;
  date:string;
  parcel:string;
  food:string;
  address:string;
  ride:string;
  total_donation:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {s_no:1, user_name: 'Lorem Ipsum', user_id: 'Lorem Ipsum', email: 'xyz@gmail.com', contact : '9999999999',address: 'Lorem ipsum', date:'10 april 2020',parcel:'34' ,food:'34', ride:'34',total_donation:'$400' },
];

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['s_no','user_name', 'user_id', 'email', 'contact','address','date','parcel','food','ride','total_donation','Action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  private _paginator!: MatPaginator;
  public get paginator(): MatPaginator {
    return this._paginator;
  }
  public set paginator(value: MatPaginator) {
    this._paginator = value;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



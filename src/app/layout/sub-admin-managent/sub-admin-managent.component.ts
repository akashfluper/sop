import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from '../dialog/login/login.component';
import { AddSubAdminComponent } from '../dialog/add-sub-admin/add-sub-admin.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  contact:number;
  id:number;
  document:string;
  action:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', contact:1234567890,id:12345,document:'',action:''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', contact:1234567890,id:12345,document:'',action:''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', contact:1234567890,id:12345,document:'',action:''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', contact:1234567890,id:12345,document:'',action:'',},
  
];

@Component({
  selector: 'app-sub-admin-managent',
  templateUrl: './sub-admin-managent.component.html',
  styleUrls: ['./sub-admin-managent.component.css']
})
export class SubAdminManagentComponent implements OnInit {


  multipleFiles1(event: any) {
    this.multiple1 = [];
    var multipleFiles = event.target.files;
    this.uploadProfileImage = event.target.files[0]
    if (multipleFiles) {
    for (var file of multipleFiles) {
    var multipleReader = new FileReader();
    multipleReader.onload = (e: any) => {
    this.profile_image = e.target.result;
    console.log(this.profile_image);
    
    }
    multipleReader.readAsDataURL(file);
    }
    }
    }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginComponent,{
      width:'300px',
      disableClose:true,

    });
  }

  openDialog1() {
    this.dialog.open(AddSubAdminComponent,{
      disableClose:true,
      width:'100%',
      maxWidth:'600px'
      
    });
  }
  

  ngOnInit(): void {
  }
 



   displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol','contact','id','document','action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  multiple1: never[] | undefined;
  uploadProfileImage: any;
  profile_image: any;

  

}

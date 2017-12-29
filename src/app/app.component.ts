import { Component, OnInit } from '@angular/core';
import {TableService} from './table/table.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authUsers: string = 'admin/store/user/authorized/1';
  avaliableUsers: string = 'admin/store/user/1';
  deleteAuthUsers: string = '/admin/store/user/authorized/list/1';

  authUserRemoved: boolean = false;
  authUserAdded: object[];
  updateTable: boolean = false;

  avaliableUsersWhatToAdd: object[];
  avaliableUsersWhatToRemove: object[];
  tableCheckedList: any = {};

  constructor(private tableService: TableService) {

  }

// TODO: Refactore with Observable
  resetUpdate() {
    setTimeout(() => {
      this.updateTable = false;
    }, 300);
  }

  getChildList(param) {
    this.tableCheckedList[param.id] = param.value;
  }



  addToAvaliableUsers(tableId) {
    // this.tableService.addItemToTable(this.avaliableUsers, this.tableCheckedList[tableId]).subscribe( res => {
    //   this.avaliableUsersWhatToAdd = this.tableCheckedList[tableId];
    // });
    this.tableService.removeItemFromTable(this.deleteAuthUsers, this.tableCheckedList[tableId]).subscribe( res => {
      this.updateTable = true;
      this.resetUpdate();
      // this.authUserRemoved = true;
    });
  }



  addToAuthUsers(tableId) {
    this.tableService.addItemToTable(this.authUsers, this.tableCheckedList[tableId]).subscribe( res => {
        this.updateTable = true;
      this.resetUpdate();
    });
    // this.tableService.removeItemFromTable(this.avaliableUsers, this.tableCheckedList[tableId]).subscribe( res => {
    //   this.avaliableUsersWhatToRemove = this.tableCheckedList[tableId];
    // });
  }


  ngOnInit() {
  }
}

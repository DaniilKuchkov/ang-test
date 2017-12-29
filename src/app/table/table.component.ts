import { Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { TableService} from './table.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() tableRowListUrl: string;
  @Input() withCheckBox: boolean;
  thList: string[];
  tableRowList: object [];
  page: number;
  totalCount: number;
  search: string;
  sort: string;
  order: boolean;
  countPerPageSize: number;
  newSearchValue: string;
  checkedListItems: object [] = [];
  constructor(private tableService: TableService) { }
  changePage() {
    this.loadList();
  }
  sortTable(key) {
    this.sort = key;
    this.order = !this.order;
    this.page = 1;
    this.loadList();
  }
  updateTable() {
    this.page = 1;
    this.loadList();
  }
  updateFilter() {
    this.newSearchValue = this.newSearchValue.toLowerCase();
    if (this.search === this.newSearchValue) {
      return;
    }
    setTimeout(() => {
      if (this.newSearchValue && this.newSearchValue.length > 2) {
        this.search = this.newSearchValue;
        console.log(this.search);
        this.loadList();
        this.page = 1;
      } else {
        this.search = '';
        this.loadList();
        this.page = 1;
      }
    }, 1000);
  }
  ngOnInit() {
    this.setDefaultSettigs();
    console.log(this.tableRowListUrl);
    this.loadList(true, true);
  }

  addListItemToChecked(listItem) {
    if (this.checkedListItems.indexOf(listItem) === -1) {
      this.checkedListItems.push(listItem);
    }
    console.log(this.checkedListItems);
  }
  addListArr() {
    this.tableService.addItemToTable('some-url', this.checkedListItems)
      .subscribe(addedListArr => {
       this.tableRowList = [...this.tableRowList, this.checkedListItems];
    });
  }
  // helpers
  loadList(headerUpdate: boolean = false, countUpdate: boolean = false) {
      this.tableService.getTableList(
        this.tableRowListUrl,
        this.search,
        this.countPerPageSize,
        (this.page - 1) * this.countPerPageSize,
        this.sort,
        this.order ? 'asc' : 'desc').subscribe(res => {
        console.log(res);
        this.tableRowList = res.cities || res.countries || res.data;

        // set headerUpdate or countUpdate to better perform
        if (headerUpdate) {
          this.thList = this.tableService.getTableHeaders(this.tableRowList[0]);
        }
        if (countUpdate) {
          this.totalCount = res.count;
        }
      });
  }
  setDefaultSettigs() {
    this.page = 1;
    this.countPerPageSize = 10;
    this.sort = 'id';
    this.order = false;
  }
}

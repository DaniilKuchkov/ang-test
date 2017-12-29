import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-checkbox',
  templateUrl: './table-checkbox.component.html',
  styleUrls: ['./table-checkbox.component.css']
})
export class TableCheckboxComponent implements OnInit {
  checked: boolean;
  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-table-checkbox',
  templateUrl: './table-checkbox.component.html',
  styleUrls: ['./table-checkbox.component.css']
})
export class TableCheckboxComponent implements OnInit {
  @Output() addListItemToChecked: EventEmitter<any> = new EventEmitter();
  @Input() tableItem;
  checked: boolean;
  constructor() { }
  ngOnInit() {
  }
  onCheck() {
    console.log(this.tableItem);
    this.checked = !this.checked;
    this.addListItemToChecked.emit(this.tableItem);
  }
}

import { Component, OnInit } from '@angular/core';
import {TableService} from "./table/table.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  firstTableUrl: string = 'cities';
  secondTableUrl: string = 'countries';
  constructor(private tableService: TableService) {

  }
  ngOnInit() {
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent} from './table.component';
import { TableService} from './table.service';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe';
import {KeysPipe} from './table.pipe';
import { TableCheckboxComponent } from './table-checkbox/table-checkbox.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
  ],
  declarations: [ TableComponent, KeysPipe, TableCheckboxComponent],
  exports: [ TableComponent ],
  providers: [ TableService ],
})

export class TableModule {}

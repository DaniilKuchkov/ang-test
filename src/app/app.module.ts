import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {TableComponent} from './table/table.component';
import {TableModule} from './table/table.module';
import {FormsModule} from '@angular/forms';
import {TableService} from './table/table.service';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    HttpModule,
  ],
  providers: [
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

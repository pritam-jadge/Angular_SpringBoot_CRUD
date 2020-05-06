import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {EmployeeDB} from './testData';

import { from } from 'rxjs';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeService } from './employee.service';
import { ShowEmployeesComponent } from './show-employees/show-employees.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    AddEmployeeComponent,
    ShowEmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    /* HttpClientInMemoryWebApiModule.forRoot(EmployeeDB), */
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeeService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

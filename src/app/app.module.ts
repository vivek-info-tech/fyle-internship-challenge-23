import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
//import { PaginationModule } from 'ngx-pagination';
import { HttpClientModule } from  '@angular/common/http';
 import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports:[
    //NgxSkeletonLoaderModule,
    BrowserModule,
   FormsModule,
    HttpClientModule,
     NgxPaginationModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

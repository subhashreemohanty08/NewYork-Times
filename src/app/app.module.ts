import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component'; 
import { TopstoriesComponent } from './topstories/topstories.component';
import { HttpClientModule } from "@angular/common/http";
import { NewsService } from "./news.service";
import { SearchComponent } from './search/search.component';
import { TechnologyComponent } from './technology/technology.component';
import { BusinessComponent } from './business/business.component';
import { ArtsComponent } from './arts/arts.component';
import { ScienceComponent } from './science/science.component';
import { PoliticsComponent } from './politics/politics.component';
import { NationalComponent } from './national/national.component';
import { SportsComponent } from './sports/sports.component';




@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,  
    NavbarComponent,
    TopstoriesComponent,
    SearchComponent,
    TechnologyComponent,
    BusinessComponent,
    ArtsComponent,
    ScienceComponent,
    PoliticsComponent, 
    NationalComponent,
    SportsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

    
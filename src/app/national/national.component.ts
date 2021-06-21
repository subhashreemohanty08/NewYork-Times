import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.css']
})
export class NationalComponent implements OnInit {

  constructor(private newsService:NewsService) { }
  nationalNewsDisplay:any=[];

  ngOnInit(): void {
    this.newsService.nationalNews().subscribe((result)=>{
      this.nationalNewsDisplay=result.results;
    }) 
  }

}

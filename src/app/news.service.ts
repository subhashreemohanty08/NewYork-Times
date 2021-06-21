import { Injectable } from '@angular/core'; 
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ 
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient,private route:Router) { }

  newsApiUrl = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2nOSpM3lVjucGA77smdf7CudX6Yn8OWH`;
  politicsNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=2nOSpM3lVjucGA77smdf7CudX6Yn8OWH`; 
  nationalNewsApiUrl=`https://api.nytimes.com/svc/topstories/v2/national.json?api-key=2nOSpM3lVjucGA77smdf7CudX6Yn8OWH`;
  scienceNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=2nOSpM3lVjucGA77smdf7CudX6Yn8OWH`;
  businessNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=2nOSpM3lVjucGA77smdf7CudX6Yn8OWH`;
  technologyNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=2nOSpM3lVjucGA77smdf7CudX6Yn8OWH`;
  artsNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=2nOSpM3lVjucGA77smdf7CudX6Yn8OWH`;
  sportsNewsApiUrl = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=2nOSpM3lVjucGA77smdf7CudX6Yn8OWH`; 
  fetchNewsApiUrl = "";
  intFetchedData:Observable<any> | undefined
  fetchedNewsDisplay:any = [];  
  

  topStories():Observable<any>
  {
    return this.http.get(this.newsApiUrl)
  }
  politicsNews():Observable<any> 
  {
    return this.http.get(this.politicsNewsApiUrl) 
  
  }
  nationalNews():Observable<any>
  {
    return this.http.get(this.nationalNewsApiUrl)
  }
  scienceNews():Observable<any>
  {
    return this.http.get(this.scienceNewsApiUrl)
  }
  businessNews():Observable<any>
  {
    return this.http.get(this.businessNewsApiUrl)
  }
  artsNews():Observable<any>
  {
    return this.http.get(this.artsNewsApiUrl)
  }
  technologyNews():Observable<any>
  {
    return this.http.get(this.technologyNewsApiUrl)
  }
  sportsNews():Observable<any>
  {
    return this.http.get(this.sportsNewsApiUrl)
  }

  fetchResultsByKey(key:any): void{
  
   
    this.fetchNewsApiUrl = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${key}&api-key=2nOSpM3lVjucGA77smdf7CudX6Yn8OWH`;
    this.intFetchedData = this.http.get(this.fetchNewsApiUrl);
    this.intFetchedData.subscribe((result)=>{
    
      this.fetchedNewsDisplay = result.response.docs;
      
      this.route.navigate(["search"])
    })
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private lawsUrl = 'http://172.16.100.9:8000/api/laws';
    private questionsAndAnswerUrl = 'http://172.16.100.9:8000/api/quastions';
    private organizationUrl = 'http://172.16.100.9:8000/api/organization';
    private searchUrl = 'http://172.16.100.9:8000/api/organization/'


  constructor(private httpClient: HttpClient) { }

  getLaws(){
    return this.httpClient.get(this.lawsUrl);
  }

  getQuestionsAndAnswer(){
    return this.httpClient.get(this.questionsAndAnswerUrl);
  }

  getOrganization(){
    return this.httpClient.get(this.organizationUrl);
  }

  getSearchUrl(value:string){
    console.log( this.httpClient.get(this.searchUrl+value));
    return this.httpClient.get(`http://172.16.100.9:8000/api/organization/${value}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private HttpClient:HttpClient) { }

  // public resume(){
  //   this.HttpClient.get()
  // }
}

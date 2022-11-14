import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  yooz="../assets/YOOZ.png";
  omer="../assets/omer.jpg";
  menu="../assets/menu.png";
  facebook="../assets/facebook.png";
  github="../assets/github.png";
  in="../assets/in.png";
  logo="../assets/omershlomo.png";

  opened = false;
  public zoom():void{

  }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [{
    video :'./assets/song.mp4',
    alt: 'פאר טסי העולם המתוקן' ,
    title: 'פאר טסי העולם המתוקן' ,

}, 


];


  
}
export class SidenavOverviewExample {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
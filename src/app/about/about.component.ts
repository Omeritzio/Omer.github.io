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

  opened = false;


  public zoom():void{

  }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [{
    video :'./assets/song.mp4',
    alt: 'פאר טסי- העולם המתוקן' ,
    title: 'פאר טסי- העולם המתוקן' ,

}, 
{
  video :'./assets/song2.mp4',
  alt: 'עדן חסון -שקיעות אדומות' ,
  title: 'עדן חסון -שקיעות אדומות' ,

}, 
{
  video :'./assets/song3.mp4',
  alt: 'עדן חסון -שמישהו יעצור אותי' ,
  title:  'עדן חסון -שמישהו יעצור אותי' ,

}, 
];



  
}
export class SidenavOverviewExample {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
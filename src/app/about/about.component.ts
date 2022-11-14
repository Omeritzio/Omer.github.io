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
    video: 'https://www.youtube.com/watch?v=qxitY_s5ad4', // Support base64 image
    thumbImage: 'https://www.youtube.com/watch?v=qxitY_s5ad4', // Support base64 image
    title: '', //Optional: You can use this key if want to show image with title
    alt: 'Tibetian Beast', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}, 


];


  
}
export class SidenavOverviewExample {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
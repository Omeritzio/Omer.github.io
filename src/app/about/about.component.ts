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
  
  public zoom():void{

  }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [{
    image: '../assets/tibetian2.png', // Support base64 image
    thumbImage: '../assets/tibetian2.png', // Support base64 image
    title: 'Movie that I had created that never exicet', //Optional: You can use this key if want to show image with title
    alt: 'Tibetian Beast', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}, 


];
  
}

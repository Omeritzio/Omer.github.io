import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  yooz="../assets/YOOZ.png";
  omer="https://res.cloudinary.com/dxgbqusds/image/upload/w_200,h_200,c_scale/v1683905318/Omer_Shlomo_Full_Stack_developer_Angular_frontend_.net_backend_profile_pic_tbjlae.jpg";
  menu="../assets/menu.png";
  facebook="../assets/facebook.png";
  github="../assets/github.png";
  in="../assets/in.png";

  opened = false;


  public zoom():void{

  }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [];


  public ageFromDateOfBirthday(dateOfBirth: any): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  }
  
}
export class SidenavOverviewExample {
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
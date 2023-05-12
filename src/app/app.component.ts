import { Component } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {CloudinaryImage} from '@cloudinary/url-gen';
import {fill} from '@cloudinary/url-gen/actions/resize';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Tl19xWN8skXzW6LcCWKHFjjkloImYW8",
  authDomain: "omerprofile-dda24.firebaseapp.com",
  projectId: "omerprofile-dda24",
  storageBucket: "omerprofile-dda24.appspot.com",
  messagingSenderId: "135308939563",
  appId: "1:135308939563:web:5516b9f89070c4cde7b56e",
  measurementId: "G-788RW2ZB4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'about-page';
  myImage =  new CloudinaryImage('sample', {cloudName: 'dxgbqusds'}).resize(fill().width(100).height(150)); 

}

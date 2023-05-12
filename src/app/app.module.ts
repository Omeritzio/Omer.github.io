import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { ResumeService } from './about/resume.service';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import {CloudinaryModule} from '@cloudinary/ng';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: "", component: AboutComponent },
    ]),
    MatMenuModule,
    MatTabsModule,
    HttpClientModule,
    NgImageSliderModule,
    MatSidenavModule,
    FormsModule,
    CloudinaryModule,
  ],
  providers: [ResumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

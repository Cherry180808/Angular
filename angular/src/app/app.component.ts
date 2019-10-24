import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  mrliShow = false;
  mrliIsShow(){
    this.mrliShow = true;
  }
  mrliIsHide(){
    this.mrliShow = false;
  }
}

import { HeaderComponent } from './components/header/header.component';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ZFooterComponent } from './components/z-footer/z-footer.component';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { getStorage }    from 'firebase/storage';

  // Initialise the Firebase app
  const firebaseApp = initializeApp(environment.firebase);

  // Create ONE Storage instance for the default bucket
  export const storage = getStorage(firebaseApp);
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports:[HeaderComponent, RouterModule, ZFooterComponent]
})

export class AppComponent {
  title = 'ecommerce';

  appView:boolean=true;

  constructor(private route:Router){
    route.events.subscribe(url =>{
      if (url instanceof NavigationEnd){
        if(url.url.includes("admin")){
          this.appView = false
        }else {
          this.appView = true
        }
      }
    })
  }
}

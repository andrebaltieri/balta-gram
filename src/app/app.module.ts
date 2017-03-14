import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from '../providers/auth-service';

export const config = {
  apiKey: "AIzaSyDgXLFbeJCQTlet5OV0qs7RTzMAs0ZB3SU",
  authDomain: "baltagram-cf563.firebaseapp.com",
  databaseURL: "https://baltagram-cf563.firebaseio.com",
  storageBucket: "baltagram-cf563.appspot.com",
  messagingSenderId: "449067488295"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, AuthService]
})
export class AppModule { }

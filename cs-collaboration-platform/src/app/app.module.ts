import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';

import { AuthService } from './auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
	//AngularFireModule.initializeApp(environment.firebase, 'cs-collaboration-platform'), // imports firebase/app needed for everything
    //AngularFireAuthModule, // imports firebase/auth, only needed for auth features
	MDBBootstrapModulesPro.forRoot()
  ],
  providers: [
    MDBSpinningPreloader,
	AuthService
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

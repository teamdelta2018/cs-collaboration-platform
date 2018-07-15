import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';

import { AuthService } from './auth.service';


import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private/private.component';
import { PublicComponent } from './public/public.component';
import { DemoComponent } from './demo/demo.component';
import { PostsComponent } from './posts/posts.component';
import { GroupsComponent } from './groups/groups.component';

const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent },
  { path: 'public', component: PublicComponent },
  { path: 'private', component: PrivateComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'posts', component: PostsComponent },
  { path: '**', component: HomeComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PrivateComponent,
    PublicComponent,
    DemoComponent,
    PostsComponent,
    GroupsComponent
  ],
  imports: [
  
	RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
	AngularFirestoreModule,
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

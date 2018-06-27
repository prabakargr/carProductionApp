import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ProductionlistsComponent } from './productionlists/productionlists.component';
import { OrderComponentsComponent } from './order-components/order-components.component';
import { TrackComponentsComponent } from './track-components/track-components.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    ProductionlistsComponent,
    OrderComponentsComponent,
    TrackComponentsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent},
      {path:'',pathMatch:'full',redirectTo:'login'},
      {path:"app",component:LandingpageComponent,
    children:[
      {path:'productions',component:ProductionlistsComponent},
      {path:'',pathMatch:'full',redirectTo:'productions'},
      {path:'ordercomps',component:OrderComponentsComponent},
      {path:'trackcomps',component:TrackComponentsComponent}
    ]}
    ])
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

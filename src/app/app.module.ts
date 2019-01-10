import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';

//Utils
import { SweetalertsService } from './_utils/sweetalerts.service';
import { GFTService } from './_utils/gft.service';
import { AuthGuard } from './_utils/auth.guard';

//pages
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

//components
import { MenuComponent } from './components/menu/menu.component';
import { HeaderCustomComponent } from './components/header-custom/header-custom.component';

//Module
import { PublicModule } from './pages/dashboard/public.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    HeaderCustomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PublicModule
  ],
  providers: [
    SweetalertsService,
    GFTService,
    FormBuilder,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

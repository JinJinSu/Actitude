import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { MdTooltipModule } from '@angular/material';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { DialogModule } from 'primeng/components/dialog/dialog';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/primeng';
import { PaginatorModule } from 'primeng/components/paginator/paginator';
import { GrowlModule } from 'primeng/components/growl/growl';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { ConfService } from './conf.service';
import { ApiService } from './api/api.service';
import { RequestService } from './api/request.service';
import { AuthService } from './auth.service';
import {ChartModule} from 'primeng/primeng';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { InterestComponent } from './pages/interest/interest.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AllprojectsComponent } from './pages/allprojects/allprojects.component';
import { YourprojectsComponent } from './pages/yourprojects/yourprojects.component';
import { CreateprojectComponent } from './pages/createproject/createproject.component';
import { ProjectdetailComponent } from './pages/projectdetail/projectdetail.component';
import { ExplanationComponent } from './pages/explanation/explanation.component';
import {AuthGuardService} from './routes/guards/auth-guard.service';
import {ProjectService} from './service/project.service';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    HeaderComponent,
    InterestComponent,
    SignupComponent,
    AllprojectsComponent,
    YourprojectsComponent,
    CreateprojectComponent,
    ProjectdetailComponent,
    ExplanationComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [Http]
      }
    }),
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RoutesModule,
    DialogModule,
    ConfirmDialogModule,
    PaginatorModule,
    GrowlModule,
    MdTooltipModule,
    ChartModule
  ],
  providers: [
    ConfirmationService,
    ConfService,
    ApiService,
    RequestService,
    AuthService,
    AuthGuardService,
    ProjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

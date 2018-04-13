import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';
import { CanLeaveHouseCreateGuard } from './shared/guards/can-leave-house-create.guard';
import { HouseDetailsResolverGuard } from './shared/resolvers/house-details-resolver.guard';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import './rxjs.operators';

import { AppComponent } from './app.component';
import { HouseListComponent } from './components/house/house-list/house-list.component';
import { HousesService } from './shared/services/houses.service';
import { SessionService } from './shared/services/session.service';
import { routes } from './app.routes';
import { HouseItemComponent } from './components/house/house-item/house-item.component';
import { LoginComponent } from './components/misc/login/login.component';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { UsersService } from './shared/services/users.service';
import { HouseCreateComponent } from './components/house/house-create/house-create.component';
import { HouseBaseComponent } from './components/house/house-base/house-base.component';

@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    HouseItemComponent,
    LoginComponent,
    NavbarComponent,
    SignupComponent,
    HouseCreateComponent,
    HouseBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    HousesService,
    SessionService,
    UsersService,
    IsAuthenticatedGuard,
    HouseDetailsResolverGuard,
    CanLeaveHouseCreateGuard,
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

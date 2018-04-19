import { CanLeaveHouseCreateGuard } from './shared/guards/can-leave-house-create.guard';
import { HouseBaseComponent } from './components/house/house-base/house-base.component';
import { HouseCreateComponent } from './components/house/house-create/house-create.component';
import { HouseSearchComponent } from './components/house/house-search/house-search.component';
import { HouseSearchIdealistaComponent } from './components/house/house-search-idealista/house-search-idealista.component';
import { HouseDetailsResolverGuard } from './shared/resolvers/house-details-resolver.guard';
import { IsAuthenticatedGuard } from './shared/guards/is-authenticated.guard';
import { SignupComponent } from './components/misc/signup/signup.component';
import { LoginComponent } from './components/misc/login/login.component';
import { HouseItemComponent } from './components/house/house-item/house-item.component';
import { HouseListComponent } from './components/house/house-list/house-list.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'houses', pathMatch: 'full'},
    { path: 'houses', canActivate: [IsAuthenticatedGuard], component: HouseListComponent},
    {
        path: 'houses',
        canActivate: [IsAuthenticatedGuard],
        component: HouseBaseComponent,
        children: [
            {
                path: 'search',
              //  canActivate: [IsAuthenticatedGuard],
              //  canDeactivate: [CanLeaveHouseCreateGuard], // duda con esto
                component: HouseSearchComponent
            },
            {
                path: 'search-idealista',
              //  canActivate: [IsAuthenticatedGuard],
              //  canDeactivate: [CanLeaveHouseCreateGuard], // duda con esto
                component: HouseSearchIdealistaComponent
            },
            {
                path: 'new',
                canActivate: [IsAuthenticatedGuard],
                canDeactivate: [CanLeaveHouseCreateGuard],
                component: HouseCreateComponent
            },
            {
                path: ':id',
                canActivate: [IsAuthenticatedGuard],
                resolve: {
                    house: HouseDetailsResolverGuard
                },
                component: HouseItemComponent
            }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
];

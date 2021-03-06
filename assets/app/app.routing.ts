import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "../app/auth/signup.component";
import { SigninComponent } from "../app/auth/signin.component";
import { MainMapComponent } from "./maps/main-map.component";
import { ProfileComponent } from "./user/profile.component";
import { FormComponent } from "./news/news-input.component";

const APP_ROUTES: Routes = [
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path: 'user', component: ProfileComponent},
    { path: '', component: MainMapComponent, pathMatch: 'full'},
    { path: 'form', component: FormComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
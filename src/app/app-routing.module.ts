import { Routes, RouterModule } from '@angular/router';

/* Components */
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
    /* { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }, */
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotfoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot(routes, { useHash: true });

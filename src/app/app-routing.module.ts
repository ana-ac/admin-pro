import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'progress', component: ProgressComponent },
            { path: 'graphics', component: GraphicsComponent },
            { path: 'dashboard', component: DashboardComponent },
            { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}

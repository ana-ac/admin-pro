import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Routes */
import { AppRoutingModule } from './app-routing.module';

/* Components */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { GraphicsComponent } from './pages/graphics/graphics.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { NotfoundComponent } from './shared/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PreloaderComponent } from './shared/preloader/preloader.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotfoundComponent,
        DashboardComponent,
        ProgressComponent,
        GraphicsComponent,
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        PreloaderComponent,
        PagesComponent,
        RegisterComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

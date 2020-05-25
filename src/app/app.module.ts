import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


/* Routes */
import { APP_ROUTES } from './app-routing.module';

/* Services */
import { ServiceModule } from './services/service.module';

/* Components */
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

/* Modules */

@NgModule({
    declarations: [AppComponent, LoginComponent, RegisterComponent],
    imports: [BrowserModule, APP_ROUTES, PagesModule, ServiceModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

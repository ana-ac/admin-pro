import { NgModule } from '@angular/core';

/* Modules */
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages-routing.module';

/* Components */
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphicsComponent,
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphicsComponent
    ],
    imports: [SharedModule, PAGES_ROUTES],
    providers: [],
    bootstrap: []
})
export class PagesModule {}

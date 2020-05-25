import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Modules */
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

/* Components */
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { IncreaserComponent } from '../components/increaser/increaser.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';
import { GraphicDoughnutComponent } from '../components/graphic-doughnut/graphic-doughnut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphicsComponent,
        IncreaserComponent,
        ProgressBarComponent,
        GraphicDoughnutComponent,
        AccountSettingsComponent,
    ],
    exports: [
        CommonModule,
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        GraphicsComponent,
        IncreaserComponent,
        ProgressBarComponent,
        GraphicDoughnutComponent
    ],
    imports: [CommonModule, SharedModule, PAGES_ROUTES, FormsModule, ChartsModule],
    providers: [],
    bootstrap: [],
})
export class PagesModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* Components */
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NotfoundComponent,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NotfoundComponent,
    ]
})
export class SharedModule {}

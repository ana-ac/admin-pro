import { DOCUMENT } from '@angular/common';
import {
    Component,
    Inject,
    ViewChild,
    ElementRef,
    AfterViewInit,
} from '@angular/core';

import { SettingsService } from '../../services/service.index';

@Component({
    selector: 'app-account-settings',
    templateUrl: './account-settings.component.html',
    styles: [],
})
export class AccountSettingsComponent implements AfterViewInit {

    @ViewChild('links') links: ElementRef<HTMLElement>;

    constructor(
        @Inject(DOCUMENT) private document,
        private settingsService: SettingsService
    ) {}

    ngAfterViewInit() {
        this.settingsService.applyCheck(this.getLinkElementChecked());
    }

    changeTheme(link: Element) {
        this.settingsService.setThemeByLink(link);
        this.settingsService.saveSettings();
        this.settingsService.applyCheck(link);
    }

    getLinkElementChecked(): any {
        let workingThemeElement = null;
        const theme = `${this.settingsService.settings.theme}`;
        this.links.nativeElement
            .querySelectorAll('a[data-theme]')
            .forEach((element: any) => {
                if (element.getAttribute('data-theme') === theme) {
                    workingThemeElement = element;
                }
            });
        return workingThemeElement;
    }
}

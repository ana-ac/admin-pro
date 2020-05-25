import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface Settings {
    theme: string;
    themeUrl: string;
}

@Injectable()
export class SettingsService {

    public settings: Settings = {
        theme: 'default',
        themeUrl: 'assets/css/colors/default.css',
    };

    constructor(@Inject(DOCUMENT) private document) {
        this.getSettings();
    }

    saveSettings() {
        localStorage.setItem('settings', JSON.stringify(this.settings));
    }

    getSettings() {
        if (localStorage.getItem('settings')) {
            this.settings = JSON.parse(localStorage.getItem('settings'));
        }
    }

    setThemeByLink(link: Element) {
        const theme = link.getAttribute('data-theme');
        const themeUrl = `assets/css/colors/${theme}.css`;
        this.settings.theme = theme;
        this.settings.themeUrl = themeUrl;
        this.setTheme(themeUrl);
    }

    setThemeByDataService() {
        const themeUrl = this.settings.themeUrl;
        this.setTheme(themeUrl);
    }

    setTheme(url: string) {
        this.document.getElementById('theme').setAttribute('href', url);
    }

    applyCheck(link: Element) {
        Array.from(this.document.getElementsByClassName('selector')).forEach(
            (element: Element) => {
                element.classList.remove('working');
            }
        );
        link.classList.add('working');
    }
}

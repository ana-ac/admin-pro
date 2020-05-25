import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

    public submenu1 = [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Progress', url: '/progress' },
        { title: 'Graphics', url: '/graphics' }
    ];
    public menu = [
        {
            title: 'Principal',
            icon: 'mdi mdi-gauge',
            submenu: this.submenu1
        }
    ];
    constructor() {}
}

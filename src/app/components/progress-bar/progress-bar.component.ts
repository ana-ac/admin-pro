import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styles: [],
})
export class ProgressBarComponent implements OnInit {

    @Input() public type: string = 'info';
    @Input() public percentage: number = 50;

    constructor() {
        console.log('this.type');
        console.log(this.type);
    }
    ngOnInit(): void {
        console.log(this.type);
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress',
    templateUrl: './progress.component.html',
    styles: [`
        .progress {background: #e0e0e0 !important;}
        .card {background-color: #e4e4e4;}
    `],
})
export class ProgressComponent implements OnInit {

    public percentage1: number = 20;
    public percentage2: number = 70;

    constructor() {}
    ngOnInit(): void {}

    changeProgress(value: number, id) {
        this[`percentage${id}`] = value;
    }

}

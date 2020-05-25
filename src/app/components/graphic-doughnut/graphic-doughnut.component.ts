import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
    selector: 'app-graphic-doughnut',
    templateUrl: './graphic-doughnut.component.html',
    styles: [],
})
export class GraphicDoughnutComponent implements OnInit {

    @Input() labels: Label[] = [];
    @Input() data: MultiDataSet[] = [];
    @Input() type: ChartType = 'doughnut';
    @Input() legend: string = 'Legend';


    constructor() { }
    ngOnInit(): void { }
}

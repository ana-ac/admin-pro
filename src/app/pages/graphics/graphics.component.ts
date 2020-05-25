import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
    selector: 'app-graphics',
    templateUrl: './graphics.component.html',
    styles: [],
})
export class GraphicsComponent implements OnInit {

    public graphics: any = {
        graphic1: {
            labels: ['Con Frijoles', 'Con Natilla', 'Con tocino'],
            data: [24, 30, 46],
            type: 'doughnut',
            legend: 'El pan se come con',
        },
        graphic2: {
            labels: ['Hombres', 'Mujeres'],
            data: [4500, 6000],
            type: 'doughnut',
            legend: 'Entrevistados',
        },
        graphic3: {
            labels: ['Si', 'No'],
            data: [95, 5],
            type: 'doughnut',
            legend: '¿Le dan gases los frijoles?',
        },
        graphic4: {
            labels: ['No', 'Si'],
            data: [85, 15],
            type: 'doughnut',
            legend: '¿Le importa que le den gases?',
        },
    };

    constructor() {}
    ngOnInit(): void {}
}

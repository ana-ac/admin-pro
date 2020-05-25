import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
} from '@angular/core';

@Component({
    selector: 'app-increaser',
    templateUrl: './increaser.component.html',
    styles: [],
})
export class IncreaserComponent implements OnInit {

    @ViewChild('progress') elementProgress: ElementRef;

    @Input('colorClass') public type: string = 'info';
    @Input() public legend: string = 'Legend';
    @Input() public percentage: number = 50;

    @Output('update') progressUpdated: EventEmitter<number>;

    constructor() {
        console.log('Input function not implemented yet');
        this.progressUpdated = new EventEmitter();
    }
    ngOnInit(): void {
        console.log('Input function already implemented');
    }

    calculateProgress(value: number) {
        if (
            (this.percentage >= 100 && value > 0) ||
            (this.percentage <= 0 && value < 0)
        ) {
            return;
        }
        this.percentage += value;
        this.progressUpdated.emit(this.percentage);
    }

    progressChanged(value: number) {
        console.log(this.elementProgress.nativeElement.value);
        this.elementProgress.nativeElement.value = this.fixingInvalidPercentage(
            this.elementProgress.nativeElement.value
        );
        this.percentage = value;
        this.progressUpdated.emit(this.percentage);
    }

    fixingInvalidPercentage(value: number) {
        if (value < 0 || !value) { value = 0; }
        if (value > 100) { value = 100; }
        return value;
    }
}

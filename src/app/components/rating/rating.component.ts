import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnChanges {
  @Input() percentage!: number; // Espera un valor entre 0 y 100
  starWidth: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['percentage']) {
      this.starWidth = this.percentage ?? this.starWidth;
    }
  }
}
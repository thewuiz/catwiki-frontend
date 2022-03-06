import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit, OnChanges {
  @Input() rating: number = 0;

  public numbers: number[] = Array(5).fill(0);

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rating']) {
      const index = changes['rating'].currentValue;
      this.initNumbers(index);
    }
  }

  initNumbers(index: number) {
    this.numbers = Array(5).fill(1, 0, index).fill(0, index);
  }

  ngOnInit(): void {}
}

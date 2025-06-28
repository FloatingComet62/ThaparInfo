import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-year-picker',
  imports: [],
  templateUrl: './year-picker.component.html',
  styleUrl: './year-picker.component.scss'
})
export class YearPickerComponent implements OnInit {
  @Output() choosenOption = new EventEmitter<string>();
  options = ["Year 1", "Year 2", "Year 3", "Year 4"]
  choosenOptionStr: string = '';

  ngOnInit(): void {
    this.choosenOptionStr = this.options[0];
    this.choosenOption.emit(this.choosenOptionStr);
  }

  choose(event: MouseEvent) {
    this.choosenOptionStr = (event.target as HTMLButtonElement).innerText || this.options[0];
    this.choosenOption.emit(this.choosenOptionStr);
  }
}

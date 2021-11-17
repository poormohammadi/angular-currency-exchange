import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() value?: number;
  @Input() error?: string;
  @Input() type: 'withdraw' | 'deposit' = 'withdraw';
  @Input() disabled?: boolean;

  @Output() valueChange = new EventEmitter<number>();

  constructor() { }

  onValeChange(e: number) {
    this.value = e;
    this.valueChange.emit(e);
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mbol',
  templateUrl: './mbol.component.html',
  styleUrls: ['./mbol.component.css']
})
export class MBOLComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

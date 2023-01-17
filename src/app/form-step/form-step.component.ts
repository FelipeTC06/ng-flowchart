import { Component, OnInit } from '@angular/core';
import { NgFlowchartStepComponent } from '@joelwenzel/ng-flowchart';

@Component({
  selector: 'app-form-step',
  templateUrl: './form-step.component.html',
  styleUrls: ['./form-step.component.scss']
})
export class FormStepComponent extends NgFlowchartStepComponent implements OnInit {

  ngOnInit(): void {
  }

}

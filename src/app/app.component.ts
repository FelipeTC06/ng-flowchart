import { Component, TemplateRef, ViewChild, OnInit } from '@angular/core';
import {
  NgFlowchartCanvasDirective,
  NgFlowchartStepRegistry,
  NgFlowchart
} from '@joelwenzel/ng-flowchart';
import { CustomStepComponent } from './custom-step/custom-step.component';

import { CanvasStepComponent } from './canvas-step/canvas-step.component';
import { FormStepComponent } from './form-step/form-step.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public callbacks: NgFlowchart.Callbacks = {};
  public options: NgFlowchart.Options = {
    stepGap: 30,
    rootPosition: 'FREE'
  };

  @ViewChild('normalStep')
  normalStepTemplate: TemplateRef<any>;

  sampleJson =
    '{"root":{"id":"s1624206175876","type":"nested-flow","data":{"name":"Nested Flow","nested":{"root":{"id":"s1624206177187","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[{"id":"s1624206178618","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[]},{"id":"s1624206180286","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[]}]}}},"children":[{"id":"s1624206181654","type":"log","data":{"name":"Log","icon":{"name":"log-icon","color":"blue"},"config":{"message":null,"severity":null}},"children":[]}]}}';

  items = [
    {
      name: 'Start Process',
      type: 'sample-step',
      data: {
        name: 'Start Process',
        config: {
          message: null,
          severity: null
        }
      }
    }
  ];

  customOps = [
    {
      paletteName: 'My Step',
      step: {
        template: CustomStepComponent,
        type: 'router',
        data: {
          name: 'My step'
        }
      }
    },
    {
      paletteName: 'New Register',
      step: {
        template: FormStepComponent,
        type: 'do-action',
        data: {
          name: 'New Register'
        }
      }

    },
    {
      paletteName: 'Whatsapp',
      step: {
        template: FormStepComponent,
        type: 'do-action',
        data: {
          name: 'Whatsapp'
        }
      }

    },
    {
      paletteName: 'Canvas',
      step: {
        template: CanvasStepComponent,
        type: 'testStep',
        data: {
          name: 'Canvas'
        }
      }

    }
  ];

  @ViewChild(NgFlowchartCanvasDirective)
  canvas: NgFlowchartCanvasDirective;

  public disabled = false;

  constructor(private stepRegistry: NgFlowchartStepRegistry) {
    this.callbacks.onDropError = this.onDropError;
    this.callbacks.onMoveError = this.onMoveError;
  }

  public ngAfterViewInit() {
    // this.stepRegistry.registerStep('rest-get', this.normalStepTemplate);
    this.stepRegistry.registerStep('log', this.normalStepTemplate);
    this.stepRegistry.registerStep('nested-flow', CanvasStepComponent);
    this.showUpload();
  }

  public onDropError(error: NgFlowchart.DropError) {
    console.log(error);
  }

  public onMoveError(error: NgFlowchart.MoveError) {
    console.log(error);
  }

  public showUpload() {
    this.canvas.getFlow().upload(this.sampleJson);
  }

  public showFlowData() {
    let json = this.canvas.getFlow().toJSON(4);

    var x = window.open();
    x?.document.open();
    x?.document.write(
      '<html><head><title>Flowchart Json</title></head><body><pre>' +
      json +
      '</pre></body></html>'
    );
    x?.document.close();
  }

  public clearData() {
    this.canvas.getFlow().clear();
  }

  public onGapChanged(event: any) {
    this.options = {
      ...this.options,
      stepGap: parseInt(event.target.value)
    };
  }

  public onSequentialChange(event: any) {
    this.options = {
      ...this.options,
      isSequential: event.target.checked
    };
  }

  public onOrientationChange(event) {
    this.canvas.setOrientation(
      event.target.checked ? 'HORIZONTAL' : 'VERTICAL'
    );
  }

  public onDelete(id: any) {
    this.canvas
      .getFlow()
      .getStep(id)
      .destroy(true);
  }
}

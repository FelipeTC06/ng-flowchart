import { Component, OnInit } from '@angular/core';
import { NgFlowchart, NgFlowchartStepComponent } from '@joelwenzel/ng-flowchart';
import { RouteStepComponent } from './route-step/route-step.component';

@Component({
  selector: 'app-custom-step',
  templateUrl: './custom-step.component.html',
  styleUrls: ['./custom-step.component.scss']
})
export class CustomStepComponent extends NgFlowchartStepComponent {

  public routes: any = [];

  public canDrop(dropEvent: NgFlowchart.DropTarget): boolean {
    return true;
  }

  public canDeleteStep(): boolean {
    return true;
  }

  public getDropPositionsForStep(pendingStep: NgFlowchart.PendingStep): NgFlowchart.DropPosition[] {
    if (pendingStep.template !== RouteStepComponent) {
      return ['ABOVE', 'LEFT', 'RIGHT'];
    }
    else {
      return ['BELOW'];
    }
  }

  public onAddRoute() {
    let route = {
      name: 'New Route',
      condition: '',
      sequence: null
    }
    let index = this.routes.push(route);
    route.sequence = index;

    this.addChild({
      template: RouteStepComponent, //another custom step
      type: 'route-step',
      data: route
    }, {
      sibling: true
    });
  }

  public delete() {
    //recursively delete
    this.destroy(true);
  }


}

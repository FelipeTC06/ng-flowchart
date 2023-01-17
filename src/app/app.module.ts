import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFlowchartModule } from '@joelwenzel/ng-flowchart';

import { AppComponent } from './app.component';
import { CanvasStepComponent } from './canvas-step/canvas-step.component';
import { CustomStepComponent } from './custom-step/custom-step.component';
import { RouteStepComponent } from './custom-step/route-step/route-step.component';
import { FormStepComponent } from './form-step/form-step.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasStepComponent,
    CustomStepComponent,
    RouteStepComponent,
    FormStepComponent
  ],
  imports: [
    BrowserModule,
    NgFlowchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

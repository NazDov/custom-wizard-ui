import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStep } from '../wizard-properties.model';

@Component({
  selector: 'app-step-navigation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-navigation.component.html',
  styleUrl: './step-navigation.component.scss'
})
export class StepNavigationComponent implements OnInit {

  @Input()
  steps?: WizardStep[];
  @Output() onActiveStepChange: EventEmitter<WizardStep> = new EventEmitter<WizardStep>;
  nextBtnDisabled: boolean = false;
  backBtnDisabled: boolean = false;
  activeStep?: WizardStep;
  totalSteps: number = 0;
  

  ngOnInit(): void {
    if (!this.steps) {
      throw Error("app-step-navigation [steps] property not provided");
    }

    this.activeStep = this.steps[0];
    this.totalSteps = this.steps.length;
    this.backBtnDisabled = true;

    if (this.activeStep) {
      this.onActiveStepChange.emit(this.activeStep);
    }
  }


  public goToNextStep() {
    this.backBtnDisabled = false;

    if (this.activeStep) {
      let activeStepIndex = this.steps!.indexOf(this.activeStep);

      if (activeStepIndex + 1 < this.totalSteps) {
        this.activeStep = this.steps?.at(activeStepIndex + 1);
        this.onActiveStepChange.emit(this.activeStep);

        activeStepIndex = this.steps!.indexOf(this.activeStep!);

        if (activeStepIndex == this.totalSteps - 1) {
           this.nextBtnDisabled = true;
        }

      } else {

        this.nextBtnDisabled = true;
      }
    }
  }


  public goToPrevStep() {
    this.nextBtnDisabled = false;

    if (this.activeStep) {

      let activeStepIndex = this.steps!.indexOf(this.activeStep);

      if (activeStepIndex > 0) {
        this.activeStep = this.steps?.at(activeStepIndex - 1);
        this.onActiveStepChange.emit(this.activeStep);

        activeStepIndex = this.steps!.indexOf(this.activeStep!);

        if (activeStepIndex == 0) {
           this.backBtnDisabled = true;
        }

      } else {

        this.backBtnDisabled = true;
      }
    }
  }

}

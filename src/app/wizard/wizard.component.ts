import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardProperties, WizardStep } from './wizard-properties.model';
import { StepBarComponent } from './step-bar/step-bar.component';
import { StepContentComponent } from './step-content/step-content.component';
import { StepNavigationComponent } from './step-navigation/step-navigation.component';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [CommonModule, StepBarComponent, StepContentComponent, StepNavigationComponent],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss'
})
export class WizardComponent implements OnInit {
 
  @Input()
  properties?: WizardProperties;
  activeStep?: WizardStep;


  public ngOnInit(): void {
  
  }

  public onActiveStepChange($event: WizardStep) {
    this.activeStep = $event;
  }
}

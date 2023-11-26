import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardProperties } from './wizard-properties.model';
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
export class WizardComponent {

  @Input()
  properties?: WizardProperties;

}

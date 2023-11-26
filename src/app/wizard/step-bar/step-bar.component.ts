import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardStep } from '../wizard-properties.model';

@Component({
  selector: 'app-step-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-bar.component.html',
  styleUrl: './step-bar.component.scss'
})
export class StepBarComponent {

  @Input()
  steps?: WizardStep[];

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WizardComponent } from './wizard/wizard.component';
import { WizardProperties } from './wizard/wizard-properties.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, WizardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'custom-ui-wizard';

  properties: WizardProperties = {
    steps: [
      {
        id: 1,
        label: "1",
        content: "Step 1",
        next: 2,
      },
      {
        id: 2,
        label: "2",
        content: "Step 2",
        next: 3
      },
      {
        id: 3,
        label: "3",
        content: "Step 3"
      },
      {
        id: 4,
        label: "4",
        content: "Step 4"
      }
    ]
  }
}

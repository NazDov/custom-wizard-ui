import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-content.component.html',
  styleUrl: './step-content.component.scss'
})
export class StepContentComponent {

  @Input() content?: string;

}

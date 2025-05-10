import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Result } from '../result';
import { ForkifyServiceService } from '../forkify-service.service';

@Component({
  selector: 'app-result',
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  @Input() results: Result[] = [];

  constructor(private forkifyServiceService: ForkifyServiceService) {}
  getResultId(value: string) {
    this.forkifyServiceService.changeMessage(value);
  }
}



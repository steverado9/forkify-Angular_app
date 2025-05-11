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
  //input content from parent component
  @Input() results: Result[] = [];

  //injects folkifyservice into the result component
  constructor(private forkifyServiceService: ForkifyServiceService) {}

  //function to get result.recipe_id and sends it to the forkifyservice
  getResultId(value: string) {
    this.forkifyServiceService.changeMessage(value);
  }
}



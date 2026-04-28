import { Component, input } from '@angular/core';
import { RankedEmployee } from '../../models/employee.model';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrl: './podium.component.scss',
  standalone: true,
})
export class PodiumComponent {
  top3 = input<RankedEmployee[]>([]);
}

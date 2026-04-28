import { Component, input } from '@angular/core';
import { RankedEmployee } from '../../models/employee.model';
import { EmployeeRowComponent } from '../employee-row/employee-row.component';

@Component({
  selector: 'app-ranked-list',
  templateUrl: './ranked-list.component.html',
  styleUrl: './ranked-list.component.scss',
  standalone: true,
  imports: [EmployeeRowComponent],
})
export class RankedListComponent {
  employees = input<RankedEmployee[]>([]);
}

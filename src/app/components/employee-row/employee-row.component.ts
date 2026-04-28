import { Component, input, signal } from '@angular/core';
import { ActivityCategory, RankedEmployee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-row',
  templateUrl: './employee-row.component.html',
  styleUrl: './employee-row.component.scss',
  standalone: true,
  host: { class: 'employee-row-host' }
})
export class EmployeeRowComponent {
  employee = input.required<RankedEmployee>();
  expanded = signal(false);

  toggle(): void {
    this.expanded.update(v => !v);
  }

  categoryClass(cat: ActivityCategory): string {
    const map: Record<ActivityCategory, string> = {
      'Public Speaking': 'badge badge--speaking',
      'Education': 'badge badge--education',
      'University Partners': 'badge badge--university'
    };
    return map[cat];
  }
}

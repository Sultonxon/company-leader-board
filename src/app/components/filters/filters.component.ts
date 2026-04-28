import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FilterState } from '../../models/employee.model';
import { LeaderboardService } from '../../services/leaderboard.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  standalone: true,
})
export class FiltersComponent {
  service = inject(LeaderboardService);
  filterState = toSignal(this.service.filterState$, {
    initialValue: { year: 'all', quarter: 'all', category: 'all', search: '' } as FilterState
  });

  onYearChange(e: Event): void {
    this.service.updateFilter({ year: (e.target as HTMLSelectElement).value });
  }

  onQuarterChange(e: Event): void {
    this.service.updateFilter({ quarter: (e.target as HTMLSelectElement).value });
  }

  onCategoryChange(e: Event): void {
    this.service.updateFilter({ category: (e.target as HTMLSelectElement).value });
  }

  onSearchInput(e: Event): void {
    this.service.updateFilter({ search: (e.target as HTMLInputElement).value });
  }
}

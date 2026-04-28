import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RankedEmployee } from '../../models/employee.model';
import { LeaderboardService } from '../../services/leaderboard.service';
import { FiltersComponent } from '../filters/filters.component';
import { PodiumComponent } from '../podium/podium.component';
import { RankedListComponent } from '../ranked-list/ranked-list.component';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss',
  standalone: true,
  imports: [FiltersComponent, PodiumComponent, RankedListComponent],
})
export class LeaderboardComponent {
  private service = inject(LeaderboardService);

  employees = toSignal(this.service.filteredEmployees$, {
    initialValue: [] as RankedEmployee[]
  });

  top3 = computed(() => this.employees().slice(0, 3));
  rankedList = computed(() => this.employees().slice(3));
}

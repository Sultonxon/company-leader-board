import { Routes } from '@angular/router';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';

export const routes: Routes = [
  { path: '', component: LeaderboardComponent },
  { path: '**', redirectTo: '' }
];

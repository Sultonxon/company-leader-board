import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Activity, ActivityCategory, Employee, FilterState, RankedEmployee } from '../models/employee.model';
import { EMPLOYEES } from '../mock-data/employees.mock';

const MONTH_MAP: Record<string, number> = {
  Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
  Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
};

function getYear(date: string): number {
  return parseInt(date.split('-')[2]);
}

function getQuarter(date: string): number {
  const month = MONTH_MAP[date.split('-')[1]];
  return Math.ceil(month / 3);
}

@Injectable({ providedIn: 'root' })
export class LeaderboardService {
  readonly years = ['all', '2025'];
  readonly quarters = ['all', 'Q1', 'Q2', 'Q3', 'Q4'];
  readonly categories: string[] = ['all', 'Education', 'Public Speaking', 'University Partners'];

  private filtersSubject = new BehaviorSubject<FilterState>({
    year: 'all',
    quarter: 'all',
    category: 'all',
    search: ''
  });

  filterState$: Observable<FilterState> = this.filtersSubject.asObservable();

  filteredEmployees$: Observable<RankedEmployee[]> = this.filtersSubject.pipe(
    map(filters => this.computeRanking(EMPLOYEES, filters))
  );

  updateFilter(partial: Partial<FilterState>): void {
    this.filtersSubject.next({ ...this.filtersSubject.value, ...partial });
  }

  private computeRanking(employees: Employee[], filters: FilterState): RankedEmployee[] {
    const hasContentFilter =
      filters.year !== 'all' || filters.quarter !== 'all' || filters.category !== 'all';

    let result = employees
      .map(emp => this.buildRankedEmployee(emp, filters))
      .filter(emp => !hasContentFilter || emp.totalPoints > 0);

    if (filters.search.trim()) {
      const q = filters.search.toLowerCase();
      result = result.filter(e => e.name.toLowerCase().includes(q));
    }

    result.sort((a, b) => {
      if (b.totalPoints !== a.totalPoints) return b.totalPoints - a.totalPoints;
      return b.filteredActivities.length - a.filteredActivities.length;
    });

    result.forEach((e, i) => (e.rank = i + 1));
    return result;
  }

  private buildRankedEmployee(emp: Employee, filters: FilterState): RankedEmployee {
    let activities = emp.activities;

    if (filters.year !== 'all') {
      const year = parseInt(filters.year);
      activities = activities.filter(a => getYear(a.date) === year);
    }

    if (filters.quarter !== 'all') {
      const q = parseInt(filters.quarter.replace('Q', ''));
      activities = activities.filter(a => getQuarter(a.date) === q);
    }

    if (filters.category !== 'all') {
      activities = activities.filter(a => a.category === (filters.category as ActivityCategory));
    }

    const totalPoints = activities.reduce((sum, a) => sum + a.points, 0);
    const presentationCount = activities.filter(a => a.category === 'Public Speaking').length;
    const educationCount = activities.filter(a => a.category === 'Education').length;
    const universityPartnersCount = activities.filter(a => a.category === 'University Partners').length;

    return {
      id: emp.id,
      name: emp.name,
      title: emp.title,
      orgUnit: emp.orgUnit,
      avatarUrl: emp.avatarUrl,
      rank: 0,
      totalPoints,
      presentationCount,
      educationCount,
      universityPartnersCount,
      filteredActivities: activities
    };
  }
}

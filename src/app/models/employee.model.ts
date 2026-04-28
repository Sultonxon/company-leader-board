export type ActivityCategory = 'Public Speaking' | 'Education' | 'University Partners';

export interface Activity {
  title: string;
  category: ActivityCategory;
  date: string;
  points: number;
}

export interface Employee {
  id: number;
  name: string;
  title: string;
  orgUnit: string;
  avatarUrl: string;
  activities: Activity[];
}

export interface RankedEmployee {
  id: number;
  name: string;
  title: string;
  orgUnit: string;
  avatarUrl: string;
  rank: number;
  totalPoints: number;
  presentationCount: number;
  educationCount: number;
  universityPartnersCount: number;
  filteredActivities: Activity[];
}

export interface FilterState {
  year: string;
  quarter: string;
  category: string;
  search: string;
}

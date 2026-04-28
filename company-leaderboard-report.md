# Project Description Report: Company Leaderboard

## Overview

**Project Name:** Company Leaderboard  
**Frontend Framework:** Angular  
**Data Layer:** Mock data (no backend)  
**Document Version:** 1.0  
**Date:** April 2026  

---

## Purpose

The Company Leaderboard is an internal web application that visualizes employee activity rankings based on earned points. Employees accumulate points through categorized activities such as Public Speaking, Education, and University Partnerships. The leaderboard fosters engagement and recognition by surfacing top contributors across the organization.

---

## Scope

This project covers **frontend only**. No real backend or API integration is included. All data is served through local mock data files with simulated filtering and sorting logic implemented in Angular services.

---

## Key Features

### 1. Podium View (Top 3)
- Visual podium displaying rank 1, 2, and 3 employees
- Employee avatar, name, job title, organizational unit code, and total points shown per position
- Gold highlight for 1st place; silver and bronze styling for 2nd and 3rd

### 2. Ranked List View
- Full ranked list of all employees below the podium
- Each row shows: rank number, avatar, name, title, org unit, activity counts by type, and total points
- Expandable rows to reveal recent activity details (activity name, category, date, points earned)

### 3. Filtering
| Filter | Options |
|--------|---------|
| Year | All Years, 2025 |
| Quarter | All Quarters, Q1, Q2, Q3, Q4 |
| Category | All Categories, Education, Public Speaking, University Partners... |

- Filters are applied simultaneously and update both the podium and the ranked list
- Filtering logic is handled client-side using mock data

### 4. Employee Search
- Search bar to filter employees by name in real time

### 5. Activity Detail (Expandable Row)
- Clicking a row expands to show the employee's recent activity log
- Columns: Activity Name, Category, Date, Points

---

## Mock Data Structure

Since there is no backend, all data is defined locally. The mock dataset includes:

```ts
// Employee
{
  id: number;
  name: string;
  title: string;
  orgUnit: string;       // e.g. "SK.U1.D1.G1"
  avatarUrl: string;
  totalPoints: number;
  activityCounts: {
    presentations: number;
    education: number;
  };
  recentActivity: Activity[];
}

// Activity
{
  title: string;
  category: 'Public Speaking' | 'Education' | 'University Partners';
  date: string;          // e.g. "17-Dec-2025"
  points: number;
}
```

---

## Angular Architecture

### Module Structure
```
src/
├── app/
│   ├── components/
│   │   ├── leaderboard/          # Main leaderboard page
│   │   ├── podium/               # Top-3 podium display
│   │   ├── ranked-list/          # Full employee list
│   │   ├── employee-row/         # Single expandable row
│   │   └── filters/              # Year / Quarter / Category / Search
│   ├── services/
│   │   └── leaderboard.service.ts  # Filtering, sorting, data access
│   ├── models/
│   │   └── employee.model.ts
│   └── mock-data/
│       └── employees.mock.ts
```

### Key Service Responsibilities
- Load and expose mock employee data
- Apply year, quarter, category, and search filters reactively (RxJS)
- Sort employees by total points descending
- Expose filtered list as an Observable for components to consume

---

## UI/UX Notes

- Responsive layout supporting desktop and tablet widths
- Podium section is fixed at the top; ranked list scrolls below
- Active filters persist while navigating or expanding rows
- Ties in points are ordered by number of activities (secondary sort)
- Avatar images: use placeholder images for mock data (e.g. `ui-avatars.com` or local assets)

---

## Out of Scope

- User authentication / login
- Real backend or API integration
- Admin panel or point management
- Notifications or email alerts
- Mobile-native layout (responsive desktop/tablet only)

---

## Deliverables

- Angular project source code
- Mock data file with at least 10 sample employees
- README with setup and run instructions

---

## Setup & Run

```bash
# Install dependencies
npm install

# Start dev server
ng serve

# Navigate to
http://localhost:4200
```

---

*This document describes the frontend-only MVP of the Company Leaderboard application using Angular with local mock data.*

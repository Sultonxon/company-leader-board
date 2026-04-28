# CompanyLeaderBoard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.8.

# Tools

**Claude chat**: for designing prompt
**Claude code**: for implementation project using prepared prompt

## We created raw prompt as below, then improved this prompt using claude chat to make prompt completely ready to start coding. Final resulted prompt is available in company-leaderboard-report.md file in this repository

```
Project name: Company Leader Board

Stack: Angular

We will build Company leader board frontend only, and will use mock data instead of full featured backend.

UI elements:
 1. Filters:
    - Filter by years, by default all years
    - Filter by quarters, by default all quarters
    - Filter by categories, by default all categories(Education, Public Speaking, University partners)
    - Search from employee full name

 2. Top 3 employees
    - Visual podium displaying rank 1, 2, and 3 employees
    - Employee avatar, name, job title, organizational unit code, and total points shown per position
    - Gold highlight for 1st place; silver and bronze styling for 2nd and 3rd
 3. Ranked List View:
    - Full ranked list of all employees below the podium
    - Each row shows: rank number, avatar, name, title, org unit, activity counts by type, and total points
    - Expandable rows to reveal recent activity details (activity name, category, date, points earned)

```

## Live Demo

https://sultonxon.github.io/company-leader-board

## To automate deployment we created github actions workflow

```
Prompt: Create workflow filr for github actions to deploy this app to giuthub pages. workflow runs when pushed or committed to main branch
```

Deploying this kind of static web sites is strightforward and there are known techniques, so we don't need to provide technical details for this. Coding agents and chat bots are very capable to perform repetative tasks and implementing well known protocol and techniques.
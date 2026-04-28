import { Employee } from '../models/employee.model';

export const EMPLOYEES: Employee[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    title: 'Senior Software Engineer',
    orgUnit: 'SK.U1.D1.G1',
    avatarUrl: 'https://ui-avatars.com/api/?name=Sarah+Johnson&background=4F46E5&color=fff&size=80&rounded=true',
    activities: [
      { title: 'Microservices Architecture Talk', category: 'Public Speaking', date: '15-Jan-2025', points: 50 },
      { title: 'AWS Solutions Architect Certification', category: 'Education', date: '20-Feb-2025', points: 30 },
      { title: 'University Guest Lecture Series', category: 'University Partners', date: '10-Mar-2025', points: 40 },
      { title: 'Tech Conference Keynote', category: 'Public Speaking', date: '05-Apr-2025', points: 65 },
      { title: 'Docker & Kubernetes Advanced', category: 'Education', date: '18-May-2025', points: 25 },
      { title: 'Startup Mentorship Workshop', category: 'University Partners', date: '22-Jul-2025', points: 35 },
      { title: 'Angular 17 Deep Dive Workshop', category: 'Public Speaking', date: '14-Sep-2025', points: 45 },
      { title: 'Cloud Native Certification', category: 'Education', date: '30-Oct-2025', points: 30 },
    ]
  },
  {
    id: 2,
    name: 'Michael Chen',
    title: 'Data Scientist',
    orgUnit: 'SK.U1.D2.G3',
    avatarUrl: 'https://ui-avatars.com/api/?name=Michael+Chen&background=0EA5E9&color=fff&size=80&rounded=true',
    activities: [
      { title: 'Machine Learning in Production', category: 'Public Speaking', date: '22-Jan-2025', points: 50 },
      { title: 'Deep Learning Specialization', category: 'Education', date: '15-Feb-2025', points: 30 },
      { title: 'University Data Science Seminar', category: 'University Partners', date: '20-Mar-2025', points: 40 },
      { title: 'Big Data Summit Presentation', category: 'Public Speaking', date: '10-Jun-2025', points: 55 },
      { title: 'Python Advanced Workshop', category: 'Education', date: '08-Aug-2025', points: 25 },
      { title: 'Neural Networks Masterclass', category: 'Public Speaking', date: '25-Sep-2025', points: 45 },
      { title: 'TensorFlow Developer Certificate', category: 'Education', date: '05-Nov-2025', points: 30 },
    ]
  },
  {
    id: 3,
    name: 'David Martinez',
    title: 'Solution Architect',
    orgUnit: 'SK.U2.D1.G2',
    avatarUrl: 'https://ui-avatars.com/api/?name=David+Martinez&background=10B981&color=fff&size=80&rounded=true',
    activities: [
      { title: 'Enterprise Architecture Forum', category: 'Public Speaking', date: '10-Feb-2025', points: 60 },
      { title: 'TOGAF Certification', category: 'Education', date: '28-Feb-2025', points: 35 },
      { title: 'Campus Recruitment Drive', category: 'University Partners', date: '15-Apr-2025', points: 45 },
      { title: 'Cloud Migration Workshop', category: 'Public Speaking', date: '20-Jun-2025', points: 50 },
      { title: 'University Partnership Program', category: 'University Partners', date: '10-Sep-2025', points: 40 },
      { title: 'Azure Solutions Architect', category: 'Education', date: '20-Nov-2025', points: 30 },
    ]
  },
  {
    id: 4,
    name: 'Thomas Brown',
    title: 'Tech Lead',
    orgUnit: 'SK.U1.D3.G1',
    avatarUrl: 'https://ui-avatars.com/api/?name=Thomas+Brown&background=F59E0B&color=fff&size=80&rounded=true',
    activities: [
      { title: 'DevOps Best Practices Talk', category: 'Public Speaking', date: '08-Jan-2025', points: 45 },
      { title: 'Leadership in Tech Course', category: 'Education', date: '25-Mar-2025', points: 30 },
      { title: 'Hackathon Mentorship', category: 'University Partners', date: '18-Apr-2025', points: 40 },
      { title: 'Agile Methodology Summit', category: 'Public Speaking', date: '12-Jul-2025', points: 50 },
      { title: 'PMP Certification', category: 'Education', date: '22-Aug-2025', points: 35 },
      { title: 'Code Review Culture Workshop', category: 'Public Speaking', date: '15-Oct-2025', points: 45 },
    ]
  },
  {
    id: 5,
    name: 'Priya Patel',
    title: 'Frontend Developer',
    orgUnit: 'SK.U3.D1.G4',
    avatarUrl: 'https://ui-avatars.com/api/?name=Priya+Patel&background=EC4899&color=fff&size=80&rounded=true',
    activities: [
      { title: 'React vs Angular Debate', category: 'Public Speaking', date: '30-Jan-2025', points: 45 },
      { title: 'Web Accessibility Course', category: 'Education', date: '14-Mar-2025', points: 25 },
      { title: 'UI/UX University Seminar', category: 'University Partners', date: '25-May-2025', points: 40 },
      { title: 'Frontend Performance Workshop', category: 'Public Speaking', date: '18-Aug-2025', points: 50 },
      { title: 'TypeScript Masterclass', category: 'Education', date: '10-Oct-2025', points: 30 },
    ]
  },
  {
    id: 6,
    name: 'Emily Rodriguez',
    title: 'Product Manager',
    orgUnit: 'SK.U2.D2.G1',
    avatarUrl: 'https://ui-avatars.com/api/?name=Emily+Rodriguez&background=8B5CF6&color=fff&size=80&rounded=true',
    activities: [
      { title: 'Product Strategy Presentation', category: 'Public Speaking', date: '12-Feb-2025', points: 45 },
      { title: 'Scrum Master Certification', category: 'Education', date: '05-Apr-2025', points: 30 },
      { title: 'University Product Management Talk', category: 'University Partners', date: '15-Jun-2025', points: 35 },
      { title: 'Customer Journey Workshop', category: 'Public Speaking', date: '20-Sep-2025', points: 45 },
      { title: 'OKR Framework Course', category: 'Education', date: '15-Nov-2025', points: 25 },
    ]
  },
  {
    id: 7,
    name: 'Robert Kim',
    title: 'Machine Learning Engineer',
    orgUnit: 'SK.U2.D3.G1',
    avatarUrl: 'https://ui-avatars.com/api/?name=Robert+Kim&background=EF4444&color=fff&size=80&rounded=true',
    activities: [
      { title: 'Generative AI Workshop', category: 'Public Speaking', date: '18-Mar-2025', points: 55 },
      { title: 'MLOps Certification', category: 'Education', date: '22-Apr-2025', points: 30 },
      { title: 'University AI Research Talk', category: 'University Partners', date: '30-Jun-2025', points: 40 },
      { title: 'Computer Vision Presentation', category: 'Public Speaking', date: '12-Nov-2025', points: 45 },
    ]
  },
  {
    id: 8,
    name: 'Laura Thompson',
    title: 'Backend Engineer',
    orgUnit: 'SK.U3.D2.G3',
    avatarUrl: 'https://ui-avatars.com/api/?name=Laura+Thompson&background=D97706&color=fff&size=80&rounded=true',
    activities: [
      { title: 'API Design Workshop', category: 'Public Speaking', date: '25-Jan-2025', points: 40 },
      { title: 'Spring Boot Advanced Course', category: 'Education', date: '18-Apr-2025', points: 25 },
      { title: 'Database Optimization Talk', category: 'Public Speaking', date: '22-Jul-2025', points: 35 },
      { title: 'Microservices Certification', category: 'Education', date: '08-Sep-2025', points: 30 },
      { title: 'University Backend Workshop', category: 'University Partners', date: '20-Oct-2025', points: 35 },
    ]
  },
  {
    id: 9,
    name: 'James Wilson',
    title: 'DevOps Engineer',
    orgUnit: 'SK.U1.D4.G2',
    avatarUrl: 'https://ui-avatars.com/api/?name=James+Wilson&background=06B6D4&color=fff&size=80&rounded=true',
    activities: [
      { title: 'CI/CD Pipeline Best Practices', category: 'Public Speaking', date: '20-Feb-2025', points: 45 },
      { title: 'Kubernetes Administrator Certification', category: 'Education', date: '10-Apr-2025', points: 35 },
      { title: 'Campus DevOps Workshop', category: 'University Partners', date: '14-Jul-2025', points: 35 },
      { title: 'Infrastructure as Code Talk', category: 'Public Speaking', date: '05-Oct-2025', points: 45 },
    ]
  },
  {
    id: 10,
    name: 'Mei Zhang',
    title: 'Cloud Engineer',
    orgUnit: 'SK.U1.D2.G4',
    avatarUrl: 'https://ui-avatars.com/api/?name=Mei+Zhang&background=14B8A6&color=fff&size=80&rounded=true',
    activities: [
      { title: 'Multi-Cloud Strategy Talk', category: 'Public Speaking', date: '14-Mar-2025', points: 45 },
      { title: 'GCP Professional Certification', category: 'Education', date: '30-May-2025', points: 35 },
      { title: 'Cloud Computing University Lecture', category: 'University Partners', date: '15-Aug-2025', points: 40 },
      { title: 'FinOps Practitioner Course', category: 'Education', date: '25-Nov-2025', points: 30 },
    ]
  },
  {
    id: 11,
    name: 'Omar Hassan',
    title: 'Security Engineer',
    orgUnit: 'SK.U3.D3.G1',
    avatarUrl: 'https://ui-avatars.com/api/?name=Omar+Hassan&background=059669&color=fff&size=80&rounded=true',
    activities: [
      { title: 'Cybersecurity Threat Landscape', category: 'Public Speaking', date: '10-Jan-2025', points: 45 },
      { title: 'CEH Certification', category: 'Education', date: '20-Mar-2025', points: 35 },
      { title: 'Security Workshop for Students', category: 'University Partners', date: '05-Sep-2025', points: 40 },
    ]
  },
  {
    id: 12,
    name: 'Anna Kovacs',
    title: 'QA Engineer',
    orgUnit: 'SK.U2.D4.G2',
    avatarUrl: 'https://ui-avatars.com/api/?name=Anna+Kovacs&background=7C3AED&color=fff&size=80&rounded=true',
    activities: [
      { title: 'Test Automation Workshop', category: 'Public Speaking', date: '28-Feb-2025', points: 40 },
      { title: 'ISTQB Advanced Certification', category: 'Education', date: '15-May-2025', points: 35 },
      { title: 'Quality Assurance University Talk', category: 'University Partners', date: '10-Oct-2025', points: 35 },
    ]
  }
];

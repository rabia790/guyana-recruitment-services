
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  image: string;
  points: string[];
}

export interface NavItem {
  label: string;
  path: string;
}

export enum StaffingType {
  PERMANENT = 'Permanent Staffing',
  TEMPORARY = 'Temporary Staffing',
  CONTRACT = 'Contract Staffing',
  PROJECT = 'Project Based Staffing',
  EXECUTIVE = 'Executive Search',
  OUTSOURCING = 'Workforce Outsourcing'
}

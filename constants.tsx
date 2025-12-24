
import React from 'react';
import { Briefcase, Users, Clock, Zap, Target, Globe, Heart, Fuel, Hotel } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'About', path: '/about' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'perm',
    title: 'Permanent Staffing',
    description: 'Direct hire solutions ensuring long-term cultural and professional alignment for your core team.',
    icon: <Users className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 'temp',
    title: 'Temporary Staffing',
    description: 'Agile workforce solutions to handle seasonal peaks or unexpected vacancies in hospitality and healthcare.',
    icon: <Clock className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 'contract',
    title: 'Contract Staffing',
    description: 'Specialized talent for technical and mid-level roles, ideal for the fluctuating demands of Oil & Gas.',
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 'project',
    title: 'Project Based Staffing',
    description: 'Scaling entire teams for specific milestones, maintenance shutdowns, or new facility launches.',
    icon: <Zap className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 'exec',
    title: 'Executive Search',
    description: 'Discreet, high-level recruitment for leadership roles that drive regional growth and strategy.',
    icon: <Target className="w-8 h-8 text-blue-600" />,
  },
  {
    id: 'outsourcing',
    title: 'Workforce Outsourcing',
    description: 'End-to-end management of personnel, payroll, and compliance, letting you focus on core operations.',
    icon: <Globe className="w-8 h-8 text-blue-600" />,
  },
];

export const INDUSTRIES = [
  {
    id: 'energy',
    name: 'Oil and Gas',
    description: 'Providing technical expertise and safety-first personnel for the backbone of the Trinidadian economy.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1200',
    icon: <Fuel className="w-6 h-6" />,
    points: ['Rig Personnel', 'Safety Officers', 'Technical Engineers', 'STOW Compliance Support'],
  },
  {
    id: 'health',
    name: 'Healthcare',
    description: 'Supplying compassionate, qualified medical professionals to public and private institutions across the Caribbean.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200',
    icon: <Heart className="w-6 h-6" />,
    points: ['Registered Nurses', 'Medical Lab Techs', 'Specialized Caregivers', 'Health Admin Staff'],
  },
  {
    id: 'hosp',
    name: 'Hospitality & Hotels',
    description: 'Elevating guest experiences with world-class service talent for resorts, business hotels, and events.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200',
    icon: <Hotel className="w-6 h-6" />,
    points: ['Front of House', 'Culinary Experts', 'Housekeeping Teams', 'Event Coordinators'],
  },
];

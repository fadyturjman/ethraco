import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  partners?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  description: string;
  category: 'ICT' | 'Infrastructure' | 'Electrical' | 'Data Center';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}
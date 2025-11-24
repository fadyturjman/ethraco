import { 
  Network, 
  Cable, 
  Server, 
  Cctv, 
  Hammer, 
  PaintBucket, 
  RadioTower, 
  Zap, 
  Smartphone,
  Target,
  Eye,
  ShieldCheck
} from 'lucide-react';
import { ServiceItem, ProjectItem, ValueItem } from './types';

export const COMPANY_NAME = "Ethraa Al Hayat Arabia Co";
export const ESTABLISHED_YEAR = 2017;
export const HEADQUARTERS = "Riyadh, Saudi Arabia";

export const VALUES: ValueItem[] = [
  {
    title: "Vision",
    description: "To be the first choice for ICT and electrical projects, setting new standards for professionalism and performance.",
    icon: Eye
  },
  {
    title: "Mission",
    description: "Building long-term, trusting relationships with clients by offering innovative and integrated ICT solutions tailored to their needs.",
    icon: Target
  },
  {
    title: "Trust & Quality",
    description: "Trust is our core value. We are committed to maintaining quality, reliability, and excellence in all projects.",
    icon: ShieldCheck
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'networking',
    title: 'Networking Solutions',
    description: 'End-to-end networking solutions including product sales, custom network design, implementation, and ongoing support for security and wireless solutions.',
    icon: Network,
    partners: ['Cisco', 'Fortinet', 'Palo Alto', 'Aruba', 'Huawei']
  },
  {
    id: 'cabling',
    title: 'Network Cabling & Infrastructure',
    description: 'Supply and installation of structured cabling (Cat 6, Cat 6a, Fiber Optic), routing, trenching, and professional splicing.',
    icon: Cable,
    partners: ['CommScope', 'Corning', 'MMC']
  },
  {
    id: 'datacenter',
    title: 'Data Center Solutions',
    description: 'Complete data center services including supply, installation, and maintenance. Built on the Attom platform for energy efficiency and scalability.',
    icon: Server,
    partners: ['Attom Platform']
  },
  {
    id: 'security',
    title: 'CCTV & Security Systems',
    description: 'Comprehensive CCTV solutions, custom system design, professional installation, and centralized monitoring integration.',
    icon: Cctv,
    partners: ['Hikvision', 'Dahua']
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Construction',
    description: 'Construction of residential and commercial complexes, ensuring high-quality supervision and skilled workmanship.',
    icon: Hammer
  },
  {
    id: 'interior',
    title: 'Interior Finishes',
    description: 'Alternative wood paneling, foam wallpaper, and high-quality finishings for modern commercial and residential spaces.',
    icon: PaintBucket
  },
  {
    id: 'communication',
    title: 'Communication Services',
    description: 'Installation, operation, and maintenance of communication stations, 5G technologies, and tower links.',
    icon: RadioTower,
    partners: ['Ericsson', 'Nokia', 'STC']
  },
  {
    id: 'electrical',
    title: 'Electrical Services',
    description: 'Design and installation of electrical connections, engineering support for stations, lighting units, and meters.',
    icon: Zap
  },
  {
    id: 'smart',
    title: 'Smart Solutions',
    description: 'Smart home and building automation allowing remote control of lighting, HVAC, and security systems.',
    icon: Smartphone
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: '5G Network Expansion',
    client: 'Ericsson KSA',
    description: 'Technical and engineering support installing 500 sites and developing 100 fifth-generation communication sites.',
    category: 'ICT'
  },
  {
    id: 'p2',
    title: 'Link Development',
    client: 'STC & Nokia',
    description: 'Development and installation services for 100 links for STC and 100 links for Nokia KSA.',
    category: 'ICT'
  },
  {
    id: 'p3',
    title: 'Fiber Network Riyadh',
    client: 'STC & Salam',
    description: 'Extension of fiber-optic networks across Riyadh, connecting internet services to homes and companies.',
    category: 'ICT'
  },
  {
    id: 'p4',
    title: 'Data Center Operations',
    client: 'KAFD (King Abdullah Financial District)',
    description: 'Maintenance and operation for Data Center and fiber network, including internal/external extension and MPLS operation.',
    category: 'Data Center'
  },
  {
    id: 'p5',
    title: 'Control Room Implementation',
    client: 'Takid Company',
    description: 'Design and implementation of control room (150m), installing 19sqm screen and furniture.',
    category: 'ICT'
  },
  {
    id: 'p6',
    title: 'Solitaire Mall & Musk Complex',
    client: 'MiSK',
    description: 'Infrastructure works for Solitaire Mall (100,000 m³) and Musk Complex (>70,000 m²).',
    category: 'Infrastructure'
  },
  {
    id: 'p7',
    title: 'Electrical Meter Installation',
    client: 'Saudi Electricity Company',
    description: 'Installation of 1000 electric meters suitable for use by the Saudi Electricity Company.',
    category: 'Electrical'
  },
  {
    id: 'p8',
    title: 'Lighting Efficiency Project',
    client: 'Tarshid',
    description: 'Field surveys and installation of 11,000 lighting units for the National Energy Efficiency Services Company.',
    category: 'Electrical'
  },
  {
    id: 'p9',
    title: 'Global Restaurant Network',
    client: 'Sushi Samba',
    description: 'Design, implementation, and extension of internet and internal networks for the global restaurant group.',
    category: 'ICT'
  },
  {
    id: 'p10',
    title: 'Sela ICT Project',
    client: 'Sela',
    description: 'Main provider for SELA ICT projects including procurement, installation, deployment, project initiation and design.',
    category: 'ICT'
  }
];

export const PARTNERS = [
  { name: "Datacom", url: "https://logo.clearbit.com/datacom.com" },
  { name: "Aruba", url: "https://logo.clearbit.com/arubanetworks.com" },
  { name: "F5", url: "https://logo.clearbit.com/f5.com" },
  { name: "KAFD", url: "https://logo.clearbit.com/kafd.sa" },
  { name: "Fortinet", url: "https://logo.clearbit.com/fortinet.com" },
  { name: "Dahua", url: "https://logo.clearbit.com/dahuasecurity.com" },
  { name: "Huawei", url: "https://logo.clearbit.com/huawei.com" },
  { name: "Sela", url: "https://logo.clearbit.com/sela.sa" },
  { name: "Cisco", url: "https://logo.clearbit.com/cisco.com" },
  { name: "Palo Alto", url: "https://logo.clearbit.com/paloaltonetworks.com" },
  { name: "Hikvision", url: "https://logo.clearbit.com/hikvision.com" },
  { name: "Nokia", url: "https://logo.clearbit.com/nokia.com" },
  { name: "Ericsson", url: "https://logo.clearbit.com/ericsson.com" },
  { name: "STC", url: "https://logo.clearbit.com/stc.com.sa" },
  { name: "Salam", url: "https://logo.clearbit.com/salam.sa" },
];
export interface Socials {
  linkedin: string;
  github: string;
  jobsdb: string;
}

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  image: string;
  socials: Socials;
  sub_tagline: string;
  resume_url: string;
  email?: string;
}

export interface Education {
  degree: string;
  school: string;
  grade: number;
  date: string;
  location: string;
  logo?: string;
}

export interface Achievement {
  title: string;
  description: string;
}

export interface About {
  bio: string[];
  education: Education[];
  achievements: Achievement[];
}

export interface WorkExperience {
  company: string;
  role: string;
  location: string;
  date: string;
  points: string[];
  logo?: string;
}

export interface EducationWrapper {
  education: Education[];
}

export type ExperienceItem = WorkExperience | EducationWrapper;

export interface Project {
  name: string;
  description: string;
  role: string;
  links: string[];
  points: string[];
  image?: string;
}

export interface SkillCategory {
  name: string;
  desc: string;
  items: string[];
  logos?: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface PortfolioData {
  profile: Profile;
  about: About;
  experience: ExperienceItem[];
  projects: Project[];
  skills: Skills;
}

export type SocialPlatform =
  | 'github'
  | 'telegram'
  | 'email'
  | 'linkedin'
  | 'artstation'
  | 'itch'
  | 'googlePlay'
  | 'appStore'
  | 'steam';

export type ProjectItem = {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  role: string;
  genre: string;
  platform: string;
  stack: string[];
  linkLabel: string;
  url: string;
  image: string;
  highlights: string[];
};

export type EducationItem = {
  title: string;
  period: string;
  image: string;
  linkLabel: string;
  url: string;
};

export type TechCategory = {
  title: string;
  items: string[];
};

export type ReleaseItem = {
  title: string;
  description: string;
  status: string;
  platform: string;
  linkLabel: string;
  url: string;
  image: string;
  stack: string[];
};

export type ContactItem = {
  label: string;
  value: string;
  url: string;
  platform: SocialPlatform;
};

export type PortfolioData = {
  navigation: Array<{ label: string; href: string }>;
  hero: {
    name: string;
    role: string;
    english: string;
    experienceNote: string;
    location: string;
    age: string;
    flagIcon: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    avatar: string;
  };
  about: {
    title: string;
    description: string;
    favoriteGenres: string[];
    lookingFor: string[];
  };
  featuredProjects: ProjectItem[];
  education: EducationItem[];
  techStack: TechCategory[];
  releasedProjects: ReleaseItem[];
  contacts: ContactItem[];
  footer: {
    copyright: string;
    note: string;
  };
};

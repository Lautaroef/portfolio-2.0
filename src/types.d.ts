import type { project, technology } from "@prisma/client";

type User = {
  id: number;
  name: string;
  email: string;
  currently_building: string;
  interested_in_learning: string[];
};

type Project = {
  id: number;
  title: string;
  endDate: Date;
  image: string;
  description: string[];
  projectUrl: string;
  codeUrl: string;
  isPrivate: boolean;
  type: ProjectType;
};

type ProjectWithTechnologies = project & {
  technologies: technology[];
};

type ProjectType =
  | "LANDING_PAGE"
  | "FULL_STACK"
  | "MOBILE_APP"
  | "WEB_APP"
  | "WIDGET"
  | "BLOG"
  | "PORTFOLIO"
  | "OTHER";

type NavBarItem = {
  title: string;
  href: string;
};

type Project = {
  id: number;
  title: string;
  endDate: string | null;
  image: string;
  description: string[];
  technologies: string[];
  links: {
    seeProject: string;
    seeCode: string;
    private?: boolean;
  };
};

type Technology = {
  title: string;
  src: string;
  imageWidth?: number;
};

type NavBarItem = {
  title: string;
  to: string;
};

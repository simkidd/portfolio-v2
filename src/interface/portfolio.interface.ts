export interface IPortfolio {
  id: number;
  category: string;
  image: string;
  github: string;
  url: string;
  title: string;
  text: string;
  tags: string[];
  slug: string;
  isPublic: boolean;
}
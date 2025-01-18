export interface Project {
  id: string;
  title: string;
  date: string;
  overview: string;
  description?: string;
  motivation: string[];
  whatBuilt: string[];
  keyAchievements: string[];
  techStack: string[];
  lessonsLearned: string[];
}
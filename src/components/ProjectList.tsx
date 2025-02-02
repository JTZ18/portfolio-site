'use client';

import { Badge } from "@/components/ui/badge";
import ProjectCard from './ProjectCard';
import type { Project } from '@/types/project';

type ProjectListProps = {
  projects: Project[];
};

const MONTHS = {
  'January': 0,
  'February': 1,
  'March': 2,
  'April': 3,
  'May': 4,
  'June': 5,
  'July': 6,
  'August': 7,
  'September': 8,
  'October': 9,
  'November': 10,
  'December': 11
};

const ProjectList = ({ projects }: ProjectListProps) => {
  // Sort projects by date (most recent first)
  const sortedProjects = [...projects].sort((a, b) => {
    try {
      const [aMonth, aYear] = a.date.split(' ');
      const [bMonth, bYear] = b.date.split(' ');

      const aDate = new Date(parseInt(aYear), MONTHS[aMonth as keyof typeof MONTHS]);
      const bDate = new Date(parseInt(bYear), MONTHS[bMonth as keyof typeof MONTHS]);

      return bDate.getTime() - aDate.getTime();
    } catch (error) {
      console.error('Error sorting dates:', error);
      return 0;
    }
  });

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-4 flex-col items-start">
        <div>
          <Badge>Portfolio</Badge>
        </div>
        <div className="flex gap-2 flex-col">
          <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
            My Projects
          </h2>
          <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
            A collection of my work in AI, machine learning, and software development.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        {sortedProjects.map((project, index) => (
          <div key={project.id}>
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

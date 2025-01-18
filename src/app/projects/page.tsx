import { Suspense } from 'react';
import ProjectList from '@/components/ProjectList';
import { getProjectsData } from '@/lib/markdownParser';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  alternates: {
    canonical: '/projects'
  }
};

const ProjectsPage = async () => {
  const projects = await getProjectsData();

  return (
    <div className="relative min-h-screen bg-background">
      <BackgroundBeams className="absolute inset-0" />
      <section className="relative max-w-4xl mx-auto px-4 py-20">
        <Suspense fallback={<div className="text-muted-foreground">Loading projects...</div>}>
          <ProjectList projects={projects} />
        </Suspense>
      </section>
    </div>
  );
};

export default ProjectsPage;
import { getProjectsData } from '@/lib/markdownParser';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/ProjectDetail';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const projects = await getProjectsData();
  return projects.map((project) => ({
    id: project.id,
  }));
}

const ProjectPage = async ({ params }: Props) => {
  try {
    const resolvedParams = await params;
    const projects = await getProjectsData();
    const project = projects.find((p) => p.id === resolvedParams.id);

    if (!project) {
      notFound();
    }

    return <ProjectDetail project={project} />;
  } catch (error) {
    console.error('Error loading project:', error);
    notFound();
  }
};

export default ProjectPage;
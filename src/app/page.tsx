import { getProjectsData } from '@/lib/markdownParser';
import ProjectList from '@/components/ProjectList';
import { Suspense } from 'react';
import ScrollProgress from '@/components/ScrollProgress';

const Home = async () => {
  const projects = await getProjectsData();

  return (
    <>
      <ScrollProgress />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        {/* Hero Section */}
        <section className="relative border-b border-gray-100/20 dark:border-gray-800/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 py-24 sm:py-32">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 dark:text-gray-100 mb-6 tracking-tight">
                AI Engineer Portfolio
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                A collection of projects exploring machine learning, natural language processing,
                and computer vision. Each project represents a unique challenge in the AI landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="relative max-w-4xl mx-auto px-4 py-20">
          <h2 className="sr-only">Projects</h2>
          <Suspense fallback={<div>Loading projects...</div>}>
            <ProjectList projects={projects} />
          </Suspense>
        </section>
      </div>
    </>
  );
};

export default Home;

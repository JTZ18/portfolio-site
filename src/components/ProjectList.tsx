'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import type { Project } from '@/types/project';

type ProjectListProps = {
  projects: Project[];
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-6 sm:gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                ease: [0.21, 1.02, 0.73, 0.96],
                delay: index * 0.1
              }
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectList;

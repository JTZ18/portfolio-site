'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Project } from '@/types/project';
import { useRef } from 'react';

type ProjectCardProps = {
  project: Project;
  index: number;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { id, title, date, overview, techStack } = project;
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className="group"
    >
      <Link
        href={`/projects/${id}`}
        className="block focus:outline-none focus:ring-2 focus:ring-blue-500/40 rounded-xl"
      >
        <motion.article
          whileHover={{ scale: 1.02, y: -4 }}
          transition={{
            duration: 0.2,
            ease: "easeOut"
          }}
          className="relative bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 p-8 rounded-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-sm hover:shadow-md"
          aria-labelledby={`project-title-${id}`}
        >
          <header className="flex justify-between items-center mb-3">
            <h3
              id={`project-title-${id}`}
              className="text-xl font-medium text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
            >
              {title}
            </h3>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronRightIcon
                className="h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                aria-hidden="true"
              />
            </motion.div>
          </header>

          <time
            dateTime={date}
            className="text-sm text-gray-500 dark:text-gray-400 mb-4 block"
          >
            {date}
          </time>

          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed line-clamp-2 mb-6">
            {overview}
          </p>

          <div
            className="flex flex-wrap gap-2"
            role="list"
          >
            {techStack.slice(0, 3).map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: techIndex * 0.05,
                  duration: 0.2
                }}
                whileHover={{ scale: 1.05 }}
                role="listitem"
                className="px-3 py-1 bg-gray-100/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full text-sm border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
            {techStack.length > 3 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="px-3 py-1 text-gray-400 dark:text-gray-500 text-sm"
              >
                +{techStack.length - 3} more
              </motion.span>
            )}
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

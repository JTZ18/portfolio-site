'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import type { Project } from '@/types/project';

type ProjectDetailProps = {
  project: Project;
};

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
};

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { title, date, overview, motivation, whatBuilt, keyAchievements, techStack, lessonsLearned } = project;

  const sections = [
    { title: 'Overview', content: overview },
    { title: 'Motivation', content: motivation },
    { title: 'Implementation', content: whatBuilt },
    { title: 'Key Achievements', content: keyAchievements },
    { title: 'Lessons Learned', content: lessonsLearned },
  ];

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.nav
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
            aria-label="Back to projects"
          >
            <motion.div whileHover={{ x: -4 }} transition={{ duration: 0.2 }}>
              <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            </motion.div>
            Back to projects
          </Link>
        </motion.nav>

        <motion.header
          variants={fadeIn}
          initial="initial"
          animate="animate"
          className="mb-12"
        >
          <div className="flex flex-col gap-2 mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-medium text-gray-800 dark:text-gray-100"
            >
              {title}
            </motion.h1>
            <motion.time
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              dateTime={date}
              className="text-sm text-gray-500 dark:text-gray-400"
            >
              {date}
            </motion.time>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2"
            role="list"
          >
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
                role="listitem"
                className="px-3 py-1 bg-gray-100/50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-full text-sm border border-gray-200/50 dark:border-gray-600/50 backdrop-blur-sm"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-12"
        >
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="scroll-mt-16"
            >
              <h2 className="text-xl font-medium text-gray-800 dark:text-gray-100 mb-4">
                {section.title}
              </h2>
              {Array.isArray(section.content) ? (
                <ul className="space-y-4">
                  {section.content.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {section.content}
                </motion.p>
              )}
            </motion.section>
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ProjectDetail;
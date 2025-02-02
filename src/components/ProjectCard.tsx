'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import type { Project } from '@/types/project';
import { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";
import { HeroPill } from '@/components/ui/hero-pill';

type ProjectCardProps = {
  project: Project;
  index: number;
};

const MAX_TAG_LENGTH = 30;

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { id, title, date, overview, techStack } = project;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (date) {
      try {
        // The date is already in "Month Year" format from markdown
        // Just need to validate it's correct
        const [month, year] = date.split(' ');
        if (month && year && MONTHS.includes(month)) {
          setFormattedDate(date);
          return;
        }

        setFormattedDate('Date unavailable');
      } catch (error) {
        console.error('Error formatting date:', error);
        setFormattedDate('Date unavailable');
      }
    }
  }, [date]);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  // Truncate long tech stack tags
  const truncateTag = (tag: string) => {
    return tag.length > MAX_TAG_LENGTH ? `${tag.slice(0, MAX_TAG_LENGTH)}...` : tag;
  };

  if (!mounted) {
    return (
      <div className="w-full">
        <PatternCard>
          <PatternCardBody>
            <div className="animate-pulse">
              <div className="h-6 bg-muted rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-muted rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-full mb-2"></div>
              <div className="h-4 bg-muted rounded w-3/4"></div>
            </div>
          </PatternCardBody>
        </PatternCard>
      </div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className="group relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/projects/${id}`}
        className={cn(
          "block w-full focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-ring rounded-lg"
        )}
      >
        <AnimatePresence>
          {isHovered && (
            <motion.span
              className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-lg -m-1"
              layoutId="hoverBackground"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.15 },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.15, delay: 0.2 },
              }}
            />
          )}
        </AnimatePresence>
        <div className="relative z-10 w-full">
          <PatternCard>
            <PatternCardBody>
              <div className="flex flex-col h-full">
                <header className="flex justify-between items-center mb-3">
                  <h3
                    id={`project-title-${id}`}
                    className={cn(
                      "text-xl font-medium",
                      "text-foreground",
                      "transition-colors duration-200"
                    )}
                  >
                    {title}
                  </h3>
                  <ChevronRightIcon
                    className={cn(
                      "h-5 w-5",
                      "text-muted-foreground/50",
                      "group-hover:translate-x-0.5",
                      "transition-all duration-300"
                    )}
                    aria-hidden="true"
                  />
                </header>

                <time
                  dateTime={date}
                  className="text-sm text-muted-foreground mb-4 block"
                >
                  {formattedDate}
                </time>

                <p className={cn(
                  "text-muted-foreground text-base leading-relaxed",
                  "line-clamp-2 mb-4"
                )}>
                  {overview}
                </p>

                <div
                  className="flex flex-wrap gap-1.5 mt-auto"
                  role="list"
                >
                  {techStack.slice(0, 5).map((tech, techIndex) => (
                    <HeroPill
                      key={techIndex}
                      text={truncateTag(tech)}
                      className="mb-0 !p-0 sm:hidden"
                      animate={false}
                      role="listitem"
                    />
                  ))}
                  {techStack.slice(0, 5).map((tech, techIndex) => (
                    <HeroPill
                      key={techIndex}
                      text={tech}
                      className="mb-0 !p-0 hidden sm:inline-flex"
                      animate={false}
                      role="listitem"
                    />
                  ))}
                  {techStack.length > 5 && (
                    <HeroPill
                      text={`+${techStack.length - 5} more`}
                      className="mb-0 !p-0"
                      animate={false}
                    />
                  )}
                </div>
              </div>
            </PatternCardBody>
          </PatternCard>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

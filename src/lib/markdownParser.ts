'use server';

import fs from 'node:fs';
import path from 'node:path';
import { cache } from 'react';
import type { Project } from '@/types/project';

export const getProjectsData = cache(async (): Promise<Project[]> => {
  const filePath = path.join(process.cwd(), 'portfolio_content.md');
  const fileContent = await fs.promises.readFile(filePath, 'utf-8');

  // Split content by project sections (marked by ##)
  const projectSections = fileContent.split(/(?=## \d+\.)/);

  // Remove any empty sections
  const validSections = projectSections.filter(section => section.trim().length > 0);

  return validSections.map((section, index) => {
    const lines = section.split('\n');

    // Parse title and date from first line
    // Format: "## 1. Project Title (Month Year)"
    const titleMatch = lines[0].match(/## \d+\. (.+?) \((.*?)\)/);
    const title = titleMatch?.[1] || 'Untitled Project';
    const date = titleMatch?.[2] || '';

    // Helper function to extract section content
    const extractSection = (sectionName: string): string[] => {
      const sectionStart = lines.findIndex(line => line.trim() === `### ${sectionName}`);
      if (sectionStart === -1) return [];

      const content: string[] = [];
      for (let i = sectionStart + 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('### ') || line.startsWith('---')) break;
        if (line.startsWith('• ')) {
          content.push(line.substring(2));
        } else if (line.length > 0 && !line.startsWith('#')) {
          content.push(line);
        }
      }
      return content;
    };

    return {
      id: `project-${index + 1}`,
      title,
      date,
      overview: extractSection('Overview').join(' '),
      motivation: extractSection('Motivation'),
      whatBuilt: extractSection('What I Built') || extractSection('What We Built'),
      keyAchievements: extractSection('Key Achievements'),
      techStack: extractSection('Tech Stack'),
      lessonsLearned: extractSection('Lessons Learned')
    };
  });
});

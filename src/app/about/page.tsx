import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";
import { Badge } from "@/components/ui/badge";
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <BackgroundBeams className="absolute inset-0 pointer-events-none" />
      <div className="relative flex items-center justify-center py-12">
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 relative z-20">
          <div className="flex gap-4 flex-col items-start mb-8">
            <div>
              <Badge>About</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h1 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                About Me
              </h1>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                AI Engineer & Machine Learning Specialist
              </p>
            </div>
          </div>

          <PatternCard className="backdrop-blur-sm">
            <PatternCardBody>
              <div className="prose dark:prose-invert max-w-none space-y-6">
                <p>
                  Hello! I&apos;m <strong>Jon-Taylor Lim</strong>, an AI Apprentice at AI Singapore with a passion for Machine Learning and AI-driven technologies. I thrive on experimenting with <strong>Large Language Models (LLMs)</strong> and <strong>Stable Diffusion</strong> to explore how advanced AI can reshape everyday experiences.
                </p>

                <p>
                  Over the past few years, I&apos;ve dived into various <strong>AI hackathons</strong>, contributed to online AI engineering communities, and worked on industry projects involving <strong>LLMs</strong>, <strong>RAG pipelines</strong>, and <strong>computer vision</strong>. From developing a PDF ingestion system that empowers RAG-based agents to building transcription and summarization tools for live events, I enjoy tackling real-world problems through creative AI solutions.
                </p>

                <p>
                  In my free time, I fine-tune open-source models like <strong>Mistral</strong>, <strong>Llama</strong>, <strong>Whisper</strong>, <strong>Stable Diffusion</strong> and <strong>Flux</strong> models and deploy them as chatbots, transcription and image generation services. I&apos;m also a big believer in continuous learning, staying up to date with the latest <strong>research papers</strong>, and exploring new <strong>agentic workflows</strong> for LLMs.
                </p>

                <p>
                  Thanks for stopping by! Feel free to connect on{" "}
                  <a
                    href="https://www.linkedin.com/in/jontaylorlim"
                    className="text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://github.com/JTZ18"
                    className="text-primary hover:text-primary/80 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  to chat about all things AI.
                </p>
              </div>
            </PatternCardBody>
          </PatternCard>
        </div>
      </div>
    </div>
  );
}
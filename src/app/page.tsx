import { BackgroundBeams } from '@/components/ui/background-beams';
import { BorderBeam } from '@/components/ui/border-beam';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { TextScramble } from '@/components/ui/text-scramble';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen bg-background">
        <BackgroundBeams className="absolute inset-0" />
        {/* Hero Section */}
        <section className="relative min-h-screen border-b border-border/5 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 py-24 sm:py-32 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative space-y-4 max-w-2xl rounded-lg p-8">
                <TextGenerateEffect
                  className="text-muted-foreground font-medium tracking-wide uppercase text-sm"
                  duration={0.5}
                  delay={0}
                  words="AI Engineer & Machine Learning Specialist"
                />
                <TextScramble
                  as="h1"
                  className={cn(
                    "text-4xl sm:text-7xl font-bold tracking-tight",
                    "bg-clip-text text-transparent",
                    "bg-gradient-to-b from-foreground to-foreground/50",
                    "pb-2"
                  )}
                  duration={1}
                  speed={0.05}
                  delay={2.5}
                >
                  Jon Taylor
                </TextScramble>
                <TextGenerateEffect
                  className="text-2xl sm:text-3xl font-medium text-muted-foreground"
                  duration={0.5}
                  delay={0.5}
                  words="Building the future with AI"
                />
                <BorderBeam
                  size={150}
                  duration={15}
                  delay={0}
                  colorFrom="#FFA500"
                  colorTo="#AE48FF"
                  borderWidth={2}
                />
              </div>
              <TextGenerateEffect
                className="text-lg sm:text-xl text-muted-foreground/80 max-w-2xl leading-relaxed"
                duration={1}
                delay={1}
                words="I specialize in developing cutting-edge AI solutions, from advanced machine learning models to scalable NLP systems. My work focuses on transforming complex AI concepts into practical, impactful applications."
              />
              <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-20 sm:hidden">
                <Link
                  href="/projects"
                  className={cn(
                    "inline-flex items-center px-6 py-3 text-sm font-medium",
                    "bg-primary text-primary-foreground",
                    "rounded-lg transition-colors",
                    "hover:bg-primary/90 active:scale-95",
                    "cursor-pointer select-none",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-ring focus-visible:ring-offset-2",
                    "disabled:pointer-events-none disabled:opacity-50"
                  )}
                  role="button"
                  tabIndex={0}
                >
                  View Projects
                </Link>
                <a
                  href="https://github.com/JTZ18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex items-center px-6 py-3 text-sm font-medium",
                    "border border-border",
                    "text-primary bg-background",
                    "rounded-lg transition-colors",
                    "hover:bg-accent hover:text-accent-foreground"
                  )}
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;

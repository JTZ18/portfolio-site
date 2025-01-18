import { BackgroundBeams } from '@/components/ui/background-beams';
import { PatternCard, PatternCardBody } from "@/components/ui/card-with-ellipsis-pattern";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  alternates: {
    canonical: '/contact'
  }
};

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jon.taylorlim99@gmail.com',
    href: 'mailto:jon.taylorlim99@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/jontaylorlim',
    href: 'https://www.linkedin.com/in/jontaylorlim',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/JTZ18',
    href: 'https://github.com/JTZ18',
  },
];

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <BackgroundBeams className="absolute inset-0 pointer-events-none" />
      <div className="relative flex items-center justify-center py-12">
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8 relative z-20">
          <div className="flex gap-4 flex-col items-start mb-8">
            <div>
              <Badge>Contact</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h1 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Get in Touch
              </h1>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Feel free to reach out for collaborations, opportunities, or just to say hello!
              </p>
            </div>
          </div>

          <PatternCard className="backdrop-blur-sm">
            <PatternCardBody>
              <div className="space-y-4">
                {contactLinks.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "block w-full p-4 rounded-lg",
                        "transition-colors duration-200",
                        "hover:bg-muted/50",
                        "cursor-pointer",
                        "focus-visible:outline-none focus-visible:ring-2",
                        "focus-visible:ring-ring focus-visible:ring-offset-2"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "p-2 rounded-md shrink-0",
                          "bg-background border border-border",
                          "group-hover:border-primary/50 transition-colors"
                        )}>
                          <Icon className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-sm font-medium text-muted-foreground">
                            {contact.label}
                          </span>
                          <span className="text-foreground truncate">
                            {contact.value}
                          </span>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </PatternCardBody>
          </PatternCard>
        </div>
      </div>
    </div>
  );
}
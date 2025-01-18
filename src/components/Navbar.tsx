'use client';

import { Home, FolderKanban, User, Mail } from 'lucide-react';
import { NavBar } from "@/components/ui/tubelight-navbar";
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  // Check if current path is projects or a project detail page
  const isProjectsActive = pathname === '/projects' || pathname.startsWith('/projects/');

  const navItems = [
    { name: 'Home', url: '/', icon: Home, isActive: pathname === '/' },
    { name: 'Projects', url: '/projects', icon: FolderKanban, isActive: isProjectsActive },
    { name: 'About', url: '/about', icon: User, isActive: pathname === '/about' },
    { name: 'Contact', url: '/contact', icon: Mail, isActive: pathname === '/contact' }
  ];

  return (
    <div className="relative">
      <NavBar items={navItems} />
    </div>
  );
};

export default Navbar;

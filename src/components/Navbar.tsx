'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';
  };

  return (
    <nav className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-medium">
            AI Portfolio
          </Link>

          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <Link href="/" className={`${isActive('/')} transition-colors duration-200`}>
                Home
              </Link>
              <Link href="/projects" className={`${isActive('/projects')} transition-colors duration-200`}>
                Projects
              </Link>
              <Link href="/about" className={`${isActive('/about')} transition-colors duration-200`}>
                About
              </Link>
              <Link href="/contact" className={`${isActive('/contact')} transition-colors duration-200`}>
                Contact
              </Link>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

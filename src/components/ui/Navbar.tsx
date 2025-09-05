
import React from 'react';
import { LucideIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-muted-dark text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Portfolio</div>
        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#blog" className="hover:underline">Blog</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default 
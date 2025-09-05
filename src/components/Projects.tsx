
import React from 'react';
import { Card } from './ui';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <h3 className="font-bold">Project 1</h3>
          <p>Description of project 1.</p>
        </Card>
        <Card>
          <h3 className="font-bold">Project 2</h3>
          <p>Description of project 2.</p>
        </Card>
      </div>
    </section>
  );
};

export default Projects;

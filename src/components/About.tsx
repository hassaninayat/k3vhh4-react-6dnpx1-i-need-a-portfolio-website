
import React from 'react';
import { Card } from './ui';

const About: React.FC = () => {
  return (
    <section id="about" className="p-8">
      <h2 className="text-2xl font-bold mb-4">About Me</h2>
      <Card>
        <p>I'm a passionate developer with a focus on modern web technologies.</p>
      </Card>
    </section>
  );
};

export default About;

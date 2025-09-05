
import React from 'react';
import { Card } from './ui';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <Card>
        <p>You can reach me at: email@example.com</p>
      </Card>
    </section>
  );
};

export default Contact;


import React from 'react';
import { Card } from './ui';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="p-8">
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <Card>
        <p>Latest insights and updates will be shared here.</p>
      </Card>
    </section>
  );
};

export default Blog;

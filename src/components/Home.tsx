```tsx
import React from 'react';
import { Card } from './ui';

const Home: React.FC = () => {
  return (
    <section id="home" className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h1>
      <Card>
        <p>This is a showcase of my work and achievements.</p>
      </Card>
    </section>
  );
};

export default Home;
```
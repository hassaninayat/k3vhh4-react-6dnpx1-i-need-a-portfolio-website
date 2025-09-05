```tsx
import React from 'react';
import { Navbar, Footer } from './components/ui';
import { Home, About, Projects, Blog, Contact } from './components';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
```
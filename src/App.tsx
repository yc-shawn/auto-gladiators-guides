import React from 'react';
import GuideHome from './guides/GuideHome';

const App: React.FC = () => {
  return (
    <main
      style={{
        minHeight: '100vh',
      }}
    >
      <GuideHome />
    </main>
  );
};

export default App;

import React from 'react';
import GuideHome from './guides/GuideHome';
import SectListingPage from './guides/SectListingPage';

const App: React.FC = () => {
  const isSectListing = /(^|\/)sects\/?$/.test(window.location.pathname);

  return (
    <main
      style={{
        minHeight: '100vh',
      }}
    >
      {isSectListing ? <SectListingPage /> : <GuideHome />}
    </main>
  );
};

export default App;

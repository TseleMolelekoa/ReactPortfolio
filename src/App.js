import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutMe from './components/about/index';
import Loading from './components/loading';

// Lazy load the HomePage component
const HomePage = lazy(() => import('./components/HomePage/index'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <HomePage />
        <AboutMe/>
      </Router>
    </Suspense>
  );
}

export default App;

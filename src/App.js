import './App.css';
import Main from './context/Main';

import './index.css';
import ErrorBoundary from './ErrorBoundary';

import { Suspense, lazy } from 'react';
const Artists = lazy(() => import('./Artists'))
const Performers = lazy(() => import('./performers'))

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Main />

        <Suspense fallback={<h1>Still Loading…</h1>}>
          <Artists />
          <Performers />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;

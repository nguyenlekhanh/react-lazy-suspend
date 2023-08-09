import './App.css';
import Main from './context/Main';

import './index.css';
import ErrorBoundary from './ErrorBoundary';

import { Profiler, Suspense, lazy } from 'react';
import Main1 from './context/Main1';
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

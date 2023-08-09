import './App.css';
import Main from './context/Main';

import './index.css';
//import Artists from './Artists';

import { Suspense, lazy } from 'react';
const Artists = lazy(() => import('./Artists'))
const Performers = lazy(() => import('./performers'))

function App() {
  return (
    <div className="App">
      <Main />

      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Artists />
        <Performers />
      </Suspense>

      
    </div>
  );
}

export default App;

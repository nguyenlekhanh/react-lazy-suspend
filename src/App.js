import './App.css';

import './index.css';
//import Artists from './Artists';

import { Suspense, lazy } from 'react';
const Artists = lazy(() => import('./Artists'))


function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Still Loading…</h1>}>
        <Artists />
      </Suspense>
    </div>
  );
}

export default App;

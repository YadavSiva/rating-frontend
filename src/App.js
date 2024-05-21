
import './App.css';

import { AppRouter } from './app.router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;

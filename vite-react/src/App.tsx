import { Routes, Route } from 'react-router-dom';

// Pages
import CanvasPracticePage from './pages/CanvasPracticePage';
// Components
import DrawCanvas from './components/DrawCanvas';
import CanvasPractice from './components/CanvasPractice';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DrawCanvas />} />
      <Route path='/group' element={<CanvasPracticePage />} />
    </Routes>
  );
}

export default App;

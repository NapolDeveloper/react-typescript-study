import { Routes, Route } from 'react-router-dom';

// Components
import DrawCanvas from './components/DrawCanvas';

function App() {
  return (
    <Routes>
      <Route path='/' element={<DrawCanvas />} />
    </Routes>
  );
}

export default App;

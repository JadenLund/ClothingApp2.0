
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Navbar';
function App() {
  return (
    <div>
      <>
        <Routes>
          <Route index element={<NavBar />} />
        </Routes>
      </></div>
  );
}

export default App;


import './App.scss';
import { Route, Routes } from 'react-router-dom';
import TabExampleBasic from './components/Sidebar';

function App() {
  return (
    <div>
      <>
        <Routes>
          <Route index element={<TabExampleBasic />} />
        </Routes>
      </></div>
  );
}

export default App;

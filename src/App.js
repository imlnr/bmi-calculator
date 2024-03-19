import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Signup/>
      </div>
    </BrowserRouter>
  );
}

export default App;

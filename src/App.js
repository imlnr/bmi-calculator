import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import Allroutes from './Mainroutes/Allroutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Allroutes />
      </div>
    </BrowserRouter>
  );
}

export default App;

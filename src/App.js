import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Allroutes from './Mainroutes/Allroutes';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Allroutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import { Provider } from 'react-redux';
import {store} from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
        </Routes>
        {/* <Footer/> */}
      </div>
    </Provider>
  );
}

export default App;

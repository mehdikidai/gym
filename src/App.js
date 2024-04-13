import './App.scss';
import AboutUs from './components/AboutUs';
//import { useSelector } from 'react-redux';
import Cover from './components/Cover';
import Spacing from './components/Spacing';


function App() {
  
  return (
    <div className="App">
       <Cover/>
       <Spacing/>
       <AboutUs/>
       <Spacing/>
    </div>
  );
}

export default App;

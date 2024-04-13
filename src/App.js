import './App.scss';
import AboutUs from './components/AboutUs';
//import { useSelector } from 'react-redux';
import Cover from './components/Cover';
import Pricing from './components/Pricing';
import Service from './components/Service';
import Spacing from './components/Spacing';
import Title from './components/Title';
import Video from './components/Video';


function App() {
  
  return (
    <div className="App">
       <Cover/>
       <Spacing/>
       <AboutUs/>
       <Spacing/>
       <Title/>
       <Service/>
       <Spacing/>
       <Video/>
       <Spacing/>
       <Title/>
       <Pricing/>
       <Spacing/>
    </div>
  );
}

export default App;

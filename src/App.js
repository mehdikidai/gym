import './App.scss';

//import { useSelector } from 'react-redux';

import AboutUs from './components/AboutUs';
import Comments from './components/Comments';
import Contact from './components/Contact';
import Cover from './components/Cover';
import Pricing from './components/Pricing';
import Service from './components/Service';
import Spacing from './components/Spacing';
import Title from './components/Title';
import Video from './components/Video';
import WorkingTimings from './components/WorkingTimings';


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
       <Title/>
       <WorkingTimings/>
       <Spacing/>
       <Title/>
       <Comments/>
       <Spacing/>
       <Contact/>
       <Spacing/>
    </div>
  );
}

export default App;

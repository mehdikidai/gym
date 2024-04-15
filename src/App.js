import "./App.scss";

//import { useSelector } from 'react-redux';

import {
  AboutUs,
  Comments,
  Contact,
  Cover,
  Pricing,
  Service,
  Spacing,
  Title,
  Video,
  WorkingTimings,
  Footer,
} from "./components";


function App() {
  return (
    <div className="App">
      <Cover />
      <Spacing />
      <AboutUs />
      <Spacing />
      <Title />
      <Service />
      <Spacing />
      <Video />
      <Spacing />
      <Title />
      <Pricing />
      <Spacing />
      <Title />
      <WorkingTimings />
      <Spacing />
      <Title />
      <Comments />
      <Spacing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

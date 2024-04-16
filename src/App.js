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

import Config from "./config";


function App() {

  const { titles } = Config

  return (
    <div className="App">
      <Cover />
      <Spacing />
      <AboutUs />
      <Spacing />
      <Title tit={titles.services} /> 
      <Service />
      <Spacing />
      <Video />
      <Spacing />
      <Title tit={titles.prices} />
      <Pricing />
      <Spacing />
      <Title tit={titles.workingTimings} />
      <WorkingTimings />
      <Spacing />
      <Title tit={titles.comments} />
      <Comments />
      <Spacing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

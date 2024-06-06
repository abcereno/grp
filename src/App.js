// common
import Navibar from "./Common/Navibar/Navibar";
import Footer from "./Common/Footer/Footer.jsx";
// bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import NotFound from "./Components/NotFound/NotFound.jsx";
import Home from "./Components/Home/Home.jsx";
import How from "./Components/How/How.jsx";
import Pricing from "./Components/Pricing/Pricing.jsx";
import FreqAsked from "./Components/FreqAsked/FreqAsked.jsx";
import Terms from "./Components/Terms/Terms.jsx";
import Policy from "./Components/Policy/Policy.jsx";
function App() {
  return (
<>
<BrowserRouter>
      <Navibar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/how' element={<How />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/freqasked' element={<FreqAsked />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
      <Footer/>
      </BrowserRouter>
</>
  );
}

export default App;

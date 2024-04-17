// common
import Navibar from "./Common/Navibar/Navibar";
import Footer from "./Common/Footer/Footer.jsx";
// bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Components
import NotFound from "./Components/NotFound/NotFound.jsx";
import Home from "./Components/Home/Home.jsx";
function App() {
  return (
<>
<BrowserRouter>
      <Navibar/>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
      <Footer/>
      </BrowserRouter>
</>
  );
}

export default App;

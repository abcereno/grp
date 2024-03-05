// common
import Navibar from "./Common/Navibar/Navibar";
import Footer from "./Common/Footer/Footer.jsx";
// bootstrap
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
// Components
import NotFound from "./Components/NotFound/NotFound.jsx";
import Home from "./Components/Home/Home.jsx";
import Articles from "./Components/Articles/Articles.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import Contact from "./Components/Contact/Contact.jsx";
function App() {
  return (
<>
<BrowserRouter>
      <Navibar/>
      <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/*' element={<NotFound />} />
            <Route path='/articles' element={<Articles />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
      <Footer/>
      </Container>
      </BrowserRouter>
</>
  );
}

export default App;

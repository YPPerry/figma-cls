import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/AboutUs" element={<AboutUs />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Services" element={<Services />}></Route>
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

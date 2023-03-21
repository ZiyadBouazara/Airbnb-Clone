import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Account from "./views/Account";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

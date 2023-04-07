import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Account from "./views/Account";
import Contact from "./views/Contact";
import NotFound from "./views/NotFound";
import Immeuble from "./views/Immeuble";

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/immeubles/:immeubleId" element={<Immeuble />} ></Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App

import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store'
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

const App=()=>{
  return (
    <Provider store={store}>

     
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>


  )
}

export default App
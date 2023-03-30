import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import Layout from './components/Layout'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/About'
import Gallery from "./pages/Galary";
import Career from './pages/Career'
// import Social from './components/Social'
import Jobs from './pages/jobs'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<Layout />}></Route>
          <Route path="/home" exact element={<Layout />} />
          <Route path="/conatctus" element={<ContactUs/>} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/career" element={<Career/>}  />
          <Route path="/gallery" element={<Gallery/>}  />
          {/* <Route path="/jobs" element={<Jobs/>}  /> */}
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

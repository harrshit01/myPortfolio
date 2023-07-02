import React from 'react';
import "./styles/app.scss";




import Home from './components/Home';
import Work from './components/Work';
import Experience from './components/Experience';
import Services from './components/Services';
import Skill from './components/Skill';
import Header from './components/Header';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Header/>
    <Home/>
    <Work/>
    <Experience/>
    <Services/>
    <Skill/>
    <Contact/>
    <Toaster/>
    <Footer/>

    
    </>
  )
}

export default App


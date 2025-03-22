import { useState } from 'react'
import './App.css'
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { BrowserRouter  } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { Project } from './components/Project';
import Footer from './components/Footer';
function App() {
 
  return (
    <>
    <BrowserRouter>
    <Toaster />
  
     <Home/>
     
     </BrowserRouter>
    </>
  )
}

export default App

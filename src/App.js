import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Discover from './pages/Discover'
import AddPost from "./components/AddPost";

import EditPost from "./components/EditPost";

const App = () => {








  return(
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/newpost' element={<AddPost/>} />
          <Route path='/editpost' element={<EditPost/>} />
        </Routes>
    </Router>
    </>
  )
}

export default App
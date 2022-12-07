import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import Myprofile from './pages/Myprofile';
import Singleprofile from './pages/Singleprofile';
import { AnimatePresence} from "framer-motion"
import Chatpage from './pages/Chatpage';
import Errorpage from './pages/Errorpage';
import Loader from "./pages/Loader"
import { useEffect, useState } from 'react';



function App() {

  const Location = useLocation();
  
  return (
  
        <div className="app">
          <AnimatePresence>
            <Routes location={Location} key={Location.key}>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='profile' element={<Myprofile />}></Route>
                <Route exact path='singleprofile/:profileId' element={<Singleprofile />}></Route>
                <Route exact path='chatpage/:profileId' element={<Chatpage />}></Route>
                <Route exact path='*'  element={<Errorpage />}></Route>
            </Routes>
            </AnimatePresence>
        </div>
  );
}

export default App;

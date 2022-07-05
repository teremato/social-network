import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { Header } from "./Components/Header/Header";
import { NavBar } from "./Components/NavBar/NavBar";
import { Profile } from "./Components/Pages/Profile/Profile";
import { Messages } from './Components/Pages/Messages/Messages';
import { News } from './Components/Pages/News/News';
import { Music } from './Components/Pages/Music/Music';
import { Settings } from './Components/Pages/Settings/Settings';

import "./App.css"

function App() {

  return(
    <BrowserRouter>
      <div className="main">
        <Header/>
        <div className="container">
          <NavBar/>
          <Routes>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/messages/*' element={<Messages/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;

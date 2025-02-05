
import Header from "./Components/Header"

import Home from "./Components/Home"
import About from "./Components/About"
import Events from "./Components/Events"
import Contact from "./Components/Contact"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
return (
   <Router>
    <Header/>
    <Routes>
      <Route path="/"  element ={<Home/> }/>
      <Route path="/about"  element ={<About/> }/>
      <Route path="/events"  element ={ <Events/>}/>
      <Route path="/contact"  element ={<Contact/> }/>
    </Routes>
   </Router>
  )
}

export default App

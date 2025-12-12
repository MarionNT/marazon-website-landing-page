import Home from "./pages/Homepage/Home";
import About from "./pages/Aboutpage/About";
import { Route, Routes } from "react-router-dom";



export default function App() {
  return (
    < Routes>
      
    <Route path="/" element={< Home/>}/>
    <Route path="/About" element={<About/>}/>

    </ Routes>
  )
}

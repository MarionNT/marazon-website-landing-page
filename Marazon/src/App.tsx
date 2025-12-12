import Home from "./pages/Homepage/Home";
import About from "./pages/Aboutpage/About";
import Shop from "./pages/Shoppage/Shop";
import { Route, Routes } from "react-router-dom";



export default function App() {
  return (
    < Routes>
      
    <Route path="/" element={< Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Shop" element={<Shop/>}/>

    </ Routes>
  )
}

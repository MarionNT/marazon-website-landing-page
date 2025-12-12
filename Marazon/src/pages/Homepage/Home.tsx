import Navbar from "./Navbar" 
import Hero from "./Hero"
import Gridlayout from "./Gridlayout"
import Footer from "./Footer"


export default function Body() {

  return (
 <>
 <section className=" bg-[url(https://i.pinimg.com/1200x/7c/72/da/7c72dab9c0283c774901ada375387265.jpg)] bg-cover bg-center  p-6 flex flex-col justify-center  " >
  
    <Navbar/>
    <Hero/>
  </section>

  <Gridlayout/>



  <Footer/>
</>
     )
 }



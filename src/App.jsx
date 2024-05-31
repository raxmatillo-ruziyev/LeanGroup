
import './App.css'
import About from './Components/About/About'
import Avto from './Components/Avto/Avto'
import Comanda from './Components/Comanda/Comanda'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Novosti from './Components/Novosti/Novosti'
import Section from './Components/Section/Section'
import Service from './Components/Service/Service'

function App() {


  return (
    <>
      <Navbar/>
      <Hero/>
      <Section/>
      <About/>
      <Service/>
      <Avto/>
      <Comanda/>
      <Novosti/>
      <Footer/>
    </>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Resources from "./components/Resources/Resources";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import CategoryResources from "./components/Resources/CategoryResources";
import CategoryServices from "./components/Services/CategoryServices";
import ContextProvider from "./components/Context/Context";
import "./scss/styles.scss";


function App() {

  return (
    <>
      <BrowserRouter>
      <ContextProvider>
          <Navbar/>
            <Routes>
              <Route exact path="/" element ={<Home/>} />
              <Route exact path="/Sobre-Mi" element ={<AboutMe/>} />
              <Route exact path="/Recursos" element ={<Resources/>} />
              <Route exact path="/Servicios" element ={<Services/>} />
              <Route exact path="/Contacto" element ={<Contact/>} />
              <Route exact path="/Recursos/:id" element = {<CategoryResources/>}/>
              <Route exact path="/Servicios/:id" element = {<CategoryServices/>}/>
            </Routes>
          </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App

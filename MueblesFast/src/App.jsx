import { Fragment } from "react";
import Header from "./componentes/Header";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";
import Footer from "./componentes/Footer";
import './index.css'

function App(){
  return(
        <>
        <Header/>
        <Banner/>
        <Form/>
        <Footer/>
        </>
  );
}

export default App;
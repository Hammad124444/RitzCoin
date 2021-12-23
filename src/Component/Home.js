import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Bridge from "./Bridge";

const Home = (props) =>{
    return(
        <div className="wrapper">
            <Header/>
            <main id="main">
            <Bridge/>
            </main>   
            {/* <Footer/>  */}
        </div>    
    )
}

export default Home;
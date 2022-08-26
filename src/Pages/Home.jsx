import React from 'react'

import Navbar from "../Components/Navbar/Navbar";
import About from "../Pages/About";
import Connect from "../Pages/Connect";
import HeroSec from "./HeroSec";
import Roadmap from "../Pages/Roadmap";
import Social from "../Pages/Social";
import Team from "../Pages/Team";
import Videos from "../Pages/Videos";

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSec/>
        <About/>
        <Videos/>
        <Team/>
        <Roadmap/>
        <Social/>
        <Connect/>

        <div className = "footer">
            <p>&copy; 2022 Swaggertoof. All rights reserved</p>
        </div>
    </div>
  )
}

export default Home;
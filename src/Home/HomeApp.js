import gsap, { Circ } from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Bg2ColorsFollow from "./Components/Bg2ColorsFollow";
import NavBar from "./Components/NavBar";
import ScrollDownNounSvg from "./Icons/ScrollDownNounSvg";
import AboutMe from "./Screens/AboutMe";
import Experience from "./Screens/Experience";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./Screens/Projects";

export default HomeApp;

gsap.registerPlugin(ScrollTrigger);
function HomeApp() {



    return (
        <div className="bg-darkNotDark ">
            <Bg2ColorsFollow />

            <div className="App scroll-smooth ">
                <AboutMe />
                <div className="z-10 containergsap">
                    <Experience />
                </div>
                <Projects />
                {/* <div className="lastContainer">Last Container</div> */}
            </div>
        </div>
    );
}


// eslint-disable-next-line no-lone-blocks
// /* <nav className="z-50 flex gap-20">
//             <NavLink to={"/"}>Home</NavLink>
//             <NavLink to={"/Projects/FromDesignToCode/Indonesia"}>
//                 Indonesia
//             </NavLink>
//             <NavLink to={"/Projects/FromDesignToCode/Cards"}>Cards</NavLink>
//             <NavLink to={"/Projects/MazdaRx8"}>MazdaRx8</NavLink>
//         </nav> */

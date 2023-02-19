import React from "react";
import { NavLink } from "react-router-dom";
import Bg2ColorsFollow from "./Components/Bg2ColorsFollow";
import NavBar from "./Components/NavBar";
import ScrollDownNounSvg from "./Icons/ScrollDownNounSvg";
import AboutMe from "./Screens/AboutMe";
import Experience from "./Screens/Experience";

function HomeApp() {
    return (
        <>
            <NavBar />
            <Bg2ColorsFollow />
            <div className="bg-darkNotDark">
                <div className="z-[3] relative overflow-y-auto overflow-x-hidden h-full">
                    <AboutMe />
                    <Experience />
                </div>
                {/* <div className="absolute flex justify-center bottom-0 w-full animate-pulse z-50">
                <ScrollDownNounSvg />
            </div> */}
            </div>
        </>
    );
}

export default HomeApp;

// eslint-disable-next-line no-lone-blocks
{
    /* <nav className="z-50 gap-20 flex">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/Projects/FromDesignToCode/Indonesia"}>
                    Indonesia
                </NavLink>
                <NavLink to={"/Projects/FromDesignToCode/Cards"}>Cards</NavLink>
                <NavLink to={"/Projects/MazdaRx8"}>MazdaRx8</NavLink>
            </nav> */
}

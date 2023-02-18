import React from "react";
import { NavLink } from "react-router-dom";
import Bg2ColorsFollow from "./Components/Bg2ColorsFollow";
import ScrollDownNounSvg from "./Icons/ScrollDownNounSvg";
import AboutMe from "./Screens/AboutMe";

function HomeApp() {
    return (
        <div className="flex w-screen h-screen gap-20 bg-darkNotDark">
            <Bg2ColorsFollow />
            {/* NavBar Left */}
            <AboutMe />
            {/* <nav className="z-50 gap-20 flex">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/Projects/FromDesignToCode/Indonesia"}>
                    Indonesia
                </NavLink>
                <NavLink to={"/Projects/FromDesignToCode/Cards"}>Cards</NavLink>
                <NavLink to={"/Projects/MazdaRx8"}>MazdaRx8</NavLink>
            </nav> */}
        </div>
    );
}

export default HomeApp;

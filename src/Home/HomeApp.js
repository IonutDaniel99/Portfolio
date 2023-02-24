import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import Bg2ColorsFollow from "./Components/Bg2ColorsFollow";
import AboutMe from "./Screens/AboutMe";
import Experience from "./Screens/Experience";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "./Screens/Projects";
import disableScroll from "disable-scroll";
import LoadingBarScroll from "./Components/LoadingBarScroll";

export default HomeApp;

gsap.registerPlugin(ScrollTrigger);
function HomeApp() {
    const [isLoadingRemoved, setIsLoadingRemoved] = useState(false);
    const loadingRef = useRef(null);
    disableScroll.on();

    const isAboutMeDone = () => {
        disableScroll.off();
    }


    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                ".loadingScreen",
                {
                    ease: "none",
                    opacity: 1,
                },
                {
                    ease: "none",
                    opacity: 0,
                    duration: 2.8,
                    delay: 3,
                    onComplete: () => {
                        loadingRef.current.remove();
                        setIsLoadingRemoved(true);
                    },
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            <div className="bg-darkNotDark">
                <LoadingBarScroll />
                <Bg2ColorsFollow />
                <div className="z-10 overflow-y-hidden App scroll-smooth">
                    <AboutMe loadingRemoved={isLoadingRemoved} isAboutMeDone={() => isAboutMeDone()} />
                    <Experience />
                    <Projects />
                    {/* <div className="lastContainer">Last Container</div> */}
                </div>
            </div>
            <div
                ref={loadingRef}
                className="absolute z-[200] text-2xl h-screen w-full bg-[#1B1D1E] overflow-hidden loadingScreen top-0 text-white flex justify-center items-center"
            >
                Loading
            </div>
        </>
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

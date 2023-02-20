import gsap, { Circ } from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Bg2ColorsFollow from "./Components/Bg2ColorsFollow";
import NavBar from "./Components/NavBar";
import ScrollDownNounSvg from "./Icons/ScrollDownNounSvg";
import AboutMe from "./Screens/AboutMe";
import Experience from "./Screens/Experience";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default HomeApp;

gsap.registerPlugin(ScrollTrigger);
function HomeApp() {

    ScrollTrigger.defaults({ markers: { startColor: "green", endColor: "red" } });

    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(".experience", {
                ease: "none",
                scrollTrigger: {
                    trigger: ".experience",
                    duration: 2,
                    pin: true,
                    scrub: 1,
                    snap: 1,
                    start: "top 80%",
                    end: 'top 100%',
                    markers: true,
                }
            });

            // let panels = gsap.utils.toArray(".panel");
            // gsap.to(panels, {
            //     xPercent: -100 * (panels.length - 1),
            //     ease: "none",
            //     scrollTrigger: {
            //         trigger: slider.current,
            //         pin: true,
            //         scrub: 0,
            //         snap: 1 / (panels.length - 1),
            //         end: () => "+=" + slider.current.offsetWidth,
            //         markers: true,
            //     }
            // });
            // let experienceScreen = gsap.timeline({
            //     scale: 0.1,
            //     scrollTrigger: {
            //         trigger: ".experience",
            //         scrub: 1,
            //         pin: true,
            //         start: "top 70%",
            //         end: "top 80%",
            //         markers: true,
            //     },
            // });

            // gsap.set('.title-2', { opacity: 0, scale: 0.5, y: 400, transformOrigin: '50% 50%' })

            // experienceScreen.to('.title-2', { duration: 5, opacity: 1, scale: 1, y: 0 })
        }, component);



        return () => ctx.revert();
    });

    return (
        <div className="bg-darkNotDark ">
            <Bg2ColorsFollow />

            <div className="App scroll-smooth " ref={component}>
                <AboutMe />
                <div ref={slider} className="z-10 containergsap">
                    <div className="flex items-start justify-center pt-32 panel experience">
                        <div className="text-white title-2 text-9xl">Work Experience</div>

                    </div>
                    {/* <div className="text-white panel">TWO</div>
                    <div className="text-white panel">THREE</div> */}
                </div>
                {/* <div className="lastContainer">Last Container</div> */}
            </div>
        </div>
    );
}

// eslint-disable-next-line no-lone-blocks
{
    /* <nav className="z-50 flex gap-20">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/Projects/FromDesignToCode/Indonesia"}>
                    Indonesia
                </NavLink>
                <NavLink to={"/Projects/FromDesignToCode/Cards"}>Cards</NavLink>
                <NavLink to={"/Projects/MazdaRx8"}>MazdaRx8</NavLink>
            </nav> */
}

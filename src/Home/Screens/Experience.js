import gsap from "gsap";
import React, { useEffect } from "react";

function Experience() {

    useEffect(() => {

        gsap.to('.experienceTitle', {
            ease: "power4.inOut",
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            opacity: 1,
            y: 0,
            duration: 2.2,
            scrollTrigger: {
                trigger: ".experience",
                markers: true,
                scrub: 3,
                start: "top 60%",
                end: "top 70%",
            }
        })
        gsap.to(".title1", {
            ease: "power4.inOut",
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            opacity: 1,
            y: 0,
            duration: 2.2,
            scrollTrigger: {
                trigger: '.experienceTitle',
                start: "top 70%",
                end: "top 80%",
                markers: true,
                scrub: 3,
            }
        })
    })
    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen pt-20 experience">
            <div className="z-10 text-6xl text-white border-2 experienceTitle">Work Experience</div>
            <div className="z-10 w-2/6 pt-10 text-2xl text-white title1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    );
}

export default Experience;

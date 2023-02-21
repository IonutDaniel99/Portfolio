import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

function Experience() {
    ScrollTrigger.defaults({ markers: { startColor: "green", endColor: "red" } });

    useEffect(() => {

        gsap.to('.experienceTitle', {
            ease: "power4.inOut",
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            opacity: 1,
            y: 0,
            duration: 2.2,
            scrollTrigger: {
                trigger: ".experience",
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
                start: "top 50%",
                end: "top 90%",
                scrub: 3,
            }
        })
        gsap.to(".companyPic", {
            ease: "power4.inOut",
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
            opacity: 1,
            y: 0,
            duration: 2.2,
            scrollTrigger: {
                trigger: '.experienceTitle',
                start: "top 50%",
                end: "top 90%",
                scrub: 3,
            }
        })
    })
    return (
        <div className="flex flex-col items-center w-screen h-screen experience">
            <div className="z-10 pt-20 text-6xl text-white experienceTitle clipFade">Work Experience</div>
            <div className="z-10 flex items-center pt-20 justify-evenly h-1/2 ">
                <div className="w-2/6 text-2xl text-white title1 clipFade">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <img
                    src="https://picsum.photos/470/650"
                    alt=""
                    className="w-[400px] h-[200px] companyPic clipFade"
                />
            </div>
        </div>
    );
}

export default Experience;

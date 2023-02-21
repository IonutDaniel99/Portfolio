import gsap from 'gsap';
import React, { useEffect, useLayoutEffect } from 'react'

function Projects() {
    let sections = gsap.utils.toArray(".panel");

    useLayoutEffect(() => {
        gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: ".containerProjects",
                pin: true,
                scrub: 1,
                snap: 1 / (sections.length - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                // end: "+=3500",
                end: () => "+=" + document.querySelector(".containerProjects").offsetWidth
            }
        });
    })


    return (
        <div className="containerProjects w-[600%] h-full flex flex-nowrap overscroll-none z-10">
            <section className="z-10 bg-green-400 w-[800px] panel">
                Zero
            </section>
            <section className="z-10 bg-red-600 w-[800px] panel">
                ONE
            </section>
            <section className="z-10 bg-orange-400 w-[800px] panel">
                TWO
            </section>
            <section className="z-10 bg-blue-400 w-[800px] panel">
                THREE
            </section>
        </div>
    )
}

export default Projects
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";

function Projects() {
    const component = useRef();
    const slider = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let panels = gsap.utils.toArray(".panel");
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: slider.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (panels.length - 1),
                    end: () => "+=" + slider.current.offsetWidth,
                },
            });
        }, component);
        return () => ctx.revert();
    });

    return (
        <div ref={component}>
            <div className="flex flex-col justify-center items-center h-[800px]">
                <div className="z-10">
                    <h1>Testing horizontal scrolling w/ three sections</h1>
                    <h2>First Container</h2>
                </div>
            </div>
            <div
                ref={slider}
                className="w-[400vw] h-screen flex flex-wrap z-10"
            >
                <div className="panel border-2">
                    <div className=" text-white text-2xl relative">
                        SCROLL DOWN
                    </div>
                </div>
                <div className="panel z-10">ONE</div>
                <div className="panel z-10">TWO</div>
                <div className="panel z-10">THREE</div>
            </div>
            <div className="flex h-screen bg-yellow-500">Last Container</div>
        </div>
    );
}

export default Projects;

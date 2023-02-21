import React from "react";

function AboutMe() {
    return (
        <>
            <div className="relative z-10 flex justify-between w-screen h-screen text-white font-Mitr">
                <div className="flex items-center w-full gap-20 ml-20 z-[3]">
                    <div className="flex flex-col gap-16 -mt-24">
                        <p className="font-semibold tracking-wider text-9xl min-w-[1000px]">
                            Hi, I`m DANIEL
                        </p>
                        <h2 className="text-32 min-w-[1000px]">
                            Front-end developer with a passion for games <br />
                            and for graphical environments that captivates the
                            eyes.
                        </h2>
                        <h2 className="text-32 min-w-[1000px]">
                            I`m currently based in Romania, <br />
                            and I pursuit a Master's degree in Computer Science.
                        </h2>
                    </div>
                    <img
                        src="https://picsum.photos/470/650"
                        alt=""
                        className="w-[470px] h-[650px] ml-10"
                    />
                </div>
            </div>
        </>
    );
}

export default AboutMe;

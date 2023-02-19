import React from "react";

function AboutMe() {
    return (
        <div
            className="z-10 font-Mitr text-white flex items-center h-[1080px] relative"
            id="aboutme"
        >
            <div className="flex items-center gap-20 ml-20">
                <div className="flex gap-16 flex-col justify-center -mt-24 h-full">
                    <p className="text-9xl font-semibold tracking-wider">
                        Hi, I`m DANIEL
                    </p>
                    <h2 className="text-32 min-w-[800px]">
                        Front-end developer with a passion for games <br />
                        and for graphical environments that captivates the eyes.
                    </h2>
                    <h2 className="text-32 min-w-[800px]">
                        I`m currently based in Romania, <br />
                        and I pursuit a Master's degree in Computer Science.
                    </h2>
                </div>
                <img
                    src="Images/Home/PhotoWithMe.png"
                    alt=""
                    className="w-[470px] h-[650px] ml-10"
                />
            </div>
        </div>
    );
}

export default AboutMe;

import React from "react";
import ScrollDownNounSvg from "../Icons/ScrollDownNounSvg";

function AboutMe() {
    return (
        <div className="z-50 font-Mitr text-white">
            <div className="flex justify-center h-full items-center">
                <div className="flex gap-16 flex-col justify-center -mt-24 h-full ml-24">
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
            <div className="absolute flex justify-center bottom-0 w-full animate-pulse">
                <ScrollDownNounSvg />
            </div>
        </div>
    );
}

export default AboutMe;

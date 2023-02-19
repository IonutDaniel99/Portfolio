import React, { useState } from "react";
import { Link } from "react-scroll";

function NavBar() {
    return (
        <div className="fixed top-1/2 bg- right-0 z-50 text-white">
            <nav className="flex flex-col">
                <Link
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    offset={75}
                    duration={500}
                >
                    About Me
                </Link>
                <Link
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Experience
                </Link>
                <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Personal <br /> Projects
                </Link>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                >
                    Contact
                </Link>
            </nav>
        </div>
    );
}

export default NavBar;

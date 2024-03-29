import { CSSProperties } from "react";
import { Link } from "react-scroll";

type Props = {
  windowHeight: number,
  mobile: boolean
}

const navStyle: CSSProperties = {
    position: "absolute",
    padding: "10px",
    right: 0
};

const regular: CSSProperties = {
    marginRight: "10px",
    cursor: "pointer"
};

export default function Nav({windowHeight, mobile}: Props) {
    
    return (

        <nav style={navStyle}>
            <code>
                {!mobile && <>
                    <Link
                        style={regular}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={windowHeight/-4}
                        duration={500}
                    ><span className="accent">./</span>About</Link>
                    <Link
                        style={regular}
                        activeClass="active"
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={windowHeight/5}
                        duration={500}
                    ><span className="accent">./</span>Skills</Link>
                </>}
                <Link
                    style={regular}
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={windowHeight/-5}
                    duration={500}
                ><span className="accent">./</span>Projects</Link>
                <Link
                    style={regular}
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={1500}
                ><span className="accent">./</span>Contact</Link>
                <a style={regular} href={`${process.env.PUBLIC_URL}/pdf/resume.pdf`} target="_blank" rel="noopener noreferrer"><span className="accent">./</span>Resume</a>
            </code>   
        </nav>
    );
}
  
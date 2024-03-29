/* eslint-disable react-hooks/exhaustive-deps */
import { CSSProperties, useEffect, useState } from "react";
import projectData from "../assets/json/project-data.json";
import { Link } from "react-scroll";

type Props = {
    windowHeight: number,
    introHidden: boolean,
    aboutHidden: boolean,
    skillsHidden: boolean,
    onScreenProject: string,
}

export default function Right( {windowHeight, introHidden, aboutHidden, skillsHidden, onScreenProject }: Props ) {
    const [arrowFlip, setArrowFlip] = useState(0);
    const [toTopButtonShow, setToTopButtonShow] = useState(0);

    const transitionCurve = "cubic-bezier(.4,.43,0,1.23)";
    const rightStyle: CSSProperties = {
        transition: `all 0.5s ${transitionCurve}`,
        position: "fixed",
        top: "0",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        zIndex: 1
    };

    const introStyle = {
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "10px",
        marginTop: "50vh",
        transition: `all 0.5s ${transitionCurve}`,   
    };

    const aboutStyle = {
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "10px",
        marginTop: "50vh",
        transition: `all 0.5s ${transitionCurve}`,
    };

    const skillsStyle = {
        display: "flex",
        justifyContent: "flex-end",
        marginRight: "10px",
        marginTop: "50vh",
        transition: `all 0.5s ${transitionCurve}`,
    };

    const projectStyle = {
        display: "flex",
        justifyContent: "flex-start",
        marginRight: "10px",
        marginTop: "6px",
        transition: `all 0.5s ${transitionCurve}`,
    };

    const projectBlockStyle = {
        
        marginTop: "50vh",
        transition: `all 0.5s ${transitionCurve}`
    };
    const arrowStyle = {
        transition: `all 1.5s ${transitionCurve}`,
        marginRight: "8px",

    };
    if (introHidden) {
        introStyle.marginTop = "-25px";
        projectBlockStyle.marginTop = "100vh";
    }
  
    if (aboutHidden) {
        introStyle.marginTop = "-25px";
        aboutStyle.marginTop = "-10px";
        projectBlockStyle.marginTop = "100vh"; 
    }

    if (skillsHidden) {
        introStyle.marginTop = "-55px";
        aboutStyle.marginTop = "-40px";
        skillsStyle.marginTop = "-40px";
        projectBlockStyle.marginTop = `calc(50vh - ${projectData.length * 8}px)`;
    }

    useEffect(() => {
        setTimeout(() => {
            if (arrowFlip === 1080) {
                setArrowFlip(0);
            } else {
                setArrowFlip(1080);
            }
        }, 50);
       
    }, [introHidden, aboutHidden, skillsHidden, onScreenProject]);

    useEffect(() => {
        setToTopButtonShow(0);
        setTimeout(() => {
            setToTopButtonShow(1);
        }, 1000);
    }, [introHidden, aboutHidden, skillsHidden]);

    return (
        <aside id="right" style={rightStyle}>
            <section>
                <code>
                    <div style={introStyle} >
                        <div style={{...arrowStyle, transform: `rotateX(${arrowFlip}deg)`}}>
                            <span className="accent">{"<< "}</span>
                        </div>
                        <div>Intro</div>
                    </div>
                    <div style={aboutStyle}>
                        <div style={{...arrowStyle, transform: `rotateX(${arrowFlip}deg)`}}>
                            <span className="accent">{"<< "}</span>
                        </div>
                        <div>About</div>
                    </div>
                    <div style={skillsStyle}>
                        <div style={{...arrowStyle, transform: `rotateX(${arrowFlip}deg)`}}>
                            <span className="accent">{"<< "}</span>
                        </div>
                        <div>Skills</div>
                    </div>
                    <div style={projectBlockStyle}>
                        <p>Projects/</p>
                        {projectData.map(project => (
                            <div key={project.name} style={projectStyle}>
                                { project.name===onScreenProject ? 
                                    <div style={{...arrowStyle, transform: `rotateX(${arrowFlip}deg)`}}>
                                        <span className="accent">{"<< "}</span>
                                    </div> : 
                                    <span className="accent">&nbsp;├─</span>
                                } 
                                <Link                  
                                    activeClass="active"
                                    to={project.name}
                                    spy={true}
                                    smooth={true}
                                    offset={windowHeight/-4}
                                    duration={500}
                                >{project.name}
                                </Link>
                            </div> 
                        ))}
                        
                    </div>
                </code>
            </section>

            <section style={{position: "fixed", bottom: "30px", right: "36px", opacity: introHidden ? toTopButtonShow : 0, transition: `opacity ${toTopButtonShow}s`, fontSize: "20px", border: "1px solid var(--accentcolor)", borderRadius: "12px", maxHeight: "20px", maxWidth: "20px", textAlign: "center", paddingBottom: "0px", lineHeight: "0px"}}>
           
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="bi bi-arrow-up-short" >        
                </Link>
                
            </section>
        </aside>
    );
}
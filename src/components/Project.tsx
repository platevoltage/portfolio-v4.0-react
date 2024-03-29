import Image from "./Image";
import Devicons from "./Devicons";
import { useEffect, useRef, useState, MutableRefObject, CSSProperties } from "react";
import "devicon/devicon.min.css";

type Props = {
    project: { 
        name: string, 
        description: string
        imgSrc: string, 
        gitHub: string, 
        demoVideo?: string,
        liveLink?: string,
        technologies: string[]
    },
    scrollPosition: number,
    windowHeight: number,
    windowWidth: number,
    setOnScreenProject: (project: string) => void,
}


export default function Project({project, scrollPosition, windowHeight, windowWidth, setOnScreenProject}: Props) {
    const projectStyle: CSSProperties = {
        position: "relative",
        marginBottom: windowWidth < 500 ? "0vh" : "10vh",
        maxWidth: "600px"
    };
    const imageFrameStyle: CSSProperties = {
        position: "relative",
        maxWidth: "90vw",
        paddingLeft: windowWidth < 500 ? 0 : "40px",
        borderStyle: "solid",
        borderColor: "var(--bgcolor)",
        borderRadius: "0 0 3px 0",
        backgroundColor: "var(--bgcolor)",
        boxShadow: windowWidth < 500 ? "none" : "11px 7px 0 var(--bgcolor), 12px 8px var(--accentcolor), 16px 16px 10px var(--shadowcolor)" ,
        zIndex: "1",
        display: "flex",
        justifyContent: "center",
     
    };
    const descriptionStyle: CSSProperties = {
    
        position: "relative",
        fontSize: ".8em",
        backgroundColor: "#33333311",
        padding: "100px 20px 20px 20px",
        top: "-80px",
        left: windowWidth < 500 ? "0px" : "100px",
        maxWidth: "100vw",
        borderRadius: "3px",
        border: "1px solid #33333344",
        boxShadow: "3px 3px 5px var(--shadowcolor)" ,   
    };
    const projectRef = useRef() as MutableRefObject<HTMLDivElement>;
    const [projectOffset, setProjectOffset] = useState(0);
    const isHidden = projectOffset < windowHeight/1.5 && projectOffset > -500 ;
    
    useEffect(() => {
        setProjectOffset(projectRef.current.getBoundingClientRect().top);
        
        if (projectOffset<windowHeight/1.5) {
            setOnScreenProject(project.name);
        }

    }, [project.name, projectOffset, scrollPosition, setOnScreenProject, windowHeight]);

    return (
        <section style={ isHidden ? {transition: "opacity 1.5s", opacity: "1" } : {transition: "opacity .8s", opacity: "0" }}>
            <div id={project.name} style={projectStyle} ref={projectRef}>
                <h2 style={{marginLeft: windowWidth < 500 ?  0: "10px" }}>
                    <span className="accent">./</span>{project.name}
                </h2>
                <div style={imageFrameStyle}>
                    <Image src={project.imgSrc} isHidden={isHidden} />
                </div>
                <div style={ isHidden ? {...descriptionStyle, transitionDuration: "1s", opacity: "1", transitionDelay: "0s" } : {...descriptionStyle, transitionDuration: ".8s", transitionDelay: ".5s", opacity: "0" } }>
                    <p style={ isHidden ? {transitionDuration: "1.5s", opacity: "1", transitionDelay: ".5s" } : {transitionDuration: "1.2s", transitionDelay: ".5s", opacity: "0" } }>{project.description}</p>
                    
                    {isHidden &&  <Devicons technologies={project.technologies} mobile={windowWidth >= 500}/>}

                    <div style={{display: "flex", justifyContent: windowWidth < 500 ? "center" : "flex-end"}}>
                        <a className="button" href={project.gitHub}  target="_blank" rel="noopener noreferrer">Project on GitHub</a>
                        {project.liveLink && <a className="button" href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Link</a>}
                            
                        {project.demoVideo && <a className="button" href={project.demoVideo} target="_blank" rel="noopener noreferrer">Demo Video</a>}  
                        
                    </div>
                </div> 
            </div>
        </section>
    );
}
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import projectData from '../assets/json/project-data.json';
import { Link } from "react-scroll";

type Props = {
    windowHeight: number,
    introHidden: boolean,
    aboutHidden: boolean,
    onScreenProject: string,
}

export default function Right( {windowHeight, introHidden, aboutHidden, onScreenProject }: Props ) {
    const [arrowFlip, setArrowFlip] = useState(0);

    const rightStyle: any = {
        transition: 'all 0.5s cubic-bezier(.4,.43,0,1.23)',
        position: 'fixed',
        top: '0',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1
    };

    const introStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '10px',
        marginTop: '50vh',
        transition: 'all 0.5s cubic-bezier(.4,.43,0,1.23)',
        
    }

    const aboutStyle = {
        display: 'flex',
        justifyContent: 'flex-end',
        marginRight: '10px',
        marginTop: '50vh',
        transition: 'all 0.5s cubic-bezier(.4,.43,0,1.23)',
    }

    const projectStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        marginRight: '10px',
        marginTop: '6px',
        transition: 'all 0.5s cubic-bezier(.4,.43,0,1.23)',
    }

    const projectBlockStyle = {
        
        marginTop: '50vh',
        transition: 'all 0.5s cubic-bezier(.4,.43,0,1.23)'
    }
    const arrowStyle = {
        transition: 'all 1.5s cubic-bezier(.4,.43,0,1.23)',
        marginRight: '8px',

    }
    if (introHidden) {
        introStyle.marginTop = '-35px';
        projectBlockStyle.marginTop = '100vh';
    }
  
    if (aboutHidden) {
        introStyle.marginTop = '-65px';
        aboutStyle.marginTop = '-30px';
        projectBlockStyle.marginTop = `calc(50vh - ${projectData.length * 10}px)`;
        
    }

    useEffect(() => {
        setTimeout(() => {
            if (arrowFlip === 1080) {
                setArrowFlip(0);
            } else {
                setArrowFlip(1080);
            }

        }, 50);
       

    }, [introHidden, aboutHidden, onScreenProject]);

    return (
        <aside id="right" style={rightStyle}>
            <code>
                <section>
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
                    
                </section>
            </code>
  
        </aside>
    );
  }
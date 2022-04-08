
import "bootstrap-icons/font/bootstrap-icons.css";
import {useEffect, useState, useRef} from "react";



export default function Left( {scrollPosition, footerExpand } ) {
    const sectionRef = useRef(null);
    const [spin, setSpin] = useState('rotateY(0deg)');
    const [height, setHeight] = useState('100vh');
    const [width, setWidth] = useState('25px');
    const [expandedContact, setExpandedContact] = useState(false)

    const leftStyle = {
        transition: 'top .5s cubic-bezier(0,.11,0,1)',
        
        position: 'fixed',
        top: height,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 1
        
    };


    const sectionStyle = {
        transitionDelay: '1.6s, 0s',
        transitionProperty: 'transform, width',
        transitionDuration: '3s, .1s',
        transitionTimingFunction: 'cubic-bezier(0,.11,0,1), ease-in',
        display: 'flex',
        flexDirection: 'column',
        fontSize: '25px',
        marginLeft: '16px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'var(--accentcolor)',
        borderRadius: '6px',
        boxShadow:  '3px 3px 3px var(--shadowcolor)',
        padding: '4px',
        transform: spin,
        height: '120px',
        width: width
    };

    const stripeStyle = {
        position: 'relative',
        display: 'block',
        width: '2px',
        height: '100vh',
        left: '32px',
        bottom: 0,
        zIndex: 100,
        borderStyle: 'solid',
        borderWidth: '0 0 1px 1px',
        borderColor: 'var(--accentcolor)',
        borderRadius: '0 6px 6px 6px'   
    }

    useEffect(() => {
        setSpin('rotateY(2880deg)');
    }, []);

    useEffect(() => {
        if (!footerExpand) {
            // setTimeout(() => {
                setWidth('25px');
            // }, 50);

            // setTimeout(() => {
                setHeight(`calc(45vh + ${scrollPosition/-30}px)`);
                
            // }, 250);
            // setTimeout(() => {
                setExpandedContact(false);
            // }, 250);
        }
        if (footerExpand)  {
            setHeight(`calc(100vh - ${sectionRef.current.getBoundingClientRect().bottom - sectionRef.current.getBoundingClientRect().y + 20}px)`);
            setTimeout(() => {
                setWidth('calc(100vw - 50px)');
                
            }, 250);
            setTimeout(() => {
                setExpandedContact(true);
            }, 350);
            
        }
  
    }, [expandedContact, footerExpand, scrollPosition, width])
//    console.log(scrollPosition);
    return (
        <aside id="left" style={leftStyle}>
            <section style={sectionStyle} ref={sectionRef}>
                { !expandedContact ?
                    <>
                        <a href="https://github.com/antieatingactivist/" target="_blank" rel="noopener noreferrer" className="bi bi-github"> </a>
                        <a href="https://twitter.com/platevoltage" target="_blank" rel="noopener noreferrer" className="bi bi-twitter"> </a>
                        <a href="https://www.linkedin.com/in/garrett-corbin-7a7777227/" target="_blank" rel="noopener noreferrer" className="bi bi-linkedin"> </a>
                        <a href="mailto:jgarrettcorbin@gmail.com" className="bi bi-envelope"> </a>
                    </> :

                    <div style={{display: 'flex'}}>
                        
                        <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
                            <a href="https://github.com/antieatingactivist/" target="_blank" rel="noopener noreferrer" className="bi bi-github">
                                <span style={{fontSize: '.6em'}}> &nbsp; Check out some of my work on GitHub.</span> 
                            </a>
                            <a href="https://twitter.com/platevoltage" target="_blank" rel="noopener noreferrer" className="bi bi-twitter">
                                <span style={{fontSize: '.6em'}}> &nbsp; @platevoltage on Twitter.</span> 
                            </a>
                            <a href="https://www.linkedin.com/in/garrett-corbin-7a7777227/" target="_blank" rel="noopener noreferrer" className="bi bi-linkedin">
                                <span style={{fontSize: '.6em'}}> &nbsp; Connect with me on Linkedin.</span> 
                            </a>
                            <a href="mailto:jgarrettcorbin@gmail.com" className="bi bi-envelope">
                            <span style={{fontSize: '.6em'}}> &nbsp; Send me an e-mail.</span> 
                            </a>

                        </div>
                        <div style={{fontSize: '.6em', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                            <p>This site was built by Garrett Corbin in 2022 using React.js.</p>
                            <a href="https://github.com/antieatingactivist/portfolio-v4.0-react" target="_blank" rel="noopener noreferrer">view the source code on GitHub</a>
                        </div>
                    </div>
                }
            </section>
        <div id="v-stripe" style={stripeStyle}></div>
        </aside>
    );
}
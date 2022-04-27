
import Nav from './Nav';




export default function Header({hidden, scrollPosition, windowHeight, windowWidth}) {



    const noBorder = (scrollPosition < 4);
    const style = {
        
        display: 'flex',
        flexDirection: windowWidth < 500 ? 'column' : 'row',
        top: '0px',
        borderStyle: 'solid',
        borderWidth: '0 0 1px 0',
        borderColor: 'var(--accentcolor)',
        boxShadow: '10px 10px 10px var(--shadowcolor)',
        backgroundColor: 'var(--bgcolortransparent)',
        zIndex: '100'
    }
    const titleStyle = {
        marginTop: "6px", 
        marginLeft: "6px", 
        fontSize: "1.5em",
        // textAlign: 'center'

    }
    

    if (hidden) {

        style.top = '-100px';
        
    }
    if (noBorder) {
        style.borderColor = '#00000000';
        style.boxShadow = 'none';
        style.backgroundColor = '#00000000';
    }


    return (
        <header style={style}>
            <div style={titleStyle}>
                {windowWidth < 500 ? <><span className="accent">J</span>GC</> : <><span className="accent">J.</span> Garrett Corbin</> }
            </div>

            {/* { windowWidth < 500 ? <></> : <Nav windowHeight={windowHeight} windowWidth={windowWidth} /> } */}
            <Nav windowHeight={windowHeight} windowWidth={windowWidth} /> 
        </header>
    );
  }
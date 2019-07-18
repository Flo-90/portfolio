import React, { useState } from 'react';
import './MainContainer.css';
import Headline from './Headline/Headline';
import Nav from './Nav/Nav';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';
import About from '../About/About';

const MainContainer = () => {

    const [work, setWork] = useState(false);
    const [skills, setSkills] = useState(false);
    const [about, setAbout] = useState(false);

    const toggleWork = () => {
        setWork(!work);
        setSkills(false);
        setAbout(false);
    }

    const toggleSkills = () => {
        setWork(false);
        setSkills(!skills);
        setAbout(false);
    }

    const toggleAbout = () => {
        setWork(false);
        setSkills(false);
        setAbout(!about);
    }

    const containerStyle = work || skills || about ?
        {maxHeight: '250px', minHeight: '250px'} :
        {maxHeight: '0px', minHeight: '0px'};

    return ( 
        <div className="container">
            <Headline />
            <Nav 
                toggleWork={toggleWork}
                toggleSkills={toggleSkills}
                toggleAbout={toggleAbout}
                workState={work}
                skillsState={skills}
                aboutState={about}
            />
            <div className="card-container" style={containerStyle}>
                { work ? <Work /> : null}
                { skills ? <Skills /> : null}
                { about ? <About /> : null}
            </div>
        </div>
     );
}
 
export default MainContainer;
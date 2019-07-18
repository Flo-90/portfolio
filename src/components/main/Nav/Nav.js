import React from 'react';
import './Nav.css';

const Nav = ({toggleWork, toggleSkills, toggleAbout, workState, skillsState, aboutState}) => {

    return ( 
        <nav>
           <ul>
               <li onClick={toggleWork} style={{color: workState ? '#1f3858' : '#3f70b1'}}>Work</li>
               <li onClick={toggleSkills} style={{color: skillsState ? '#1f3858' : '#3f70b1'}}>Skills</li>
               <li onClick={toggleAbout} style={{color: aboutState ? '#1f3858' : '#3f70b1'}}>About</li>
           </ul>
        </nav>
     );
}
 
export default Nav;
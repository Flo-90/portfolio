import React from 'react';
import {Spring} from 'react-spring/renderprops';
import './Skill.css';

const Skill = ({skill, skillLevel}) => {
    return ( 
        <div className="skill">
            <p className="skill-title">{skill}</p>
            <div className="progress-bar">
                <Spring
                    config={{delay: 1000}}
                    from={{width: '0%'}}
                    to={{width: skillLevel}}>
                    {props => <div className="skill-level" style={props} title={skillLevel}></div>}
                </Spring>
            </div>
        </div> 
     );
}
 
export default Skill;
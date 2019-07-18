import React from 'react';
import Card from '../Card/Card';
import Skill from './Skill/Skill';

const Skills = () => {

    return ( 
        <React.Fragment>
            <Card title="Frontend" delay="600">
                <Skill skill="HTML5" skillLevel="85%"/>
                <Skill skill="CSS3" skillLevel="80%"/>
                <Skill skill="JavaScript" skillLevel="55%"/>
            </Card>

            <Card title="Frameworks" delay="500">
                <Skill skill="Framework7" skillLevel="70%"/>
            </Card>

            <Card title="Libaries" delay="400">
                <Skill skill="React" skillLevel="50%"/>
                <Skill skill="jQuery" skillLevel="55%"/>
            </Card>

            <Card title="Backend" delay="300">
                <Skill skill="PouchDB" skillLevel="65%"/>
                <Skill skill="PHP" skillLevel="40%"/>
                <Skill skill="SQL" skillLevel="40%"/>
            </Card>
        </React.Fragment>
     );
}
 
export default Skills;
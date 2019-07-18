import React from 'react';
import Card from '../Card/Card';
import List from '../Card/List/List';

const About = () => {

    const about = {
        personality: {
            content: ['Open Minded', 'Friendly', 'Humorous', 'Calmly']
        },
        interests: { 
            content: ['Web Technologies', 'Cooking', 'Health & Sports', 'Nature']
        },
        passion: {
            content: ['Web Developement', 'Minecraft', 'Music', 'Food']
        }
    }

    return ( 
        <React.Fragment>
            <Card title="Personality" delay="600">
                <List listContent={about.personality.content}/>
            </Card>

            <Card title="Interests" delay="500">
                <List listContent={about.interests.content}/>
            </Card>

            <Card title="Passion" delay="400">
                <List listContent={about.passion.content}/>
            </Card>
        </React.Fragment>
     );
}
 
export default About;

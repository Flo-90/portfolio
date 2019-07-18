import React from 'react';
import Card from '../Card/Card';
import List from '../Card/List/List';
import Links from './Links/Links';

const Work = () => {

    const work = {
        gym: {
            name: 'GymRoutine', 
            techniques: ['Hybride App', 'React.js', 'Framework7', 'PouchDB (coming soon)']
        },
        amaro: {
            name: 'Amaro Leipzig', 
            techniques: ['HTML & CSS', 'Mobile Friendly']
        },
        vorsorge: {
            name: 'Vorsorge Leipzig',
            techniques: ['HTML & CSS', 'Mobile Friendly', 'jQuery & AJAX', 'PHP']
        },
        portfolio: {
            name: 'My Portfolio',
            techniques: ['React.js']
        }
    }

    return (
        <React.Fragment> 
            <Card title={work.gym.name} delay="600">
                <List listContent={work.gym.techniques} />
                <Links webLink="http://aquatic-driving.surge.sh/" gitLink="https://github.com/Flo-90/react-app"/>
            </Card>

            <Card title={work.vorsorge.name} delay="500">
                <List listContent={work.vorsorge.techniques} />
                <Links webLink="http://testyy.bplaced.net/vorsorge-preview/" gitLink="https://github.com/Flo-90/vorsorge"/>
            </Card>

            <Card title={work.amaro.name} delay="400">
                <List listContent={work.amaro.techniques} />
                <Links webLink="https://amaro-leipzig.de/" gitLink="https://github.com/Flo-90/amaro"/>
            </Card>

            <Card title={work.portfolio.name} delay="300">
                <List listContent={work.portfolio.techniques} />
                <Links webLink="http://florian-stehle.de/" gitLink="https://github.com/Flo-90/portfolio"/>
            </Card>
            
        </React.Fragment>
     );
}
 
export default Work;
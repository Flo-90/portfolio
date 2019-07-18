import React from 'react';
import {Spring} from 'react-spring/renderprops';
import './Card.css';

const Card = ({title, children, delay}) => {

    return ( 
        <Spring
            config={{delay: delay}}
            from={{opacity: 0, marginLeft: '-400px'}}
            to={{opacity: 1, marginLeft: '0px'}}>
            {props => <div className="card" style={props}>
                <div className="card-title">{title}</div>
                <div className="card-body">
                    {children}
                </div>
            </div>}
        </Spring>
        
     );
}
 
export default Card;
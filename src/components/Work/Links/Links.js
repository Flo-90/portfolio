import React from 'react';
import './Links.css';

const Links = ({webLink, gitLink}) => {
    return ( 
        <div className="work-footer">
                <a href={webLink} target="_blank" rel="noopener noreferrer">&gt; visit</a>
                <a href={gitLink} target="_blank" rel="noopener noreferrer">&lt;/&gt; code</a>
        </div>
     );
}
 
export default Links;
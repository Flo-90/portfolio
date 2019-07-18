import React from 'react';
import './List.css';

const List = ({listContent}) => {

    const liContent = listContent.map((content, index) =>
        <li key={index}>{content}</li>
    );

    return ( 
        <ul className="list-body">
            {liContent}
        </ul>
     );
}
 
export default List;
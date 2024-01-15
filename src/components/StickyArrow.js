import React from 'react';

import upArrow from "./images/upArrow.png";

function StickyArrow(props) {
    return (
        <div className="stickyArrow">
            <a href={`#${props.id}`} className='upArrow'><img src={upArrow} alt='Up arrow'></img></a>
        </div>
    );
}

export default StickyArrow;
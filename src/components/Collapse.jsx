import React, { useState } from 'react';

const Collapse = (props) => {
    let [isExpanded, setIsExpanded] = useState(false);
    return (
        <div
        className={isExpanded ? "collapse collapse--expanded" : "collapse"}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="collapse__title">{props.title}</h2>
        <div className="collapse__content">
          {props.text}
        </div>
      </div>
    );
};

export default Collapse;
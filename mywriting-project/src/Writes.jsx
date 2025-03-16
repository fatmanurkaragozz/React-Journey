import React from 'react';

function Writes({ write }) {
    const { title, description, link, image } = write;

    return (
        <div className="card">
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <h5>{description}</h5>
            <a href={link} target="_blank" rel="noopener noreferrer">Click to Read!</a>
        </div>
    );
}

export default Writes;

import React from "react";
import { Link } from "react-router-dom";

function ArtPiece(item) {
    const {
        name,
        description,
        image,
        price
    } = item;

    return (
        <div>
            <img 
                alt={name}
                src={`/images/${image}`}
            />
            <p>{name}</p>
            <p>{description}</p>
            <p>{price}</p>
        </div>
    );
}

export default ArtPiece;
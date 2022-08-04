import React, { useEffect } from 'react';
import ArtPiece from '../ArtPiece';


function ArtworkList() {
    const { loading, data } = useQuery();

    return (
        <div>
            {editthis.map((artwork) => (
                <ArtPiece
                    key={artwork._id}
                    _id={artwork._id}
                    image={artwork.image}
                    name={artwork.name}
                    price={artwork.price}
                />
            ))}
        </div>
    );
}

export default ArtworkList;
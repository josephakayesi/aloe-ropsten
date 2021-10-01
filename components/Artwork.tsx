import React from 'react';

function Artwork({ setSelectedImage, artwork }) {
  return (
    <div className='artwork'>
      <div className="artwork-wrap" key={artwork.id} onClick={() => setSelectedImage(artwork.url)}>
        <img src={artwork.url} alt={artwork.name} />
      </div>
      <div className='shelf'>
          <button>buy</button>
      </div>
    </div>
  );
}

export default Artwork;

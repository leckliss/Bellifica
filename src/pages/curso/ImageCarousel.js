import React, { useState } from 'react';
import Styles from './ImageCarousel.module.css'; // Importe o arquivo de estilos

function ImageCarousel({ images }) {
    const [startIndex, setStartIndex] = useState(0);

    const nextSet = () => {
        const newIndex = startIndex + 3;
        setStartIndex(newIndex >= images.length ? 0 : newIndex);
    };

    const prevSet = () => {
        const newIndex = startIndex - 3;
        setStartIndex(newIndex < 0 ? images.length - 3 : newIndex);
    };

    return (
        <div className={Styles.carouselContainer}>
        <button onClick={prevSet} disabled={startIndex === 0}>
          Anterior
        </button>
        <div className={Styles.carousel}>
          {images.slice(startIndex, startIndex + 3).map((image, index) => (
            <a key={startIndex + index} href={image.link} className={Styles.imageLink}>
              <img
                src={image.src}
                alt={`Image ${startIndex + index}`}
                className={Styles.image}
              />
              <p className={Styles.imageDescription}>{image.description}</p>
            </a>
          ))}
        </div>
        <button onClick={nextSet} disabled={startIndex + 3 >= images.length}>
          Próximo
        </button>
      </div>
    );
}

export default ImageCarousel;
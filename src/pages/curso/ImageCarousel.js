import React, { useState } from 'react';
import Styles from './ImageCarousel.module.css'; // Importe o arquivo de estilos

function ImageCarousel({ images }) {
  const [startIndex, setStartIndex] = React.useState(0);

  const nextSet = () => {
    const newIndex = startIndex + 3;
    setStartIndex(newIndex >= images.length ? 0 : newIndex);
  };

  const prevSet = () => {
    const newIndex = startIndex - 3;
    setStartIndex(newIndex < 0 ? images.length - 3 : newIndex);
  };

  const handleImageClick = (link) => {
    window.open(link, '_blank'); // Abrir o link em uma nova guia ao clicar na imagem
  };

  return (
    <div className={Styles.carouselContainer}>
      <button onClick={prevSet} disabled={startIndex === 0}>
        Anterior
      </button>
      <div className={Styles.carousel}>
        {images.slice(startIndex, startIndex + 3).map((image, index) => (
          <div key={startIndex + index} className={Styles.imageContainer}>
            <a
              href={image.link}
              target="_blank"
              rel="noopener noreferrer"
              className={Styles.imageLink}
              onClick={() => handleImageClick(image.link)} // Abre o link em nova guia ao clicar na imagem
            >
              <img
                src={image.src}
                alt={`Image ${startIndex + index}`}
                className={Styles.image}
              />
              <p className={Styles.imageDescription}>{image.description}</p>
            </a>
          </div>
        ))}
      </div>
      <button onClick={nextSet} disabled={startIndex + 3 >= images.length}>
        Próximo
      </button>
    </div>
  );
}

export default ImageCarousel;
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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" class="bi bi-arrow-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
        </svg>
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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" class="bi bi-arrow-right" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
        </svg>
      </button>
    </div>
  );
}

export default ImageCarousel;
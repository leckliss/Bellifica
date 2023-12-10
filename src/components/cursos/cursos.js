import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './cursos.module.css';

function CursosDicas() {
  const sliderSettingsDestaque = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderSettingsPadrao = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const recomendados = [
    { id: 1, title: 'Curso de Maquiagem', image: 'path/to/image' },
    { id: 2, title: 'Curso de Cabelos', image: 'path/to/image' },
    { id: 3, title: 'Curso de Gestão de Negócios', image: 'path/to/image' },
    { id: 4, title: 'Curso de Financeiro', image: 'path/to/image' },
    { id: 5, title: 'Curso de Gastos', image: 'path/to/image' },
    { id: 6, title: 'Curso de Vendas', image: 'path/to/image' },
    { id: 7, title: 'Curso de Gestão de Gastos', image: 'path/to/image' },
  ];

  const destaques = [
    { id: 1, title: 'Curso Destaque 1', image: 'path/to/image' },
    { id: 2, title: 'Curso Destaque 2', image: 'path/to/image' },
    { id: 3, title: 'Curso Destaque 3', image: 'path/to/image' },
  ];

  if (recomendados.length === 0 || destaques.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.configpainelstyle}>

      <div className={styles.cursosContainer}>
        <Slider {...sliderSettingsDestaque}>
          {destaques.map(destaque => (
            <div key={destaque.id} className={styles.cursoCard}>
              <img src={destaque.image} alt={destaque.title} className={styles.cursoImage} />
              <h3 className={styles.cursoTitle}>{destaque.title}</h3>
            </div>
          ))}
        </Slider>
      </div>

      <div className={styles.cursosContainer}>
        <h2 className={styles.tituloSecao}>Cursos Recomendados</h2>
        <Slider {...sliderSettingsPadrao}>
          {recomendados.map(curso => (
            <div key={curso.id} className={styles.cursoCard}>
              <img src={curso.image} alt={curso.title} className={styles.cursoImage} />
              <h3 className={styles.cursoTitle}>{curso.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.cursosContainer}>
        <h2 className={styles.tituloSecao}>Cursos Presenciais</h2>
        <Slider {...sliderSettingsPadrao}>
          {recomendados.map(curso => (
            <div key={curso.id} className={styles.cursoCard}>
              <img src={curso.image} alt={curso.title} className={styles.cursoImage} />
              <h3 className={styles.cursoTitle}>{curso.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.cursosContainer}>
        <h2 className={styles.tituloSecao}>Cursos Online</h2>
        <Slider {...sliderSettingsPadrao}>
          {recomendados.map(curso => (
            <div key={curso.id} className={styles.cursoCard}>
              <img src={curso.image} alt={curso.title} className={styles.cursoImage} />
              <h3 className={styles.cursoTitle}>{curso.title}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CursosDicas;

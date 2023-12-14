import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './cursos.module.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 1, transition: 'opacity 300ms ease-in-out' }}>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', minWidth: '300px', transform: 'scale(1)', transition: 'transform 300ms ease-in-out' }}>
        <h2 style={{ color: 'black' }}>{title}</h2>
        {children}
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}

function CursosDicas() {

  const firebaseConfig = {
    apiKey: "AIzaSyAeqhx9yECmTc6tzuCM-63gwpe18P_oUeA",
    authDomain: "bellifica-13482.firebaseapp.com",
    projectId: "bellifica-13482",
    storageBucket: "bellifica-13482.appspot.com",
    messagingSenderId: "882105306865",
    appId: "1:882105306865:web:c0f84e4f98fbc4e23a6350",
    measurementId: "G-Y0WYVDRHRE"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const messagesCollectionRef = collection(db, "mensagens");

  const [isModalDynamicOpen, setIsModalDynamicOpen] = useState(false);
  const [isModalContentAddOpen, setIsModalContentAddOpen] = useState(false);
  const [selectedCurso, setSelectedCurso] = useState(null);
  const [newContent, setNewContent] = useState({});
  const [recomendados, setRecomendados] = useState([""]);
  const [destaques, setDestaques] = useState([""]);
  const [categorias, setCategorias] = useState({});
  const [tempTag, setTempTag] = useState('');

  const handleAddTag = () => {
    setNewContent({
      ...newContent,
      tags: [...(newContent.tags || []), tempTag]
    });
    setTempTag('');
  };



  const openModalDynamic = (curso) => {
    setSelectedCurso(curso);
    setIsModalDynamicOpen(true);
  };

  const closeModalDynamic = () => {
    setSelectedCurso(null);
    setIsModalDynamicOpen(false);
  };

  const openModalContentAdd = () => setIsModalContentAddOpen(true);
  const closeModalContentAdd = () => {
    setNewContent({});
    setTempTag('');
    setIsModalContentAddOpen(false);
  };


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

  const handleAddContent = async (e) => {
    e.preventDefault();
    if (typeof newContent.tags === 'string') {
      newContent.tags = newContent.tags.split(',').map(tag => tag.trim());
    }
    if (newContent.type === 'presencial' || newContent.type === 'hibrido') {
      if (!newContent.location) {
        toast.error('Por favor, preencha a localização do curso.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        return;
      }
    }
    try {
      await addDoc(collection(db, "cursos"), newContent);
      toast.success(`Conteúdo adicionado com sucesso`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      closeModalContentAdd();
    } catch (error) {
      toast.error(`Error adding document: " + ${error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  useEffect(() => {
    const q = query(collection(db, "cursos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const categoriasTemp = {};
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (!categoriasTemp[data.category]) {
          categoriasTemp[data.category] = [];
        }
        categoriasTemp[data.category].push({ ...data, id: doc.id });
      });
      setCategorias(categoriasTemp);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.configpainelstyle}>
      <button onClick={openModalContentAdd}>Adicionar Conteúdo</button>
      <div style={{width: '100vw', backgroundColor: 'green', height: 'auto'}}>
        {Object.keys(categorias).map((categoria) => (
          <div key={categoria} style={{width: '100vw', backgroundColor: 'green', height: 'auto'}}>
            <h2 className={styles.tituloSecao}>{categoria}</h2>
            <Slider {...sliderSettingsPadrao}>
              {categorias[categoria].map((curso) => (
                <div key={curso.id} style={{width: '20vw'}} className={styles.cursoCard} onClick={() => openModalDynamic(curso)}>
                  <img src={curso.image} alt={curso.title} className={styles.cursoImage} />
                  <h3 className={styles.cursoTitle}>{curso.title}</h3>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalDynamicOpen} onClose={closeModalDynamic} title={selectedCurso?.title || ''}>
        <div style={{ minHeight: '50vh', minWidth: '30vw', maxWidth: '70vw', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <p style={{ color: 'black' }}>Descrição: {selectedCurso?.description}</p>
          <p style={{ color: 'black' }}>Autor: {selectedCurso?.author}</p>
          <p style={{ color: 'black' }}>Categoria: {selectedCurso?.category}</p>
          <p style={{ color: 'black' }}>Tipo: {selectedCurso?.type}</p>
          <p style={{ color: 'black' }}>Duração: {selectedCurso?.duration} minutos</p>
          <p style={{ color: 'black' }}>Link: <a href={selectedCurso?.link} target="_blank" rel="noopener noreferrer">Mais informações</a></p>
          <p style={{ color: 'black' }}>Localização: {selectedCurso?.location}</p>
          <p style={{ color: 'black' }}>Requisitos: {selectedCurso?.requirements}</p>
          <div style={{ color: 'black' }}>Tags: {selectedCurso?.tags?.join(', ')}</div>
        </div>
      </Modal>

      <Modal isOpen={isModalContentAddOpen} onClose={closeModalContentAdd} title="Adicionar Conteúdo">
        <form style={{ minHeight: '50vh', minWidth: '30vw', display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={handleAddContent}>
          <input style={{ color: 'black', height: '50px', padding: '1%', border: '1px solid black', borderRadius: '20px' }} type="text" placeholder="Título" value={newContent.title} onChange={(e) => setNewContent({ ...newContent, title: e.target.value })} />
          <input style={{ color: 'black', height: '50px', padding: '1%', border: '1px solid black', borderRadius: '20px' }} type="text" placeholder="Descrição" value={newContent.description} onChange={(e) => setNewContent({ ...newContent, description: e.target.value })} />
          <input style={{ color: 'black', height: '50px', padding: '1%', border: '1px solid black', borderRadius: '20px' }} type="text" placeholder="Autor" value={newContent.author} onChange={(e) => setNewContent({ ...newContent, author: e.target.value })} />
          <input style={{ color: 'black', height: '50px', padding: '1%', border: '1px solid black', borderRadius: '20px' }} type="text" placeholder="Categoria" value={newContent.category} onChange={(e) => setNewContent({ ...newContent, category: e.target.value })} />
          <input style={{ color: 'black', height: '50px', padding: '1%', border: '1px solid black', borderRadius: '20px' }} type="text" placeholder="Duração" value={newContent.duration} onChange={(e) => setNewContent({ ...newContent, duration: e.target.value })} />
          <input style={{ color: 'black', height: '50px', padding: '1%', border: '1px solid black', borderRadius: '20px' }} type="text" placeholder="Link" value={newContent.link} onChange={(e) => setNewContent({ ...newContent, link: e.target.value })} />
          <input style={{ color: 'black', height: '50px', padding: '1%', border: '1px solid black', borderRadius: '20px' }} type="text" placeholder="Requisitos" value={newContent.requirements} onChange={(e) => setNewContent({ ...newContent, requirements: e.target.value })} />
          <select style={{ color: 'black', height: '50px', padding: '1%', border: '1px solid black', borderRadius: '20px' }} value={newContent.type} onChange={(e) => setNewContent({ ...newContent, type: e.target.value })}>
            <option style={{ color: 'black' }} value="">Selecione o tipo</option>
            <option style={{ color: 'black' }} value="presencial">Presencial</option>
            <option style={{ color: 'black' }} value="online">Online</option>
            <option style={{ color: 'black' }} value="hibrido">Híbrido</option>
          </select>
          {(newContent.type === 'presencial' || newContent.type === 'hibrido') && (
            <input
              type="text"
              placeholder="Localização do Curso"
              value={newContent.location || ''}
              onChange={(e) => setNewContent({ ...newContent, location: e.target.value })}
              style={{ color: 'black', height: '50px', padding: '1%', border: '1px solid black', borderRadius: '20px' }}
            />
          )}
          <div>
            <input type="text" style={{ color: 'black', height: '50px', padding: '1%', border: '1px solid black', borderRadius: '20px' }} placeholder="Tag" value={tempTag} onChange={(e) => setTempTag(e.target.value)} />
            <button type="button" style={{ borderRadius: '20px' }} onClick={handleAddTag}>Adicionar Tag</button>
          </div>
          <div style={{ color: 'black', display: 'flex', flexDirection: 'row', gap: '2%' }}> Tags adicionadas:
            {newContent.tags && newContent.tags.map((tag, index) => (
              <div style={{ color: 'black', backgroundColor: '#fd9ba6', padding: '5px', borderRadius: '5px' }} key={index}>{tag}</div>
            ))}
          </div>
          <button style={{ marginBottom: '20px', borderRadius: '20px' }} type="submit">Adicionar</button>
        </form>
      </Modal>
    </div>
  );
}

export default CursosDicas;

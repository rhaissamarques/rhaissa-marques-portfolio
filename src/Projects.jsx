import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import logisticaImg from './img/logistica.png';
import logistica1 from './img/logistica1.png';
import logistica2 from './img/logistica2.png';
import logistica3 from './img/logistica3.png';
import rh1 from './img/rh1.png';
import rh2 from './img/rh2.png';
import rh3 from './img/rh3.png';
import producao1 from './img/producao1.png';
import producao2 from './img/producao2.png';
import marketing1 from './img/marketing1.png';
import marketing2 from './img/marketing2.png';
import marketing3 from './img/marketing3.png';
import vendas1 from './img/vendas1.png';
import vendas2 from './img/vendas2.png';
import './ProjectsStyle.css';
import RH from "./img/rh.png";
import Producao from "./img/producao1.png";
import Marketing from "./img/Marketing.png";

const projects = [
  {
    title: "Dashboard Vendas",
    desc: "Lucro, faturamento por país e por tipo de clietne, margem de lucro",
    tags: ["Power BI", "Dashboard", "Vendas"],
    image: vendas1,
    dashImages: [vendas1, vendas2],
  },
  {
    title: "Dashboard Logística",
    desc: "Contagem pedidos, quantidade transportes, entregas fora do prazo",
    tags: ["Power BI", "Dashboard", "Logística"],
    image: logisticaImg,
    dashImages: [logistica1, logistica2, logistica3],
  },
  {
    title: "Dashboard de RH",
    desc: "Contratações, funcionários ativos, desligamentos, gênero, cargo por área",
    tags: ["Power BI", "Dashboard", "RH"],
    image: RH,
    dashImages: [rh1, rh2, rh3],
  },
  {
    title: "Dashboard de Produção",
    desc: "Qtd produzida, Qtd rejeitada, Horas produtivas, Horas paradas, prod mensal",
    tags: ["Power BI", "Dashboard", "Produção"],
    image: Producao,
    dashImages: [producao1, producao2],
  },
  {
    title: "Dashboard de Marketing",
    desc: "Transações, Receira, Conversão, Rejeição, Tempo médio na página",
    tags: ["Power BI", "Dashboard", "Marketing"],
    image: Marketing,
    dashImages: [marketing1, marketing2, marketing3],
  },
];

function ImageModal({ isOpen, onClose, images, projectTitle, description }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = description ? images.length + 1 : images.length; // +1 só se tiver descrição

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides); // Usar totalSlides aqui
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides); // E aqui também
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <h2 className="modal-title">{projectTitle}</h2>
        
        <div className="modal-carousel">
          <button className="carousel-btn prev" onClick={prevImage}>
            ‹
          </button>
          
          {currentIndex < images.length ? (
            <img 
              src={images[currentIndex]} 
              alt={`${projectTitle} - Imagem ${currentIndex + 1}`}
              className="modal-image"
            />
          ) : (
            <div className="modal-description-slide">
              <Markdown remarkPlugins={[remarkGfm]}>
                {description}
              </Markdown>
            </div>
          )}

          <button className="carousel-btn next" onClick={nextImage}>
            ›
          </button>
        </div>

        <div className="carousel-indicators">
          {/* Corrigido: criar indicadores para TODOS os slides */}
          {Array.from({ length: totalSlides }).map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="section">
        <div className='grid3'>
          {projects.map((p) => (
            <article key={p.title} className="card">
              <div
                className="card__media"
                onClick={() => openModal(p)}
                style={{
                  backgroundImage: `url("${p.image}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "multiply",
                }}
              />
              <div className="card__body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="card__actions">
                <button
                  className="link"
                  onClick={() => openModal(p)}
                >
                  Ver Detalhes
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
      {selectedProject && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          images={selectedProject.dashImages}
          projectTitle={selectedProject.title}
          description={selectedProject.description}
        />
      )}
    </>
  );
}

export default Projects;
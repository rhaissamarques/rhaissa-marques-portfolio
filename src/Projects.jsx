import { useState } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import logisticaImg from './img/logistica.png';
import logistica1 from './img/logistica1.png';
import logistica2 from './img/logistica2.png';
import laboratorio from './img/laboratorio1.png';
import vendas from './img/vendas.png';
import rh1 from './img/rh1.png';
import rh2 from './img/rh2.png';
import producao from './img/producao1.png';
import marketing1 from './img/marketing1.png';
import marketing2 from './img/marketing2.png';
import './ProjectsStyle.css';

import AtendimentoLaboratorial from "./img/AtendimentoLaboratorial.png";
import Vendas from "./img/vendas.png";
import RH from "./img/rh.png";
import Producao from "./img/producao1.png";
import Marketing from "./img/Marketing.png";

const projects = [
  {
    title: "Dashboard Logística",
    desc: "Contagem pedidos, quantidade transportes, entregas fora do prazo",
    tags: ["Power BI", "Dashboard", "Logística"],
    image: logisticaImg,
    dashImages: [logistica1, logistica2],
    description:`
      #Dashboard Logística

      Este dashboard fornece uma visão abrangente dos principais indicadores de desempenho logístico, permitindo uma análise detalhada da operação.

      ## Principais Métricas

      - **Contagem de Pedidos**: Total de pedidos recebidos em um período.
      - **Quantidade de Transportes**: Número de transportes realizados.
      - **Entregas Fora do Prazo**: Percentual de entregas que não foram concluídas no prazo.

      ## Objetivos

      - Melhorar a eficiência operacional.
      - Reduzir custos logísticos.
      - Aumentar a satisfação do cliente.
    `
  },
  {
    title: "Atendimento Laboratorial",
    desc: "Atendimento diário, evolução mensal, faturamento",
    tags: ["Power BI", "Dashboard", "Laboratorial"],
    image: AtendimentoLaboratorial,
    dashImages: [laboratorio],
  },
  {
    title: "Dashboard de Vendas",
    desc: "Faturamento por ano e mês, produto mais vendio, vendas por região",
    tags: ["Power BI", "Dashboard", "Vendas"],
    image: Vendas,
    dashImages: [vendas],
  },
  {
    title: "Dashboard de RH",
    desc: "Contratações, funcionários ativos, desligamentos, gênero, cargo por área",
    tags: ["Power BI", "Dashboard", "RH"],
    image: RH,
    dashImages: [rh1, rh2],
  },
  {
    title: "Dashboard de Produção",
    desc: "Qtd produzida, Qtd rejeitada, Horas produtivas, Horas paradas, prod mensal",
    tags: ["Power BI", "Dashboard", "Produção"],
    image: Producao,
    dashImages: [producao],
  },
  {
    title: "Dashboard de Marketing",
    desc: "Transações, Receira, Conversão, Rejeição, Tempo médio na página",
    tags: ["Power BI", "Dashboard", "Marketing"],
    image: Marketing,
    dashImages: [marketing1, marketing2],
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
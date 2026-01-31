import { useState } from 'react';

// Componente Modal
function ImageModal({ isOpen, onClose, images, projectTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
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
          
          <img 
            src={images[currentIndex]} 
            alt={`${projectTitle} - Imagem ${currentIndex + 1}`}
            className="modal-image"
          />
          
          <button className="carousel-btn next" onClick={nextImage}>
            ›
          </button>
        </div>
        
        <div className="carousel-indicators">
          {images.map((_, index) => (
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

// Seu componente principal
function ProjectsSection() {
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

      {selectedProject && (
        <ImageModal
          isOpen={modalOpen}
          onClose={closeModal}
          images={selectedProject.dashImages}
          projectTitle={selectedProject.title}
        />
      )}
    </>
  );
}

export default ProjectsSection;
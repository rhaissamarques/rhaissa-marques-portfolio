import "./PresentationStyle.css";
import { TypeAnimation } from "react-type-animation";

function Presentation() {
  return (
    <div className="Presentation">
      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero__bg" aria-hidden>
          <div className="blob" />
          <div className="grid" />
        </div>
        <div className="container hero__content">
          <h1 className="rhaissa-marques">Rhaissa Marques</h1>
          <p className="kicker">Analista de dados</p>
          <h2>
            <div className="animation">
              {/* <TypeAnimation
                sequence={[
                  "Acelerar a tomada de decisões",
                  1000,
                  "Capacidade de controlar custos",
                  1000,
                  "Diferencial em um mercado competitivo",
                  1000,
                  "Entender melhor as necessidades e desejos dos clientes",
                  1000,
                  "Melhoria da eficiência operacional",
                  1000,
                  "Identificar gargalos",
                  1000,
                  "Inovação",
                  1000,
                  "Melhoria da experiência do cliente",
                  1000,
                  "Tomada de decisões baseada em evidências",
                  1000,
                  "Otimização do marketing e das vendas",
                  1000,
                  "Monitoramento do desempenho das campanhas em tempo real",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              /> */}
            </div>
          </h2>
          <p className="sub">
            Dashboards interativos, relatórios dinâmicos e insights precisos
            para impulsionar o seu negócio.
          </p>
          <div className="cta">
            <a href="#projects" className="btn btn--primary">
              Ver projetos
            </a>
            <a href="#contact" className="btn btn--ghost">
              Fale comigo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Presentation;

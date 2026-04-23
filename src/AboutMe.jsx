import "./AboutMeStyle.css";

function AboutMe() {
  return (
    <section id="about" className="section alt">
      <div className="container about">
        <div className="about__text">
          <h2>Sobre mim</h2>
          <p>
            Como analista de dados, acredito que decisões estratégicas devem ser guiadas por informações precisas e relevantes. Meu foco está em transformar dados em insights acionáveis, apoiando equipes e negócios na busca por soluções inteligentes e resultados mensuráveis.
          </p>
          <ul className="list">
            <li>Domínio em Excel, Power BI e DAX para manipulação e análise de grandes volumes de dados</li>
            <li>Metodologias ágeis para desenvolvimento de projetos de análise de dados</li>
            <li>Comunicação com áreas não técnicas para traduzir necessidades em soluções de dados</li>
          </ul>
        </div>
        {/* <div className="about__cards">
          {stats.map((s) => (
            <div className="mini" key={s.label}>
              <div className="mini__num">{s.value}</div>
              <div className="mini__label">{s.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

// const stats = [
//   { value: "40+ ", label: "projetos entregues" },
//   { value: "95 ", label: "Lighthouse perf." },
//   { value: "100 ", label: "A11y e SEO" },
// ];

export default AboutMe;

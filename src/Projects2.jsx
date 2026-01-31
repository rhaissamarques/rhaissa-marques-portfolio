import "./ProjectsStyle.css";
import logisticaImg from "./img/logistica.png";
import AtendimentoLaboratorial from "./img/AtendimentoLaboratorial.png";
import Vendas from "./img/vendas.png";
import RH from "./img/rh.png";
import Producao from "./img/producao.png";
import Marketing from "./img/Marketing.png";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projetos em destaque</h2>
        <div className="grid3">
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
                <a
                  className="link"
                  href={p.dashUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dashboard Completo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Dashboard Logística",
    desc: "Contagem pedidos, quantidade transportes, entregas fora do prazo",
    tags: ["Power BI", "Dashboard", "Logística"],
    image: logisticaImg,
    dashUrl:
      "https://app.powerbi.com/links/8kalOrGKyR?ctid=d2d87c5b-b48e-4c82-8831-25fde4c33115&pbi_source=linkShare",
  },
  {
    title: "Atendimento Laboratorial",
    desc: "Atendimento diário, evolução mensal, faturamento",
    tags: ["Power BI", "Dashboard", "Laboratorial"],
    image: AtendimentoLaboratorial,
    dashUrl:
      "https://app.powerbi.com/links/GBCrgh9ueb?ctid=d2d87c5b-b48e-4c82-8831-25fde4c33115&pbi_source=linkShare",
  },
  {
    title: "Dashboard de Vendas",
    desc: "Faturamento por ano e mês, produto mais vendio, vendas por região",
    tags: ["Power BI", "Dashboard", "Vendas"],
    image: Vendas,
    dashUrl:
      "https://app.powerbi.com/links/T2aqW7fvvg?ctid=d2d87c5b-b48e-4c82-8831-25fde4c33115&pbi_source=linkShare",
  },
  {
    title: "Dashboard de RH",
    desc: "Contratações, funcionários ativos, desligamentos, gênero, cargo por área",
    tags: ["Power BI", "Dashboard", "RH"],
    image: RH,
    dashUrl:
      "https://app.powerbi.com/links/wHnA15meLJ?ctid=d2d87c5b-b48e-4c82-8831-25fde4c33115&pbi_source=linkShare&bookmarkGuid=2c477453-d414-4806-bf37-0ec4ecb898bf",
  },
  {
    title: "Dashboard de Produção",
    desc: "Qtd produzida, Qtd rejeitada, Horas produtivas, Horas paradas, prod mensal",
    tags: ["Power BI", "Dashboard", "Produção"],
    image: Producao,
    dashUrl:
      "https://app.powerbi.com/links/wHnA15meLJ?ctid=d2d87c5b-b48e-4c82-8831-25fde4c33115&pbi_source=linkShare&bookmarkGuid=2c477453-d414-4806-bf37-0ec4ecb898bf",
  },
  {
    title: "Dashboard de Marketing",
    desc: "Transações, Receira, Conversão, Rejeição, Tempo médio na página",
    tags: ["Power BI", "Dashboard", "Marketing"],
    image: Marketing,
    dashUrl:
      "https://app.powerbi.com/links/a9XIzQTyDV?ctid=d2d87c5b-b48e-4c82-8831-25fde4c33115&pbi_source=linkShare&bookmarkGuid=3c440aa5-f29b-4818-b2b5-43ca5b36744d",
  },
];

export default Projects;

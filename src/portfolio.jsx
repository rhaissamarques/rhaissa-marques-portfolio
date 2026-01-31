import React, { useEffect } from "react";
import "./portfolio.styles.css";

export default function PortfolioSite() {
  useEffect(() => {
    // Smooth scroll for internal anchors
    const handler = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <main className="site">
      <StyleTag />

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container contact">
          <h2>Vamos conversar</h2>
          <p className="section__sub">
            Curtiu o visual? Me chama e a gente constrói algo bonito e eficiente
            para o seu projeto.
          </p>
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <div className="form__row">
              <label>
                <span>Seu nome</span>
                <input type="text" placeholder="Ex.: Rhaissa" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="voce@email.com" required />
              </label>
            </div>
            <label>
              <span>Mensagem</span>
              <textarea
                placeholder="Conte-me sobre o projeto…"
                rows={5}
                required
              />
            </label>
            <button className="btn btn--primary" type="submit">
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Rhaissa.dev</span>
          <a href="#hero" className="to-top" title="Voltar ao topo">
            ↑ Topo
          </a>
        </div>
      </footer>
    </main>
  );
}


function StyleTag() {
  return <style></style>;
}

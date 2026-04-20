import React, { useEffect } from "react";
import "./footer.styles.css";

export default function Footer() {
  return (
    <main className="site">
      <footer className="footer">
        <div className="container footer__inner">
          <span>© {new Date().getFullYear()} Rhaissa Marques Data Analyst</span>
          <a href="#hero" className="to-top" title="Voltar ao topo">
            ↑ Topo
          </a>
        </div>
      </footer>
    </main>
  );
}

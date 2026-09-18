import Link from "next/link";

export default function Footer() {
  return <footer className="footer"><div className="container"><div className="footer-grid">
    <div><div className="brand"><span className="brand-mark">⚽</span><span className="brand-name">KINGS OF SOCCER<small>archivo deportivo</small></span></div><p>Información, equipos, plantillas y pasión por el fútbol colombiano.</p></div>
    <div><strong>Explora</strong><div className="footer-links"><Link href="/">Inicio</Link><Link href="/plantillas">Plantillas</Link><Link href="/favoritos">Mis favoritos</Link></div></div>
    <div><strong>Proyecto</strong><div className="footer-links"><Link href="/cuestionario">Cuestionario</Link><Link href="/acerca-de">Acerca de</Link><span className="muted">Datos preparados para actualizarse</span></div></div>
  </div><div className="footer-bottom"><span>© 2026 KINGS OF SOCCER, DESARROLLADO POR EDISON AMADO Y ANDRES JIMENEZ.</span><span>La información deportiva puede cambiar. Verifica fuentes oficiales.</span></div></div></footer>;
}

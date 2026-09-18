"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Se eliminó CircleDot
import { useState } from "react";

const NAV_LINKS = [
  { name: "Inicio", path: "/" },
  { name: "Cuestionario", path: "/cuestionario" },
  { name: "Plantillas", path: "/plantillas" },
  { name: "Favoritos", path: "/favoritos" },
  { name: "Acerca de", path: "/acerca-de" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="topbar">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">
            {/* Reemplaza "logo.png" por el nombre exacto de tu archivo */}
            <img 
              src="/logo futbol.png" 
              alt="Logo Fútbol Colombiano" 
              style={{ width: '28px', height: '28px', objectFit: 'contain' }} 
            />
          </span>
          <span className="brand-name">
            KINGS OF SOCCER<small>archivo deportivo</small>
          </span>
        </Link>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`nav-link ${pathname === link.path ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button aria-label="Abrir menú" className="menu-button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
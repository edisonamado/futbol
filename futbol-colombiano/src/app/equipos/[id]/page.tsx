"use client";
import Link from "next/link";
import { ArrowLeft, CalendarDays, Heart, MapPin, Trophy } from "lucide-react";
import { notFound, useParams } from "next/navigation";
import { TEAMS } from "@/data/db";
import { useFavorites } from "@/hooks/useFavorites";

export default function TeamDetail() {
  const params = useParams<{ id: string }>();
  const team = TEAMS.find((item) => item.id === params.id);
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  if (!team) return notFound();
  const trophies = [["Liga", team.trophies.liga], ["Copa Colombia", team.trophies.copa], ["Superliga", team.trophies.superliga], ["Libertadores", team.trophies.libertadores], ["Sudamericana", team.trophies.sudamericana]];
  return <section className="section"><div className="container"><Link href="/" className="card-link"><ArrowLeft size={15} /> Volver a equipos</Link><div className="content-panel detail-hero" style={{ marginTop: 22 }}><div className="detail-logo"><img src={team.logo} alt={`Escudo de ${team.name}`} /></div><div className="detail-title"><div className="eyebrow">Ficha del club</div><h1>{team.name}</h1><div className="facts"><span><MapPin size={13} /> Ciudad<strong>{team.city}</strong></span><span><MapPin size={13} /> Estadio<strong>{team.stadium}</strong></span><span><CalendarDays size={13} /> Fundación<strong>{team.founded}</strong></span></div><p>{team.description}</p></div><button className={`btn ${isLoaded && isFavorite(team.id) ? "btn-primary" : "btn-dark"}`} onClick={() => toggleFavorite(team.id)}><Heart size={17} fill={isLoaded && isFavorite(team.id) ? "currentColor" : "none"} /> {isLoaded && isFavorite(team.id) ? "En favoritos" : "Agregar a favoritos"}</button></div><div className="section-head" style={{ marginTop: 60 }}><div><div className="eyebrow">Historia competitiva</div><h2 className="section-title display">Palmarés</h2></div></div><div className="trophy-grid">{trophies.map(([name, count]) => <div className="trophy-card" key={name}><Trophy size={20} color="var(--green)" /><strong>{count}</strong><span>{name}</span></div>)}</div><div className="content-panel" style={{ marginTop: 24 }}><h2 className="display" style={{ fontSize: "2rem", marginTop: 0 }}>Plantilla</h2><p className="muted">{team.players.length ? "Este registro es demostrativo y está listo para conectarse a una fuente oficial." : "La estructura de plantilla está preparada para incorporar datos oficiales actualizados."}</p><Link className="btn btn-ghost" href="/plantillas">Consultar plantillas</Link></div></div></section>;
}

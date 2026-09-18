"use client";
import Link from "next/link";
import { CalendarDays, Heart, MapPin, Trophy } from "lucide-react";
import type { Team } from "@/data/db";
import { useFavorites } from "@/hooks/useFavorites";

export default function TeamCard({ team }: { team: Team }) {
  const { isFavorite, toggleFavorite, isLoaded } = useFavorites();
  const titles = team.trophies.liga + team.trophies.copa + team.trophies.superliga + team.trophies.libertadores + team.trophies.sudamericana;
  return <article className="team-card">
    <div className="team-card-top"><div className="team-logo"><img src={team.logo} alt={`Escudo de ${team.name}`} /></div><button aria-label={isFavorite(team.id) ? `Quitar ${team.name} de favoritos` : `Agregar ${team.name} a favoritos`} className={`favorite-button ${isLoaded && isFavorite(team.id) ? "active" : ""}`} onClick={() => toggleFavorite(team.id)}><Heart size={17} fill={isLoaded && isFavorite(team.id) ? "currentColor" : "none"} /></button></div>
    <div className="team-card-body"><h3>{team.name}</h3><div className="team-meta"><span><MapPin size={13} /> {team.city}</span><span><CalendarDays size={13} /> {team.founded}</span></div><p className="team-description">{team.description}</p>{team.dataStatus === "demostracion" && <span className="eyebrow">Plantilla demostrativa</span>}</div>
    <div className="team-card-footer"><small><Trophy size={13} /> {titles} títulos registrados</small><Link className="card-link" href={`/equipos/${team.id}`}>Ver equipo →</Link></div>
  </article>;
}

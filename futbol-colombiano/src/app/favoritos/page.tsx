"use client";
import Link from "next/link";
import { Heart, Compass } from "lucide-react";
import { TEAMS } from "@/data/db";
import { useFavorites } from "@/hooks/useFavorites";
import TeamCard from "@/components/TeamCard";

export default function FavoritosPage() {
  const { favorites, isLoaded } = useFavorites();
  const teams = TEAMS.filter((team) => favorites.includes(team.id));
  return <><section className="page-header"><div className="container"><div className="eyebrow" style={{ color: "var(--lime)" }}>Tu selección</div><h1>Mis favoritos</h1><p>Guarda los equipos que quieres tener siempre cerca. Se conservan en este dispositivo.</p></div></section><section className="section"><div className="container">{!isLoaded ? <div className="empty-state">Cargando tu selección...</div> : teams.length ? <div className="team-grid">{teams.map((team) => <TeamCard key={team.id} team={team} />)}</div> : <div className="empty-state"><Heart size={35} color="var(--coral)" /><h2>¡Todavía no tienes equipos favoritos!</h2><p className="muted">Explora los equipos y agrega los que quieras seguir.</p><Link className="btn btn-dark" href="/"><Compass size={17} /> Explorar equipos</Link></div>}</div></section></>;
}

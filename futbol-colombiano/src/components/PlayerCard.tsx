"use client";
import { UserRound } from "lucide-react";
import type { Player } from "@/data/db";

export default function PlayerCard({ player, onSelect }: { player: Player; onSelect: (player: Player) => void }) {
  return <button className="player-card" onClick={() => onSelect(player)}><div className="player-photo"><img src={player.image} alt={`Foto de ${player.name}`} /></div><div className="player-info"><strong>{player.name}</strong><span><UserRound size={12} /> #{player.number} · {player.nationality}</span></div></button>;
}

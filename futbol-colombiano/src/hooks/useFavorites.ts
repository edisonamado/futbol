"use client";
import { useEffect, useState } from "react";

const STORAGE_KEY = "futbol-co-favoritos";
export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try { const stored = localStorage.getItem(STORAGE_KEY); return stored ? JSON.parse(stored) : []; } catch { return []; }
  });
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoaded(true), 0);
    return () => window.clearTimeout(timer);
  }, []);
  const toggleFavorite = (teamId: string) => {
    setFavorites((current) => { const next = current.includes(teamId) ? current.filter((id) => id !== teamId) : [...current, teamId]; localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); return next; });
  };
  return { favorites, toggleFavorite, isFavorite: (teamId: string) => favorites.includes(teamId), isLoaded };
}

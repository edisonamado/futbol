import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fútbol Colombiano | Archivo deportivo",
  description: "Equipos, historia, plantillas y pasión por el fútbol colombiano.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body className="site-shell"><Navbar /><main>{children}</main><Footer /></body></html>;
}

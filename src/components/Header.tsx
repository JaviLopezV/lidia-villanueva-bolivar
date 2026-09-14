"use client";
import Link from "next/link";
import { useState } from "react";
export function Header() {
 const [open,setOpen] = useState(false);
 return <header className="header"><Link className="brand" href="/es" aria-label="Lidia Villanueva Bolívar, inicio"><span className="brand-icon">lv.</span><span>Lidia Villanueva Bolívar<small>PILATES & MOVIMIENTO CONSCIENTE</small></span></Link><button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="navigation" aria-label={open ? "Cerrar menú" : "Abrir menú"}>{open ? "Cerrar ×" : "Menú ☰"}</button><nav id="navigation" className={open ? "nav open" : "nav"} aria-label="Navegación principal"><Link onClick={()=>setOpen(false)} href="/es#sobre-mi">Sobre mí</Link><Link onClick={()=>setOpen(false)} href="/es#clases">Las clases</Link><Link onClick={()=>setOpen(false)} href="/es#filosofia">Mi filosofía</Link><Link onClick={()=>setOpen(false)} className="button small" href="/es#contacto">Empezamos <span>↗</span></Link></nav></header>;
}

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="text-white font-bold text-xl tracking-tighter shrink-0">
                    CLÍNICA<span className="text-sky-500">DEBROTAS</span>
                </div>

                {/* Links de Navegação Centralizados */}
                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <a href="#home" className="hover:text-white transition-colors">Início</a>
                    <a href="#sobre" className="hover:text-white transition-colors">História</a>
                    <a href="#especialidades" className="hover:text-white transition-colors">Especialidades</a>
                </div>

                {/* Área de Ação e Contato */}
                <div className="flex items-center gap-6">
                    {/* Telefone - Visível apenas em Telas Médias/Grandes */}
                    <div className="hidden md:flex flex-col items-end leading-tight">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-500">Ligue agora</span>
                        <a 
                            href="tel:7133543666" 
                            className="text-white font-bold text-sm hover:text-sky-400 transition-colors flex items-center gap-2"
                        >
                            <Phone size={12} className="text-sky-500" />
                            (71) 3354-3666
                        </a>
                    </div>

                    {/* Botão Agendar */}
                    <button className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold hover:bg-sky-50 transition-all cursor-pointer whitespace-nowrap">
                        Agendar Consulta
                    </button>
                </div>
            </div>
        </nav>
    );
}
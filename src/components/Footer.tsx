import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-zinc-900 pt-20 pb-10 font-inter">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    
                    {/* Coluna 01: Branding */}
                    <div className="lg:col-span-1">
                        <div className="text-white font-bold text-xl tracking-tighter mb-6">
                            CLÍNICA<span className="text-cyan-500">DEBROTAS</span>
                        </div>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            A Clínica de Brotas oferece atendimento humanizado, multidisciplinar e excelente, com tecnologia e mais de 30 especialidades para toda família.
                        </p>
                    </div>

                    {/* Coluna 02: Institucional */}
                    <div>
                        <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Institucional</h5>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/" className="text-zinc-500 hover:text-cyan-500 transition-colors">Página Inicial</a></li>
                            <li><a href="#" className="text-zinc-500 hover:text-cyan-500 transition-colors">A Clínica</a></li>
                            <li><a href="#" className="text-zinc-500 hover:text-cyan-500 transition-colors">KIDS</a></li>
                            <li><a href="#" className="text-zinc-500 hover:text-cyan-500 transition-colors">Políticas e Privacidade</a></li>
                            <li><a href="#" className="text-zinc-500 hover:text-cyan-500 transition-colors">Termos de Uso</a></li>
                        </ul>
                    </div>

                    {/* Coluna 03: Navegação */}
                    <div>
                        <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Navegação</h5>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#especialidades" className="text-zinc-500 hover:text-cyan-500 transition-colors">Especialidades</a></li>
                            <li><a href="#convenios" className="text-zinc-500 hover:text-cyan-500 transition-colors">Convênios</a></li>
                            <li><a href="#brotasmed" className="text-zinc-500 hover:text-cyan-500 transition-colors">Brotas MED</a></li>
                            <li><a href="#localizacao" className="text-zinc-500 hover:text-cyan-500 transition-colors">Localização</a></li>
                            <li><a href="#contato" className="text-zinc-500 hover:text-cyan-500 transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    {/* Coluna 04: Contato */}
                    <div>
                        <h5 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-8">Contato</h5>
                        <ul className="space-y-6 text-sm text-zinc-500">
                            <li className="flex items-center gap-3 italic"><Phone size={14} className="text-cyan-500" /> (71) 3354-3666</li>
                            <li className="flex items-center gap-3"><Mail size={14} className="text-cyan-500" /> suporte@clinicadebrotas.com.br</li>
                            <li className="flex items-start gap-3">
                                <MapPin size={14} className="text-cyan-500 shrink-0 mt-1" />
                                <span>Av. Dom João VI, 468 - Brotas, <br/> Salvador - BA, 40285-001</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Rodapé Inferior */}
                <div className="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-[10px] uppercase tracking-[0.2em] text-center md:text-left max-w-2xl">
                        © Copyright {currentYear} Clinicas de Brotas 96.696.455/0001-62, Responsável Técnico Dra. Verônica Esteves Reis CRM 9653
                    </p>

                    {/* Assinatura Padrão do Repositório */}
                    <a
                        href="https://coutinho98.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-2 text-[10px] tracking-[0.3em] transition-all duration-300"
                    >
                        <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-cyan-500 transition-colors">
                            <span className="relative font-inter">
                                by coutinho98
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
}
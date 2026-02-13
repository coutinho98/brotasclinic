import { motion } from "framer-motion";
import { MapPin, MessageCircle, Phone, Mail, ArrowRight } from "lucide-react";

export function Contato() {
    const infos = [
        { icon: <MapPin size={18} />, label: "Endereço", value: "Av. Dom João VI, 468 - Brotas, Salvador - BA" },
        { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "(71) 98876-3130" },
        { icon: <Phone size={18} />, label: "Telefone", value: "(71) 3354-3666" },
        { icon: <Mail size={18} />, label: "E-mail", value: "suporte@clinicadebrotas.com.br" },
    ];

    return (
        <section id="contato" className="relative py-32 bg-black overflow-hidden font-inter">
            {/* Brilho de fundo minimalista */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    
                    {/* Lado Esquerdo: Texto e Infos */}
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-cyan-500 text-xs font-bold tracking-[0.4em] uppercase block mb-6">
                            // Onde Estamos?
                        </span>
                        
                        <h2 className="text-5xl md:text-7xl text-white font-bold tracking-tighter mb-8">
                            Fale com <br /> <span className="bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-500 bg-clip-text text-transparent">a gente</span>
                        </h2>

                        <p className="text-zinc-500 text-lg leading-relaxed mb-12 max-w-md">
                            O cuidado que se constrói junto, é mais forte para curar… A saúde que se busca junto, não é só saúde, é <span className="text-white">VIDA PLENA!</span>
                        </p>

                        {/* Lista de Contatos Minimalista (Sem cards, apenas linhas) */}
                        <div className="space-y-8 mb-12">
                            {infos.map((info, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="text-zinc-700 group-hover:text-cyan-500 transition-colors pt-1">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-zinc-600 uppercase font-bold tracking-widest mb-1">{info.label}</p>
                                        <p className="text-zinc-300 text-sm md:text-base font-medium group-hover:text-white transition-colors">{info.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="flex items-center gap-4 group text-white font-bold transition-all">
                            <span className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 group-hover:text-black transition-all">
                                <ArrowRight size={20} />
                            </span>
                            <span className="uppercase text-[10px] tracking-[0.3em]">Iniciar Atendimento</span>
                        </button>
                    </motion.div>

                    {/* Lado Direito: Visual de Destaque (Estilo Galeria) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] md:aspect-square bg-zinc-900 overflow-hidden border border-white/5">
                            <img 
                                src="/img/fachada-minimal.webp" 
                                alt="Clínica de Brotas" 
                                className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            {/* Overlay de gradiente seco */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            
                            {/* Endereço Flutuante Minimalista */}
                            <div className="absolute bottom-12 left-12 right-12">
                                <div className="p-8 bg-black/60 backdrop-blur-2xl border border-white/5">
                                    <p className="text-white text-xl font-light tracking-tight leading-snug">
                                        Estamos localizados no coração de <span className="font-bold">Brotas</span>, prontos para te receber.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Detalhe de linha de grid */}
                        <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-white/10" />
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-white/10" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
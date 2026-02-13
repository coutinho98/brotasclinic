import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, Activity } from "lucide-react";

export function Reabilitar() {
    const especialidadesMedicas = [
        "Geriatria", "Neurologia", "Psiquiatria", "Pneumologia", 
        "Cardiologia", "Endocrinologia", "Ortopedia", "Reumatologia"
    ];

    const equipeTerapeutas = [
        "Psicologia", "Nutrição", "Fonoaudiologia", 
        "Terapia Ocupacional", "Fisioterapia"
    ];

    return (
        <section id="reabilitar" className="relative py-24 bg-black overflow-hidden font-inter">
            {/* Efeito de brilho de fundo - Sutil e Minimalista */}
            <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-5 pointer-events-none"
                style={{
                    background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Lado Esquerdo: Conteúdo Textual (Seguindo BrotasMed) */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-cyan-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-6">
                            <Activity size={14} />
                            <span>Serviço exclusivo para a terceira idade</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tight mb-8">
                            Espaço <br />
                            <span className="bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                                Reabilitar
                            </span>
                        </h2>

                        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl">
                            Além da saúde física, cuidamos do bem-estar, da saúde mental, reabilitação e prevenção de acidentes. Contamos com uma <span className="text-white">equipe completa</span> para sua segurança.
                        </p>

                        <div className="space-y-8 mb-12">
                            {/* Bloco Médico */}
                            <div>
                                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <div className="w-1 h-1 bg-cyan-500 rounded-full" />
                                    Especialidades Médicas
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {especialidadesMedicas.map((item, i) => (
                                        <span key={i} className="text-[11px] font-medium text-zinc-500 border border-white/5 px-3 py-1 rounded-full hover:border-cyan-500/30 hover:text-white transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Bloco Terapeutas */}
                            <div>
                                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                    Equipe de Terapeutas
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {equipeTerapeutas.map((item, i) => (
                                        <span key={i} className="text-[11px] font-medium text-zinc-500 border border-white/5 px-3 py-1 rounded-full hover:border-blue-500/30 hover:text-white transition-colors">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <button className="bg-white text-black cursor-pointer px-10 py-4 rounded-full font-bold text-xs hover:bg-cyan-50 transition-all flex items-center gap-3 group uppercase tracking-widest">
                            Descubra o BrotasMed
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Lado Direito: Visual de Destaque (Estilo Minimalista) */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Container Visual Minimalista */}
                        <div className="relative z-10 bg-zinc-950/50 border border-white/5 backdrop-blur-3xl p-2 rounded-[2.5rem] overflow-hidden">
                            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
                                <img 
                                    src="/img/reabilitar-servico.webp" 
                                    alt="Espaço Reabilitar" 
                                    className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                                {/* Gradiente de Profundidade */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                
                                {/* Info flutuante interna */}
                                <div className="absolute bottom-10 left-10">
                                    <div className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl">
                                        <div className="p-2 bg-cyan-500 rounded-lg text-black">
                                            <HeartPulse size={20} />
                                        </div>
                                        <p className="text-white text-sm font-bold leading-tight">
                                            Sua saúde é o que <br /> importa para nós!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Elementos Decorativos de Grid Minimalista */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
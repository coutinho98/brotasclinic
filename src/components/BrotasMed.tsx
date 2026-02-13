import { motion } from "framer-motion";
import { CheckCircle2, TrendingDown, Star, ArrowRight } from "lucide-react";

export function BrotasMed() {
    const beneficios = [
        "Descontos exclusivos em consultas",
        "Tabela diferenciada para exames",
        "Prioridade no agendamento",
        "Rede de parceiros locais"
    ];

    return (
        <section id="brotasmed" className="relative py-24 bg-black overflow-hidden">
            {/* Efeito de brilho de fundo inspirado no Hero original */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10 pointer-events-none"
                style={{
                    background: "radial-gradient(circle, #0ea5e9 0%, transparent 70%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Lado Esquerdo: Conteúdo Textual */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-2 text-cyan-500 font-bold tracking-widest text-xs uppercase mb-4">
                            <Star size={14} fill="currentColor" />
                            <span>BrotasMed</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl text-white font-bold tracking-tight mb-6">
                            Seu cartão <br />
                            <span className="bg-gradient-to-r from-cyan-200 to-blue-500 bg-clip-text text-transparent">
                                fidelidade local
                            </span>
                        </h2>

                        <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                            O BrotasMed é o Cartão Fidelidade pensado especialmente para você que busca <span className="text-white">economia e atendimento de qualidade</span>. Com vantagens exclusivas em consultas, exames e procedimentos, você tem acesso facilitado ao nosso corpo clínico.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-10">
                            {beneficios.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 text-zinc-300">
                                    <CheckCircle2 size={18} className="text-cyan-500 shrink-0" />
                                    <span className="text-sm font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <button className="bg-white text-black cursor-pointer px-8 py-4 rounded-full font-bold text-sm hover:bg-cyan-50 transition-all flex items-center gap-2 group">
                            Descubra o BrotasMed
                            <ArrowRight size={18} className="group-hover:rotate-12 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Lado Direito: Visual do Cartão/Destaque */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Card Visual com Glassmorphism */}
                        <div className="relative z-10 bg-zinc-900/50 border border-white/10 backdrop-blur-xl p-8 md:p-12 rounded-3xl overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <TrendingDown size={120} className="text-cyan-500" />
                            </div>

                            <div className="relative z-20">
                                <div className="w-16 h-10 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-md mb-20 border border-white/5" />
                                <div className="space-y-4">
                                    <div className="h-2 w-48 bg-white/10 rounded-full" />
                                    <div className="h-2 w-32 bg-white/5 rounded-full" />
                                </div>
                                <div className="mt-12 flex justify-between items-end">
                                    <span className="text-white font-bold tracking-widest uppercase">BrotasMed</span>
                                    <span className="text-cyan-500 font-black text-2xl tracking-tighter italic">LOYALTY</span>
                                </div>
                            </div>
                        </div>

                        {/* Elemento flutuante de "Economia" */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 bg-cyan-600 p-6 rounded-2xl shadow-xl z-20"
                        >
                            <p className="text-white font-bold text-center">
                                <span className="block text-2xl tracking-tighter leading-none">ECONOMIA</span>
                                <span className="text-[10px] uppercase tracking-widest opacity-80">Garantida em exames</span>
                            </p>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
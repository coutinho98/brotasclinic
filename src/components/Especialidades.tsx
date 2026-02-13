import { useState } from 'react';
import { Heart, Stethoscope, Baby, Venus, Brain, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Especialidades() {
    const [activeTab, setActiveTab] = useState(0);

    const servicos = [
        {
            title: "Clínica Geral",
            desc: "Atendimento inicial, diagnósticos e cuidados gerais de saúde para toda a família.",
            icon: <Stethoscope size={24} />,
            image: "/img/clinica-geral.webp"
        },
        {
            title: "Cardiologia",
            desc: "Prevenção e tratamento de doenças do coração e sistema circulatório.",
            icon: <Heart size={24} />,
            image: "/img/cardiologia.webp"
        },
        {
            title: "Pediatria",
            desc: "Acompanhamento completo da saúde infantil, do nascimento à adolescência.",
            icon: <Baby size={24} />,
            image: "/img/pediatria.webp"
        },
        {
            title: "Ginecologia e Obstetrícia",
            desc: "Saúde da mulher, pré-natal e acompanhamento ginecológico completo.",
            icon: <Venus size={24} />,
            image: "/img/ginecologia.webp"
        },
        {
            title: "Neurologia",
            desc: "Diagnóstico e tratamento de doenças do sistema nervoso e cérebro.",
            icon: <Brain size={24} />,
            image: "/img/neurologia.webp"
        }
    ];

    return (
        <div className="min-h-screen w-full bg-black relative py-24">
            <section className="relative z-10 w-full max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-cyan-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        Nossas Especialidades
                    </h2>
                    <h3 className="text-3xl md:text-6xl text-white font-bold tracking-tight leading-tight">
                        Saúde de <span className="bg-gradient-to-br from-cyan-200 to-blue-500 bg-clip-text text-transparent">excelência</span> perto de você
                    </h3>
                    {/* Texto adicionado conforme solicitado */}
                    <p className="text-zinc-400 mt-6 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                        Oferecemos um amplo <span className="text-white">leque</span> de especialidades para atender você e sua família em um só lugar.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    <div className="order-2 lg:order-1 flex flex-col space-y-4">
                        {servicos.map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`group cursor-pointer p-6 rounded-xl border transition-all duration-500 ${activeTab === index
                                    ? "bg-zinc-900/80 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.05)]"
                                    : "bg-transparent border-white/5 hover:bg-white/5"
                                    }`}
                            >
                                <div className="flex items-center gap-4">
                                    <span className={`transition-colors duration-500 ${activeTab === index ? "text-cyan-400" : "text-zinc-500"}`}>
                                        {item.icon}
                                    </span>
                                    <h4 className={`text-sm md:text-lg font-bold uppercase tracking-tight transition-colors ${activeTab === index ? "text-white" : "text-zinc-500"}`}>
                                        {item.title}
                                    </h4>
                                </div>

                                <AnimatePresence>
                                    {activeTab === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-zinc-400 text-sm leading-relaxed mt-4 pt-4 border-t border-white/5">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="order-1 lg:order-2 sticky top-32 w-full h-[300px] lg:h-[500px] bg-zinc-900 rounded-2xl overflow-hidden border border-white/10">
                        {servicos.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeTab === index ? 1 : 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Botão único abaixo dos cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center lg:justify-start"
                >
                    <button className="group relative cursor-pointer bg-black/40 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-full font-bold text-xs transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 flex items-center gap-3">
                        <span>Ver todas as especialidades</span>
                        <ArrowRight size={16} className="text-cyan-500 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </section>
        </div>
    );
}
import { motion, } from "framer-motion";
import { Calendar, ArrowRight, Users } from "lucide-react";
import { useRef } from "react";

export function Hero() {
    const containerRef = useRef(null);

    return (
        <section
            ref={containerRef}
            id="home"
            className="font-inter relative bg-black flex flex-col items-center overflow-x-hidden no-scrollbar"
        >
            <div
                className="fixed inset-0 z-0 pointer-events-none"
                style={{
                    background: "radial-gradient(circle at 50% -20%, rgba(14, 165, 233, 0.15), transparent 70%)",
                }}
            />

            <motion.div
                className="relative z-10 w-full pt-32 pb-10 flex flex-col items-center text-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 bg-zinc-900/50 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md mb-8"
                >
                    <div className="flex -space-x-3">
                        {/* Avatares representativos */}
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 overflow-hidden">
                                <img
                                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                    alt="Paciente"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-xs md:text-sm text-zinc-400 font-medium">
                        <span className="text-white font-bold">+55 MIL</span> pacientes atendidos com carinho
                    </p>
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tighter mb-8 leading-[0.9] max-w-5xl font-bold">
                    <span className="bg-gradient-to-br from-cyan-200 via-sky-400 to-blue-600 bg-clip-text text-transparent">
                        Bem-vindo à
                    </span> nossa clínica
                </h1>

                <p className="text-base lg:text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl font-medium">
                    Há anos, cuidamos da <span className="text-white">sua saúde</span> com dedicação, respeito e excelência. Oferecemos atendimento médico humanizado em uma infraestrutura moderna para garantir o seu bem-estar.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
                    <button className="group relative cursor-pointer bg-white text-black px-8 py-4 rounded-full font-bold text-xs w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-300 hover:bg-cyan-50 active:scale-95">
                        <span className="relative z-10">Fale Conosco</span>
                        <Calendar className="relative z-10 w-4 h-4" />
                    </button>

                    <button className="group relative cursor-pointer bg-black/40 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-full font-bold text-xs transition-all duration-300 hover:bg-white/10 w-full sm:w-auto flex items-center justify-center gap-2 active:scale-95">
                        <span>Conheça Nossa História</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 text-gray-400 group-hover:translate-x-1" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
import { ShieldCheck, Clock, HeartPulse } from "lucide-react";

export function Diferenciais() {
    const cards = [
        {
            icon: <HeartPulse className="text-cyan-500" />,
            title: "Atendimento Humanizado",
            text: "Focado no bem-estar integral e no acolhimento de cada paciente."
        },
        {
            icon: <ShieldCheck className="text-cyan-500" />,
            title: "Corpo Clínico Especializado",
            text: "Médicos renomados com vasta experiência em diversas áreas."
        },
        {
            icon: <Clock className="text-cyan-500" />,
            title: "Agilidade no Diagnóstico",
            text: "Equipamentos modernos para resultados rápidos e precisos."
        }
    ];

    return (
        <section className="bg-black py-24 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {cards.map((card, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 transition-all group">
                        <div className="mb-4 p-3 bg-black rounded-lg w-fit group-hover:scale-110 transition-transform">
                            {card.icon}
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">{card.title}</h4>
                        <p className="text-zinc-400 text-sm leading-relaxed">{card.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
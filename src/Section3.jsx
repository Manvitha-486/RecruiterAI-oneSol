import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Clock, TrendingUp, UserCheck, Award, DollarSign, ShieldCheck } from "lucide-react";

export default function Section3() {
  // We track which stat is hovered to show its description below it
  const [hoveredStatId, setHoveredStatId] = useState(null);

  const stats = [
    {
      id: 0,
      barTitle: "10X Faster Screening",
      value: "100%",
      label: "10X",
      color: "bg-blue-600",
      description: "AI parses and ranks 250+ applications per day vs 25 manually.",
    },
    {
      id: 1,
      barTitle: "Faster Time-to-Hire",
      value: "70%",
      label: "70%",
      color: "bg-indigo-500",
      description: "70% Faster Time-to-Hire Average hiring timeline drops from 42 days to just 12 days.",
    },
    {
      id: 2,
      barTitle: "More Interview Capacity",
      value: "90%",
      label: "25X",
      color: "bg-cyan-500",
      description: "AI conducts 200+ automated screening interviews daily vs 8 manual calls.",
    },
    {
      id: 3,
      barTitle: "Application Completion",
      value: "95%",
      label: "95%",
      color: "bg-purple-500",
      description: "Smart application forms reduce candidate drop-off dramatically.",
    },
    {
      id: 4,
      barTitle: "More Qualified Applications",
      value: "89%",
      label: "89%",
      color: "bg-emerald-500",
      description: "AI job description optimizer attracts higher-quality candidate pipelines.",
    },
    {
      id: 5,
      barTitle: "Lower Recruitment Costs",
      value: "80%",
      label: "80%",
      color: "bg-gray-400",
      description: "vs traditional recruiting agencies and multiple software subscriptions",
    },
    {
      id: 6,
      barTitle: "Improved Hiring Accuracy",
      value: "92%",
      label: "92%",
      color: "bg-violet-400",
      description: "AI skills assessment and matching improves hiring accuracy dramatically",
    }
  ];

  // Original benefit cards data with icons and specific colors
  const cards = [
    {
      title: "Fast resume processing",
      text: "10x Faster Resume Screening. AI parses and ranks 250+ applications per day vs 25 manually.",
      color: "from-blue-500 to-cyan-400",
      icon: Zap,
      shadow: "shadow-blue-500/20"
    },
    {
      title: "Quick time-to-hire",
      text: "70% Faster Time-to-Hire. Average hiring timeline drops from 42 days to just 12 days.",
      color: "from-purple-500 to-pink-500",
      icon: Clock,
      shadow: "shadow-purple-500/20"
    },
    {
      title: "Massive capacity increase",
      text: "25X More Interview Capacity. AI conducts 200+ automated screening interviews daily vs 8 manual calls.",
      color: "from-cyan-400 to-teal-400",
      icon: TrendingUp,
      shadow: "shadow-cyan-500/20"
    },
    {
      title: "Less drop-off",
      text: "95% Application Completion Rate. Smart forms reduce candidate drop-off dramatically.",
      color: "from-amber-400 to-orange-500",
      icon: UserCheck,
      shadow: "shadow-amber-500/20"
    },
    {
      title: "Better applicants",
      text: "89% More Qualified Applications. AI job description optimizer attracts higher-quality candidate pipelines.",
      color: "from-emerald-400 to-green-500",
      icon: Award,
      shadow: "shadow-emerald-500/20"
    },
    {
      title: "Lower expenses",
      text: "80% Lower Recruitment Costs vs traditional recruiting agencies and multiple software subscriptions.",
      color: "from-gray-400 to-slate-400",
      icon: DollarSign,
      shadow: "shadow-gray-500/20"
    },
    {
      title: "Fewer mistakes",
      text: "50% Reduction in Bad Hires. AI skills assessment and matching improves hiring accuracy dramatically.",
      color: "from-violet-500 to-indigo-500",
      icon: ShieldCheck,
      shadow: "shadow-violet-500/20"
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 md:px-16 overflow-hidden flex flex-col items-center">

      {/* HEADER */}
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-20 max-w-4xl leading-tight">
        AI Recruiting That Works Like <br />
        <span className="text-blue-400">
          Your Own Elite HR Team
        </span>
      </h2>

      <div className="flex flex-col lg:flex-row gap-16 w-full max-w-7xl items-start">

        {/* LEFT SIDE — INTERACTIVE ACCORDION STATS */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              onMouseEnter={() => setHoveredStatId(stat.id)}
              onMouseLeave={() => setHoveredStatId(null)}
              className="group relative p-4 rounded-xl border border-transparent hover:border-gray-800 hover:bg-[#111] transition-all duration-300"
            >
              {/* Header Line */}
              <div className="flex justify-between mb-3 items-end cursor-pointer">
                <span className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                  {stat.barTitle}
                </span>
                <span className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors">
                  {stat.label}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
                <motion.div
                  className={`h-full ${stat.color} shadow-[0_0_10px_rgba(255,255,255,0.3)]`}
                  initial={{ width: 0 }}
                  whileInView={{ width: stat.value }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>

              {/* Description Reveal (Accordion Style) */}
              <AnimatePresence>
                {hoveredStatId === stat.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                    animate={{ height: "auto", opacity: 1, marginTop: 12 }}
                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>


        {/* RIGHT SIDE — BENEFIT CARDS (Restored Grid) */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card, idx) => (
            <PremiumCard key={idx} {...card} index={idx} isLast={idx === cards.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumCard({ title, text, color, icon: Icon, shadow, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative group ${isLast ? "sm:col-span-2 sm:w-[calc(50%-0.625rem)] sm:justify-self-center" : ""}`}
    >
      {/* GLOW EFFECT BACKGROUND */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${color} rounded-2xl opacity-20 group-hover:opacity-60 transition duration-500 blur-lg group-hover:blur-xl`} />

      {/* CARD CONTENT */}
      <div className="relative h-full bg-black/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:border-white/20 transition-all duration-300 flex flex-col justify-start">

        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg ${shadow}`}>
          <Icon className="text-white w-6 h-6" />
        </div>

        <h3 className="font-bold text-lg text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
          {text}
        </p>

      </div>
    </motion.div>
  );
}

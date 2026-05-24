"use client";

import Section from "./Section";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Cpu, Eye, Layers } from "lucide-react";

const skillCategories = [
    {
        id: "01",
        title: "UI Design",
        icon: <Layers size={20} />,
        description: "Crafting visual systems with clear hierarchy, typography, and color that feel cohesive across screens.",
        skills: ["Figma", "Visual Design", "Typography", "Design Systems", "Responsive Layout"],
    },
    {
        id: "02",
        title: "UX Strategy",
        icon: <Eye size={20} />,
        description: "Mapping user needs into flows, wireframes, and prototypes that validate ideas before build.",
        skills: ["User Research", "Wireframing", "User Flows", "Prototyping", "Usability Testing"],
    },
    {
        id: "03",
        title: "Mobile Product",
        icon: <Cpu size={20} />,
        description: "Designing mobile-first experiences—from in-app UI to marketing pages that match the product.",
        skills: ["Mobile UI", "Landing Pages", "Design Handoff", "Component Libraries", "Accessibility"],
    },
];

export default function Skills() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <Section id="skills" title="Expertise" subtitle="Toolkit" verticalTitle="Capabilities">
            <div className="relative mt-12 border-t border-foreground/5">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.id}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        className="group relative border-b border-foreground/5 py-12 md:py-16 overflow-hidden cursor-default"
                    >
                        {/* Background Slide Effect */}
                        <motion.div
                            className="absolute inset-0 bg-accent/[0.02] -z-10"
                            animate={{
                                x: hoveredIdx === idx ? 0 : "-100%"
                            }}
                            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                        />

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
                            {/* Title & Info */}
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-black text-accent">{category.id}</span>
                                    <span className="h-px w-8 bg-accent/20" />
                                    <span className="text-[10px] uppercase tracking-widest text-foreground/40">{category.title}</span>
                                </div>

                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none group-hover:text-accent transition-colors duration-500">
                                    {category.title.split(' ')[0]}
                                </h3>
                            </div>

                            {/* Description - Visible on hover or tablet+ */}
                            <div className="flex-1 max-w-md">
                                <motion.p
                                    className="text-sm md:text-base text-foreground/50 font-light leading-relaxed"
                                    animate={{
                                        opacity: hoveredIdx === idx ? 1 : 0.3,
                                        x: hoveredIdx === idx ? 0 : -10
                                    }}
                                >
                                    {category.description}
                                </motion.p>
                            </div>

                            {/* Skills List - Kinetic Reveal */}
                            <div className="flex-1 md:flex justify-end hidden">
                                <AnimatePresence>
                                    {hoveredIdx === idx && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="flex flex-wrap justify-end gap-3 max-w-sm"
                                        >
                                            {category.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="px-4 py-2 border border-foreground/10 text-[9px] font-black uppercase tracking-widest bg-background hover:bg-accent hover:text-background hover:border-accent transition-all duration-300"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="md:hidden flex flex-wrap gap-2 pt-4">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="text-[9px] font-black uppercase tracking-[0.2em] text-foreground/30">{skill}</span>
                                ))}
                            </div>
                        </div>

                        {/* Kinetic Arrow */}
                        <motion.div
                            className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none hidden md:block"
                            animate={{
                                opacity: hoveredIdx === idx ? 0.1 : 0,
                                x: hoveredIdx === idx ? 0 : 50
                            }}
                        >
                            <ArrowUpRight size={180} strokeWidth={1} className="text-foreground" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Footer Callout */}
            <div className="mt-20 flex flex-col md:flex-row items-end justify-between gap-12 border-l-2 border-accent/20 pl-8">
                <p className="max-w-xl text-lg md:text-xl text-foreground/60 font-light leading-relaxed">
                    My toolkit grows with every product, driven by empathy for the <span className="text-foreground font-black uppercase">user</span>.
                    I don't just make screens look good—I design journeys that feel clear, purposeful, and delightful to use.
                </p>
                <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent mb-2">Philosophy</span>
                    <span className="text-2xl font-black italic tracking-tighter">Research & Refine</span>
                </div>
            </div>
        </Section>
    );
}

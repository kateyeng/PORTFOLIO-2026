"use client";

import { useState } from "react";
import Section from "./Section";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const projects = [
    {
        id: 1,
        title: "Business Tracker",
        category: "Mobile UI/UX",
        description: "UI/UX for a free Android business app—expense tracking, budgets, tasks, and revenue monitoring—with a matching dark-themed launch page.",
        longDescription: "Business Tracker is a mobile product for small businesses to log expenses, plan budgets, assign tasks, and monitor revenue. I designed the end-to-end experience: intuitive in-app flows for financial tools and a focused landing page that mirrors the app's dark, professional aesthetic—highlighting PDF export, Google Sign-In, and one-tap reporting.",
        image: "/images/business-tracker.png",
        liveUrl: "https://business-tracker-landing.vercel.app/",
        githubUrl: "https://github.com/kateyeng",
        tech: ["Figma", "Mobile UX", "Landing Page Design", "Design Systems", "Prototyping"],
        features: ["Expense & budget flows", "Task management UI", "Revenue dashboard design", "PDF export experience", "Launch page & onboarding"],
    },
    {
        id: 5,
        title: "HJ-EVENTS",
        category: "Full-stack Application",
        description: "A fullstack admin/client system for wedding booking and has 7 integrations with backups and others like emails payments.",
        longDescription: "HJ-EVENTS is a comprehensive wedding booking management system that serves both administrators and clients. The platform features 7 different integrations including email services, payment gateways, and automated backup systems.",
        image: "",
        tech: ["MongoDB", "Express.js", "React", "Node.js", "Email API", "Payment Gateway"],
        features: ["Admin dashboard", "Client booking system", "7 service integrations", "Automated backups", "Email notifications", "Payment processing"],
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <>
            <Section id="projects" title="Exhibition" subtitle="Portfolio" verticalTitle="Projects" className="py-20 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px border border-foreground/5 bg-foreground/5 overflow-hidden">
                    {projects.map((project) => (
                        <div key={project.id} className="overflow-hidden">
                            <ProjectCard
                                project={project}
                                onClick={() => setSelectedProject(project)}
                                className="h-[320px] sm:h-[380px] md:h-[500px]"
                            />
                        </div>
                    ))}
                </div>
            </Section>

            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </>
    );
}

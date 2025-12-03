"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "DevOps Engineer",
    company: "CargoFlash Infotech Pvt. Ltd.",
    location: "Gurugram, India",
    startDate: "Feb 2024",
    endDate: "July 2025",
    description: [
      "The company required a reliable and scalable solution for managing warehousing and reservations for airline cargo, delivered as a SaaS application.",
      "Implemented Docker containerization, orchestrated deployments using Kubernetes on AWS infrastructure, and built robust CI/CD pipelines using Jenkins for automated testing and release workflows. Coordinated application releases on test and staging servers, optimising deployment speed and reliability.",
      "Reduced manual deployment errors by 75%, accelerated release cycles from weekly to daily, and improved platform stability and scalability for client airline partners.",
    ],
    techStack: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "Linux",
      "Shell",
      "Prometheus",
      "Grafana",
      "AWS",
      "Terraform",
    ],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Misui India Pvt. Ltd.",
    location: "Bengalore , India",
    startDate: "Jun 2022",
    endDate: "Mar 2022",
    description: [
      "Assisted in migrating on‑premise workloads to cloud infrastructure.",
      "Wrote shell scripts to automate routine maintenance and deployment tasks.",
      "Collaborated with developers to troubleshoot builds and environments.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl bg-gradient-to-br from-[#181818] to-[#252525] border border-[#333] hover:border-primary-500 transition-all duration-300 p-5 md:p-6 flex flex-col gap-3 hover:shadow-lg hover:shadow-primary-500/20"
    >
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          {experience.role}
        </h3>
        <p className="text-sm text-gray-300">
          {experience.startDate} - {experience.endDate}
        </p>
      </div>
      <p className="text-sm md:text-base text-gray-300">
        <span className="font-medium text-white">{experience.company}</span>
        {experience.location && ` • ${experience.location}`}
      </p>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-300">
        {experience.description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {experience.techStack && experience.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs md:text-sm rounded-full bg-[#111] border border-[#333] text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="text-white py-8 px-4">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Work Experience
      </h2>
      <div ref={ref} className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

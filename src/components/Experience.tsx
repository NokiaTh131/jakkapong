import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";
import portfolioData from "../data.json";
import { PortfolioData } from "../types";

export function Experience() {
  const data: PortfolioData = portfolioData as unknown as PortfolioData;
  const { experience } = data;

  // Dynamically import images from assets folder
  const images = import.meta.glob("../assets/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
  });

  const getImagePath = (path: string | undefined) => {
    if (!path) return undefined;
    if (path.startsWith("http")) return path;

    // Extract filename from "src/assets/filename.png"
    const filename = path.split("/").pop();
    if (!filename) return path;

    // Try to match with glob keys which are relative to this file like "../assets/filename.png"
    const key = `../assets/${filename}`;
    const module = images[key] as { default: string } | undefined;
    return module?.default || path;
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2">Experience</h2>
          <div className="w-12 h-1 bg-foreground mb-12" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {experience.map((item, index) => {
              // Check if it's an education wrapper
              if ("education" in item) {
                return item.education.map((edu, eduIndex) => {
                  const logoSrc = getImagePath(edu.logo);
                  return (
                    <motion.div
                      key={`edu-${edu.school}-${edu.date}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: (index + eduIndex) * 0.1,
                      }}
                      className="relative pl-12 md:pl-20"
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background" />

                      {/* Icon */}
                      <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-10 h-10 bg-background rounded-full flex items-center justify-center">
                        <GraduationCap size={20} className="text-foreground" />
                      </div>

                      <div className="bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors">
                        <div className="flex items-center gap-4 mb-4">
                          <img
                            src={logoSrc}
                            alt={edu.school}
                            className="w-18 h-18 rounded-md"
                          />
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3>{edu.school}</h3>
                            <span className="text-sm text-muted-foreground">
                              {edu.date}
                            </span>
                          </div>
                        </div>

                        <div className="text-muted-foreground mb-1">
                          {edu.degree}
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">
                          {edu.location}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          GPA: {edu.grade}
                        </div>
                      </div>
                    </motion.div>
                  );
                });
              }

              // It's a WorkExperience item
              const exp = item as any;
              const logoSrc = getImagePath(exp.logo);

              return (
                <motion.div
                  key={`${exp.company}-${exp.date}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-1 -translate-x-1/2 w-4 h-4 bg-foreground rounded-full border-4 border-background" />

                  {/* Icon */}
                  <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-10 h-10 bg-background rounded-full flex items-center justify-center">
                    <Briefcase size={20} className="text-foreground" />
                  </div>

                  <div className="bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={logoSrc}
                        alt={exp.company}
                        className="w-18 h-18 rounded-md"
                      />
                      <div className="w-full">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3>{exp.role}</h3>
                          <span className="text-sm text-muted-foreground">
                            {exp.date}
                          </span>
                        </div>

                        <div className="text-muted-foreground mb-1">
                          {exp.company}
                        </div>
                        <div className="text-sm text-muted-foreground mb-3">
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point: string) => (
                        <li
                          key={point}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-foreground mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

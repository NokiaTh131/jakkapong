import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

import portfolioData from "../data.json";
import { PortfolioData } from "../types";

export function Projects() {
  const data: PortfolioData = portfolioData as unknown as PortfolioData;
  const { projects } = data;

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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2">Featured Projects</h2>
          <div className="w-12 h-1 bg-foreground mb-12" />
        </motion.div>

        <div className="flex flex-col space-y-6 md:px-24">
          {projects.map((project, index) => {
            const imageSrc = getImagePath(project.image);

            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-card border border-border/50 rounded-lg overflow-hidden hover:border-border transition-colors w-full"
              >
                {/* Image */}
                {imageSrc && (
                  <div className="relative w-full shrink-0 border-b md:border-b-0 md:border-r border-border/50 overflow-hidden">
                    <img
                      src={imageSrc}
                      alt={project.name}
                      className="w-full h-48 md:h-86 object-cover object-top"
                    />
                  </div>
                )}

                <div className="flex flex-col flex-1 p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="text-sm font-medium text-primary mb-2">
                      {project.role}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Points list */}
                    {project.points && project.points.length > 0 && (
                      <ul className="list-disc pl-4 space-y-1 mb-4">
                        {project.points.map((point, i) => (
                          <li key={i} className="text-muted-foreground text-xs">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-auto pt-4 flex gap-4">
                    {project.links &&
                      project.links.map((link) => {
                        const isGithub = link.includes("github");
                        return (
                          <a
                            key={link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {isGithub ? (
                              <Github size={18} />
                            ) : (
                              <ExternalLink size={18} />
                            )}
                            <span>{isGithub ? "Code" : "Demo"}</span>
                          </a>
                        );
                      })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

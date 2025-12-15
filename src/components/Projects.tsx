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

        <div className="flex flex-col md:grid md:grid-cols-2 gap-3">
          {projects.map((project) => {
            const imageSrc = getImagePath(project.image);

            return (
              <div
                key={project.name}
                className="group relative flex flex-col h-[500px] md:h-[600px] w-full overflow-hidden rounded-xl border border-white/10 bg-card"
              >
                {/* Background Image */}
                {imageSrc && (
                  <div className="absolute inset-0 z-0">
                    <img
                      src={imageSrc}
                      alt={project.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 md:via-background/80 to-background/30 md:to-transparent" />
                  </div>
                )}

                <div className="relative z-10 flex flex-1 flex-col justify-end p-6 md:p-8">
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="mb-3 text-sm font-medium text-primary">
                      {project.role}
                    </div>
                    <p className="mb-4 line-clamp-3 text-gray-300">
                      {project.description}
                    </p>

                    {/* Points list - Limited to 2 items to prevent overflow */}
                    {project.points && project.points.length > 0 && (
                      <ul className="mb-4 space-y-1">
                        {project.points.slice(0, 2).map((point, i) => (
                          <li key={i} className="text-xs text-gray-400">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="flex gap-4 pt-2">
                    {project.links &&
                      project.links.map((link) => {
                        const isGithub = link.includes("github");
                        return (
                          <a
                            key={link}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                          >
                            {isGithub ? (
                              <Github size={20} />
                            ) : (
                              <ExternalLink size={20} />
                            )}
                            <span>{isGithub ? "Code" : "Demo"}</span>
                          </a>
                        );
                      })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

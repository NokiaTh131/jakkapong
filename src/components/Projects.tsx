import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

import portfolioData from '../data.json';
import { PortfolioData } from '../types';

export function Projects() {
  const data: PortfolioData = portfolioData as unknown as PortfolioData;
  const { projects } = data;

  // Dynamically import images from assets folder
  const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

  const getImagePath = (path: string | undefined) => {
    if (!path) return undefined;
    if (path.startsWith('http')) return path;
    
    // Extract filename from "src/assets/filename.png"
    const filename = path.split('/').pop();
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

        <div className="space-y-24">
          {projects.map((project, index) => {
            const imageSrc = getImagePath(project.image);
            
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                 {/* Image */}
                 {imageSrc && (
                  <div className="w-full md:w-1/2 relative group">
                    <div className="relative overflow-hidden rounded-lg aspect-video border border-border/50">
                      <img
                        src={imageSrc}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  </div>
                 )}

                <div className={`w-full ${imageSrc ? 'md:w-1/2' : ''} space-y-4`}>
                  <h3>{project.name}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="text-sm font-medium text-primary">{project.role}</div>
                  
                   {/* Points list from data.json if available */}
                   {project.points && project.points.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2">
                      {project.points.map((point, i) => (
                        <li key={i} className="text-muted-foreground text-sm">{point}</li>
                      ))}
                    </ul>
                   )}

                  <div className="flex gap-4 pt-2">
                    {project.links && project.links.map((link) => {
                      const isGithub = link.includes('github');
                      return (
                          <a
                          key={link}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {isGithub ? <Github size={20} /> : <ExternalLink size={20} />}
                          <span>{isGithub ? 'Code' : 'Live Demo'}</span>
                        </a>
                      )
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

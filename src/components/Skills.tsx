import { motion } from 'motion/react';
import { Code, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';
import portfolioData from '../data.json';
import { PortfolioData } from '../types';

export function Skills() {
   const data: PortfolioData = portfolioData as unknown as PortfolioData;
   const { skills } = data;

  // Dynamically import images from assets folder
  const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp}', { eager: true });

  const getImagePath = (path: string | undefined) => {
    if (!path) return undefined;
    if (path.startsWith('http')) return path;
    const filename = path.split('/').pop();
    if (!filename) return path;
    const key = `../assets/${filename}`;
    const module = images[key] as { default: string } | undefined;
    return module?.default || path;
  };

  const getInitials = (name: string) => {
    const parts = name.split(' ');
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  // Helper to map icon names/types if needed
  // Since data.json doesn't have icon names, I'll map loosely based on category name or index
  const getIcon = (categoryName: string) => {
    switch (categoryName.toLowerCase()) {
      case 'programming languages': return Code;
      case 'frontend': return Layout;
      case 'frameworks & tools': return Wrench; // or Server
      case 'backend': return Server;
      case 'database': return Database;
      case 'mobile': return Smartphone;
      case 'cloud & devops': return Wrench;
      case 'languages': return Code; // Human languages
      case 'cybersecurity & networking': return Wrench; // Shield icon would be better if available
      default: return Code;
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2">Skills & Technologies</h2>
          <div className="w-12 h-1 bg-foreground mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, index) => {
            const Icon = getIcon(category.name);
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-foreground/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Icon size={24} className="text-foreground" />
                  </div>
                  <h3>{category.name}</h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{category.desc}</p>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((skill, i) => {
                    const logoPath = category.logos?.[i];
                    // Logic to resolve image path similar to Projects.tsx
                    // Since we can't share the function easily without context, I'll inline a simple version or reuse if I could, but here I'll just use the glob imported at top level if I add it.
                    // Wait, I need to add the import meta glob at the top of the component first.
                    // Let's do the logic inside the map or helper.
                    
                    const resolvedLogo = logoPath ? getImagePath(logoPath) : undefined;
                    const initials = getInitials(skill);

                    return (
                      <div
                        key={skill}
                        className="flex items-center gap-2 bg-background border border-border px-3 py-2 rounded-lg"
                      >
                         {resolvedLogo ? (
                          <div className="w-6 h-6 flex justify-center items-center overflow-hidden rounded-sm">
                             <img src={resolvedLogo} alt={skill} className="w-full h-full object-contain" />
                          </div>
                         ) : (
                          <div className="w-6 h-6 flex justify-center items-center bg-primary/10 rounded-sm text-xs font-bold text-primary">
                            {initials}
                          </div>
                         )}
                        <span className="text-sm font-medium">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Code, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';
import portfolioData from '../data.json';
import { PortfolioData } from '../types';

export function Skills() {
   const data: PortfolioData = portfolioData as unknown as PortfolioData;
   const { skills } = data;

  // Helper to map icon names/types if needed, or just specific icons for categories if hardcoded mapping is preferred
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

                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-muted-foreground bg-background px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

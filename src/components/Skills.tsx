import { motion } from 'motion/react';
import { Code, Database, Layout, Server, Smartphone, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Motion'],
  },
  {
    title: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL'],
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'],
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Expo', 'Progressive Web Apps'],
  },
  {
    title: 'DevOps',
    icon: Wrench,
    skills: ['Docker', 'AWS', 'CI/CD', 'GitHub Actions', 'Vercel'],
  },
  {
    title: 'Languages',
    icon: Code,
    skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Go'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
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
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                    <Icon size={24} className="text-foreground" />
                  </div>
                  <h3>{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
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

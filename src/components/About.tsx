import { motion } from 'motion/react';
import portfolioData from '../data.json';
import { PortfolioData } from '../types';

export function About() {
  const data: PortfolioData = portfolioData as unknown as PortfolioData;
  const { about } = data;

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2">About Me</h2>
          <div className="w-12 h-1 bg-foreground mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            {about.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
               <h3 className="text-xl font-semibold mb-4 text-foreground">Education</h3>
               {about.education.map((edu, index) => (
                 <div key={index} className="mb-4">
                   <h4 className="font-medium text-foreground">{edu.school}</h4>
                   <p className="text-sm text-muted-foreground">{edu.degree}</p>
                   <p className="text-sm text-muted-foreground">{edu.date} | {edu.location}</p>
                   {edu.grade && <p className="text-sm text-muted-foreground">GPA: {edu.grade}</p>}
                 </div>
               ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
               <h3 className="text-xl font-semibold mb-4 text-foreground">Achievements</h3>
               {about.achievements.map((achievement, index) => (
                 <div key={index} className="mb-4">
                   <h4 className="font-medium text-foreground">{achievement.title}</h4>
                   <p className="text-sm text-muted-foreground">{achievement.description}</p>
                 </div>
               ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

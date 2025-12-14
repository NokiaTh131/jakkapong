import { motion } from 'motion/react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Senior Full Stack Engineer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Lead development of microservices architecture, mentor junior developers, and drive technical decisions for cloud-native applications.',
    achievements: [
      'Reduced API response time by 40% through optimization',
      'Led migration to containerized infrastructure',
      'Implemented CI/CD pipeline reducing deployment time by 60%',
    ],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built and maintained customer-facing web applications, collaborated with designers and product managers to deliver features.',
    achievements: [
      'Developed real-time collaboration features',
      'Improved test coverage from 30% to 85%',
      'Built reusable component library',
    ],
  },
  {
    type: 'work',
    title: 'Software Engineer',
    company: 'Digital Solutions Ltd.',
    period: '2018 - 2020',
    description: 'Developed full-stack web applications for enterprise clients, focused on scalability and maintainability.',
    achievements: [
      'Delivered 10+ client projects on time',
      'Integrated third-party APIs and payment systems',
      'Mentored interns and conducted code reviews',
    ],
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'State University',
    period: '2014 - 2018',
    description: 'Graduated with honors, focused on software engineering and distributed systems.',
    achievements: [
      'GPA: 3.8/4.0',
      'Research assistant in AI lab',
      'President of Computer Science Club',
    ],
  },
];

export function Experience() {
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
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
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
                  {exp.type === 'work' ? (
                    <Briefcase size={20} className="text-foreground" />
                  ) : (
                    <GraduationCap size={20} className="text-foreground" />
                  )}
                </div>

                <div className="bg-card border border-border rounded-lg p-6 hover:border-foreground/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3>{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  
                  <div className="text-muted-foreground mb-3">{exp.company}</div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-foreground mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

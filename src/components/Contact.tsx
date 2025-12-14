import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2">Get In Touch</h2>
          <div className="w-12 h-1 bg-foreground mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm currently open to new opportunities and interesting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/5 rounded-lg">
                  <Mail size={20} className="text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:alex@example.com" className="hover:text-muted-foreground transition-colors">
                    alex@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/5 rounded-lg">
                  <MapPin size={20} className="text-foreground" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div>San Francisco, CA</div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="text-sm text-muted-foreground mb-4">Connect with me</div>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Github size={20} className="text-foreground" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Linkedin size={20} className="text-foreground" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Twitter size={20} className="text-foreground" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col justify-center items-start space-y-6 bg-card border border-border rounded-lg p-8"
          >
            <h3>Let's work together</h3>
            <p className="text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities. 
              Let's create something amazing together.
            </p>
            <Button 
              size="lg" 
              className="w-full md:w-auto"
              onClick={() => window.location.href = 'mailto:alex@example.com'}
            >
              Send me an email
            </Button>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground"
        >
          <p>© 2024 Alex Chen. Built with React & Tailwind CSS.</p>
        </motion.div>
      </div>
    </section>
  );
}

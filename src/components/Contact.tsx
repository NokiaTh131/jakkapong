import { motion } from "motion/react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";
import portfolioData from "../data.json";
import { PortfolioData } from "../types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function Contact() {
  const data: PortfolioData = portfolioData as unknown as PortfolioData;
  const { profile } = data;

  return (
    <section id="contact" className="py-20 px-6 bg-background">
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
              Whether you have a question or just want to say hi, feel free to
              reach out!
            </p>

            <div className="space-y-4">
              {profile.email && (
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/5 rounded-lg">
                    <Mail size={20} className="text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <a
                      href={`mailto:${profile.email}`}
                      className="hover:text-muted-foreground transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-6">
              <div className="text-sm text-muted-foreground mb-4">
                Connect with me
              </div>
              <div className="flex gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={profile.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} className="text-foreground" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={profile.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={20} className="text-foreground" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={profile.socials.jobsdb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors flex items-center justify-center"
                        aria-label="JobsDB"
                      >
                        <span className="font-bold text-xs text-foreground">
                          JobsDB
                        </span>
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>JobsDB</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
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
              I'm always interested in hearing about new projects and
              opportunities. Let's create something amazing together.
            </p>
            {profile.email ? (
              <Button
                size="lg"
                className="w-full md:w-auto cursor-pointer"
                onClick={() =>
                  (window.location.href = `mailto:${profile.email}`)
                }
              >
                Send me an email
              </Button>
            ) : (
              <div className="flex gap-4">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  Connect on LinkedIn
                </a>
              </div>
            )}
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
          <div className="flex items-center justify-center gap-2">
            <div>
              © {new Date().getFullYear()} {profile.name}. Built with
            </div>
            <Heart size={16} className="text-red-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

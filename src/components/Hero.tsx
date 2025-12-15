import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import portfolioData from "../data.json";
import { PortfolioData } from "../types";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function Hero() {
  const data: PortfolioData = portfolioData as unknown as PortfolioData;
  const { profile } = data;
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const text = profile.name;
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout;

    setDisplayedText("");

    const typeChar = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeoutId = setTimeout(typeChar, 100);
      }
    };

    timeoutId = setTimeout(typeChar, 700);

    return () => clearTimeout(timeoutId);
  }, [profile.name]);

  const images = import.meta.glob("../assets/*.{png,jpg,jpeg,svg,webp}", {
    eager: true,
  });

  const getImagePath = (path: string) => {
    if (path.startsWith("http")) return path;
    const filename = path.split("/").pop();
    if (!filename) return path;
    const key = `../assets/${filename}`;
    const module = images[key] as { default: string } | undefined;
    return module?.default || path;
  };

  const imageSrc = getImagePath(profile.image);

  const scrollToProjects = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-muted-foreground font-medium"
          >
            Hi, my name is
          </motion.div>

          <h1 className="mb-4 text-4xl md:text-6xl font-bold tracking-tight uppercase min-h-[1.5em]">
            {displayedText}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                duration: 0.8,
                repeatType: "reverse",
              }}
              className="inline-block w-1 h-[0.8em] bg-current ml-1 align-baseline"
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-6 text-2xl md:text-3xl font-medium italic text-primary"
          >
            {profile.title}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground max-w-lg mb-8 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-muted-foreground max-w-lg mb-8 leading-relaxed italic"
          >
            {profile.sub_tagline}
          </motion.p>

          <TooltipProvider>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6 mb-12"
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={28} />
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
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={28} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>

              {profile.email && (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail size={28} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send Email</p>
                  </TooltipContent>
                </Tooltip>
              )}

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={profile.socials.jobsdb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="font-bold text-lg">JobsDB</span>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>JobsDB Profile</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          </TooltipProvider>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            onClick={scrollToProjects}
            className="cursor-pointer group flex items-center gap-2 text-foreground font-medium hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-1"
          >
            <span>View my work</span>
            <ArrowDown
              size={20}
              className="group-hover:translate-y-1 transition-transform"
            />
          </motion.button>
        </motion.div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
            <img
              src={imageSrc}
              alt={profile.name}
              className="w-full h-full object-cover scale-160 ml-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

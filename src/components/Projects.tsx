import { ExternalLink, Github, HeartPulse, BookOpen, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'SyncStudy',
    subtitle: 'Real-Time Collaborative Study Platform',
    description: 'Built shared Pomodoro timers, collaborative notes, and live chat. Added productivity analytics, streak tracking, and leaderboards.',
    tech: ['React', 'SQL', 'Supabase', 'Realtime APIs'],
    icon: BookOpen,
    github: 'https://github.com/suman3232/sync-study',
    color: 'accent',
  },
  {
    title: 'OfferBridge',
    subtitle: 'Smart Purchase Assistance Platform',
    description: 'Designed a secure escrow-based system for card-assisted purchases with planned secure communication workflows to protect user privacy.',
    tech: ['React', 'Node.js', 'Express.js', 'REST APIs'],
    icon: ShoppingBag,
    github: 'https://github.com/suman3232/smartbridge',
    color: 'primary',
  },
  {
    title: 'CareConnect',
    subtitle: 'Healthcare Management System',
    description: 'A role-based healthcare platform for doctors, users, and admins. Features appointment booking, approval workflows, notifications, and secure authentication.',
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
    icon: HeartPulse,
    github: 'https://github.com/suman3232/Production-Care-Connect',
    color: 'primary',
  },

];

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="font-mono text-primary mb-4">{'<projects>'}</div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Featured{' '}
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills in full-stack development
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15} direction={index % 2 === 0 ? 'left' : 'right'}>
              <motion.div
                className={`glass rounded-2xl p-8 group ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex lg:items-center gap-8`}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: project.color === 'primary' 
                    ? '0 20px 40px -15px hsl(175 80% 50% / 0.2)' 
                    : '0 20px 40px -15px hsl(280 70% 60% / 0.2)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Icon/Visual */}
                <motion.div 
                  className={`flex-shrink-0 w-full lg:w-64 h-48 rounded-xl flex items-center justify-center ${
                    project.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className={`w-24 h-24 ${
                      project.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold font-display">{project.title}</h3>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                  <p className={`font-mono text-sm mb-4 ${
                    project.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`}>
                    {project.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 rounded-lg bg-muted text-sm font-mono text-muted-foreground cursor-default"
                        whileHover={{ 
                          scale: 1.1, 
                          backgroundColor: 'hsl(var(--primary) / 0.2)',
                          color: 'hsl(var(--primary))'
                        }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: techIndex * 0.05, duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/suman3232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/50 font-mono text-sm transition-all hover:scale-105"
            >
              <Github size={20} />
              View More on GitHub
              <ExternalLink size={16} />
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16 font-mono text-primary">{'</projects>'}</div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Projects;

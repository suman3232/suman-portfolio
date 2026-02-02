import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import profilePhoto from '@/assets/Profile.png';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Photo */}
          <div className="animate-fade-in-up opacity-0 order-1 lg:order-2 flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/30 glow-primary animate-glow-pulse">
                <img 
                  src={profilePhoto} 
                  alt="Suman Patra" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 flex-1">
            <div className="animate-fade-in-up opacity-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-sm text-muted-foreground">Available for opportunities</span>
              </div>
            </div>

            <h1 className="animate-fade-in-up opacity-0 stagger-1 text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6">
              Hi, I'm{' '}
              <span className="text-gradient">Suman Patra</span>
            </h1>

            <div className="animate-fade-in-up opacity-0 stagger-2 mb-6">
              <TypingAnimation />
            </div>

            <p className="animate-fade-in-up opacity-0 stagger-3 max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground mb-8">
              Final-year B.Tech student passionate about building scalable web applications 
              with modern technologies. I love turning ideas into reality through clean code 
              and intuitive design.
            </p>

            <div className="animate-fade-in-up opacity-0 stagger-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium transition-all hover:opacity-90 hover:scale-105 glow-primary"
              >
                View My Work
              </a>
              <a
                href="/SumanPatra_Resume.pdf"
                download
                className="px-8 py-4 rounded-xl border border-border hover:border-primary/50 font-medium transition-all hover:scale-105 flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="animate-fade-in-up opacity-0 stagger-5 flex items-center justify-center lg:justify-start gap-4">
              <a
                href="https://github.com/suman3232"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:border-primary/50 transition-all hover:scale-110"
              >
                <Github size={22} />
              </a>
              <a
                href="https://linkedin.com/in/suman-patra"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass hover:border-primary/50 transition-all hover:scale-110"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="mailto:sumanpatra.it2022@nsec.ac.in"
                className="p-3 rounded-xl glass hover:border-primary/50 transition-all hover:scale-110"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;

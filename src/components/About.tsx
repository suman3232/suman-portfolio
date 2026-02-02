import { Code2, GraduationCap, Trophy, Globe } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  { icon: Code2, label: 'DSA Problems', value: '200+' },
  { icon: Trophy, label: 'Hackathons', value: 'Global Stage' },
  { icon: GraduationCap, label: 'CGPA', value: '7.43' },
  { icon: Globe, label: 'Languages', value: '3' },
];

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <ScrollReveal direction="left">
            <div className="font-mono text-primary mb-4">&lt;about&gt;</div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Crafting Digital
              <br />
              <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a final-year B.Tech student at Netaji Subhash Engineering College, 
              specializing in Information Technology. My journey in tech started with 
              curiosity and evolved into a passion for building meaningful applications.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              I specialize in the MERN stack and have experience with modern development 
              tools. When I'm not coding, you'll find me solving DSA problems on LeetCode 
              or exploring new technologies.
            </p>
            <div className="font-mono text-primary">&lt;/about&gt;</div>
          </ScrollReveal>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 0.1} direction="right">
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <stat.icon className="w-8 h-8 text-primary mb-4" />
                  <div className="text-3xl font-bold font-display mb-1">{stat.value}</div>
                  <div className="text-muted-foreground font-mono text-sm">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-24">
          <ScrollReveal>
            <h3 className="font-mono text-primary mb-8"># education</h3>
          </ScrollReveal>
          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="glass rounded-2xl p-6 border-l-4 border-primary">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <h4 className="font-display font-semibold text-lg">
                    Netaji Subhash Engineering College
                  </h4>
                  <span className="font-mono text-sm text-muted-foreground">2022 – 2026</span>
                </div>
                <p className="text-muted-foreground">
                  Bachelor of Technology in Information Technology • Kolkata, India
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="glass rounded-2xl p-6 border-l-4 border-accent">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                  <h4 className="font-display font-semibold text-lg">
                    Jawahar Navodaya Vidyalaya
                  </h4>
                  <span className="font-mono text-sm text-muted-foreground">2015 – 2022</span>
                </div>
                <p className="text-muted-foreground">
                  Higher Secondary (83%) • Secondary (90%) • West Bengal, India
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

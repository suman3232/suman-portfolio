import { Briefcase, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    title: 'Front End Development Intern',
    company: 'Edunet Foundation (AICTE)',
    period: 'Jun 2024 – Jul 2024',
    description: [
      'Developed responsive user interfaces using modern frontend technologies',
      'Improved UI structure and usability through component-based design',
    ],
    type: 'internship',
  },
  {
    title: 'Data Analytics & Power BI Intern',
    company: 'Vodafone Idea Foundation',
    period: 'Jul 2024 – Aug 2024',
    description: [
      'Built interactive Power BI dashboards for data visualization',
      'Analyzed datasets to generate insights and performance reports',
    ],
    type: 'internship',
  },
];

const certifications = [
  { name: 'Java Foundations', issuer: 'Udemy' },
  { name: 'PostgreSQL and MySQL for Beginners', issuer: 'Udemy' },
  { name: 'Cyber Security and Ethical Hacking Workshop', issuer: 'Ardent Computech Pvt. Ltd.' },
];

const achievements = [
  'Selected for Global Stage – EduChain Regional Hackathon 2024',
  'Solved 200+ DSA problems on LeetCode, GFG, and Codeforces',
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative bg-card/50">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="font-mono text-primary mb-4">{'<experience>'}</div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Work{' '}
              <span className="text-gradient">Experience</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Internships */}
        <div className="max-w-3xl mx-auto space-y-6 mb-24">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.title} delay={index * 0.15}>
              <div className="glass rounded-2xl p-6 border-l-4 border-primary card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
                      <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-primary font-mono text-sm mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1.5">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Certifications & Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <ScrollReveal direction="left">
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="font-mono text-primary mb-6 flex items-center gap-2">
                <Award className="w-5 h-5" />
                # certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <p className="font-medium mb-1">{cert.name}</p>
                    <p className="text-muted-foreground text-sm font-mono">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Achievements */}
          <ScrollReveal direction="right">
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="font-mono text-accent mb-6 flex items-center gap-2">
                <Award className="w-5 h-5" />
                # achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-accent/5 border border-accent/20 hover:bg-accent/10 transition-colors"
                  >
                    <p className="flex items-start gap-2">
                      <span className="text-accent">★</span>
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16 font-mono text-primary">{'</experience>'}</div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;

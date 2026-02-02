import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'C', 'SQL'],
    color: 'primary',
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'HTML', 'CSS', 'Tailwind'],
    color: 'primary',
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
    color: 'accent',
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Supabase'],
    color: 'accent',
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Postman', 'Power BI'],
    color: 'primary',
  },
  {
    title: 'Other',
    skills: ['Jupyter', 'IBM Watson', 'REST APIs'],
    color: 'accent',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative bg-card/50">
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="font-mono text-primary mb-4">{'<skills>'}</div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Tech Stack &{' '}
              <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit that I've honed through projects, internships, and continuous learning
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.1}>
              <motion.div 
                className="glass rounded-2xl p-6 h-full"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: category.color === 'primary' 
                    ? '0 15px 30px -10px hsl(175 80% 50% / 0.25)' 
                    : '0 15px 30px -10px hsl(280 70% 60% / 0.25)'
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className={`font-mono text-sm mb-4 ${
                  category.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}>
                  # {category.title.toLowerCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium cursor-default ${
                        category.color === 'primary'
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'bg-accent/10 text-accent border border-accent/20'
                      }`}
                      whileHover={{ 
                        scale: 1.15,
                        y: -3,
                        boxShadow: category.color === 'primary'
                          ? '0 8px 20px -5px hsl(175 80% 50% / 0.4)'
                          : '0 8px 20px -5px hsl(280 70% 60% / 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: skillIndex * 0.05,
                        type: "spring",
                        stiffness: 400,
                        damping: 15
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Behavioral Skills */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16">
            <h3 className="font-mono text-primary text-center mb-8"># soft_skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Problem Solving', 'Team Collaboration', 'Communication', 'Adaptability'].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="px-6 py-3 rounded-full glass border border-border cursor-default"
                  whileHover={{ 
                    scale: 1.08,
                    borderColor: 'hsl(var(--primary) / 0.6)',
                    boxShadow: '0 10px 25px -8px hsl(175 80% 50% / 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <span className="font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-16 font-mono text-primary">{'</skills>'}</div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;

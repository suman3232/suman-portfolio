import { Mail, Phone, Github, Linkedin, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sumanpatra.it2022@nsec.ac.in?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="font-mono text-primary mb-4">{'<contact>'}</div>
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Let's{' '}
              <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative ideas, or ways to contribute to your projects.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-xl mb-8">Get in Touch</h3>
              
              <a
                href="mailto:sumanpatra.it2022@nsec.ac.in"
                className="flex items-center gap-4 p-4 glass rounded-xl card-hover group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm font-mono">Email</p>
                  <p className="font-medium">sumanpatra.it2022@nsec.ac.in</p>
                </div>
              </a>

              <a
                href="tel:+919733722957"
                className="flex items-center gap-4 p-4 glass rounded-xl card-hover group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm font-mono">Phone</p>
                  <p className="font-medium">+91 9733722957</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 glass rounded-xl">
                <div className="p-3 rounded-lg bg-accent/10">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm font-mono">Location</p>
                  <p className="font-medium">Kolkata, India</p>
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <a
                  href="https://github.com/suman3232"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl hover:border-primary/50 transition-all hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sumanpatra32"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass rounded-xl hover:border-primary/50 transition-all hover:scale-110"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
              <h3 className="font-display font-semibold text-xl mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block font-mono text-sm text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-sm text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-[1.02] glow-primary"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16 font-mono text-primary">{'</contact>'}</div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;

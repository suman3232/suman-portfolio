import { useState, useEffect, useRef } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import useActiveSection from '@/hooks/useActiveSection';

const navLinks = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((link) => link.id));
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = navRef.current?.offsetHeight ?? 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        <motion.a
          href="#"
          className="font-mono text-xl font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          &lt;SP /&gt;
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`relative font-mono text-sm transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeSection"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
          <ThemeToggle />
          <motion.a
            href="/SumanPatra_Resume.pdf"
            download
            className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-mono text-sm font-medium flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={16} />
            Resume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            className="p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass mt-4 mx-6 rounded-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    // Let the mobile menu collapse before measuring/scrolling.
                    requestAnimationFrame(() => requestAnimationFrame(() => scrollToSection(link.href)));
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`font-mono text-sm transition-colors ${
                    activeSection === link.id
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="/SumanPatra_Resume.pdf"
                download
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-mono text-sm font-medium text-center flex items-center justify-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download size={16} />
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

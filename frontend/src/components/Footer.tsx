import { Sparkles, Heart } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/rpsanjith30' },
  { icon: SiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/r-pranaav-sanjith/' },
  { icon: SiX, label: 'Twitter / X', href: '#' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const appId = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'pranaav-portfolio'
  );

  return (
    <footer className="bg-portfolio-bg border-t border-portfolio-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-portfolio-violet to-portfolio-indigo flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg text-portfolio-text tracking-tight">
                Pranaav<span className="text-portfolio-violet">.</span>Dev
              </span>
            </div>
            <p className="text-sm text-portfolio-muted leading-relaxed">
              Final-year B.Tech IT student at MIT, Anna University. Passionate about data analytics,
              machine learning, and building data-driven solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-portfolio-text mb-4 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-portfolio-muted hover:text-portfolio-violet transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-portfolio-text mb-4 uppercase tracking-widest">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-portfolio-border flex items-center justify-center text-portfolio-muted hover:text-portfolio-violet hover:border-portfolio-violet transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-portfolio-muted-2 leading-relaxed">
              Open to data analytics, ML, and full-stack opportunities.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-portfolio-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-portfolio-muted-2">
            © {new Date().getFullYear()} R. Pranaav Sanjith. All rights reserved.
          </p>
          <p className="text-sm text-portfolio-muted-2 flex items-center gap-1.5">
            Built with{' '}
            <Heart className="w-3.5 h-3.5 text-portfolio-rose fill-portfolio-rose" />{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-violet hover:text-portfolio-violet-light transition-colors font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

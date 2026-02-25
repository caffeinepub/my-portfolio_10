import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    category: 'Data Analytics',
    color: 'violet',
    link: 'https://www.linkedin.com/in/r-pranaav-sanjith/',
  },
  {
    title: 'Machine Learning Foundations',
    issuer: 'Coursera / Stanford Online',
    category: 'Machine Learning',
    color: 'rose',
    link: 'https://www.linkedin.com/in/r-pranaav-sanjith/',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM / Cognitive Class',
    category: 'Python',
    color: 'indigo',
    link: 'https://www.linkedin.com/in/r-pranaav-sanjith/',
  },
  {
    title: 'SQL for Data Analysis',
    issuer: 'LinkedIn Learning',
    category: 'Databases',
    color: 'violet',
    link: 'https://www.linkedin.com/in/r-pranaav-sanjith/',
  },
  {
    title: 'Data Visualization with Python',
    issuer: 'edX / IBM',
    category: 'Visualization',
    color: 'rose',
    link: 'https://www.linkedin.com/in/r-pranaav-sanjith/',
  },
  {
    title: 'Introduction to Deep Learning',
    issuer: 'NPTEL / IIT',
    category: 'Deep Learning',
    color: 'indigo',
    link: 'https://www.linkedin.com/in/r-pranaav-sanjith/',
  },
  {
    title: 'TCS iON Career Edge',
    issuer: 'TCS iON',
    category: 'Professional Skills',
    color: 'violet',
    link: 'https://www.tcsion.com/iDH/India/Dashboard/course_detail/12104424/1',
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
  violet: {
    bg: 'bg-portfolio-violet/10',
    text: 'text-portfolio-violet',
    border: 'border-portfolio-violet/30',
    iconBg: 'bg-portfolio-violet/15',
  },
  rose: {
    bg: 'bg-portfolio-rose/10',
    text: 'text-portfolio-rose',
    border: 'border-portfolio-rose/30',
    iconBg: 'bg-portfolio-rose/15',
  },
  indigo: {
    bg: 'bg-portfolio-indigo/10',
    text: 'text-portfolio-indigo',
    border: 'border-portfolio-indigo/30',
    iconBg: 'bg-portfolio-indigo/15',
  },
};

export default function Certifications() {
  return (
    <div className="py-24 px-6 bg-portfolio-bg">
      <div className="max-w-6xl mx-auto">
        {/* Banner */}
        <div className="relative rounded-xl overflow-hidden mb-16 border border-portfolio-border">
          <img
            src="/assets/generated/certifications-banner.dim_1200x300.png"
            alt="Certifications & Badges"
            className="w-full h-40 md:h-52 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-portfolio-bg/95 via-portfolio-bg/70 to-transparent flex items-center px-8 md:px-12">
            <div>
              <span className="text-portfolio-violet text-sm font-semibold tracking-widest uppercase block mb-2">
                Credentials
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text">
                Certifications & Badges
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-portfolio-violet to-portfolio-rose rounded-full mt-4" />
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-portfolio-muted text-center max-w-xl mx-auto mb-12">
          Continuous learning through online courses and professional certifications in data analytics,
          machine learning, and software development.
        </p>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert) => {
            const colors = colorMap[cert.color];
            return (
              <div
                key={cert.title}
                className="group bg-portfolio-surface rounded-xl p-6 border border-portfolio-border hover:border-portfolio-violet/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-portfolio-violet/8 flex flex-col gap-4"
              >
                {/* Icon & Category */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center`}>
                    <Award className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {cert.category}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-portfolio-text mb-1 group-hover:text-portfolio-violet transition-colors leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-portfolio-muted">{cert.issuer}</p>
                </div>

                {/* Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold ${colors.text} hover:opacity-80 transition-opacity`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Certificate
                </a>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-center text-portfolio-muted-2 text-sm">
          More certifications available on{' '}
          <a
            href="https://www.linkedin.com/in/r-pranaav-sanjith/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-violet hover:text-portfolio-violet-light underline underline-offset-2 transition-colors"
          >
            LinkedIn Profile
          </a>
        </p>
      </div>
    </div>
  );
}

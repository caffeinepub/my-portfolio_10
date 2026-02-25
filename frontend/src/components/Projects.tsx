import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'Customer Segmentation Model',
    description:
      'Analyzed e-commerce transaction data using the LRFM approach to classify customers into segments — Loyal, Potential, Bargain, and Passive. Performed data preprocessing, feature engineering, and clustering with Scikit-learn, plus visualization to derive actionable business insights.',
    image: '/assets/generated/project-customer-segmentation.dim_600x400.png',
    tags: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'LRFM'],
    liveUrl: '#',
    githubUrl: 'https://github.com/rpsanjith30/Customer_repository_lrfs',
  },
  {
    id: 2,
    title: 'Real-Time Fraud Detection Dashboard',
    description:
      'Full-stack application with a React frontend and Python + MySQL backend that monitors transactions in real time and flags anomalous patterns for review. Gained practical experience in API integration, frontend-backend communication, and real-time data processing.',
    image: '/assets/generated/project-fraud-detection.dim_600x400.png',
    tags: ['React', 'Python', 'MySQL', 'REST API', 'Real-Time'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'GeoLocker',
    description:
      'Secure file storage system built with Flask and AES-GCM encryption. Enhanced understanding of backend systems, database security, and access control mechanisms through implementing robust encryption and secure file management.',
    image: '/assets/generated/project-geolocker.dim_600x400.png',
    tags: ['Flask', 'Python', 'AES-GCM', 'Security', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <div className="py-24 px-6 bg-portfolio-bg">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-portfolio-violet text-sm font-semibold tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text mt-2">
            Featured Projects
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-portfolio-violet to-portfolio-rose rounded-full mx-auto mt-4" />
          <p className="text-portfolio-muted mt-4 max-w-xl mx-auto">
            A selection of projects spanning data analytics, machine learning, and full-stack development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-portfolio-surface rounded-xl overflow-hidden border border-portfolio-border hover:border-portfolio-violet/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-portfolio-violet/10 flex flex-col"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-surface/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Hover overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-gradient-to-r from-portfolio-violet to-portfolio-indigo text-white hover:shadow-violet-glow transition-all shadow-lg"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-portfolio-surface-2 text-portfolio-text hover:bg-portfolio-border transition-colors shadow-lg"
                      aria-label="GitHub"
                    >
                      <SiGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-portfolio-text mb-2 group-hover:text-portfolio-violet transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-portfolio-muted leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-portfolio-violet/10 text-portfolio-violet text-xs font-medium border border-portfolio-violet/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-portfolio-border">
                  {project.githubUrl !== '#' ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-portfolio-violet hover:text-portfolio-violet-light transition-colors"
                    >
                      <SiGithub className="w-3.5 h-3.5" />
                      Source Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-1.5 text-xs font-medium text-portfolio-muted-2 cursor-default">
                      <SiGithub className="w-3.5 h-3.5" />
                      Private Repo
                    </span>
                  )}
                  {project.liveUrl !== '#' && (
                    <>
                      <span className="text-portfolio-border">·</span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-semibold text-portfolio-muted hover:text-portfolio-text transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/rpsanjith30"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-portfolio-border text-portfolio-muted font-semibold text-sm hover:border-portfolio-violet hover:text-portfolio-violet transition-all duration-200"
          >
            <SiGithub className="w-4 h-4" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

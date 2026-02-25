const skillCategories = [
  {
    title: 'Data & ML',
    color: 'violet',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Pandas & NumPy', level: 88 },
      { name: 'Scikit-learn', level: 82 },
      { name: 'Matplotlib', level: 80 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Frontend & Backend',
    color: 'rose',
    skills: [
      { name: 'React', level: 80 },
      { name: 'JavaScript', level: 78 },
      { name: 'Flask', level: 75 },
      { name: 'Java', level: 72 },
      { name: 'HTML / CSS', level: 82 },
    ],
  },
  {
    title: 'Databases & Tools',
    color: 'indigo',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'Oracle', level: 72 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'Data Preprocessing', level: 90 },
      { name: 'Feature Engineering', level: 85 },
    ],
  },
];

const techBadges = [
  'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib',
  'SQL', 'React', 'JavaScript', 'Flask', 'Java',
  'MySQL', 'Oracle', 'Git', 'AES-GCM', 'Data Cleaning',
  'LRFM Analysis', 'Clustering', 'REST APIs', 'HTML/CSS',
];

const colorMap: Record<string, { bar: string; bg: string; text: string; border: string }> = {
  violet: {
    bar: 'bg-portfolio-violet',
    bg: 'bg-portfolio-violet/10',
    text: 'text-portfolio-violet',
    border: 'border-portfolio-violet/30',
  },
  rose: {
    bar: 'bg-portfolio-rose',
    bg: 'bg-portfolio-rose/10',
    text: 'text-portfolio-rose',
    border: 'border-portfolio-rose/30',
  },
  indigo: {
    bar: 'bg-portfolio-indigo',
    bg: 'bg-portfolio-indigo/10',
    text: 'text-portfolio-indigo',
    border: 'border-portfolio-indigo/30',
  },
};

export default function Skills() {
  return (
    <div className="py-24 px-6 bg-portfolio-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-portfolio-violet text-sm font-semibold tracking-widest uppercase">
            What I Know
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text mt-2">
            Skills & Technologies
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-portfolio-violet to-portfolio-rose rounded-full mx-auto mt-4" />
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category) => {
            const colors = colorMap[category.color];
            return (
              <div
                key={category.title}
                className="bg-portfolio-surface-2 rounded-xl p-6 border border-portfolio-border hover:border-portfolio-violet/30 transition-colors"
              >
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text} text-sm font-semibold mb-6 border ${colors.border}`}>
                  {category.title}
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium text-portfolio-text">{skill.name}</span>
                        <span className={`text-xs font-semibold ${colors.text}`}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-portfolio-border rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colors.bar} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Badges */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-portfolio-muted mb-6">
            Full Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-portfolio-border text-portfolio-muted text-sm font-medium hover:border-portfolio-violet hover:text-portfolio-violet transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

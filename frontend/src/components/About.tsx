import { GraduationCap, MapPin, Trophy, Users } from 'lucide-react';
import { SiLinkedin } from 'react-icons/si';

const highlights = [
  { icon: GraduationCap, label: 'Degree', value: 'B.Tech Information Technology' },
  { icon: MapPin, label: 'University', value: 'MIT, Anna University — Chennai' },
  { icon: Trophy, label: 'Achievement', value: '2024 Zonal Football Winners' },
  { icon: Users, label: 'Interests', value: 'Data Analytics & Machine Learning' },
];

export default function About() {
  return (
    <div className="py-24 px-6 bg-portfolio-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-portfolio-violet text-sm font-semibold tracking-widest uppercase">
            Get to know me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text mt-2">
            About Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-portfolio-violet to-portfolio-rose rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-full border-2 border-portfolio-violet/20 animate-spin-slow" />
              <div className="absolute -inset-6 rounded-full border border-portfolio-rose/10" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-portfolio-violet/30 shadow-2xl shadow-portfolio-violet/15">
                <img
                  src="/assets/generated/pranaav-profile.dim_400x400.png"
                  alt="R. Pranaav Sanjith"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-portfolio-violet to-portfolio-indigo text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                Open to Work
              </div>
            </div>
          </div>

          {/* Bio & Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-portfolio-text mb-4">
              R. Pranaav Sanjith
            </h3>
            <p className="text-portfolio-muted leading-relaxed mb-4">
              I'm a final-year B.Tech Information Technology student at Madras Institute of Technology,
              Anna University. I have a strong interest in <span className="text-portfolio-violet font-medium">data analytics and machine learning</span>,
              particularly in data preprocessing, feature engineering, data cleaning, and extracting
              meaningful insights from raw datasets.
            </p>
            <p className="text-portfolio-muted leading-relaxed mb-4">
              I enjoy analyzing patterns, transforming unstructured data into structured formats, and
              building models that support data-driven decision-making. I regularly work with Python,
              Pandas, NumPy, Scikit-learn, Matplotlib, and SQL. I'm also comfortable with Python
              full-stack development, Java, JavaScript, and relational databases such as MySQL and Oracle.
            </p>
            <p className="text-portfolio-muted leading-relaxed mb-6">
              Beyond academics, I serve as the <span className="text-portfolio-rose font-medium">Vice Captain of the MIT Football Team</span> (2024 Zonal Winners)
              and am actively involved in <span className="text-portfolio-rose font-medium">AUSEC and IoT Club Public Relations</span>,
              coordinating across campuses and managing communications.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-portfolio-surface-2 border border-portfolio-border hover:border-portfolio-violet/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-portfolio-violet/10 flex items-center justify-center group-hover:bg-portfolio-violet/20 transition-colors flex-shrink-0">
                    <Icon className="w-5 h-5 text-portfolio-violet" />
                  </div>
                  <div>
                    <p className="text-xs text-portfolio-muted-2 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-portfolio-text">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Goal Statement */}
            <p className="text-portfolio-muted-2 text-sm leading-relaxed mb-6 italic border-l-2 border-portfolio-violet/40 pl-4">
              "My goal is to continuously grow in data analytics and data science, gain deeper knowledge
              in advanced data processing and model building, and contribute to solving real-world problems
              through data-driven approaches."
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/r-pranaav-sanjith/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-portfolio-violet text-portfolio-violet font-semibold text-sm hover:bg-portfolio-violet hover:text-white transition-all duration-200"
              >
                <SiLinkedin className="w-4 h-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { toast } from 'sonner';
import { Send, Mail, MapPin, ExternalLink } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { useSubmitContactForm } from '../hooks/useQueries';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'pranaavsanjith@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Chennai, India' },
];

const socialLinks = [
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/rpsanjith30' },
  { icon: SiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/r-pranaav-sanjith/' },
  { icon: SiX, label: 'Twitter / X', href: '#' },
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const submitMutation = useSubmitContactForm();

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    else if (form.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await submitMutation.mutateAsync({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      toast.success("Message sent! I'll get back to you soon.");
    } catch {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="py-24 px-6 bg-portfolio-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-portfolio-violet text-sm font-semibold tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-text mt-2">
            Contact Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-portfolio-violet to-portfolio-rose rounded-full mx-auto mt-4" />
          <p className="text-portfolio-muted mt-4 max-w-xl mx-auto">
            Have a project in mind, a collaboration idea, or just want to say hello? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info & Social */}
          <div>
            <h3 className="text-xl font-bold text-portfolio-text mb-6">Let's Connect</h3>
            <p className="text-portfolio-muted leading-relaxed mb-8">
              I'm currently open to new opportunities in data analytics and data science. Whether you have
              a question, a project idea, or just want to chat about data — my inbox is always open.
            </p>

            {/* Email Me Button */}
            <a
              href="mailto:pranaavsanjith@gmail.com"
              aria-label="Send email to pranaavsanjith@gmail.com"
              className="inline-flex items-center gap-3 w-full px-5 py-4 rounded-xl bg-portfolio-violet/10 border border-portfolio-violet/30 text-portfolio-violet font-semibold text-sm hover:bg-portfolio-violet/20 hover:border-portfolio-violet/60 hover:shadow-violet-glow transition-all duration-200 group mb-8"
            >
              <div className="w-9 h-9 rounded-lg bg-portfolio-violet/20 flex items-center justify-center flex-shrink-0 group-hover:bg-portfolio-violet/30 transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-xs text-portfolio-muted-2 font-medium mb-0.5">Reach me directly</p>
                <p className="text-portfolio-violet font-bold">pranaavsanjith@gmail.com</p>
              </div>
              <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-portfolio-violet/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-portfolio-violet" />
                  </div>
                  <div>
                    <p className="text-xs text-portfolio-muted-2 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-portfolio-text">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-semibold text-portfolio-muted mb-4">Find me on</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-lg border border-portfolio-border flex items-center justify-center text-portfolio-muted hover:text-portfolio-violet hover:border-portfolio-violet transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-portfolio-surface-2 rounded-xl p-8 border border-portfolio-border">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <div className="w-16 h-16 rounded-full bg-portfolio-violet/10 flex items-center justify-center mb-4">
                  <Send className="w-8 h-8 text-portfolio-violet" />
                </div>
                <h3 className="text-xl font-bold text-portfolio-text mb-2">Message Sent!</h3>
                <p className="text-portfolio-muted mb-6">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg border border-portfolio-violet text-portfolio-violet text-sm font-semibold hover:bg-portfolio-violet hover:text-white transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-text mb-1.5">
                    Name <span className="text-portfolio-violet">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-lg bg-portfolio-bg border text-portfolio-text placeholder:text-portfolio-muted-2 text-sm outline-none transition-colors focus:border-portfolio-violet ${
                      errors.name ? 'border-red-500/60' : 'border-portfolio-border'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-text mb-1.5">
                    Email <span className="text-portfolio-violet">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg bg-portfolio-bg border text-portfolio-text placeholder:text-portfolio-muted-2 text-sm outline-none transition-colors focus:border-portfolio-violet ${
                      errors.email ? 'border-red-500/60' : 'border-portfolio-border'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-text mb-1.5">
                    Message <span className="text-portfolio-violet">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi..."
                    className={`w-full px-4 py-3 rounded-lg bg-portfolio-bg border text-portfolio-text placeholder:text-portfolio-muted-2 text-sm outline-none transition-colors focus:border-portfolio-violet resize-none ${
                      errors.message ? 'border-red-500/60' : 'border-portfolio-border'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-portfolio-violet to-portfolio-indigo text-white font-bold text-sm hover:shadow-violet-glow transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitMutation.isPending ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

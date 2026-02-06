import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sanjanacheerla00@gmail.com',
    href: 'mailto:sanjanacheerla00@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sanjanacheerla',
    href: 'https://linkedin.com/in/sanjanacheerla',
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/sanjanacheerla',
    href: 'https://github.com/sanjanacheerla',
    external: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1-978-505-5888',
    href: 'tel:+19785055888',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Raleigh, NC',
    href: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-br from-coral-50/50 via-background to-teal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-coral text-sm uppercase tracking-wider font-bold">
              Contact
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight mt-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-navy-light text-base md:text-lg max-w-2xl mx-auto mt-4">
              I'm always interested in discussing AI/ML research, collaboration opportunities, 
              or exciting projects. Reach out and let's connect!
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                  >
                    <Card className="bg-card border border-border hover:border-coral/30 transition-all duration-400 group shadow-soft hover:shadow-soft-lg">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-coral-50 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-coral" />
                        </div>
                        <div className="flex-grow">
                          <p className="text-navy-muted text-sm font-medium">{item.label}</p>
                          <p className="text-navy font-semibold group-hover:text-coral transition-colors">
                            {item.value}
                          </p>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-navy-subtle group-hover:text-coral transition-colors" />
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <Card className="bg-card border border-border shadow-soft">
                    <CardContent className="p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-coral-50 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-coral" />
                      </div>
                      <div>
                        <p className="text-navy-muted text-sm font-medium">{item.label}</p>
                        <p className="text-navy font-semibold">{item.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="lg:col-span-3"
          >
            <Card className="bg-card border border-border shadow-soft-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-navy font-bold text-xl mb-6">Send a Message</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="text-navy-muted text-sm font-medium mb-2 block">Name</label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        className="bg-cream border-border text-navy placeholder:text-navy-subtle focus:border-coral focus:ring-coral/20 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="text-navy-muted text-sm font-medium mb-2 block">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-cream border-border text-navy placeholder:text-navy-subtle focus:border-coral focus:ring-coral/20 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-navy-muted text-sm font-medium mb-2 block">Subject</label>
                    <Input
                      type="text"
                      placeholder="What's this about?"
                      className="bg-cream border-border text-navy placeholder:text-navy-subtle focus:border-coral focus:ring-coral/20 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-navy-muted text-sm font-medium mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className="bg-cream border-border text-navy placeholder:text-navy-subtle focus:border-coral focus:ring-coral/20 rounded-xl resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-coral text-white hover:bg-coral-dark rounded-xl py-6 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-coral flex items-center justify-center gap-2"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

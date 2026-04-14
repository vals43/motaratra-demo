import { motion } from 'framer-motion'
import { CheckCircle, Wrench, Zap, Clock, Award, Shield } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Service() {
  const services = [
    {
      icon: Wrench,
      title: 'Maintenance & Repairs',
      description: 'Regular maintenance checks and expert repairs by certified technicians',
      details: [
        'Battery health check',
        'Motor performance test',
        'Brake system inspection',
        'Tire alignment and balance',
      ],
    },
    {
      icon: Zap,
      title: 'Battery Service',
      description: 'Professional battery testing, replacement, and optimization services',
      details: [
        'Battery diagnostic',
        'Capacity testing',
        'Performance optimization',
        'Replacement service',
      ],
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast turnaround times for urgent repairs and regular maintenance',
      details: [
        'Express service available',
        'Same-day repairs',
        'Loaner vehicles',
        'Priority appointments',
      ],
    },
    {
      icon: Award,
      title: 'Warranty Support',
      description: 'Comprehensive warranty coverage and after-sales support',
      details: [
        '2-year warranty',
        'Extended plans available',
        'No hidden charges',
        'Full coverage details',
      ],
    },
  ]

  const servicePackages = [
    {
      name: 'Basic Service',
      price: '$49',
      description: 'Perfect for regular maintenance',
      features: [
        'Visual inspection',
        'Tire check',
        'Brake adjustment',
        'General cleaning',
      ],
    },
    {
      name: 'Premium Service',
      price: '$99',
      description: 'Complete vehicle checkup',
      features: [
        'All basic services included',
        'Battery health check',
        'Motor performance test',
        'System diagnostics',
        'Performance optimization',
      ],
      featured: true,
    },
    {
      name: 'Warranty Service',
      price: 'Included',
      description: 'Covered under warranty',
      features: [
        'All diagnostic tests',
        'Repairs & replacements',
        'Priority support',
        'Free loaner vehicle',
        'Emergency assistance',
      ],
    },
  ]

  const faq = [
    {
      question: 'How often should I service my electric vehicle?',
      answer:
        'We recommend servicing your EV every 6 months or 10,000 km, whichever comes first. Regular maintenance ensures optimal performance and longevity.',
    },
    {
      question: 'What is covered under warranty?',
      answer:
        'Our 2-year warranty covers manufacturing defects, battery performance, motor issues, and electrical components. Consumables like tires and brake pads are excluded.',
    },
    {
      question: 'Can you replace my battery?',
      answer:
        'Yes, we offer professional battery replacement services. We use genuine batteries and provide a full diagnostic before replacement.',
    },
    {
      question: 'Do you offer mobile service?',
      answer:
        'For major repairs, we recommend bringing your vehicle to our workshop. However, we can arrange mobile assistance for breakdowns.',
    },
    {
      question: 'How long does a typical service take?',
      answer:
        'Basic services take 30-45 minutes, while premium services take 1-2 hours depending on the vehicle condition.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept cash, credit/debit cards, mobile money, and bank transfers. Payment plans are also available for major services.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-muted border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Service & Maintenance
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert care for your electric vehicle with certified technicians and genuine parts
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  className="p-8 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-lg p-8 transition-all ${
                  pkg.featured
                    ? 'bg-foreground text-background border-2 border-primary shadow-lg scale-105'
                    : 'bg-background border border-border hover:border-primary'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${pkg.featured ? 'text-background' : 'text-foreground'}`}>
                  {pkg.name}
                </h3>
                <div className={`text-4xl font-bold mb-3 ${pkg.featured ? 'text-primary' : 'text-primary'}`}>
                  {pkg.price}
                </div>
                <p className={`mb-6 ${pkg.featured ? 'text-background/80' : 'text-muted-foreground'}`}>
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center gap-2 ${
                        pkg.featured ? 'text-background' : 'text-foreground'
                      }`}
                    >
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${pkg.featured ? 'text-secondary' : 'text-secondary'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    pkg.featured
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  Book Service
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common service questions
            </p>
          </AnimatedSection>

          <div className="space-y-4">
            {faq.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.05}
                className="border border-border rounded-lg overflow-hidden hover:border-primary transition-colors group"
              >
                <details className="p-6">
                  <summary className="flex items-center justify-between cursor-pointer font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.question}
                    <span className="text-primary text-xl group-open:rotate-180 transition-transform">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {item.answer}
                  </p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Service Today?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90">
            Schedule an appointment with our expert technicians
          </p>
          <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all">
            Book Appointment
          </button>
        </div>
      </section>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Zap, Shield, Leaf, Gauge, Users, ArrowRight } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

export default function Landing() {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Fast Charging',
      description: 'Charge your vehicle in minutes with our advanced fast-charging technology',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Zero emissions and sustainable transportation for a better future',
    },
    {
      icon: Shield,
      title: 'High Security',
      description: 'Advanced security features to protect you and your vehicle',
    },
    {
      icon: Gauge,
      title: 'Performance',
      description: 'Powerful motors with impressive acceleration and smooth rides',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Our dedicated team is always ready to assist you 24/7',
    },
    {
      icon: Zap,
      title: 'Latest Technology',
      description: 'Cutting-edge technology integrated for the best user experience',
    },
  ]

  const stats = [
    { number: '500+', label: 'Happy Customers' },
    { number: '1M+', label: 'Miles Driven' },
    { number: '15+', label: 'Vehicle Models' },
    { number: '24/7', label: 'Customer Support' },
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
              >
                The Future of <span className="text-primary">Electric</span> Mobility
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
              >
                Experience the revolution of sustainable transportation with Mot&apos;Aratra MADA. 
                Premium electric vehicles designed for Madagascar&apos;s roads.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  to="/inventory"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg inline-flex items-center justify-center gap-2"
                >
                  Explore Now <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-96 md:h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
              <img
                src="/https://res.cloudinary.com/djdd9mgvp/image/upload/q_auto/f_auto/v1776148765/super-soco_yreasq.jpg"
                alt="Super Soco Electric Motorcycle"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-lg text-muted-foreground">
              Join our growing community of satisfied customers across Madagascar
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our electric vehicles offer unmatched quality, performance, and environmental responsibility
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  className="p-8 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Go Electric?</h2>
            <p className="text-xl text-background/80 mb-8 max-w-2xl mx-auto">
              Start your sustainable journey today with Madagascar&apos;s most trusted EV dealer
            </p>
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Schedule a Test Drive
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

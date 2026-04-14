import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import ContactMap from '../components/ContactMap'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data)
    reset()
    alert('Thank you for your message! We will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+261 XX XXX XXXX',
      link: 'tel:+261',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@motaratra.mg',
      link: 'mailto:info@motaratra.mg',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Antananarivo, Madagascar',
      link: '#',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon - Sat: 9 AM - 6 PM',
      link: '#',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-muted border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions? Our team is here to help and ready to discuss your electric vehicle needs
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <AnimatedSection
                  key={index}
                  delay={index * 0.1}
                  className="p-6 border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{info.label}</p>
                  {info.link.startsWith('tel:') || info.link.startsWith('mailto:') ? (
                    <a
                      href={info.link}
                      className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-foreground">{info.value}</p>
                  )}
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection direction="left">
              <div className="bg-background p-8 rounded-lg border border-border">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="+261 XX XXX XXXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      {...register('subject')}
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                      placeholder="How can we help?"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection direction="right">
              <div className="rounded-lg overflow-hidden border border-border shadow-lg h-96">
                <ContactMap />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Response */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '2 hours',
                description: 'Average Response Time',
              },
              {
                number: '24/7',
                description: 'Customer Support',
              },
              {
                number: '99%',
                description: 'Customer Satisfaction',
              },
            ].map((stat, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <p className="text-muted-foreground">{stat.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

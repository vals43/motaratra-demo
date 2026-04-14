import { motion } from 'framer-motion'
import { useState } from 'react'
import { Filter, X } from 'lucide-react'
import VehicleCard from '../components/VehicleCard'
import AnimatedSection from '../components/AnimatedSection'

export default function Inventory() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null)

  const vehicles = [
    {
      id: '1',
      name: 'Super Soco TC Max',
      image: '/super-soco.jpg',
      price: '$2,999',
      specs: {
        range: '80 km',
        topSpeed: '60 km/h',
        battery: '2.4 kWh',
      },
      description: 'The ultimate urban commuter. Fast, reliable, and eco-friendly.',
      category: 'scooter',
    },
    {
      id: '2',
      name: 'Niu NQi Pro',
      image: '/niu.jpg',
      price: '$3,499',
      specs: {
        range: '100 km',
        topSpeed: '70 km/h',
        battery: '3.2 kWh',
      },
      description: 'Premium performance with stylish design. Perfect for daily commutes.',
      category: 'scooter',
    },
  ]

  const filteredVehicles = selectedFilter
    ? vehicles.filter((v) => v.category === selectedFilter)
    : vehicles

  const categories = [
    { id: 'all', label: 'All Vehicles', count: vehicles.length },
    { id: 'scooter', label: 'Scooters', count: vehicles.filter((v) => v.category === 'scooter').length },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-muted border-b border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Our Inventory
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully curated collection of premium electric vehicles
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters and Vehicles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <AnimatedSection className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">Filter by Category</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() =>
                    setSelectedFilter(
                      category.id === 'all'
                        ? null
                        : category.id
                    )
                  }
                  className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                    (selectedFilter === null && category.id === 'all') ||
                    selectedFilter === category.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:border-primary border-2 border-border'
                  }`}
                >
                  {category.label}
                  <span className="text-xs opacity-70">({category.count})</span>
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Results Count */}
          <AnimatedSection className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredVehicles.length} vehicle{filteredVehicles.length !== 1 ? 's' : ''}
            </p>
          </AnimatedSection>

          {/* Vehicles Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VehicleCard {...vehicle} />
                </motion.div>
              ))}
            </div>
          ) : (
            <AnimatedSection className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                No vehicles found in this category
              </p>
              <button
                onClick={() => setSelectedFilter(null)}
                className="text-primary font-semibold hover:underline"
              >
                View all vehicles
              </button>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Specs Section */}
      <section className="py-20 bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Vehicles Offer
            </h2>
            <p className="text-lg text-muted-foreground">
              High performance, reliability, and sustainability
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Long Range',
                description: 'Travel up to 100km on a single charge with our advanced battery technology',
              },
              {
                title: 'Fast Charging',
                description: 'Get back on the road quickly with our optimized charging systems',
              },
              {
                title: 'Eco-Friendly',
                description: 'Zero emissions and sustainable transportation for a cleaner future',
              },
            ].map((feature, index) => (
              <AnimatedSection
                key={index}
                delay={index * 0.1}
                className="p-6 bg-background border border-border rounded-lg hover:border-primary transition-colors"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { motion } from 'framer-motion'
import { Zap, Battery, Gauge } from 'lucide-react'

interface VehicleCardProps {
  id: string
  name: string
  image: string
  price: string
  specs: {
    range: string
    topSpeed: string
    battery: string
  }
  description: string
}

export default function VehicleCard({
  name,
  image,
  price,
  specs,
  description,
}: VehicleCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-background border border-border rounded-lg overflow-hidden group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-b border-border">
          <div className="flex flex-col items-center gap-2">
            <Gauge className="w-5 h-5 text-secondary" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Top Speed</p>
              <p className="font-semibold text-sm">{specs.topSpeed}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Zap className="w-5 h-5 text-secondary" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Range</p>
              <p className="font-semibold text-sm">{specs.range}</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Battery className="w-5 h-5 text-secondary" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground">Battery</p>
              <p className="font-semibold text-sm">{specs.battery}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full bg-primary text-primary-foreground font-semibold py-2 rounded-lg hover:bg-primary/90 transition-colors">
          Learn More
        </button>
      </div>
    </motion.div>
  )
}

import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Mot&apos;Aratra MADA</span>
            </div>
            <p className="text-background/70 text-sm">
              Leading electric vehicle dealer in Madagascar
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-background/70 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/inventory" className="text-background/70 hover:text-background transition-colors">
                  Inventory
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-background/70 hover:text-background transition-colors">
                  Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                <a href="tel:+261" className="hover:text-background transition-colors">
                  +261 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@motaratra.mg" className="hover:text-background transition-colors">
                  info@motaratra.mg
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Antananarivo, Madagascar</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <p>&copy; {currentYear} Mot&apos;Aratra MADA. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-background transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

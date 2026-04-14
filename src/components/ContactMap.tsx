import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for Leaflet markers
delete (L.Icon.Default.prototype as any)._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

export default function ContactMap() {
  useEffect(() => {
    const mapContainer = document.getElementById('map')
    if (!mapContainer) return

    // Clear any existing map
    if ((mapContainer as any)._leaflet_id != null) {
      (mapContainer as any)._leaflet_id = null
    }

    // Create map centered on Antananarivo, Madagascar
    const map = L.map('map').setView([-18.8792, 47.5079], 13)

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '© OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map)

    // Add marker for Mot'Aratra location
    const marker = L.marker([-18.8792, 47.5079], {
      title: "Mot'Aratra MADA",
    }).addTo(map)

    marker.bindPopup(
      `<div class="p-3 font-sans">
        <h3 class="font-bold text-lg mb-2">Mot&apos;Aratra MADA</h3>
        <p class="text-sm text-gray-600 mb-3">
          Your trusted electric vehicle dealer in Madagascar
        </p>
        <div class="text-sm space-y-1">
          <p><strong>Phone:</strong> +261 XX XXX XXXX</p>
          <p><strong>Email:</strong> info@motaratra.mg</p>
          <p><strong>Hours:</strong> Mon - Sat: 9 AM - 6 PM</p>
        </div>
      </div>`
    )

    return () => {
      map.remove()
    }
  }, [])

  return <div id="map" className="w-full h-full" />
}

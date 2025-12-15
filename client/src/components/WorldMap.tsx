import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface WorldMapProps {
  onLocationClick: (lat: number, lng: number) => void;
  selectedLocation: { lat: number; lng: number } | null;
}

const customIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function MapClickHandler({ onLocationClick }: { onLocationClick: (lat: number, lng: number) => void }) {
  useMapEvents({
    click: (e) => {
      onLocationClick(e.latlng.lat, e.latlng.lng);
    }
  });
  return null;
}

export default function WorldMap({ onLocationClick, selectedLocation }: WorldMapProps) {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="h-full w-full"
      zoomControl={false}
      data-testid="map-container"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickHandler onLocationClick={onLocationClick} />
      {selectedLocation && (
        <Marker
          position={new LatLng(selectedLocation.lat, selectedLocation.lng)}
          icon={customIcon}
        />
      )}
    </MapContainer>
  );
}

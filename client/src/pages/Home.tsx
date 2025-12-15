import { useState } from 'react';
import WorldMap from '@/components/WorldMap';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useLocationData } from '@/hooks/useLocationData';
import { MapPin, Mountain, Lightbulb, Navigation, Satellite } from 'lucide-react';

function formatCoordinates(lat: number, lng: number): string {
  const latDir = lat >= 0 ? 'N' : 'S';
  const lngDir = lng >= 0 ? 'E' : 'W';
  return `${Math.abs(lat).toFixed(4)}° ${latDir}, ${Math.abs(lng).toFixed(4)}° ${lngDir}`;
}

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null);
  const { location, isLoading, fetchLocationData } = useLocationData();
  const [satelliteError, setSatelliteError] = useState(false);

  const handleLocationClick = (lat: number, lng: number) => {
    setSelectedLocation({ lat, lng });
    setSatelliteError(false);
    fetchLocationData(lat, lng);
  };

  // Use ArcGIS World Imagery (free, no API key required)
  const getSatelliteUrl = (lat: number, lng: number) => {
    const zoom = 14;
    const size = 600;
    // Using ArcGIS REST API for satellite imagery
    const xmin = lng - 0.02;
    const ymin = lat - 0.01;
    const xmax = lng + 0.02;
    const ymax = lat + 0.01;
    return `https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/export?bbox=${xmin},${ymin},${xmax},${ymax}&bboxSR=4326&size=${size},300&imageSR=4326&format=jpg&f=image`;
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-blue-500/40 backdrop-blur-sm border-blue-400/30 p-6 lg:p-8 rounded-3xl min-h-[280px]">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-blue-900 mt-1 shrink-0" />
                <div className="flex-1">
                  <span className="text-blue-900 font-bold text-lg uppercase tracking-wide block mb-1">Name:</span>
                  {isLoading ? (
                    <Skeleton className="h-7 w-64 bg-blue-400/30" />
                  ) : (
                    <span className="text-blue-900 text-xl" data-testid="text-location-name">
                      {location?.name || '______'}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Navigation className="h-6 w-6 text-blue-900 mt-1 shrink-0" />
                <div className="flex-1">
                  <span className="text-blue-900 font-bold text-lg uppercase tracking-wide block mb-1">Coordinates:</span>
                  {isLoading ? (
                    <Skeleton className="h-7 w-48 bg-blue-400/30" />
                  ) : (
                    <span className="text-blue-900 text-xl font-mono" data-testid="text-coordinates">
                      {selectedLocation ? formatCoordinates(selectedLocation.lat, selectedLocation.lng) : '______'}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mountain className="h-6 w-6 text-blue-900 mt-1 shrink-0" />
                <div className="flex-1">
                  <span className="text-blue-900 font-bold text-lg uppercase tracking-wide block mb-1">Sea Level:</span>
                  {isLoading ? (
                    <Skeleton className="h-7 w-32 bg-blue-400/30" />
                  ) : (
                    <span className="text-blue-900 text-xl" data-testid="text-elevation">
                      {location?.elevation !== null && location?.elevation !== undefined 
                        ? `${location.elevation.toLocaleString()} meters` 
                        : '______'}
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-blue-900 mt-1 shrink-0" />
                <div className="flex-1">
                  <span className="text-blue-900 font-bold text-lg uppercase tracking-wide block mb-1">Fun Fact:</span>
                  {isLoading ? (
                    <div className="space-y-2">
                      <Skeleton className="h-5 w-full bg-blue-400/30" />
                      <Skeleton className="h-5 w-3/4 bg-blue-400/30" />
                    </div>
                  ) : (
                    <span className="text-blue-900 text-base leading-relaxed" data-testid="text-fun-fact">
                      {location?.funFact || '______'}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-blue-500/40 backdrop-blur-sm border-blue-400/30 p-4 rounded-3xl min-h-[280px] flex flex-col">
            <div className="flex items-center gap-2 mb-3 px-2">
              <Satellite className="h-5 w-5 text-blue-900" />
              <span className="text-blue-900 font-bold text-lg uppercase tracking-wide">Satellite View</span>
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden bg-blue-400/20">
              {selectedLocation ? (
                <div className="w-full h-full min-h-[220px] relative">
                  {!satelliteError ? (
                    <img 
                      src={getSatelliteUrl(selectedLocation.lat, selectedLocation.lng)}
                      alt={`Satellite view of ${location?.name || 'selected location'}`}
                      className="w-full h-full object-cover"
                      onError={() => setSatelliteError(true)}
                      data-testid="img-satellite"
                    />
                  ) : (
                    <div 
                      className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400/30 to-cyan-400/30"
                      data-testid="satellite-fallback"
                    >
                      <div className="text-center space-y-2 p-4">
                        <Satellite className="h-12 w-12 text-blue-900/60 mx-auto" />
                        <div className="text-blue-900 text-lg font-medium">Satellite imagery unavailable</div>
                        <div className="text-blue-800 text-sm">
                          {formatCoordinates(selectedLocation.lat, selectedLocation.lng)}
                        </div>
                      </div>
                    </div>
                  )}
                  {isLoading && (
                    <div className="absolute inset-0 bg-blue-500/30 flex items-center justify-center">
                      <div className="w-8 h-8 border-3 border-blue-900/30 border-t-blue-900 rounded-full animate-spin" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-full min-h-[220px] flex items-center justify-center">
                  <div className="text-center space-y-3 p-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-blue-400/30 flex items-center justify-center">
                      <Satellite className="h-8 w-8 text-blue-900" />
                    </div>
                    <span className="text-blue-900 text-xl block" data-testid="text-satellite-placeholder">
                      Satellite picture of place
                    </span>
                    <span className="text-blue-800 text-sm block">
                      Click on the map below to see satellite imagery
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        <Card className="bg-blue-500/40 backdrop-blur-sm border-blue-400/30 p-5 rounded-3xl">
          <div className="h-[500px] lg:h-[550px] rounded-2xl overflow-hidden relative">
            <WorldMap 
              onLocationClick={handleLocationClick} 
              selectedLocation={selectedLocation}
            />
            {!selectedLocation && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-blue-900 text-xl font-medium bg-blue-400/60 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
                  Click anywhere to explore
                </span>
              </div>
            )}
          </div>
        </Card>

        <div className="text-center text-blue-900/60 text-sm pb-4">
          Data provided by OpenStreetMap, Open-Elevation API & ArcGIS World Imagery
        </div>
      </div>
    </div>
  );
}

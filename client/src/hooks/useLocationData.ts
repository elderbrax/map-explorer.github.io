import { useState, useCallback } from 'react';
import { getRandomFunFact } from '@/lib/funFacts';

interface LocationData {
  name: string;
  elevation: number | null;
  funFact: string;
  lat: number;
  lng: number;
  country: string | null;
  city: string | null;
}

export function useLocationData() {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocationData = useCallback(async (lat: number, lng: number) => {
    setIsLoading(true);
    
    try {
      // Fetch location name and elevation in parallel
      const [geocodeResult, elevationResult] = await Promise.allSettled([
        fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10&addressdetails=1`,
          {
            headers: {
              'Accept-Language': 'en',
              'User-Agent': 'WorldExplorer/1.0'
            }
          }
        ).then(res => res.ok ? res.json() : null),
        
        fetch(
          `https://api.open-elevation.com/api/v1/lookup?locations=${lat},${lng}`
        ).then(res => res.ok ? res.json() : null).catch(() => null)
      ]);
      
      let locationName = 'Unknown Location';
      let country: string | null = null;
      let city: string | null = null;
      
      if (geocodeResult.status === 'fulfilled' && geocodeResult.value) {
        const geocodeData = geocodeResult.value;
        country = geocodeData.address?.country || null;
        
        // Get city for town-specific facts
        city = geocodeData.address?.city || 
               geocodeData.address?.town || 
               geocodeData.address?.village ||
               geocodeData.address?.municipality || null;
        
        // Build a nice location name
        const parts = [];
        
        if (city) {
          parts.push(city);
        } else if (geocodeData.address?.state || geocodeData.address?.region) {
          parts.push(geocodeData.address.state || geocodeData.address.region);
        } else if (geocodeData.address?.county) {
          parts.push(geocodeData.address.county);
        }
        
        if (country) {
          parts.push(country);
        }
        
        if (parts.length > 0) {
          locationName = parts.join(', ');
        } else if (geocodeData.display_name) {
          // Fallback to first two parts of display name
          locationName = geocodeData.display_name.split(',').slice(0, 2).join(', ').trim();
        }
        
        // Handle ocean/sea locations
        if (geocodeData.address?.ocean || geocodeData.address?.sea) {
          locationName = geocodeData.address.ocean || geocodeData.address.sea;
          country = geocodeData.address.ocean || geocodeData.address.sea;
        }
      }
      
      // Extract elevation
      let elevation: number | null = null;
      if (elevationResult.status === 'fulfilled' && elevationResult.value) {
        const elevationData = elevationResult.value;
        if (elevationData.results && elevationData.results[0]) {
          elevation = Math.round(elevationData.results[0].elevation);
        }
      }
      
      // Get a fun fact based on the country and city
      const funFact = getRandomFunFact(country, city);
      
      setLocation({
        name: locationName,
        elevation,
        funFact,
        lat,
        lng,
        country,
        city,
      });
    } catch (error) {
      console.error('Error fetching location data:', error);
      setLocation({
        name: 'Unknown Location',
        elevation: null,
        funFact: getRandomFunFact(null),
        lat,
        lng,
        country: null,
        city: null,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearLocation = useCallback(() => {
    setLocation(null);
  }, []);

  return {
    location,
    isLoading,
    fetchLocationData,
    clearLocation,
  };
}

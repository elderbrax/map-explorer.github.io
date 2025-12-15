# World Explorer

An interactive world map application that displays location information when you click anywhere on the map.

## Features

- **Interactive Map**: Click anywhere on the world map to explore
- **Location Name**: Displays the place name using reverse geocoding
- **Elevation Data**: Shows height above sea level in meters
- **Fun Facts**: Displays interesting facts about countries and regions
- **Responsive Design**: Optimized for desktop browsers with a beautiful blue gradient theme

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS with custom blue theme
- **Map**: React-Leaflet with OpenStreetMap tiles
- **APIs**:
  - OpenStreetMap Nominatim for reverse geocoding
  - Open-Elevation API for elevation data

## Project Structure

```
client/src/
├── components/
│   └── WorldMap.tsx       # Interactive Leaflet map component
├── hooks/
│   └── useLocationData.ts # Hook for fetching location info
├── lib/
│   └── funFacts.ts        # Database of fun facts by country
├── pages/
│   └── Home.tsx           # Main page with map and info cards
└── App.tsx                # Root component with routing
```

## How It Works

1. User clicks anywhere on the map
2. The app fetches location name from OpenStreetMap Nominatim API
3. Elevation data is fetched from Open-Elevation API
4. A fun fact is selected based on the country
5. All data is displayed in the info card

## Running the Application

The application runs with `npm run dev` which starts both the Express backend and Vite frontend on port 5000.

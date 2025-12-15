# Interactive World Map - Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based (Google Maps, Mapbox, Apple Maps)  
**Rationale:** Utility-focused mapping application requiring clean information hierarchy and intuitive interaction patterns. Drawing from established mapping interfaces ensures familiarity while maintaining functional excellence.

**Core Principles:**
- Map-first interface with minimal UI obstruction
- Clear information hierarchy for location data
- Immediate visual feedback on interaction
- Responsive design prioritizing both desktop precision and mobile touch

---

## Layout System

**Primary Layout:**
- Full-viewport map (100vh) as the core interface
- Floating information panel overlaid on map
- Desktop: Panel slides in from right (w-96, max-w-md)
- Mobile: Panel slides up from bottom (h-auto, max-h-[70vh])

**Spacing System:**
Use Tailwind units: **2, 3, 4, 6, 8** for consistent rhythm
- Panel padding: p-6
- Section spacing: space-y-4
- Icon-to-text spacing: gap-3
- Button padding: px-6 py-3

---

## Typography

**Font Stack:** Inter (Google Fonts) for clean, modern readability

**Hierarchy:**
- Location Name: text-2xl font-semibold leading-tight
- Section Labels: text-xs font-medium uppercase tracking-wide
- Data Values: text-lg font-medium
- Fun Facts: text-base leading-relaxed
- UI Elements: text-sm font-medium

---

## Component Library

### Map Interface
- Full-screen Leaflet/React-Leaflet map
- Custom map markers with scale on hover (transform scale-110)
- Click ripple effect at clicked coordinates
- Zoom controls positioned bottom-right (mb-6 mr-6)

### Information Panel
**Structure:**
- Translucent backdrop (backdrop-blur-xl)
- Rounded corners (rounded-2xl)
- Elevated shadow (shadow-2xl)
- Close button (top-right, p-2)

**Content Sections:**
1. **Header:** Location name with pin icon
2. **Elevation Data:** Large numerical display with "meters above sea level" label, mountain icon
3. **Fun Fact:** Card with lightbulb icon, italic text treatment
4. **Actions:** "Share Location" button (full-width)

### Icons
**Library:** Heroicons (via CDN)
- Map Pin: Location name
- Mountain: Elevation data  
- Light Bulb: Fun facts
- X Mark: Close panel
- Share: Share action

---

## Interaction Patterns

**Map Interactions:**
- Click anywhere triggers info panel with smooth slide-in (transition-transform duration-300)
- Loading state shows skeleton in panel while fetching data
- Error state displays friendly message in panel

**Panel Behavior:**
- Desktop: Slides from right edge, width 24rem
- Mobile: Slides from bottom, auto-height with scroll
- Backdrop click/tap closes panel
- Escape key closes panel (desktop)

**Visual Feedback:**
- Clicked location shows pulsing marker
- Loading spinner in panel header during data fetch
- Subtle panel shake on error

---

## Responsive Strategy

**Desktop (lg:)**
- Right-aligned panel (right-6)
- Vertical layout within panel
- Zoom controls bottom-right

**Mobile (base):**
- Bottom-sheet panel (rounded-t-2xl only)
- Collapsible to pill showing location name
- Swipe down to dismiss
- Zoom controls bottom-center

---

## Images

**No images required** - The map itself is the primary visual element. Interface relies on iconography and typography for information display.

---

## Accessibility

- Map keyboard navigable (arrow keys to pan, +/- to zoom)
- Panel focus trap when open
- ARIA labels on all interactive elements
- Screen reader announces location data when panel opens
- Minimum tap targets: 44x44px (mobile)

---

## Animations

**Minimal, purposeful only:**
- Panel slide transitions (300ms ease-out)
- Marker pulse on click (1s infinite)
- Loading spinner rotation
- Hover scale on markers (scale-110)

**Principle:** Animations enhance feedback, never distract from map interaction.
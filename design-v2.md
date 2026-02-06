# Sanjana Cheerla Portfolio - Bright Fresh Design

---

## Part 1: Visual Design System

### Overview

A bright, fresh, and inviting portfolio website that feels welcoming while maintaining professionalism. The design emphasizes:

- **Light-first aesthetic**: Clean white backgrounds with soft pastel accents
- **Warm, inviting colors**: Coral/salmon primary accent with teal secondary
- **Generous whitespace**: Airy layouts that breathe
- **Rounded, friendly shapes**: Soft corners and organic forms
- **Subtle gradients**: Soft color transitions for depth
- **Playful yet professional**: Balance between personality and credibility

### Color Palette

**Primary Colors**
- Background Primary: `#FFFFFF` (pure white)
- Background Secondary: `#FAFBFC` (off-white/subtle gray)
- Background Tertiary: `#F5F7FA` (light gray for cards)

**Accent Colors**
- Primary Accent: `#FF6B6B` (coral/salmon - warm and inviting)
- Primary Accent Light: `#FF8E8E` (lighter coral for hover)
- Primary Accent Dark: `#E85555` (darker coral for pressed states)
- Secondary Accent: `#4ECDC4` (teal - fresh and modern)
- Secondary Accent Light: `#6EDDD6` (lighter teal)

**Text Colors**
- Font Primary: `#1A1A2E` (deep navy - not harsh black)
- Font Secondary: `#4A4A68` (muted navy for body text)
- Font Tertiary: `#8A8AA3` (light gray for labels)
- Font Quaternary: `#B8B8CC` (very light for subtle text)

**Gradient Colors**
- Hero Gradient: `linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%)`
- Card Gradient: `linear-gradient(135deg, rgba(255,107,107,0.05) 0%, rgba(78,205,196,0.05) 100%)`

### Typography System

**Font Family**
- Primary: `Inter, sans-serif`
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

**Type Scale**

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Hero Title | 4rem (64px) | 700 | 1.1 | -2px |
| H1 | 3rem (48px) | 700 | 1.15 | -1.5px |
| H2 | 2.25rem (36px) | 600 | 1.2 | -1px |
| H3 | 1.5rem (24px) | 600 | 1.3 | -0.5px |
| H4 | 1.25rem (20px) | 500 | 1.4 | -0.3px |
| Body | 1rem (16px) | 400 | 1.7 | 0 |
| Small | 0.875rem (14px) | 400 | 1.6 | 0 |
| Tiny | 0.75rem (12px) | 500 | 1.5 | 0.02em |

### Spacing System

**Section Spacing**
- Section Large: 7rem (112px) top/bottom
- Section Medium: 5rem (80px) top/bottom
- Section Small: 3rem (48px) top/bottom

**Content Spacing**
- XHuge: 4rem (64px)
- Huge: 3rem (48px)
- XLarge: 2.5rem (40px)
- Large: 2rem (32px)
- Medium: 1.5rem (24px)
- Small: 1rem (16px)
- XSmall: 0.5rem (8px)

**Container**
- Max Width: 1200px
- Global Padding: 2rem (32px) on desktop, 1rem on mobile

### Common Components

**Buttons**
- Primary Button:
  - Background: `#FF6B6B` (coral)
  - Text: white
  - Border-radius: 12px (soft, not pill)
  - Padding: 0.875rem 2rem
  - Font: 0.9375rem, weight 600
  - Hover: Background `#E85555`, translateY(-2px), soft shadow
  - Shadow: `0 4px 14px rgba(255, 107, 107, 0.3)`

- Secondary Button:
  - Background: transparent
  - Border: 2px solid `#E8E8F0`
  - Text: `#1A1A2E`
  - Hover: Border `#FF6B6B`, text `#FF6B6B`, background `rgba(255,107,107,0.05)`

**Cards**
- Background: white
- Border-radius: 16px
- Border: 1px solid `#F0F0F5`
- Shadow: `0 2px 8px rgba(0, 0, 0, 0.04)`
- Hover: translateY(-4px), shadow `0 12px 24px rgba(0, 0, 0, 0.08)`

**Tags/Badges**
- Background: `rgba(255, 107, 107, 0.1)`
- Text: `#FF6B6B`
- Border-radius: 8px
- Padding: 0.375rem 0.875rem
- Font: 0.75rem, weight 600

---

## Part 2: Global Animations

### Animation Philosophy
- Light, bouncy animations that feel alive and welcoming
- Smooth easing with slight overshoot for playfulness
- Consistent timing (300-600ms)

### Common Transitions

**Button Hover**
- Duration: 300ms
- Effect: translateY(-2px), shadow increase, color transition
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1) (slight overshoot)

**Card Hover**
- Duration: 400ms
- Effect: translateY(-6px), shadow increase
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)

### Scroll-Triggered Animations

**Fade In Up**
- Initial: opacity 0, translateY(40px)
- Final: opacity 1, translateY(0)
- Duration: 600ms
- Easing: cubic-bezier(0.34, 1.56, 0.64, 1)

**Stagger Children**
- Delay: 100ms between items

---

## Part 3: Content Sections

### Section: Hero

**Layout & Style:**
- Full viewport height (100vh)
- Soft gradient background (white to very light coral tint)
- Decorative blob shapes in coral and teal (subtle, behind content)
- Large hero title with gradient text (coral to teal)
- Subtitle below
- Two CTA buttons side by side
- Contact info row with icons

**Interactions:**
- Hero title: Fade in + slide up with slight bounce
- Subtitle: Fade in with 200ms delay
- CTA buttons: Fade in with 400ms delay
- Decorative blobs: Slow floating animation

---

### Section: About

**Layout & Style:**
- Two-column layout (text left, illustration right)
- White background
- Section label in coral
- Large heading
- Stats row with soft card backgrounds

---

### Section: Experience

**Layout & Style:**
- White background
- Vertical timeline with coral dots
- Cards with soft shadows
- Alternating left/right on desktop

---

### Section: Publications

**Layout & Style:**
- Light gray background (`#FAFBFC`)
- Grid of cards with hover lift
- Coral badges for author position

---

### Section: Projects

**Layout & Style:**
- White background
- Large project cards with rounded corners
- Soft gradient accents

---

### Section: Skills

**Layout & Style:**
- Light gray background
- Category cards with soft shadows
- Skill tags in coral/teal

---

### Section: Contact

**Layout & Style:**
- Gradient background (coral to teal, very subtle)
- Contact cards with white background
- Form with rounded inputs

---

## Part 4: Decorative Elements

**Floating Blobs**
- Soft, organic shapes in coral and teal
- Very low opacity (5-10%)
- Slow floating animation
- Positioned behind content

**Dots Pattern**
- Subtle dot grid pattern
- Very light gray
- Used as section background accent

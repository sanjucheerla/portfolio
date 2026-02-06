# Sanjana Cheerla Portfolio - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, navigation, form submit | Lime green primary, pill shape |
| Card | Experience cards, project cards, skill cards | Dark background, custom hover |
| Badge | Author position tags, tech stack tags | Lime green accent variant |
| Separator | Section dividers | Subtle gray color |
| Input | Contact form fields | Dark theme, lime focus border |
| Textarea | Contact form message | Dark theme, lime focus border |

### Custom Components

| Component | Purpose | Location |
|-----------|---------|----------|
| Navigation | Fixed header with scroll effect | `components/Navigation.tsx` |
| HeroSection | Full-screen hero with animated content | `sections/HeroSection.tsx` |
| AboutSection | Two-column about with stats | `sections/AboutSection.tsx` |
| ExperienceSection | Timeline layout for work history | `sections/ExperienceSection.tsx` |
| PublicationsSection | Grid of publication cards | `sections/PublicationsSection.tsx` |
| ProjectsSection | Featured projects showcase | `sections/ProjectsSection.tsx` |
| SkillsSection | Categorized skill display | `sections/SkillsSection.tsx` |
| ContactSection | Contact info and form | `sections/ContactSection.tsx` |
| Footer | Copyright and links | `components/Footer.tsx` |
| AnimatedSection | Reusable scroll-triggered wrapper | `components/AnimatedSection.tsx` |
| TimelineItem | Individual timeline entry | `components/TimelineItem.tsx` |
| SkillCategory | Skill category card with tags | `components/SkillCategory.tsx` |
| StatCard | Animated stat display | `components/StatCard.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero title fade-in + slide up | Framer Motion | `initial`, `animate` props with delay | Low |
| Hero subtitle stagger | Framer Motion | `staggerChildren` in parent | Low |
| Navigation scroll background | React state + CSS | `useScroll` hook, conditional classes | Low |
| Section fade-in on scroll | Framer Motion | `whileInView` with viewport options | Medium |
| Stats count-up animation | Custom hook | `useCountUp` with Intersection Observer | Medium |
| Timeline cards slide from sides | Framer Motion | `whileInView` with x transform | Medium |
| Timeline line draw | CSS/Framer Motion | Height animation tied to scroll | Medium |
| Card hover lift + glow | CSS Transitions | `translateY` + `box-shadow` on hover | Low |
| Publication cards stagger | Framer Motion | `staggerChildren` with `whileInView` | Low |
| Skill tags hover | CSS Transitions | Background color transition | Low |
| Contact cards hover | CSS Transitions | `translateY` + shadow | Low |
| Button hover scale | CSS Transitions | `transform: scale(1.02)` | Low |
| Link color transition | CSS Transitions | Color change on hover | Low |

---

## Animation Library Choices

### Primary: Framer Motion
- **Why**: Best React integration, declarative API, excellent scroll animations
- **Use for**: All scroll-triggered animations, page transitions, stagger effects

### Secondary: CSS Transitions/Animations
- **Why**: Performance, simplicity for hover states
- **Use for**: Button hovers, card hovers, link transitions, simple transforms

### Custom Hooks
- `useScrollPosition`: Track scroll for navigation background
- `useCountUp`: Animated number counting for stats
- `useInView`: Intersection Observer wrapper (or use Framer Motion's)

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   └── (static assets if needed)
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   ├── AnimatedSection.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── SkillCategory.tsx
│   │   └── StatCard.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── PublicationsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   ├── hooks/
│   │   ├── useScrollPosition.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       └── separator.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies

### Core (Pre-installed)
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

### Additional Required
```bash
npm install framer-motion lucide-react
```

### Optional
- `clsx` + `tailwind-merge` (for class merging) - likely pre-installed

---

## Tailwind Configuration Extensions

```javascript
// tailwind.config.js additions
{
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#141414',
          secondary: '#181818',
          tertiary: '#1b1b1b',
        },
        font: {
          primary: '#ffffff',
          secondary: '#cccccc',
          tertiary: '#999999',
          quaternary: '#606060',
        },
        accent: {
          DEFAULT: '#d0e749',
          light: '#e2f27c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
```

---

## Implementation Order

1. Initialize project with webapp-building skill
2. Install additional dependencies (framer-motion, lucide-react)
3. Configure Tailwind with custom colors
4. Build reusable components (AnimatedSection, Navigation, Footer)
5. Build sections in order:
   - HeroSection
   - AboutSection
   - ExperienceSection
   - PublicationsSection
   - ProjectsSection
   - SkillsSection
   - ContactSection
6. Assemble in App.tsx
7. Test all animations and interactions
8. Build and deploy

---

## Performance Considerations

- Use `will-change: transform, opacity` on animated elements
- Implement `prefers-reduced-motion` media query
- Lazy load sections below fold (optional)
- Optimize images if added
- Use CSS transforms over layout properties

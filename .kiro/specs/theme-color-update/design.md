# Design Document

## Overview

This design outlines the systematic approach to updating the BuildGo construction website's color theme from the current orange/yellow scheme to a new professional palette using #014491 (dark blue), #fff173 (yellow), and white. The design ensures consistency, accessibility, and maintainability while preserving the site's functionality and user experience.

## Architecture

The color theme update will be implemented through a centralized approach using CSS custom properties (variables) defined in the main stylesheet. This architecture allows for:

- Single source of truth for all color definitions
- Easy maintenance and future updates
- Consistent application across all components
- Automatic inheritance by new components

### Current Color Structure Analysis

Based on the existing `style.css` file, the current color system uses:
- Primary color: `#ffbf43` (orange/yellow)
- Secondary colors: Various grays and neutral tones
- Text colors: `#222222` (dark gray) and `#555855` (medium gray)
- Background colors: `#ffffff` (white) and `#f8f7f0` (off-white)

### New Color Mapping Strategy

The new color palette will be mapped as follows:
- **Primary Color**: #014491 (dark blue) - replaces #ffbf43
- **Accent Color**: #fff173 (yellow) - used for highlights and call-to-action elements
- **Background**: #ffffff (white) - maintains clean, professional appearance
- **Text Colors**: Adjusted for optimal contrast with new color scheme

## Components and Interfaces

### CSS Variable System

The design centers around updating the CSS custom properties in the `:root` selector:

```css
:root {
  --primary-color-1: #014491;    /* New dark blue primary */
  --primary-color-2: #fff173;    /* New yellow accent */
  --accent-color: #fff173;       /* Yellow for highlights */
  --bg-white: #ffffff;           /* White background */
  --text-heading-color: #014491; /* Blue for headings */
  --body-color: #333333;         /* Dark gray for body text */
  /* Additional supporting colors as needed */
}
```

### Component Categories

1. **Navigation Components**
   - Header/navbar: Dark blue background with white text
   - Menu items: White text with yellow hover states
   - Logo area: Maintains white background for logo visibility

2. **Content Sections**
   - Headings: Dark blue color for hierarchy
   - Body text: Dark gray for readability
   - Backgrounds: White with subtle blue accents where appropriate

3. **Interactive Elements**
   - Buttons: Dark blue background with white text
   - Hover states: Yellow background with dark blue text
   - Links: Dark blue with yellow hover states

4. **Cards and Containers**
   - Service cards: White background with blue borders/accents
   - Portfolio items: White background with blue overlay on hover
   - Info boxes: White background with yellow accent elements

## Data Models

### Color Palette Definition

```css
/* Primary Colors */
--primary-blue: #014491;
--primary-yellow: #fff173;
--primary-white: #ffffff;

/* Supporting Colors */
--text-primary: #014491;
--text-secondary: #333333;
--text-light: #666666;
--border-light: #e0e0e0;
--shadow-color: rgba(1, 68, 145, 0.1);
```

### Color Usage Guidelines

- **#014491 (Dark Blue)**: Primary brand color, navigation, headings, primary buttons
- **#fff173 (Yellow)**: Accent color, hover states, highlights, secondary buttons
- **#ffffff (White)**: Backgrounds, button text on dark backgrounds
- **Supporting grays**: Body text, borders, subtle elements

## Error Handling

### Accessibility Considerations

1. **Contrast Ratios**: All color combinations must meet WCAG 2.1 AA standards
   - Dark blue (#014491) on white: Excellent contrast (>7:1)
   - Yellow (#fff173) on dark blue: Good contrast (>4.5:1)
   - White text on dark blue: Excellent contrast (>7:1)

2. **Fallback Colors**: Ensure graceful degradation if CSS variables are not supported
3. **Color Blindness**: The blue/yellow combination is accessible for most color vision deficiencies

### Implementation Safeguards

1. **Gradual Rollout**: Update colors section by section to identify issues early
2. **Testing**: Verify color changes across different browsers and devices
3. **Backup**: Maintain original color values as comments for quick rollback if needed

## Testing Strategy

### Visual Testing

1. **Component Testing**: Verify each component renders correctly with new colors
2. **Page Testing**: Check all pages for consistent color application
3. **Responsive Testing**: Ensure colors work across all screen sizes
4. **Browser Testing**: Verify compatibility across major browsers

### Accessibility Testing

1. **Contrast Testing**: Use tools to verify all color combinations meet accessibility standards
2. **Screen Reader Testing**: Ensure color changes don't affect screen reader functionality
3. **Keyboard Navigation**: Verify focus states are visible with new color scheme

### User Experience Testing

1. **Visual Hierarchy**: Confirm new colors maintain clear information hierarchy
2. **Brand Consistency**: Ensure new theme aligns with brand guidelines
3. **Readability**: Verify text remains easily readable in all contexts

### Implementation Phases

**Phase 1**: Update CSS variables and core color definitions
**Phase 2**: Test and adjust primary components (header, footer, navigation)
**Phase 3**: Update content sections and cards
**Phase 4**: Refine interactive elements and hover states
**Phase 5**: Final testing and accessibility verification

This systematic approach ensures a smooth transition to the new color theme while maintaining the site's functionality and improving its visual appeal.
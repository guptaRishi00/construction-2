# Design Document

## Overview

This design outlines the approach for updating the company logo across the React application from placeholder PNG images to a new SVG logo for "QuadFour Infra Pvt Ltd". The update involves modifying import statements and image references in multiple header, footer, and navigation components to ensure consistent branding throughout the application.

## Architecture

The application follows a component-based React architecture with:
- **Layout Components**: Reusable header and footer components used across different pages
- **Asset Management**: Static assets (images, logos) stored in `src/components/assets/`
- **Routing**: React Router for navigation with logo links to home page

The logo update will be implemented by:
1. Creating/updating the SVG logo file
2. Updating import statements in all components that reference logo images
3. Ensuring proper rendering and accessibility attributes

## Components and Interfaces

### Affected Components

The following components currently use PNG logo files and need to be updated:

**Header Components:**
- `src/components/layout/headers/header-one.js` - Uses `logo-1.png`
- `src/components/layout/headers/header-two.js` - Uses `logo-2.png`
- `src/components/layout/headers/header-three.js` - Uses `logo-2.png`
- `src/components/layout/headers/header-four.js` - Uses `logo-2.png`
- `src/components/layout/headers/offcanvas.js` - Uses `logo-2.png`
- `src/components/layout/headers/menu_sidebar/menu-one.js` - Uses `logo-2.png`

**Footer Components:**
- `src/components/layout/footers/footer-one.js` - Uses `logo-2.png`
- `src/components/layout/footers/footer-two.js` - Uses `logo-2.png`
- `src/components/layout/footers/footer-three.js` - Uses `logo-2.png`
- `src/components/layout/footers/footer-four.js` - Uses `logo-3.png` and `logo-2.png`

### Component Structure

Each component follows this pattern:
```javascript
import logo from "../../assets/img/logo-2.png";

// In render:
<Link to="/">
  <img src={logo} alt="logo" />
</Link>
```

This will be updated to:
```javascript
import logo from "../../assets/logo/logo.svg";

// In render:
<Link to="/">
  <img src={logo} alt="QuadFour Infra Pvt Ltd" />
</Link>
```

## Data Models

### Logo Asset
- **File Path**: `src/components/assets/logo/logo.svg`
- **Format**: SVG (Scalable Vector Graphics)
- **Content**: Company logo for QuadFour Infra Pvt Ltd
- **Dimensions**: Responsive (SVG scales without quality loss)

### Import Path Pattern
- **Old Pattern**: `../../assets/img/logo-[1-3].png`
- **New Pattern**: `../../assets/logo/logo.svg`

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Logo import consistency
*For any* component that displays a logo, the import statement should reference the SVG logo file at `src/components/assets/logo/logo.svg`
**Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**

### Property 2: Logo alt text accuracy
*For any* img element displaying the logo, the alt attribute should contain "QuadFour Infra Pvt Ltd" for accessibility
**Validates: Requirements 1.1, 1.3**

### Property 3: Logo link functionality
*For any* logo element, clicking it should navigate to the home page ("/")
**Validates: Requirements 1.1**

## Error Handling

### Missing Logo File
- If the SVG logo file is missing or corrupted, the browser will display the alt text
- React will not throw an error but the image will fail to render
- Solution: Ensure the SVG file exists at the correct path before deployment

### Import Path Errors
- Incorrect relative paths will cause build-time errors
- Solution: Verify the relative path from each component to the logo file

### SVG Rendering Issues
- Some older browsers may have limited SVG support
- Solution: SVG is widely supported in modern browsers; fallback not needed for this use case

## Testing Strategy

### Unit Testing
- Verify that each updated component imports the correct logo path
- Test that logo elements render with proper alt text
- Verify logo links navigate to the home page

### Visual Testing
- Manual verification that the logo displays correctly in:
  - All header variants (header-one through header-four)
  - All footer variants (footer-one through footer-four)
  - Mobile menu sidebar
  - Offcanvas sidebar
- Check logo appearance in both light and dark themes (if applicable)
- Verify responsive behavior across different screen sizes

### Integration Testing
- Test navigation flow when clicking logo from different pages
- Verify logo displays correctly after page transitions
- Test that logo loads properly on initial page load

### Browser Compatibility Testing
- Test logo rendering in major browsers (Chrome, Firefox, Safari, Edge)
- Verify SVG displays correctly without distortion
- Check that alt text displays when images are disabled

## Implementation Notes

1. **SVG Logo Creation**: The SVG file at `src/components/assets/logo/logo.svg` needs to contain the actual QuadFour Infra Pvt Ltd logo design (currently contains placeholder base64 image data)

2. **Import Path Adjustments**: The relative path from components to the logo varies:
   - From `headers/`: `../../assets/logo/logo.svg`
   - From `footers/`: `../../assets/logo/logo.svg`
   - From `menu_sidebar/`: `../../../assets/logo/logo.svg`

3. **Accessibility**: Update all alt attributes from generic "logo" to "QuadFour Infra Pvt Ltd"

4. **Build Process**: No changes needed to build configuration; SVG files are handled by default webpack loaders in Create React App

5. **Performance**: SVG files are typically smaller than PNG files and scale better, improving page load performance

# Accessibility Quick Reference Guide
## Theme Color Update - Developer Guide

---

## Color Palette with Contrast Ratios

### Primary Colors

```css
--primary-color-1: #014491;  /* Dark Blue */
--primary-color-2: #fff173;  /* Yellow */
--bg-white: #FFFFFF;         /* White */
--body-color: #555855;       /* Body Text Gray */
--text-heading-color: #014491; /* Heading Blue */
```

### Safe Color Combinations

| Foreground | Background | Ratio | WCAG Level | Use Case |
|------------|------------|-------|------------|----------|
| #FFFFFF | #014491 | 10.52:1 | AAA | Buttons, Nav |
| #014491 | #FFFFFF | 10.52:1 | AAA | Headings, Links |
| #014491 | #fff173 | 6.82:1 | AA | Hover States |
| #555855 | #FFFFFF | 7.48:1 | AAA | Body Text |
| #222222 | #FFFFFF | 16.07:1 | AAA | Dark Text |

### ⚠️ Avoid These Combinations

- ❌ Yellow text on white background (insufficient contrast)
- ❌ Light gray text on yellow background (insufficient contrast)
- ❌ White text on yellow background (insufficient contrast)

---

## Focus State Standards

### Standard Focus Indicator
```css
outline: 2px solid #fff173;
outline-offset: 2px;
```

### Enhanced Focus Indicator (Primary Actions)
```css
outline: 3px solid #fff173;
outline-offset: 3px;
box-shadow: 0 0 0 3px rgba(1, 68, 145, 0.1);
```

### Focus-Within for Containers
```css
.card:focus-within {
  outline: 2px solid #fff173;
  outline-offset: 2px;
}
```

---

## Keyboard Navigation Checklist

✅ **Every interactive element must:**
- Be keyboard accessible (Tab, Enter, Space)
- Have a visible focus indicator
- Follow logical tab order
- Not create keyboard traps

✅ **Common keyboard patterns:**
- `Tab` - Move to next element
- `Shift + Tab` - Move to previous element
- `Enter` - Activate links and buttons
- `Space` - Activate buttons
- `Escape` - Close modals/overlays
- `Arrow keys` - Navigate menus

---

## ARIA Best Practices

### When to Use ARIA

```html
<!-- Icon-only buttons -->
<button aria-label="Close menu">
  <i class="fa fa-times"></i>
</button>

<!-- Form validation -->
<input 
  type="email" 
  aria-invalid="true" 
  aria-describedby="email-error"
>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>

<!-- Loading states -->
<div aria-live="polite" aria-busy="true">
  Loading content...
</div>

<!-- Required fields -->
<input 
  type="text" 
  required 
  aria-required="true"
>
```

### ARIA Landmarks
```html
<header role="banner">
<nav role="navigation">
<main role="main">
<aside role="complementary">
<footer role="contentinfo">
```

---

## Form Accessibility Checklist

✅ **Every form input must have:**
- Associated `<label>` element
- Clear placeholder text (if used)
- Visible focus state
- Error message (if validation fails)

### Example: Accessible Form Input
```html
<label for="email">
  Email Address <span aria-label="required">*</span>
</label>
<input 
  type="email" 
  id="email" 
  name="email"
  required
  aria-required="true"
  aria-describedby="email-help"
>
<span id="email-help" class="help-text">
  We'll never share your email
</span>
```

### Example: Error State
```html
<input 
  type="email" 
  id="email"
  aria-invalid="true"
  aria-describedby="email-error"
  class="error"
>
<span id="email-error" role="alert" class="error-message">
  <i class="fa fa-exclamation-circle"></i>
  Please enter a valid email address
</span>
```

---

## Button Accessibility

### Standard Button
```html
<button class="build_button">
  Learn More
  <i class="fa fa-arrow-right" aria-hidden="true"></i>
</button>
```

### Icon-Only Button
```html
<button aria-label="Search">
  <i class="fa fa-search" aria-hidden="true"></i>
</button>
```

### Link Styled as Button
```html
<a href="/contact" class="build_button" role="button">
  Contact Us
</a>
```

---

## Testing Checklist

### Before Committing Code

- [ ] Run automated accessibility tests (`npm test`)
- [ ] Check color contrast with WebAIM tool
- [ ] Test keyboard navigation (Tab through all elements)
- [ ] Verify focus indicators are visible
- [ ] Test with browser zoom at 200%
- [ ] Check responsive behavior on mobile

### Before Production Deployment

- [ ] Run Lighthouse accessibility audit (target: 95+)
- [ ] Test with WAVE browser extension
- [ ] Test with axe DevTools
- [ ] Manual screen reader testing (NVDA/VoiceOver)
- [ ] Test in high contrast mode
- [ ] Verify with color blindness simulator

---

## Common Accessibility Issues and Fixes

### Issue: Missing Focus Indicator
```css
/* ❌ Bad */
button:focus {
  outline: none;
}

/* ✅ Good */
button:focus-visible {
  outline: 2px solid #fff173;
  outline-offset: 2px;
}
```

### Issue: Insufficient Color Contrast
```css
/* ❌ Bad - Yellow on white */
.badge {
  background: #fff173;
  color: #FFFFFF;
}

/* ✅ Good - Dark blue on yellow */
.badge {
  background: #fff173;
  color: #014491;
}
```

### Issue: Icon Without Label
```html
<!-- ❌ Bad -->
<button>
  <i class="fa fa-times"></i>
</button>

<!-- ✅ Good -->
<button aria-label="Close">
  <i class="fa fa-times" aria-hidden="true"></i>
</button>
```

### Issue: Form Without Labels
```html
<!-- ❌ Bad -->
<input type="text" placeholder="Name">

<!-- ✅ Good -->
<label for="name">Name</label>
<input type="text" id="name" placeholder="Enter your name">
```

---

## Quick Contrast Check

### Online Tools
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Coolors Contrast Checker: https://coolors.co/contrast-checker

### Browser Extensions
- WAVE (Chrome, Firefox)
- axe DevTools (Chrome, Firefox)
- Lighthouse (Chrome DevTools)

### Color Blindness Simulators
- Coblis: https://www.color-blindness.com/coblis-color-blindness-simulator/
- Chrome DevTools (Rendering > Emulate vision deficiencies)

---

## Resources

### WCAG Guidelines
- WCAG 2.1 Quick Reference: https://www.w3.org/WAI/WCAG21/quickref/
- Understanding WCAG 2.1: https://www.w3.org/WAI/WCAG21/Understanding/

### Testing Tools
- NVDA Screen Reader: https://www.nvaccess.org/
- WAVE Browser Extension: https://wave.webaim.org/extension/
- axe DevTools: https://www.deque.com/axe/devtools/

### Learning Resources
- WebAIM: https://webaim.org/
- A11y Project: https://www.a11yproject.com/
- MDN Accessibility: https://developer.mozilla.org/en-US/docs/Web/Accessibility

---

## Support

For accessibility questions or issues:
1. Review this guide and the full accessibility validation report
2. Test with automated tools first
3. Consult WCAG 2.1 guidelines
4. Reach out to the development team for guidance

---

**Last Updated:** 2024  
**Maintained By:** Development Team  
**Version:** 1.0

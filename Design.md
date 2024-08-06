# Helper for Creating the Website

## 1. Colors for Light/Dark Themes

### Light Theme:

    Primary Color: #1A73E8 (Bright Blue)
    Secondary Color: #34A853 (Green)
    Background Color: #FFFFFF (White)
    Text Color: #202124 (Dark Gray)
    Accent Color: #FBBC05 (Yellow)

### Dark Theme:

    Primary Color: #8AB4F8 (Light Blue)
    Secondary Color: #68D391 (Light Green)
    Background Color: #202124 (Dark Gray)
    Text Color: #E8EAED (Light Gray)
    Accent Color: #F4B400 (Gold)

## 2. Fonts and Font-Weights

#### Heading Font:

    Font: Montserrat
    Font-Weight: 700 (Bold)

#### Body Font:

    Font: Roboto
    Font-Weight: 400 (Regular)

#### Subheading Font:

    Font: Roboto
    Font-Weight: 500 (Medium)

#### Button/Call-to-Action Font:

    Font: Montserrat
    Font-Weight: 600 (Semi-Bold)

## 3. Wireframe

### Home Page:

- Header: Logo on the left, navigation links (Home, Services, Portfolio, About, Contact) on the right.
- Hero Section: Full-width image with a headline, subheadline, and call-to-action button.
- Services Section: Three or four columns, each with an icon, title, and short description.
- Portfolio Section: Grid layout with images of past projects.
- About Section: Brief introduction about DarkGen Web, mission statement, and team members.
- Contact Section: Contact form and contact details.
- Footer: Links to social media, privacy policy, and terms of service.
- Inner Pages (Services, Portfolio, About, Contact):

Consistent header and footer.
Each section divided into clear, visually distinct blocks.
Use of images and icons to enhance the visual appeal.

## 4. Advice to Do It Best

- Consistency: Maintain a consistent style throughout the site. Use the same fonts, colors, and spacing.
- User Experience: Ensure easy navigation. The user should be able to find information quickly and intuitively.
- Responsive Design: Make sure the website is fully responsive. It should look good on all devices (desktop, tablet, mobile).
- Performance: Optimize images and code to ensure fast loading times. Use lazy loading for images if necessary.
- SEO: Implement good SEO practices to ensure your site ranks well on search engines. Use semantic HTML, meta tags, and alt attributes for images.
- Accessibility: Ensure your site is accessible to all users, including those with disabilities. Use ARIA roles and make sure the site is navigable via keyboard.
- Testing: Test the site on multiple browsers and devices to ensure compatibility.

## 5. Animations

- Header/Menu: Smooth transitions for dropdowns and hover effects.
- Hero Section: Subtle fade-in effect for text and buttons.
- Services/Portfolio: Hover effects on images and icons, slight zoom-in or color change.
- Scroll Animations: Elements slide in or fade in as the user scrolls down the page.
- Button Animations: Slight movement or color change on hover to indicate interactivity.
- Loading Animation: Simple and clean loading spinner or progress bar if necessary.

### Example of CSS for Animations

```css
/* Hover effect for buttons */
button {
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background-color: #34a853;
  transform: scale(1.05);
}

/* Fade-in effect for sections */
.section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}
```

```js
/* Scroll animation using Intersection Observer */
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});
```

Feel free to ask if you need further details or specific examples for any part!

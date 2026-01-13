// ABOUTME: Automatically scales slide content to prevent overflow
// ABOUTME: Similar to PowerPoint/Google Slides auto-sizing behavior

(function() {
  'use strict';

  function scaleSlideContent() {
    // Get all slides
    const slides = document.querySelectorAll('.reveal .slides section');

    slides.forEach(slide => {
      // Get the slide's content container
      slide.style.transform = '';
      slide.style.transformOrigin = '';

      const slideHeight = slide.offsetHeight;
      const slideWidth = slide.offsetWidth;

      // Get the actual content height (scrollHeight includes overflow)
      const contentHeight = slide.scrollHeight;
      const contentWidth = slide.scrollWidth;

      // Check if content overflows
      if (contentHeight > slideHeight || contentWidth > slideWidth) {
        // Calculate scale factor needed to fit content
        const heightScale = slideHeight / contentHeight;
        const widthScale = slideWidth / contentWidth;
        const scale = Math.min(heightScale, widthScale, 1); // Don't scale up, only down

        // Apply scale with some padding (0.95 to give a little breathing room)
        const finalScale = scale * 0.95;

        // Apply transform to scale down the content
        slide.style.transform = `scale(${finalScale})`;
        slide.style.transformOrigin = 'center center';
      }
    });
  }

  // Run when reveal.js is ready
  if (window.Reveal) {
    Reveal.on('ready', function() {
      scaleSlideContent();
    });

    // Re-run when slides change (in case of dynamic content)
    Reveal.on('slidechanged', function() {
      scaleSlideContent();
    });

    Reveal.on('resize', function() {
      scaleSlideContent();
    });
  }
})();

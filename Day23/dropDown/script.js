// First, we tell GSAP to use the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Let's create a timeline for our hero animation
// A timeline is a sequence of animations
let heroTl = gsap.timeline();

// Add animations to the timeline
// We are animating all elements with the class "animate-hero"
heroTl.from(".animate-hero", {
  duration: 1.5, // Animation lasts 1.5 seconds
  y: 100, // Start 100 pixels down from their final position
  opacity: 0, // Start invisible
  stagger: 0.3, // Each element animates 0.3s after the previous one
});

// Now, let's animate the sections as we scroll
// We use gsap.to() and link it to a ScrollTrigger

// Select all sections with the class 'section'
gsap.utils.toArray(".section").forEach((section) => {
  gsap.to(section, {
    opacity: 1, // Animate to fully visible
    y: 0, // Animate to its natural position
    duration: 1,

    // This is the ScrollTrigger part
    scrollTrigger: {
      trigger: section, // Animate when this section hits the viewport
      start: "top 85%", // Start animation when top of section is 85% down from top of viewport
      toggleActions: "play none none reverse", // Play on enter, reverse on leave
    },

    // Set the initial state *before* the animation
    from: {
      opacity: 0,
      y: 50, // Start 50px lower than final position
    },
  });
});
gsap.to(".hero", {
  backgroundColor: "#ff6b6b",
  duration: 2,
  scrollTrigger: {
    trigger: ".section",
    start: "top 90%",
    scrub: true, // makes the animation directly linked to the scroll position
  },
});

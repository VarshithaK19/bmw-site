// ── STEP 1: TAB SWITCHER ──
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.view-panel');

tabs.forEach(function(tab) {
  tab.addEventListener('click', function() {

    // Remove active from all tabs
    tabs.forEach(function(t) {
      t.classList.remove('active');
    });

    // Remove active from all panels
    panels.forEach(function(p) {
      p.classList.remove('active');
    });

    // Add active to clicked tab
    tab.classList.add('active');

    // Show the matching panel
    const viewName = tab.getAttribute('data-view');
    const targetPanel = document.getElementById(viewName);
    targetPanel.classList.add('active');
    animateBars();
  });
});
// ── STEP 2: NAV SCROLL EFFECT ──
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
// ── STEP 3: FADE IN ON SCROLL ──
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

fadeElements.forEach(function(el) {
  observer.observe(el);
});
// ── STEP 4: SPEC BAR ANIMATION ──
function animateBars() {
  const fills = document.querySelectorAll('.view-panel.active .spec-fill');

  fills.forEach(function(fill) {
    const targetWidth = fill.getAttribute('data-width');

    // Reset to 0 first
    fill.style.width = '0%';

    // Small delay then animate to target width
    setTimeout(function() {
      fill.style.width = targetWidth + '%';
    }, 100);
  });
}

// Run bars when page first loads
animateBars();
// ── STEP 5: FEATURE TAG TOGGLE ──
const tags = document.querySelectorAll('.tag');

tags.forEach(function(tag) {
  tag.addEventListener('click', function() {

    // Toggle active class on and off
    tag.classList.toggle('active');

  });
});
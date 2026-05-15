// Sticky nav scroll effect
const nav = document.getElementById('site-nav');
window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Mobile nav toggle
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
if (toggle && links) {
  toggle.addEventListener('click', function() {
    links.classList.toggle('open');
  });
}

// Fade-in on scroll
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(function(el) {
  observer.observe(el);
});

// Year nav for publications page
var yearNav = document.getElementById('year-nav');
if (yearNav) {
  var yearHeadings = document.querySelectorAll('.year-heading[id]');
  var navItems = document.querySelectorAll('.year-nav__item');

  // Click to scroll
  navItems.forEach(function(item) {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(item.getAttribute('href'));
      if (target) {
        var top = target.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // Highlight active year on scroll
  window.addEventListener('scroll', function() {
    var current = '';
    yearHeadings.forEach(function(heading) {
      if (window.pageYOffset >= heading.offsetTop - 100) {
        current = heading.getAttribute('id');
      }
    });
    navItems.forEach(function(item) {
      item.classList.remove('active');
      if (item.getAttribute('data-year') === current.replace('year-', '')) {
        item.classList.add('active');
      }
    });
  });

  // Init
  setTimeout(function() { window.dispatchEvent(new Event('scroll')); }, 100);
}

// Collapsible project publications
document.querySelectorAll('.project-pubs[data-collapse]').forEach(function(container) {
  var limit = parseInt(container.getAttribute('data-collapse'));
  var items = container.querySelectorAll('.project-pub-item');
  if (items.length <= limit) return;

  container.classList.add('collapsed');
  for (var i = limit; i < items.length; i++) {
    items[i].classList.add('hidden');
  }

  var toggle = document.createElement('span');
  toggle.className = 'project-pubs-toggle';
  toggle.textContent = 'Show more';
  container.after(toggle);

  var expanded = false;
  toggle.addEventListener('click', function() {
    expanded = !expanded;
    container.classList.toggle('collapsed');
    for (var i = limit; i < items.length; i++) {
      items[i].classList.toggle('hidden');
    }
    toggle.textContent = expanded ? 'Show less' : 'Show more';
  });
});

// Hashtag project links inside publication cards
document.querySelectorAll('.pub-tag[data-href]').forEach(function(tag) {
  tag.style.cursor = 'pointer';
  tag.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = tag.getAttribute('data-href');
  });
});

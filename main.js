/* ============================================================
   REX9 PORTFOLIO — DATA & SCRIPT (rex9.js)
   Easily update, create, and remove projects, skills,
   testimonials, and profiles in the DATA object below.
   ============================================================ */

const DATA = {
  /* ============================================================
     1. SOCIAL PROFILES & CV
     ============================================================ */
  cvUrl: 'https://tinyurl.com/rex9-cv',

  profiles: [
    {
      platform: 'GitHub',
      username: 'rex-9',
      link: 'https://github.com/rex-9',
      logo: './assets/design/github.svg',
    },
    {
      platform: 'Linkedin',
      username: 'rex9',
      link: 'https://www.linkedin.com/in/rex9',
      logo: './assets/design/linkedin.svg',
    },
    {
      platform: 'Angellist',
      username: 'rex9',
      link: 'https://angel.co/u/rex9',
      logo: './assets/design/angellist.svg',
    },
    {
      platform: 'Bento',
      username: 'rex9',
      link: 'https://bento.me/rex9',
      logo: './assets/design/bento.jpeg',
    },
    {
      platform: 'Medium',
      username: 'rex9',
      link: 'https://medium.com/@rex9',
      logo: './assets/design/medium.svg',
    },
    {
      platform: 'Twitter',
      username: 'htetnaing0814',
      link: 'https://twitter.com/htetnaing0814',
      logo: './assets/design/twitter.svg',
    },
    {
      platform: 'Facebook',
      username: 'htetnaing0814',
      link: 'https://facebook.com/htetnaing0814',
      logo: './assets/design/facebook.svg',
    },
  ],

  /* ============================================================
     2. SKILLS & ARCHITECTURE TECH STACK
     ============================================================ */
  skills: {
    languages: [
      { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
      { name: 'JavaScript', url: 'https://www.javascript.com' },
      { name: 'Ruby', url: 'https://www.ruby-lang.org/en/' },
      { name: 'Dart', url: 'https://dart.dev' },
      { name: 'Python', url: 'https://www.python.org' },
      { name: 'PHP', url: 'https://www.php.net' },
    ],
    frontend: [
      { name: 'ReactJS', url: 'https://react.dev' },
      { name: 'ReduxJS', url: 'https://redux.js.org' },
      { name: 'TailwindCSS', url: 'https://tailwindcss.com' },
      { name: 'DaisyUI', url: 'https://daisyui.com' },
      { name: 'Vite', url: 'https://vitejs.dev' },
      { name: 'VueJS', url: 'https://vuejs.org' },
      { name: 'Quasar', url: 'https://quasar.dev/' },
      { name: 'AlpineJS', url: 'https://alpinejs.dev' },
      { name: 'Livewire', url: 'https://laravel-livewire.com' },
      { name: 'Filament', url: 'https://filamentphp.com/' },
      { name: 'Orchid', url: 'https://orchid.software/en/' },
      { name: 'Flutter', url: 'https://www.flutter.dev' },
    ],
    backend: [
      { name: 'Ruby on Rails', url: 'https://rubyonrails.org' },
      { name: 'Node JS', url: 'https://nodejs.org' },
      { name: 'Nest JS', url: 'https://nestjs.com/' },
      { name: 'Next JS', url: 'https://nextjs.org/' },
      { name: 'Laravel', url: 'https://laravel.com' },
      { name: 'Flask', url: 'https://flask.palletsprojects.com/' },
      { name: 'Fast API', url: 'https://fastapi.tiangolo.com/' },
    ],
    mobile: [
      { name: 'Flutter', url: 'https://flutter.dev' },
      { name: 'Dart', url: 'https://dart.dev' },
      { name: 'GetX', url: 'https://pub.dev/packages/get' },
      { name: 'BLoC', url: 'https://pub.dev/packages/flutter_bloc' },
      { name: 'iOS', url: 'https://developer.apple.com/ios/' },
      { name: 'Android', url: 'https://developer.android.com/' },
    ],
    database: [
      { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
      { name: 'MySQL', url: 'https://www.mysql.com/' },
      { name: 'NoSQL', url: 'https://en.wikipedia.org/wiki/NoSQL' },
      { name: 'MongoDB', url: 'https://www.mongodb.com/' },
      { name: 'Firestore', url: 'https://firebase.google.com/' },
      { name: 'Redis', url: 'https://redis.io' },
      { name: 'SQL', url: 'https://en.wikipedia.org/wiki/SQL' },
    ],
    tools: [
      { name: 'Docker', url: 'https://www.docker.com/' },
      { name: 'Stripe', url: 'https://stripe.com/' },
      { name: 'OpenAI', url: 'https://openai.com/' },
      { name: 'Git / GitHub', url: 'https://github.com/' },
      { name: 'AWS', url: 'https://aws.amazon.com/' },
      { name: 'Vercel', url: 'https://vercel.com/' },
      { name: 'OneSignal', url: 'https://onesignal.com/' },
      { name: 'Cloudinary', url: 'https://cloudinary.com/' },
      { name: 'Bitrise CI/CD', url: 'https://bitrise.io/' },
      { name: 'Termius', url: 'https://termius.com/' },
      { name: 'Pm2', url: 'https://pm2.io/' },
    ],
  },

  /* ============================================================
     3. PROJECTS (RexOne Ecosystem & Client Works)
     - id: Sorting priority (descending order)
     ============================================================ */
  projects: [
    {
      id: 30,
      name: 'RexOne Core',
      image: './assets/projects/rexone-core.jpg',
      techs: ['Rails', 'PostgreSQL', 'WebSockets', 'Sidekiq', 'Stripe', 'Docker'],
      details: [
        'Battle-hardened foundation to rapidly build & launch any digital product',
        'Multi-tenant API core with Stripe billing, background queues & telemetry',
      ],
      live: null,
      source: 'https://github.com/rex-9/rexone-core',
    },
    {
      id: 29,
      name: 'RexOne Web',
      image: './assets/projects/rexone-web.jpg',
      techs: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'DaisyUI', 'WebSockets', 'Stripe'],
      details: [
        'Production-grade SaaS client engineered for ambitious product launches',
        'Modular architecture with reactive state, ActionCable & Stripe checkout',
      ],
      live: null,
      source: 'https://github.com/rex-9/rexone-web',
    },
    {
      id: 28,
      name: 'RexOne Mobile',
      image: './assets/projects/rexone-mobile.jpg',
      techs: ['Flutter', 'Dart', 'GetX', 'Clean Architecture', 'OneSignal', 'Stripe'],
      details: [
        'Cross-platform mobile engine to launch any native iOS & Android product',
        'Layered Clean Architecture with push telemetry & biometric security',
      ],
      live: null,
      source: 'https://github.com/rex-9/rexone_mobile',
    },
    {
      id: 22,
      name: 'Juice Serve',
      image: './assets/projects/juice.png',
      techs: ['EV Tech', 'Flutter', 'Python', 'Flask', 'GetX', 'Firebase', 'Web'],
      details: [
        'Next-Gen EV charging & smart parking',
        'Computer vision with real-time cloud APIs',
      ],
      live: 'https://www.js.eco/',
      source: null,
    },
    {
      id: 21,
      name: 'Smthgood',
      image: './assets/projects/smthgood.png',
      techs: ['Flutter', 'Bloc', 'E-Commerce', 'Firebase', 'Android', 'iOS', 'Web'],
      details: [
        'Conscious fashion marketplace & sustainable e-commerce hub',
        'Look Good, Do Good, Feel Good — Discover Your Inner Style',
        'Discover your Inner Fashion Angel',
      ],
      live: 'https://www.smthgoodco.com/',
      source: null,
    },
    {
      id: 20,
      name: 'Bidsloth',
      image: './assets/projects/bidsloth.png',
      techs: ['NodeJS', 'MongoDB', 'Stripe', 'Cloudinary', 'Real-Time'],
      details: [
        'Auction anything FAN-tastic — Creator monetization engine',
        'Effortless real-time bidding flow with instant Stripe settlements',
      ],
      live: null,
      source: null,
    },
    {
      id: 19,
      name: 'Aidma Holdings',
      image: './assets/projects/aidma.png',
      techs: ['VueJS', 'Quasar', 'Responsive', 'CSS3', 'Corporate'],
      details: [
        'Japanese enterprise career & corporate matchmaking platform',
        'High-velocity business networking built for industry leaders',
      ],
      live: 'https://www.aidma-hd.jp/',
      source: null,
    },
    {
      id: 18,
      name: 'Asirius',
      image: './assets/projects/asirius.png',
      techs: ['ReactJS', 'Laravel', 'MySQL', 'Full-Stack', 'E-Commerce'],
      details: [
        'Customized multi-merchant e-commerce & storefront engine',
        'High-conversion digital checkout with all-in-one order management',
      ],
      live: null,
      source: null,
    },
    {
      id: 17,
      name: 'Servd',
      image: './assets/projects/servd.png',
      techs: ['ReactJS', 'Laravel', 'MySQL', 'MongoDB', 'POS Network'],
      details: [
        'Seamless digital restaurant ordering & merchant POS network',
        'High-throughput real-time operations engine for food & beverage',
      ],
      live: 'https://order.servd.me/mm/?storeId=63638ed7cd299fe4b801d402',
      source: null,
    },
    {
      id: 16,
      name: 'Cloud9',
      image: './assets/projects/cloud9.png',
      techs: ['Flutter', 'GetX', 'Mobile', 'Loyalty', 'Agile'],
      details: [
        'Next-gen mobile loyalty scanner & customer rewards engine',
        'Instant QR code verification with reactive mobile architecture',
      ],
      live: null,
      source: null,
    },
    {
      id: 15,
      name: 'eduValley',
      image: './assets/projects/eduValley.png',
      techs: ['Flutter', 'Laravel', 'MySQL', 'WebRTC', 'EdTech'],
      details: [
        'Interactive online learning campus with zero-latency video streaming',
        'Unlimited collaborative audio/video classrooms & media library',
      ],
      live: null,
      source: 'https://github.com/rex-9/eduValley-flutter',
    },
    {
      id: 14,
      name: 'Chibi URL',
      image: './assets/projects/ChibiURL.png',
      techs: ['Ruby on Rails', 'TailwindCSS', 'PostgreSQL', 'Analytics'],
      details: [
        'Lightning-fast URL shortener & custom vanity link forge',
        'Real-time visitor click telemetry & geospatial analytics engine',
      ],
      live: 'https://www.loom.com/share/13be355568724ca6b5d8948f1ad2b7e9?sid=6c54bba4-e595-45f2-b5d1-e491060f9ccb',
      source: 'https://github.com/rex-9/ChibiURL',
    },
    {
      id: 12,
      name: 'AppleTV Home Page',
      image: './assets/projects/AppleUI.png',
      techs: ['React', 'JavaScript', 'CSS3', 'UI/UX Clone'],
      details: [
        'Pixel-perfect Apple TV cinematic streaming interface clone',
        'Fluid motion transitions & adaptive responsive entertainment layout',
      ],
      live: 'https://codigo-apple-tv.vercel.app/',
      source: 'https://github.com/rex-9/Codigo-Apple',
    },
    {
      id: 11,
      name: 'Rex No Basket',
      image: './assets/projects/RexNoBasket.png',
      techs: ['React', 'Redux', 'JavaScript', 'State Management'],
      details: [
        'Interactive basketball team builder & player strategy sandbox',
        'Complex many-to-many associations & dynamic Redux state flow',
      ],
      live: 'https://codigo-team-players.vercel.app/',
      source: 'https://github.com/rex-9/RexNoBasket',
    },
    {
      id: 10,
      name: 'Legacy FA Admin UI',
      image: './assets/projects/legacyfa.png',
      techs: ['React', 'Apex Charts', 'JavaScript', 'FinTech'],
      details: [
        'Financial administration suite & mission-control analytics hub',
        'Interactive Apex telemetry charts with seamless dark/light modes',
      ],
      live: 'https://drive.google.com/file/d/1SLUdlyzRBvoKv63vYlCwLDKHPUH2_RZb/view',
      source: 'https://github.com/rex-9/legacyfa',
    },
  ],

  /* ============================================================
     4. TESTIMONIALS
     ============================================================ */
  testimonials: [
    {
      name: 'Alan Luqman',
      link: 'https://www.linkedin.com/in/alan-luqman/',
      recommendation: "I highly recommend #Htet as a software developer. He is smart and friendly while working and always smile, it's my pleasure to give my recommendation to this gentleman.",
    },
    {
      name: 'Dorian Urem',
      link: 'https://www.linkedin.com/in/dorian-urem/',
      recommendation: 'Htet is a fast learner and works very hard. He was often one of the quickest to finish assignments since he put in the extra hours when he could. He also has a good sense for figuring out problems which I saw when we were working on DSA together. Htet is very friendly and positive and it was always a joy working with him.',
    },
    {
      name: 'Virag Kormoczy',
      link: 'https://www.linkedin.com/in/virag-kormoczy/',
      recommendation: "I met Rex through a coffee chat and I learned that he is a very dedicated person when it comes to programming. I gave him a lot of advice about the overall Microverse journey and so far he is accomplishing many things. He listens and takes directions well, and he's a good communicator. I totally recommend him, he is a great person to work with.",
    },
    {
      name: 'Asim Khan',
      link: 'https://www.linkedin.com/in/asim-khan/',
      recommendation: 'Htet Naing is a very hard working and a brilliant coder. His ability to quickly analyze and solve data structures and algorithms are amazing. He has good knowledge on HTML, JavaScript, React and Redux. I have learned a lot while collaborating with him @ Microverse.',
    },
  ],
};

// Expose DATA on window for browser console access and debugging
if (typeof window !== 'undefined') {
  window.DATA = DATA;
}

/* ============================================================
   DYNAMIC RENDER FUNCTIONS
   ============================================================ */

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/** Render Social Profiles in Top Section, Footer & Resume Link */
function renderProfiles() {
  const containers = [
    document.getElementById('profiles-container'),
    document.getElementById('footer-profiles-container'),
  ];

  const html = DATA.profiles.map(profile => `
    <a class="profile" href="${escapeHtml(profile.link)}" target="_blank" rel="noopener noreferrer" title="${escapeHtml(profile.platform)}">
      <img class="profileImg" src="${escapeHtml(profile.logo)}" alt="${escapeHtml(profile.platform)}" />
    </a>
  `).join('');

  containers.forEach(c => {
    if (c) c.innerHTML = html;
  });

  // Wire CV link
  const resumeLink = document.getElementById('resume-download-link');
  if (resumeLink && DATA.cvUrl) {
    resumeLink.href = DATA.cvUrl;
    resumeLink.target = '_blank';
    resumeLink.rel = 'noopener noreferrer';
  }
}

/** Render Skill Category Cards & Tags */
function renderSkills() {
  const box = document.getElementById('skills-box');
  if (!box) return;

  const categoryTitles = {
    languages: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend & APIs',
    mobile: 'Mobile & Cross-Platform',
    database: 'Database & Caching',
    tools: 'DevOps, Cloud & AI',
  };

  const html = Object.entries(DATA.skills).map(([key, items]) => {
    const title = categoryTitles[key] || key.charAt(0).toUpperCase() + key.slice(1);
    const tags = items.map(item => `
      <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="skill-tag">${escapeHtml(item.name)}</a>
    `).join('');

    return `
      <article class="skills-card">
        <h4>${escapeHtml(title)}</h4>
        <div class="skills-list">
          ${tags}
        </div>
      </article>
    `;
  }).join('');

  box.innerHTML = html;
}

/** Render Project Cards sorted by ID descending */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const sortedProjects = [...DATA.projects].sort((a, b) => b.id - a.id);

  const html = sortedProjects.map(project => {
    const techsHtml = project.techs.map(tech => `
      <div class="tech-tag">${escapeHtml(tech)}</div>
    `).join('');

    const detailsHtml = project.details.map(detail => `
      <p>${escapeHtml(detail)}</p>
    `).join('');

    const sourceBtn = project.source
      ? `<a class="btn-more" href="${escapeHtml(project.source)}" target="_blank" rel="noopener noreferrer">Source</a>`
      : `<a class="btn-disabled" href="javascript:void(0)">Source</a>`;

    const liveBtn = project.live
      ? `<a class="btn-more" href="${escapeHtml(project.live)}" target="_blank" rel="noopener noreferrer">Live</a>`
      : `<a class="btn-disabled" href="javascript:void(0)">Live</a>`;

    return `
      <div class="project-card">
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.name)}" />
        <div class="project-content">
          <div class="project-name">${escapeHtml(project.name)}</div>
          <div class="techs-box">
            ${techsHtml}
          </div>
          <div class="project-details">
            ${detailsHtml}
          </div>
          <div class="project-buttons">
            ${sourceBtn}
            ${liveBtn}
          </div>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

/** Render Testimonials */
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container) return;

  const html = DATA.testimonials.map(t => `
    <div class="testimonial-card">
      <a href="${escapeHtml(t.link)}" target="_blank" rel="noopener noreferrer">
        <div class="testimonial-name">${escapeHtml(t.name)}</div>
        <div class="testimonial-recommendation">${escapeHtml(t.recommendation)}</div>
      </a>
    </div>
  `).join('');

  container.innerHTML = html;
}

/* ============================================================
   INTERACTIVE NAVIGATION & LIFECYCLE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamically render content from DATA object
  renderProfiles();
  renderSkills();
  renderProjects();
  renderTestimonials();

  // 2. Initialize Navigation and UI controls
  initMobileNav();
  initNavActiveState();
});

/* ===== MOBILE NAVIGATION INTERACTION (Nav.jsx) ===== */
function initMobileNav() {
  const menuBtn = document.getElementById('menu-btn');
  const cancelBtn = document.getElementById('cancel-btn');
  const menuIcon = document.getElementById('menu-icon');
  const cancelIcon = document.getElementById('cancel-icon');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileMenuWrapper = document.getElementById('mobile-menu-wrapper');
  const mainNav = document.getElementById('main-nav');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  let menuOpen = false;

  function setMenuState(open) {
    menuOpen = open;
    if (menuOpen) {
      mainNav.style.height = 'auto';
      mobileNav.style.height = 'auto';
      mobileNav.style.justifyContent = 'space-around';
      menuIcon.style.display = 'none';
      cancelIcon.style.display = 'block';
      cancelBtn.style.display = 'block';
      mobileMenuWrapper.style.display = 'block';
    } else {
      mainNav.style.height = '70px';
      mobileNav.style.height = '70px';
      mobileNav.style.justifyContent = 'flex-end';
      menuIcon.style.display = 'block';
      cancelIcon.style.display = 'none';
      cancelBtn.style.display = 'none';
      mobileMenuWrapper.style.display = 'none';
    }
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => setMenuState(!menuOpen));
  }

  if (cancelBtn) {
    cancelBtn.addEventListener('click', () => setMenuState(false));
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      setMenuState(false);
      const section = link.getAttribute('data-section');
      if (section) {
        updateActiveNav(section);
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 650 && menuOpen) {
      setMenuState(false);
    }
  });
}

/* ===== ACTIVE NAVIGATION STATE (Scroll / Click) ===== */
function updateActiveNav(activeSectionId) {
  const desktopLinks = document.querySelectorAll('.desktopNav a');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  desktopLinks.forEach(link => {
    if (link.getAttribute('href') === activeSectionId || link.getAttribute('data-section') === activeSectionId) {
      link.classList.remove('inactive');
      link.classList.add('active');
    } else {
      link.classList.remove('active');
      link.classList.add('inactive');
    }
  });

  mobileLinks.forEach(link => {
    if (link.getAttribute('href') === activeSectionId || link.getAttribute('data-section') === activeSectionId) {
      link.classList.remove('inactive');
      link.classList.add('active');
    } else {
      link.classList.remove('active');
      link.classList.add('inactive');
    }
  });
}

function initNavActiveState() {
  const desktopLinks = document.querySelectorAll('.desktopNav a');

  desktopLinks.forEach(link => {
    link.addEventListener('click', () => {
      const section = link.getAttribute('href');
      updateActiveNav(section);
    });
  });

  // Intersection Observer for scroll spy
  const sectionIds = ['Greetings', 'Skills', 'Projects', 'Testimonials', 'Contact'];
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateActiveNav(`#${entry.target.id}`);
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}
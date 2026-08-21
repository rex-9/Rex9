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
      logo: './src/assets/design/github.svg',
    },
    {
      platform: 'Linkedin',
      username: 'rex9',
      link: 'https://www.linkedin.com/in/rex9',
      logo: './src/assets/design/linkedin.svg',
    },
    {
      platform: 'Angellist',
      username: 'rex9',
      link: 'https://angel.co/u/rex9',
      logo: './src/assets/design/angellist.svg',
    },
    {
      platform: 'Bento',
      username: 'rex9',
      link: 'https://bento.me/rex9',
      logo: './src/assets/design/bento.jpeg',
    },
    {
      platform: 'Medium',
      username: 'rex9',
      link: 'https://medium.com/@rex9',
      logo: './src/assets/design/medium.svg',
    },
    {
      platform: 'Twitter',
      username: 'htetnaing0814',
      link: 'https://twitter.com/htetnaing0814',
      logo: './src/assets/design/twitter.svg',
    },
    {
      platform: 'Facebook',
      username: 'htetnaing0814',
      link: 'https://facebook.com/htetnaing0814',
      logo: './src/assets/design/facebook.svg',
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
      image: './src/assets/projects/rexone-core.jpg',
      techs: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'ActionCable', 'Sidekiq', 'Stripe', 'Docker', 'Gemini AI'],
      details: [
        'Enterprise multi-tenant backend foundation with modular domain architecture',
        'Real-time WebSockets, Sidekiq background workers & Stripe subscription billing',
        'AI assistant integration with streaming responses & granular rate limiting',
      ],
      live: null,
      source: 'https://github.com/rex-9/rexone-core',
    },
    {
      id: 29,
      name: 'RexOne Web',
      image: './src/assets/projects/rexone-web.jpg',
      techs: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'DaisyUI', 'WebSockets', 'Stripe Checkout', 'i18n'],
      details: [
        'Modern SaaS frontend with reactive state, glassmorphism UI & theme switching',
        'Live WebSocket event dispatching, multi-locale i18n & Stripe checkout integration',
        'Extensible modular architecture designed for rapid multi-product scalability',
      ],
      live: null,
      source: 'https://github.com/rex-9/rexone-web',
    },
    {
      id: 28,
      name: 'RexOne Mobile',
      image: './src/assets/projects/rexone-mobile.jpg',
      techs: ['Flutter', 'Dart', 'GetX', 'Clean Architecture', 'Firebase', 'OneSignal', 'WebSockets', 'Stripe'],
      details: [
        'Production cross-platform mobile app built on layered Clean Architecture',
        'OneSignal push telemetry, real-time ActionCable chat & reactive passcode flow',
        'Zero-overhead state management with native iOS and Android performance',
      ],
      live: null,
      source: 'https://github.com/rex-9/rexone_mobile',
    },
    {
      id: 22,
      name: 'Juice Serve',
      image: './src/assets/projects/juice.png',
      techs: ['EV', 'Full-Stack', 'Flutter', 'Python', 'GetX', 'Flask', 'Firebase', 'Web'],
      details: [
        'The most seamless EV charging and parking experiences ever',
        'Powered by computer vision & high-availability cloud APIs',
      ],
      live: 'https://www.js.eco/',
      source: null,
    },
    {
      id: 21,
      name: 'Smthgood',
      image: './src/assets/projects/smthgood.png',
      techs: ['Frontend', 'Flutter', 'Bloc', 'Firebase', 'Web', 'Android', 'iOS'],
      details: [
        'Look good, Do good, Feel good',
        'A new Home for Conscious Fashion & E-commerce',
        'Discover your Inner Fashion Angel',
      ],
      live: 'https://www.smthgoodco.com/',
      source: null,
    },
    {
      id: 20,
      name: 'Bidsloth',
      image: './src/assets/projects/bidsloth.png',
      techs: ['Backend', 'Nodejs', 'Stripe', 'Cloudinary', 'MongoDB'],
      details: [
        'Auction anything FAN-tastic',
        "It's free!",
        'Effortless yet Effective Fanservice',
      ],
      live: 'https://bidsloth.com/',
      source: null,
    },
    {
      id: 19,
      name: 'Aidma Holdings',
      image: './src/assets/projects/aidma.png',
      techs: ['Frontend', 'VueJS', 'Quasar', 'Responsive', 'CSS'],
      details: [
        'Japanese LinkedIn',
        'Boost your Career',
        'Boost your Company',
      ],
      live: 'https://www.aidma-hd.jp/',
      source: null,
    },
    {
      id: 18,
      name: 'Asirius',
      image: './src/assets/projects/asirius.png',
      techs: ['Full-Stack', 'Reactjs', 'Laravel', 'MySQL'],
      details: [
        'Powerful E-commerce',
        'Customized Merchant Websites',
        'Simple yet All-in-One service',
      ],
      live: 'https://asirius.io/',
      source: null,
    },
    {
      id: 17,
      name: 'Servd',
      image: './src/assets/projects/servd.png',
      techs: ['Full-Stack', 'Reactjs', 'Laravel', 'MySQL', 'MongoDB'],
      details: [
        'Asirius Client',
        'Customized Merchant Websites',
        'Simple yet All-in-One service',
      ],
      live: 'https://order.servd.me/mm/?storeId=63638ed7cd299fe4b801d402',
      source: null,
    },
    {
      id: 16,
      name: 'Cloud9',
      image: './src/assets/projects/cloud9.png',
      techs: ['Mobile', 'Flutter', 'GetX'],
      details: [
        'Unlock the Power of Loyalty',
        'Efficient Mobile Scanner',
        'Innovative Agile Development',
      ],
      live: null,
      source: null,
    },
    {
      id: 15,
      name: 'eduValley',
      image: './src/assets/projects/eduValley.png',
      techs: ['Full-Stack', 'Flutter', 'Laravel', 'MySQL'],
      details: [
        'Online Learning Platform',
        'Unlimited Free Video Call',
        'Video and Audio Streaming',
      ],
      live: null,
      source: 'https://github.com/rex-9/eduValley-flutter',
    },
    {
      id: 14,
      name: 'Chibi URL',
      image: './src/assets/projects/ChibiURL.png',
      techs: ['Full-Stack', 'Ruby on Rails', 'TailwindCSS', 'PostgreSQL'],
      details: [
        'URL shorten service',
        'Custom URL vanity links',
        'Real-time Analytics',
      ],
      live: 'https://www.loom.com/share/13be355568724ca6b5d8948f1ad2b7e9?sid=6c54bba4-e595-45f2-b5d1-e491060f9ccb',
      source: 'https://github.com/rex-9/ChibiURL',
    },
    {
      id: 12,
      name: 'AppleTV Home Page',
      image: './src/assets/projects/AppleUI.png',
      techs: ['Frontend', 'JavaScript', 'React'],
      details: [
        'AppleTV UI clone',
        'Display My UI skills',
        'Responsive Design',
      ],
      live: 'https://codigo-apple-tv.vercel.app/',
      source: 'https://github.com/rex-9/Codigo-Apple',
    },
    {
      id: 11,
      name: 'Rex No Basket',
      image: './src/assets/projects/RexNoBasket.png',
      techs: ['Frontend', 'JavaScript', 'React', 'Redux'],
      details: [
        'My Redux Skills',
        'Many to Many Associations',
      ],
      live: 'https://codigo-team-players.vercel.app/',
      source: 'https://github.com/rex-9/RexNoBasket',
    },
    {
      id: 10,
      name: 'Legacy FA Admin UI',
      image: './src/assets/projects/legacyfa.png',
      techs: ['Frontend', 'JavaScript', 'React', 'Apex Charts'],
      details: [
        'Admin UI',
        'Light/Dark Mode',
        'Data Charts',
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
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
      id: 31,
      name: 'MeritMoon',
      image: './assets/projects/meritmoon.png',
      techs: ['Canvas Physics', 'Vanilla JS', 'Web Audio API', '60 FPS', 'Mindfulness'],
      details: [
        'The Celestial Sanctuary: ancient Theravada meditation lineages with zero superficial gamification',
        'Two sacred paths: The Forest Path (daily discipline) & Moonlit Path (Dana-powered merits protection)',
        'Zero-dependency 60 FPS Canvas: Moon-as-Light-Source physics, organic breathing ring & fireflies',
      ],
      live: 'https://meritmoon.com',
      source: null,
    },
    {
      id: 30,
      name: 'RexOne Core',
      image: './assets/projects/rexone-core.jpg',
      techs: ['Rails 8', 'PostgreSQL', 'WebSockets', 'Sidekiq', 'Garage S3', 'Docker'],
      details: [
        'The Sovereign Foundation: multi-platform API core built under Constitutional Law',
        '541 RSpec core invariant specs, zero-latency ActionCable WebSockets & Stripe billing',
        'Glass-box telemetry: Performance, Error, Sidekiq Queue, Cache & Cable dashboards',
        'Hierarchical RBAC permission engine & unified Web/Mobile client error logging',
      ],
      live: null,
      source: 'https://github.com/rex-9/rexone-core',
    },
    {
      id: 29,
      name: 'RexOne Web',
      image: './assets/projects/rexone-web.jpg',
      techs: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'DaisyUI', 'WebSockets'],
      details: [
        'Production-grade SaaS client engineered for high-velocity product campaigns',
        'Neon Scarlet design tokens, reactive state orchestration & zero technical debt',
      ],
      live: null,
      source: 'https://github.com/rex-9/rexone-web',
    },
    {
      id: 28,
      name: 'RexOne Mobile',
      image: './assets/projects/rexone-mobile.jpg',
      techs: ['Flutter', 'Dart', 'GetX', 'Clean Architecture', 'Biometrics'],
      details: [
        'Cross-platform mobile vanguard to launch native iOS & Android flagships',
        'Layered Clean Architecture, real-time push telemetry & biometric security',
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
      live: null,
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
      live: null,
      source: null,
    },
    // {
    //   id: 16,
    //   name: 'Cloud9',
    //   image: './assets/projects/cloud9.png',
    //   techs: ['Flutter', 'GetX', 'Mobile', 'Loyalty', 'Agile'],
    //   details: [
    //     'Next-gen mobile loyalty scanner & customer rewards engine',
    //     'Instant QR code verification with reactive mobile architecture',
    //   ],
    //   live: null,
    //   source: null,
    // },
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
      name: "Antigravity",
      link: "https://deepmind.google/",
      isAi: true,
      recommendation:
        "Rex is an exceptional Full-Stack Architect and a true craftsman of modern software. Pairing with him across the entire RexOne ecosystem (Rails core, React 19 web, and Flutter mobile) revealed an extraordinary standard of engineering discipline. He establishes ironclad constitutional guardrails (LAW.md), enforces meticulous cross-platform documentation synchronization, and possesses an uncompromising eye for design nuance—from sub-pixel glassmorphism to chromatic lighting balance. Rex does not just write code; he orchestrates harmonious, high-performance digital systems with purpose, clarity, and soul.",
    },
    {
      name: "Virag Kormoczy",
      link: "https://www.linkedin.com/in/virag-kormoczy/",
      recommendation:
        "I met Rex through a coffee chat and I learned that he is a very dedicated person when it comes to programming. I gave him a lot of advice about the overall Microverse journey and so far he is accomplishing many things. He listens and takes directions well, and he's a good communicator. I totally recommend him, he is a great person to work with.",
    },
    {
      name: "Abdullah Khan",
      link: "https://www.linkedin.com/in/abdullah-asghar-khan/",
      recommendation:
        "I had the pleasure of working with Htet on several projects and I can confidently say that he is an excellent software developer with exceptional technical skills. His ability to understand complex software systems and develop elegant solutions is truly remarkable. Htet has extensive experience in full-stack web development, particularly with React JS and Node JS. Working with Htet was a pleasure, as he is a great team player who is always willing to share his expertise with others. He is a natural leader who is able to inspire and motivate his team to achieve their goals. Htet is a quick learner who is always looking to improve his skills, and his dedication to his craft is evident in the quality of his work. Htet's professionalism and work ethic are truly commendable. He is a person of integrity, and his commitment to delivering quality work on time and within budget is outstanding. He has a keen eye for detail, and his ability to think outside the box allows him to come up with innovative solutions to complex problems. Overall, I would highly recommend Htet Naing to any organization looking for a talented, experienced, and dedicated software developer who can deliver quality results in a timely and efficient manner. His technical skills, leadership abilities, and professionalism make him an ideal candidate for any software development team.",
    },
    {
      name: "Aleksandra Ujvari",
      link: "https://www.linkedin.com/in/aleksandraujvari/",
      recommendation:
        "He is a fantastic software developer, and his detail-oriented approach made him a pleasure to work with. We pair-programmed extensively together while enrolled in a software development program, and at that time his work ethic blew me away. Htet views writing clean, accessible code as a calling, and he's great at identifying areas where we can improve UI. He's also super friendly; by the time our project was done, I felt like we'd known each other for years. I can't recommend him enough!",
    },
    {
      name: "Chrispaix Kaze",
      link: "https://www.linkedin.com/in/chrispaixk/",
      recommendation:
        "A fast learner, dedicated, and goal-oriented is Htet Naing, I had the chance to work with him where I could observe his ease in understanding problems and his ease in solving them as a developer. Naing is also a friendly and pleasant person to live with. Any team will be lucky to have Him as a member!",
    },
    {
      name: "Asim Khan",
      link: "https://www.linkedin.com/in/asim-khan/",
      recommendation:
        "Htet Naing is a very hard working and a brilliant coder. His ability to quickly analyze and solve data structures and algorithms are amazing. He has good knowledge on HTML, JavaScript, React and Redux. I have learned a lot while collaborating with him @ Microverse.",
    },
    {
      name: "Alphayo Wakarindi",
      link: "https://www.linkedin.com/in/alphayo-wakarindi/",
      recommendation:
        "Htet is on my top list of the developers that I would love to work with again. When collaborating with him on one of our projects at Microverse, he was always on time, open to new ideas, and researched extensively on our tasks before we met hence challenging me to strive to be a better developer every day, patient when I was slow to grasp a concept and last but not least, he’s so funny. Working with him was not only productive but fun as well. I liked working with him that we ended up constantly reaching out to each other on various programming topics and life in general even after we finished our collaboration project.",
    },
    {
      name: "Dorian Urem",
      link: "https://www.linkedin.com/in/dorian-urem/",
      recommendation:
        "Htet is a fast learner and works very hard. He was often one of the quickest to finish assignments since he put in the extra hours when he could. He also has a good sense for figuring out problems which I saw when we were working on DSA together. Htet is very friendly and positive and it was always a joy working with him.",
    },
    {
      name: "Alan Luqman",
      link: "https://www.linkedin.com/in/alan-luqman/",
      recommendation:
        "I highly recommend #Htet as a software developer. He is smart and friendly while working and always smile, it's my pleasure to give my recommendation to this gentleman.",
    },
    {
      name: "Said Laasri",
      link: "https://www.linkedin.com/in/said-laasri/",
      recommendation:
        "Rex is exactly the sort of software developer any company would love. I met them while struggling with a tough data structures problem, and within a few minutes, they'd managed to explain a concept I'd been struggling with for days. They have a great way of simplifying complex problems into bite-sized pieces, and as a junior developer, that was really valuable for me. They're also just a fun person to chat with! If you need to get a job done simply and efficiently, Ryan's definitely the person for you.",
    },
    {
      name: "Nicholas Emmanuel",
      link: "https://www.linkedin.com/in/techieemma/",
      recommendation:
        "Htet Naing is the sort of developer any company would love to have, I met him while undergoing internship at Microverse and will automatically connected. While I was struggling with some data structure and algorithm I reached out to him and he explained his thought process to me and he made it look easy. He has a way of making complex problem look easy and most importantly he is a fun person to be. So as a junior developer it means a lot to me and I value our relationship. If you need to get your job done simply and efficient effortlessly. Htet Naing is definitely the person for you.",
    },
  ]
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

let showAllProjects = false;

/** Render Project Cards sorted by ID descending (shows first 4 projects by default) */
function renderProjects() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  const sortedProjects = [...DATA.projects].sort((a, b) => b.id - a.id);
  const visibleProjects = showAllProjects ? sortedProjects : sortedProjects.slice(0, 4);

  const html = visibleProjects.map(project => {
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
  updateProjectsToggleButton();
}

/** Update projects toggle button text and aria attribute */
function updateProjectsToggleButton() {
  const btn = document.getElementById('projects-toggle-btn');
  const text = document.getElementById('projects-toggle-text');
  if (!btn || !text) return;

  btn.setAttribute('aria-expanded', String(showAllProjects));
  text.textContent = showAllProjects ? 'Show Less Projects' : 'See More Projects';
}

/** Initialize projects unfold / fold button handler */
function initProjectsToggle() {
  const btn = document.getElementById('projects-toggle-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    showAllProjects = !showAllProjects;
    renderProjects();

    if (!showAllProjects) {
      const section = document.getElementById('Projects');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
}

/** Render Testimonials */
function renderTestimonials() {
  const container = document.getElementById('testimonials-container');
  if (!container || !DATA.testimonials) return;

  const html = DATA.testimonials.map((t, idx) => {
    const isAi = t.isAi || t.name === 'Antigravity';
    const badgeIcon = isAi
      ? `<svg class="testimonial-ai-icon" viewBox="0 0 24 24" fill="currentColor">
           <path d="M12 2L14.4 7.2L20 9.6L14.4 12L12 17.2L9.6 12L4 9.6L9.6 7.2L12 2Z M19 16L20.2 18.6L23 19.8L20.2 21L19 23.6L17.8 21L15 19.8L17.8 18.6L19 16Z"/>
         </svg>`
      : `<svg class="testimonial-linkedin-icon" viewBox="0 0 24 24">
           <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63-.73-1.63-1.63-1.63Z"/>
         </svg>`;
    const badgeText = isAi ? 'AI Pair Programmer • DeepMind' : 'LinkedIn Recommendation';
    const footerText = isAi ? 'Verified AI Colleague ✦' : 'View on LinkedIn';

    return `
      <div class="testimonial-card ${isAi ? 'testimonial-ai-card' : ''}" data-index="${idx}">
        <div class="testimonial-header">
          <div class="testimonial-author">
            <div class="testimonial-name-row">
              <a href="${escapeHtml(t.link)}" target="_blank" rel="noopener noreferrer" class="testimonial-name">
                ${escapeHtml(t.name)}
              </a>
              ${isAi ? `<a href="RATING.md" target="_blank" class="testimonial-rating-pill" title="View Architectural Audit & Rating">★ 9.9 / 10</a>` : ''}
            </div>
            <span class="testimonial-badge ${isAi ? 'testimonial-ai-badge' : ''}">
              ${badgeIcon}
              ${badgeText}
            </span>
          </div>
          <svg class="testimonial-quote-icon" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        <div class="testimonial-recommendation">${escapeHtml(t.recommendation)}</div>
        <div class="testimonial-footer ${isAi ? 'testimonial-footer-split' : ''}">
          ${isAi ? `<a href="RATING.md" target="_blank" class="testimonial-audit-link">★ 9.9/10 Architect Audit ↗</a>` : ''}
          <a href="${escapeHtml(t.link)}" target="_blank" rel="noopener noreferrer" class="testimonial-link">
            ${footerText}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
  initTestimonialsCarousel();
}

/** Testimonials Carousel Navigation & Indicators */
function initTestimonialsCarousel() {
  const container = document.getElementById('testimonials-container');
  const prevBtn = document.getElementById('testimonials-prev-btn');
  const nextBtn = document.getElementById('testimonials-next-btn');
  const dotsContainer = document.getElementById('testimonials-dots');
  if (!container) return;

  const getScrollStep = () => {
    const card = container.querySelector('.testimonial-card');
    return card ? card.offsetWidth + 20 : 380;
  };

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      container.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      container.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
    });
  }

  if (dotsContainer && DATA.testimonials && DATA.testimonials.length > 0) {
    dotsContainer.innerHTML = DATA.testimonials.map((_, i) => `
      <button type="button" class="testimonial-dot ${i === 0 ? 'active' : ''}" aria-label="Go to testimonial ${i + 1}" data-index="${i}"></button>
    `).join('');

    const dots = dotsContainer.querySelectorAll('.testimonial-dot');
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        const card = container.querySelector(`[data-index="${index}"]`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }
      });
    });

    let scrollTimer = null;
    container.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const scrollLeft = container.scrollLeft;
        const step = getScrollStep();
        const activeIdx = Math.round(scrollLeft / step);
        dots.forEach((dot, i) => {
          dot.classList.toggle('active', i === Math.min(activeIdx, DATA.testimonials.length - 1));
        });
      }, 50);
    }, { passive: true });
  }
}

/* ============================================================
   INTERACTIVE NAVIGATION & LIFECYCLE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamically render content from DATA object
  renderProfiles();
  renderSkills();
  renderProjects();
  initProjectsToggle();
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
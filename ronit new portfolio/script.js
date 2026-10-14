/**
 * RONIT KUMAR SINGH — FUTURISTIC PORTFOLIO SCRIPT
 * Features:
 *  1. Blurred Green Speed-Text Canvas (Digital Matrix / Code Stream)
 *  2. Interactive AI Neural Network Particle Constellation
 *  3. Sticky Header & Active Nav Spy
 *  4. Mobile Hamburger Drawer Toggle
 *  5. IntersectionObserver Scroll Reveal
 *  6. 3D Card Micro-Tilt Hover Effect
 *  7. One-Click Clipboard Copy with Cyber Toast
 *  8. Terminal HUD Typing Sequence
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. FUTURISTIC GREEN HACKING SPEED-TEXT & MATRIX RAIN ENGINE
     ========================================================================== */
  const initSpeedText = () => {
    const canvas = document.getElementById('speed-text-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width, height, columns, drops, speeds;
    // Cyber hacking tokens, matrix symbols, hex, and AI keywords
    const characters = '01010101<>{}[]/*+-=~!$#%^&_AI_ML_JECRC_C_PYTHON_JAVA_DSA_PROMPT_0x7FFE_NODE_SYNAPSE_CORE_MATRIX_BYTE_0xFF_HASH_PASS_RUN_SYS';

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const fontSize = 15;
      columns = Math.floor(width / fontSize);
      drops = [];
      speeds = [];
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -60);
        speeds[i] = Math.random() > 0.4 ? 1 : 2; // Dynamic velocity
      }
    };

    window.addEventListener('resize', resize);
    resize();

    let lastTime = 0;
    const fps = 30; // Crisp 30 FPS for green hacking stream
    const interval = 1000 / fps;

    const draw = (currentTime) => {
      requestAnimationFrame(draw);

      const delta = currentTime - lastTime;
      if (delta < interval) return;
      lastTime = currentTime - (delta % interval);

      // Semi-transparent fade to produce glowing cyber trail streaks
      ctx.fillStyle = 'rgba(4, 6, 12, 0.18)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = '14px "JetBrains Mono", monospace';

      for (let i = 0; i < drops.length; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const x = i * 15;
        const y = drops[i] * 15;

        // Head glyph: bright glowing white-green
        ctx.fillStyle = '#c8ffea';
        ctx.shadowColor = '#00ff66';
        ctx.shadowBlur = 10;
        ctx.fillText(char, x, y);

        // Trail glyph right above it: intense cyber green
        const trailChar = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillStyle = '#00ff66';
        ctx.shadowBlur = 4;
        ctx.fillText(trailChar, x, y - 15);
        ctx.shadowBlur = 0;

        // Reset drop
        if (y > height && Math.random() > 0.965) {
          drops[i] = 0;
        } else {
          drops[i] += speeds[i];
        }
      }
    };

    requestAnimationFrame(draw);
  };

  /* ==========================================================================
     2. HERO INTERACTIVE NEURAL NETWORK CANVAS
     ========================================================================== */
  const initNeuralNetwork = () => {
    const canvas = document.getElementById('neural-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let rect = canvas.getBoundingClientRect();
    let width = canvas.width = rect.width * (window.devicePixelRatio || 1);
    let height = canvas.height = rect.height * (window.devicePixelRatio || 1);

    const resizeCanvas = () => {
      rect = canvas.getBoundingClientRect();
      width = canvas.width = rect.width * (window.devicePixelRatio || 1);
      height = canvas.height = rect.height * (window.devicePixelRatio || 1);
    };

    window.addEventListener('resize', resizeCanvas);

    // Mouse coordinates inside canvas
    const mouse = {
      x: null,
      y: null,
      radius: 120 * (window.devicePixelRatio || 1)
    };

    canvas.parentElement.addEventListener('mousemove', (e) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - bounds.left) * (window.devicePixelRatio || 1);
      mouse.y = (e.clientY - bounds.top) * (window.devicePixelRatio || 1);
    });

    canvas.parentElement.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Particle nodes
    const particleCount = window.innerWidth < 768 ? 32 : 48;
    const particles = [];
    const colors = ['#00f0ff', '#ffe600', '#ffffff', '#00f0ff'];

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = (Math.random() * 2.5 + 1.5) * (window.devicePixelRatio || 1);
        this.vx = (Math.random() - 0.5) * 0.9;
        this.vy = (Math.random() - 0.5) * 0.9;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.pulse = Math.random() * Math.PI;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.03;

        // Bounce on boundary
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Interactive mouse gravity repulsion/connection
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * 1.5;
            this.y -= (dy / dist) * force * 1.5;
          }
        }
      }

      draw() {
        const currentSize = this.size + Math.sin(this.pulse) * 0.8;
        ctx.beginPath();
        ctx.arc(this.x, this.y, Math.max(1, currentSize), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes within proximity
      const connectThreshold = 95 * (window.devicePixelRatio || 1);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectThreshold) {
            const alpha = 1 - dist / connectThreshold;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${alpha * 0.28})`;
            ctx.lineWidth = 1 * (window.devicePixelRatio || 1);
            ctx.stroke();
          }
        }
      }

      // Connect nodes to mouse cursor
      if (mouse.x !== null && mouse.y !== null) {
        for (let i = 0; i < particles.length; i++) {
          const dx = mouse.x - particles[i].x;
          const dy = mouse.y - particles[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const alpha = 1 - dist / mouse.radius;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 230, 0, ${alpha * 0.45})`;
            ctx.lineWidth = 1.2 * (window.devicePixelRatio || 1);
            ctx.stroke();
          }
        }
      }

      // Update & render particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();
  };

  /* ==========================================================================
     3. STICKY HEADER & ACTIVE NAVIGATION SCROLL SPY
     ========================================================================== */
  const initNavigation = () => {
    const header = document.getElementById('site-header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;

      // Header shadow glow on scroll
      if (scrollY > 40) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }

      // Active Section Spy
      let currentSectionId = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        const height = sec.offsetHeight;
        if (scrollY >= top && scrollY < top + height) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          }
        });

        mobileLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  };

  /* ==========================================================================
     4. MOBILE HAMBURGER MENU DRAWER
     ========================================================================== */
  const initMobileMenu = () => {
    const toggleBtn = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (!toggleBtn || !mobileMenu) return;

    const toggle = (open) => {
      const isOpen = open !== undefined ? open : !mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', isOpen);
      toggleBtn.classList.toggle('active', isOpen);
      toggleBtn.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    };

    toggleBtn.addEventListener('click', () => toggle());

    // Close when clicking any nav link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => toggle(false));
    });

    // Close when clicking outside menu
    document.addEventListener('click', (e) => {
      if (mobileMenu.classList.contains('open') &&
          !mobileMenu.contains(e.target) &&
          !toggleBtn.contains(e.target)) {
        toggle(false);
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggle(false);
      }
    });
  };

  /* ==========================================================================
     5. INTERSECTION OBSERVER SCROLL REVEALS
     ========================================================================== */
  const initScrollReveals = () => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
    } else {
      // Fallback for older browsers
      revealElements.forEach(el => el.classList.add('revealed'));
    }
  };

  /* ==========================================================================
     6. CARD 3D MICRO-TILT EFFECT
     ========================================================================== */
  const initCardTilt = () => {
    // Only apply tilt on desktop pointers
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const tiltCards = document.querySelectorAll('[data-tilt]');

      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -6; // Max 6 deg
          const rotateY = ((x - centerX) / centerX) * 6;

          card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }
  };

  /* ==========================================================================
     7. ONE-CLICK CLIPBOARD COPY WITH CYBER TOAST
     ========================================================================== */
  const initCopyClipboard = () => {
    const copyButtons = document.querySelectorAll('.copy-btn');
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    let toastTimeout;

    const showToast = (message) => {
      if (!toast) return;
      if (toastMsg) toastMsg.textContent = message;

      toast.classList.add('show');
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    };

    copyButtons.forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;

        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(textToCopy);
          } else {
            // Fallback for older contexts
            const textarea = document.createElement('textarea');
            textarea.value = textToCopy;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
          }
          showToast(`Copied "${textToCopy}" to clipboard!`);
        } catch (err) {
          showToast(`Copied: ${textToCopy}`);
        }
      });
    });
  };

  /* ==========================================================================
     8. TERMINAL HUD TYPING SEQUENCE
     ========================================================================== */
  const initTerminalTypewriter = () => {
    const textElement = document.getElementById('typewriter-text');
    if (!textElement) return;

    const phrases = [
      'initializing_future_builder.sh --status=learning',
      'python -m dsa.algorithms --optimize=recursion',
      'import ai_systems from future_tech',
      'community.scale(instagram_followers="20K+")',
      'jecrc_university.btech_year1.execute()'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 60;

    const typeLoop = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 30;
      } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 60;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at end of phrase
        isDeleting = true;
        typeSpeed = 2200;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400;
      }

      setTimeout(typeLoop, typeSpeed);
    };

    setTimeout(typeLoop, 1000);
  };

  /* ==========================================================================
     9. INTERACTIVE ZOOM-OUT ON HIGHLIGHTED ALPHABETS / CHARACTERS
     ========================================================================== */
  const initInteractiveAlphabets = () => {
    const targetSelectors = [
      '.text-neon-blue',
      '.text-neon-yellow',
      '.text-neon-green',
      '.text-highlight',
      '.logo-text',
      '.stat-number',
      '.section-title',
      '.hero-main-title',
      '.skill-title',
      '.project-title'
    ];

    const targets = document.querySelectorAll(targetSelectors.join(', '));

    const wrapTextNode = (node) => {
      const text = node.textContent;
      if (!text || !text.trim()) return;

      const fragment = document.createDocumentFragment();
      // Split by whitespace preserving tokens
      const tokens = text.split(/(\s+)/);

      tokens.forEach(token => {
        if (!token) return;

        if (/^\s+$/.test(token)) {
          // Natural spacing between words
          fragment.appendChild(document.createTextNode(token));
        } else {
          // Cohesive word container: keeps letters together on one line!
          const wordSpan = document.createElement('span');
          wordSpan.className = 'cyber-word';

          for (let i = 0; i < token.length; i++) {
            const char = token[i];
            const charSpan = document.createElement('span');
            charSpan.className = 'cyber-char';
            charSpan.textContent = char;

            // Touch support for mobile / touchpads
            charSpan.addEventListener('touchstart', () => {
              charSpan.classList.add('touch-zoom');
              setTimeout(() => charSpan.classList.remove('touch-zoom'), 400);
            }, { passive: true });

            wordSpan.appendChild(charSpan);
          }

          fragment.appendChild(wordSpan);
        }
      });

      node.parentNode.replaceChild(fragment, node);
    };

    const processElement = (element) => {
      const childNodes = Array.from(element.childNodes);
      childNodes.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          wrapTextNode(child);
        } else if (child.nodeType === Node.ELEMENT_NODE && 
                   !child.classList.contains('cyber-word') &&
                   !child.classList.contains('cyber-char') && 
                   !child.classList.contains('btn-icon')) {
          processElement(child);
        }
      });
    };

    targets.forEach(el => processElement(el));
  };

  // Initialize all modular components
  initSpeedText();
  initNeuralNetwork();
  initNavigation();
  initMobileMenu();
  initScrollReveals();
  initCardTilt();
  initCopyClipboard();
  initTerminalTypewriter();
  initInteractiveAlphabets();

});



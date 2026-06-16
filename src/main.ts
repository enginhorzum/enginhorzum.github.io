import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="aurora aurora-a"></div>
  <div class="aurora aurora-b"></div>

  <header class="topbar glass reveal">
    <a href="#home" class="brand"><span class="brand-mark">EH</span> Engin Horzum</a>
    <nav>
      <a href="#solutions">Solutions</a>
      <a href="#proof">Proof</a>
      <a href="#contact">Contact</a>
    </nav>
    <button id="theme-toggle" class="theme-toggle" type="button" aria-label="Toggle color mode">Light</button>
  </header>

  <main>
    <section id="home" class="hero reveal">
      <p class="kicker">Software Engineer · Solution Architect</p>
      <h1>Enterprise software that ships fast, scales hard, and stays maintainable.</h1>
      <p class="subhead">
        I design high-trust .NET and Azure platforms for teams that cannot afford downtime, delivery drag,
        or brittle architecture. Built with product-level polish and operations-level discipline.
      </p>
      <div class="hero-actions">
        <a class="btn primary" href="#contact">Start a Conversation</a>
        <a class="btn ghost" href="https://blog.enginhorzum.com" target="_blank" rel="noreferrer">Read Technical Notes</a>
      </div>
      <div class="metrics glass">
        <div><strong>20+</strong><span>Years in engineering</span></div>
        <div><strong>8</strong><span>Major brands served</span></div>
        <div><strong>4</strong><span>Industry certifications</span></div>
      </div>
    </section>

    <section id="solutions" class="section reveal">
      <div class="section-head">
        <p class="kicker">What I Deliver</p>
        <h2>Product-grade engineering systems for serious teams.</h2>
      </div>
      <div class="grid-cards">
        <article class="glass card">
          <h3>Cloud Backbone</h3>
          <p>Azure-native architecture, observability, and reliability patterns designed for real production load.</p>
        </article>
        <article class="glass card">
          <h3>Integration Platforms</h3>
          <p>Stable APIs, event workflows, and service orchestration that keep cross-team delivery moving.</p>
        </article>
        <article class="glass card">
          <h3>Developer Velocity</h3>
          <p>CI/CD and DevOps standards that reduce release friction and improve confidence in every deploy.</p>
        </article>
      </div>
    </section>

    <section id="proof" class="section reveal">
      <div class="section-head">
        <p class="kicker">Selected Experience</p>
        <h2>Trusted by large organizations across energy, telecom, retail, and insurance.</h2>
      </div>
      <div class="timeline glass">
        <article>
          <span>2023 - Present</span>
          <h3>Integration Developer · Vattenfall</h3>
          <p>Amsterdam, Netherlands</p>
        </article>
        <article>
          <span>2020 - 2023</span>
          <h3>Software Developer · T-Mobile Netherlands</h3>
          <p>Den Haag, Netherlands</p>
        </article>
        <article>
          <span>2009 - 2018</span>
          <h3>Solution Architect · AXA Insurance</h3>
          <p>Istanbul, Turkey</p>
        </article>
      </div>
      <div class="badge-row">
        <span>Microsoft Azure Solutions Architect Expert</span>
        <span>Microsoft Azure Fundamentals</span>
        <span>Professional Scrum Master I</span>
        <span>Project Management Professional</span>
      </div>
    </section>

    <section id="contact" class="section reveal">
      <div class="section-head">
        <p class="kicker">Let Us Build Something Exceptional</p>
        <h2>Tell me what you are building. I will reply directly.</h2>
      </div>
      <form id="contact-form" class="glass contact-form">
        <label>
          Name
          <input type="text" name="name" required minlength="2" maxlength="80" />
        </label>
        <label>
          Email
          <input type="email" name="email" required maxlength="120" />
        </label>
        <label>
          Subject
          <input type="text" name="subject" required minlength="2" maxlength="120" />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required minlength="10" maxlength="2000"></textarea>
        </label>
        <button class="btn primary" type="submit">Send Message</button>
        <p id="form-status" role="status" aria-live="polite"></p>
      </form>
      <div class="footer-links">
        <a href="https://www.linkedin.com/in/enginhorzum" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/enginhorzum" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://blog.enginhorzum.com" target="_blank" rel="noreferrer">Blog</a>
      </div>
    </section>
  </main>
`;

const root = document.documentElement;
const toggle = document.querySelector<HTMLButtonElement>('#theme-toggle');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  root.setAttribute('data-theme', 'light');
}

if (toggle) {
  const setLabel = () => {
    toggle.textContent = root.getAttribute('data-theme') === 'light' ? 'Dark' : 'Light';
  };

  setLabel();

  toggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme');
    if (current === 'light') {
      root.removeAttribute('data-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    setLabel();
  });
}

const reveals = document.querySelectorAll<HTMLElement>('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.18 },
);

reveals.forEach((item) => revealObserver.observe(item));

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
const form = document.querySelector<HTMLFormElement>('#contact-form');
const statusEl = document.querySelector<HTMLParagraphElement>('#form-status');

if (form && statusEl) {
  form.addEventListener('input', () => {
    statusEl.textContent = '';
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!endpoint) {
      statusEl.textContent = 'Contact form is not configured yet. Please add VITE_CONTACT_ENDPOINT.';
      return;
    }

    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      subject: String(data.get('subject') || ''),
      message: String(data.get('message') || ''),
    };

    payload.name = payload.name.trim();
    payload.email = payload.email.trim();
    payload.subject = payload.subject.trim();
    payload.message = payload.message.trim();

    const nameInput = form.querySelector<HTMLInputElement>('input[name="name"]');
    const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
    const subjectInput = form.querySelector<HTMLInputElement>('input[name="subject"]');
    const messageInput = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

    if (nameInput) nameInput.value = payload.name;
    if (emailInput) emailInput.value = payload.email;
    if (subjectInput) subjectInput.value = payload.subject;
    if (messageInput) messageInput.value = payload.message;

    if (!form.checkValidity()) {
      form.reportValidity();
      statusEl.textContent = 'Please fix the highlighted fields.';
      return;
    }

    const localErrors: string[] = [];
    if (payload.name.trim().length < 2) {
      localErrors.push('Name must be at least 2 characters.');
    }
    if (!/^\S+@\S+\.\S+$/.test(payload.email.trim())) {
      localErrors.push('Email is not valid.');
    }
    if (payload.subject.trim().length < 2) {
      localErrors.push('Subject must be at least 2 characters.');
    }
    if (payload.message.trim().length < 10) {
      localErrors.push('Message must be at least 10 characters.');
    }

    if (localErrors.length > 0) {
      statusEl.textContent = localErrors[0];
      return;
    }

    statusEl.textContent = 'Sending...';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as
          | { error?: string; details?: string[] }
          | null;
        const detail = body?.details?.[0];
        const errorMessage = detail || body?.error || `Request failed (${response.status})`;
        throw new Error(errorMessage);
      }

      form.reset();
      statusEl.textContent = 'Thanks. Your message has been sent.';
    } catch (error) {
      statusEl.textContent =
        error instanceof Error ? error.message : 'Something went wrong. Please try again later.';
    }
  });
}

import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="halo halo-a"></div>
  <div class="halo halo-b"></div>

  <header class="topbar reveal">
    <a href="#home" class="brand"><span class="brand-mark">EH</span> Engin Horzum</a>
    <nav>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
    <button id="theme-toggle" class="theme-toggle" type="button" aria-label="Toggle color mode">Light</button>
  </header>

  <main>
    <section id="home" class="hero reveal">
      <p class="kicker">Software Developer · Solution Architect · .NET & Azure</p>
      <h1>Premium engineering for products that cannot fail in production.</h1>
      <p class="subhead">
        I help teams design and ship resilient backend platforms, integration systems, and cloud delivery pipelines.
        Focused on reliability, maintainability, and execution speed.
      </p>
      <div class="hero-actions">
        <a class="btn primary" href="#contact">Let's Build Together</a>
        <a class="btn ghost" href="https://blog.enginhorzum.com" target="_blank" rel="noreferrer">Read Blog</a>
      </div>
      <div class="metrics">
        <div><strong>20+</strong><span>Years in software engineering</span></div>
        <div><strong>8</strong><span>Companies and enterprise domains</span></div>
        <div><strong>4</strong><span>Industry certifications</span></div>
      </div>
    </section>

    <section id="experience" class="section reveal">
      <div class="section-head">
        <p class="kicker">Experience</p>
        <h2>Full timeline</h2>
      </div>
      <div class="timeline">
        <article>
          <span>11/2023 - Present</span>
          <h3>Integration Developer · Vattenfall</h3>
          <p>Amsterdam - Netherlands</p>
        </article>
        <article>
          <span>10/2020 - 10/2023</span>
          <h3>Software Developer · T-Mobile Netherlands</h3>
          <p>Den Haag - Netherlands</p>
        </article>
        <article>
          <span>06/2020 - 10/2020</span>
          <h3>Software Developer / DevOps · Soulve Innovations</h3>
          <p>Utrecht - Netherlands</p>
        </article>
        <article>
          <span>08/2019 - 06/2020</span>
          <h3>Senior Software Developer · Bruna B.V.</h3>
          <p>Amsterdam - Netherlands</p>
        </article>
        <article>
          <span>09/2018 - 08/2019</span>
          <h3>Software Developer · Facevalue B.V.</h3>
          <p>Hilversum - Netherlands</p>
        </article>
        <article>
          <span>02/2009 - 06/2018</span>
          <h3>Solution Architect · AXA Insurance</h3>
          <p>Istanbul - Turkey</p>
        </article>
        <article>
          <span>07/2006 - 02/2009</span>
          <h3>Software Developer · Anadolu Bilisim Hizmetleri</h3>
          <p>Istanbul - Turkey</p>
        </article>
        <article>
          <span>12/2004 - 12/2005</span>
          <h3>Software Developer · Ericsson</h3>
          <p>Istanbul - Turkey</p>
        </article>
      </div>
    </section>

    <section id="education" class="section reveal">
      <div class="section-head">
        <p class="kicker">Education & Certifications</p>
        <h2>Academic foundation and credentials</h2>
      </div>
      <article class="education-card">
        <span>1999 - 2004</span>
        <h3>Bachelor of Science in Computer Engineering</h3>
        <p>Izmir Institute of Technology</p>
      </article>
      <div class="badge-row">
        <span>Microsoft Certified: Azure Solutions Architect Expert (2020)</span>
        <span>Microsoft Certified: Azure Fundamentals (2020)</span>
        <span>Professional Scrum Master I (2020)</span>
        <span>Project Management Professional (2013)</span>
      </div>
    </section>

    <section id="contact" class="section reveal">
      <div class="section-head">
        <p class="kicker">Contact</p>
        <h2>Tell me about your project.</h2>
      </div>
      <form id="contact-form" class="contact-form">
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

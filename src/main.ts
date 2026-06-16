import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="ambient ambient-a"></div>
  <div class="ambient ambient-b"></div>

  <header class="site-header">
    <a href="#home" class="brand">Engin Horzum</a>
    <nav>
      <a href="#experience">Experience</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main>
    <section id="home" class="hero">
      <p class="eyebrow">Software Developer</p>
      <h1>Building resilient .NET and Azure systems for real-world scale.</h1>
      <p class="lede">
        I am Engin Horzum, a software engineer and architect based in the Netherlands.
        I design and deliver cloud-native platforms, integration services, and reliable developer workflows.
      </p>
      <div class="hero-actions">
        <a class="btn solid" href="#contact">Let's Work Together</a>
        <a class="btn ghost" href="https://blog.enginhorzum.com" target="_blank" rel="noreferrer">Read My Blog</a>
      </div>
      <ul class="social-list">
        <li><a href="https://www.linkedin.com/in/enginhorzum" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="https://github.com/enginhorzum" target="_blank" rel="noreferrer">GitHub</a></li>
      </ul>
    </section>

    <section class="panel" id="about">
      <h2>Education</h2>
      <article class="entry">
        <span class="meta">1999 - 2004</span>
        <h3>Bachelor of Science in Computer Engineering</h3>
        <p>Izmir Institute of Technology</p>
      </article>
    </section>

    <section class="panel" id="experience">
      <h2>Experience</h2>
      <div class="timeline">
        <article class="entry"><span class="meta">11/2023 - Present</span><h3>Integration Developer</h3><p>Vattenfall · Amsterdam, Netherlands</p></article>
        <article class="entry"><span class="meta">10/2020 - 10/2023</span><h3>Software Developer</h3><p>T-Mobile Netherlands · Den Haag, Netherlands</p></article>
        <article class="entry"><span class="meta">06/2020 - 10/2020</span><h3>Software Developer / DevOps</h3><p>Soulve Innovations · Utrecht, Netherlands</p></article>
        <article class="entry"><span class="meta">08/2019 - 06/2020</span><h3>Senior Software Developer</h3><p>Bruna B.V. · Amsterdam, Netherlands</p></article>
        <article class="entry"><span class="meta">09/2018 - 08/2019</span><h3>Software Developer</h3><p>Facevalue B.V. · Hilversum, Netherlands</p></article>
        <article class="entry"><span class="meta">02/2009 - 06/2018</span><h3>Solution Architect</h3><p>AXA Insurance · Istanbul, Turkey</p></article>
        <article class="entry"><span class="meta">07/2006 - 02/2009</span><h3>Software Developer</h3><p>Anadolu Bilisim Hizmetleri · Istanbul, Turkey</p></article>
        <article class="entry"><span class="meta">12/2004 - 12/2005</span><h3>Software Developer</h3><p>Ericsson · Istanbul, Turkey</p></article>
      </div>
    </section>

    <section class="panel" id="skills">
      <h2>Skills</h2>
      <div class="chips">
        <span>.NET</span><span>Azure</span><span>C#</span><span>SQL</span><span>JavaScript</span><span>DevOps</span>
      </div>
    </section>

    <section class="panel" id="certificates">
      <h2>Certificates</h2>
      <ul class="certs">
        <li><strong>2020</strong> Microsoft Certified: Azure Solutions Architect Expert</li>
        <li><strong>2020</strong> Microsoft Certified: Azure Fundamentals</li>
        <li><strong>2020</strong> Professional Scrum Master I (PSM I)</li>
        <li><strong>2013</strong> Project Management Professional (PMP)</li>
      </ul>
    </section>

    <section class="panel" id="contact">
      <h2>Contact</h2>
      <p>Send me a message and I will get back to you via enginhorzum@gmail.com.</p>
      <form id="contact-form">
        <label>
          Name
          <input type="text" name="name" required minlength="2" maxlength="80" />
        </label>
        <label>
          Email
          <input type="email" name="email" required maxlength="120" />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required minlength="10" maxlength="2000"></textarea>
        </label>
        <button class="btn solid" type="submit">Send Message</button>
        <p id="form-status" role="status" aria-live="polite"></p>
      </form>
    </section>
  </main>
`;

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
      message: String(data.get('message') || ''),
    };

    payload.name = payload.name.trim();
    payload.email = payload.email.trim();
    payload.message = payload.message.trim();

    const nameInput = form.querySelector<HTMLInputElement>('input[name="name"]');
    const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
    const messageInput = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

    if (nameInput) nameInput.value = payload.name;
    if (emailInput) emailInput.value = payload.email;
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

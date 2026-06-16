(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
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
`;var e=document.documentElement,t=document.querySelector(`#theme-toggle`);if(localStorage.getItem(`theme`)===`light`&&e.setAttribute(`data-theme`,`light`),t){let n=()=>{t.textContent=e.getAttribute(`data-theme`)===`light`?`Dark`:`Light`};n(),t.addEventListener(`click`,()=>{e.getAttribute(`data-theme`)===`light`?(e.removeAttribute(`data-theme`),localStorage.setItem(`theme`,`dark`)):(e.setAttribute(`data-theme`,`light`),localStorage.setItem(`theme`,`light`)),n()})}var n=document.querySelectorAll(`.reveal`),r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`show`)})},{threshold:.18});n.forEach(e=>r.observe(e));var i=`https://engin-contact.enginhorzum.workers.dev`,a=document.querySelector(`#contact-form`),o=document.querySelector(`#form-status`);a&&o&&(a.addEventListener(`input`,()=>{o.textContent=``}),a.addEventListener(`submit`,async e=>{e.preventDefault();let t=new FormData(a),n={name:String(t.get(`name`)||``),email:String(t.get(`email`)||``),subject:String(t.get(`subject`)||``),message:String(t.get(`message`)||``)};n.name=n.name.trim(),n.email=n.email.trim(),n.subject=n.subject.trim(),n.message=n.message.trim();let r=a.querySelector(`input[name="name"]`),s=a.querySelector(`input[name="email"]`),c=a.querySelector(`input[name="subject"]`),l=a.querySelector(`textarea[name="message"]`);if(r&&(r.value=n.name),s&&(s.value=n.email),c&&(c.value=n.subject),l&&(l.value=n.message),!a.checkValidity()){a.reportValidity(),o.textContent=`Please fix the highlighted fields.`;return}let u=[];if(n.name.trim().length<2&&u.push(`Name must be at least 2 characters.`),/^\S+@\S+\.\S+$/.test(n.email.trim())||u.push(`Email is not valid.`),n.subject.trim().length<2&&u.push(`Subject must be at least 2 characters.`),n.message.trim().length<10&&u.push(`Message must be at least 10 characters.`),u.length>0){o.textContent=u[0];return}o.textContent=`Sending...`;try{let e=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!e.ok){let t=await e.json().catch(()=>null),n=t?.details?.[0]||t?.error||`Request failed (${e.status})`;throw Error(n)}a.reset(),o.textContent=`Thanks. Your message has been sent.`}catch(e){o.textContent=e instanceof Error?e.message:`Something went wrong. Please try again later.`}}));
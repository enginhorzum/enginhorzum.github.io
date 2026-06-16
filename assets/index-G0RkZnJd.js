(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
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
`;var e=document.documentElement,t=document.querySelector(`#theme-toggle`);if(localStorage.getItem(`theme`)===`light`&&e.setAttribute(`data-theme`,`light`),t){let n=()=>{t.textContent=e.getAttribute(`data-theme`)===`light`?`Dark`:`Light`};n(),t.addEventListener(`click`,()=>{e.getAttribute(`data-theme`)===`light`?(e.removeAttribute(`data-theme`),localStorage.setItem(`theme`,`dark`)):(e.setAttribute(`data-theme`,`light`),localStorage.setItem(`theme`,`light`)),n()})}var n=document.querySelectorAll(`.reveal`),r=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add(`show`)})},{threshold:.18});n.forEach(e=>r.observe(e));var i=`https://engin-contact.enginhorzum.workers.dev`,a=document.querySelector(`#contact-form`),o=document.querySelector(`#form-status`);a&&o&&(a.addEventListener(`input`,()=>{o.textContent=``}),a.addEventListener(`submit`,async e=>{e.preventDefault();let t=new FormData(a),n={name:String(t.get(`name`)||``),email:String(t.get(`email`)||``),message:String(t.get(`message`)||``)};n.name=n.name.trim(),n.email=n.email.trim(),n.message=n.message.trim();let r=a.querySelector(`input[name="name"]`),s=a.querySelector(`input[name="email"]`),c=a.querySelector(`textarea[name="message"]`);if(r&&(r.value=n.name),s&&(s.value=n.email),c&&(c.value=n.message),!a.checkValidity()){a.reportValidity(),o.textContent=`Please fix the highlighted fields.`;return}let l=[];if(n.name.trim().length<2&&l.push(`Name must be at least 2 characters.`),/^\S+@\S+\.\S+$/.test(n.email.trim())||l.push(`Email is not valid.`),n.message.trim().length<10&&l.push(`Message must be at least 10 characters.`),l.length>0){o.textContent=l[0];return}o.textContent=`Sending...`;try{let e=await fetch(i,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(n)});if(!e.ok){let t=await e.json().catch(()=>null),n=t?.details?.[0]||t?.error||`Request failed (${e.status})`;throw Error(n)}a.reset(),o.textContent=`Thanks. Your message has been sent.`}catch(e){o.textContent=e instanceof Error?e.message:`Something went wrong. Please try again later.`}}));
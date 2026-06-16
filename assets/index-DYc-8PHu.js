(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
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
      <form id="contact-form" novalidate>
        <label>
          Name
          <input type="text" name="name" required minlength="2" />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="5" required minlength="10"></textarea>
        </label>
        <button class="btn solid" type="submit">Send Message</button>
        <p id="form-status" role="status" aria-live="polite"></p>
      </form>
    </section>
  </main>
`;var e=`https://engin-contact.enginhorzum.workers.dev`,t=document.querySelector(`#contact-form`),n=document.querySelector(`#form-status`);t&&n&&t.addEventListener(`submit`,async r=>{r.preventDefault();let i=new FormData(t),a={name:String(i.get(`name`)||``),email:String(i.get(`email`)||``),message:String(i.get(`message`)||``)};n.textContent=`Sending...`;try{if(!(await fetch(e,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(a)})).ok)throw Error(`Request failed`);t.reset(),n.textContent=`Thanks. Your message has been sent.`}catch{n.textContent=`Something went wrong. Please try again later.`}});
/* nav.js — shared navigation + footer injection */

const LOGO_SVG = `<img src="images/ermasoft-logo-white.png" alt="ЭРМА СОФТ Менеджмент" style="height:42px;width:auto;display:block;filter:drop-shadow(0 2px 8px rgba(0,0,0,.25))">`;

const CHEVRON = `<svg class="nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg>`;

/* ── Global contact modal (shared across the entire site) ── */
const CONTACT_MODAL_HTML = `
<div id="contact-modal-overlay" class="modal-overlay" style="display:none" onclick="closeContactModal()"></div>
<div id="contact-modal" style="display:none">
  <div class="cm-hdr">
    <div class="cm-ico"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
    <div><div class="cm-eyebrow">ЭРМА СОФТ Менеджмент</div><h3 class="cm-title">Свяжитесь с нами</h3></div>
    <button class="cm-close" onclick="closeContactModal()">✕</button>
  </div>
  <div class="cm-body">
    <p>Расскажите о задаче вашей организации — подготовим демонстрацию и коммерческое предложение в течение 3 рабочих дней.</p>
    <div class="cm-row">
      <div class="cm-group"><label>Имя</label><input type="text" id="cm-name" placeholder="Ваше имя"></div>
      <div class="cm-group"><label>Организация</label><input type="text" id="cm-org" placeholder="Название компании"></div>
    </div>
    <div class="cm-row">
      <div class="cm-group"><label>Email</label><input type="email" id="cm-email" placeholder="you@company.ru"></div>
      <div class="cm-group"><label>Телефон</label><input type="tel" id="cm-phone" placeholder="+7 (___) ___-__-__"></div>
    </div>
    <div class="cm-group full"><label>Сообщение</label><textarea id="cm-msg" placeholder="Кратко опишите задачу..."></textarea></div>
    <div class="cm-direct">
      <a href="tel:+74959680280"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg> +7 (495) 968-02-80</a>
      <a href="mailto:erma@ermasoft.ru"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> erma@ermasoft.ru</a>
    </div>
  </div>
  <div class="cm-footer">
    <button type="button" class="btn" style="background:linear-gradient(135deg,#0E5C8B,#1B8FB0);color:white;border:none" onclick="submitContactModal(this)">Отправить заявку</button>
    <button type="button" class="btn btn-outline" style="color:#0A1929;border-color:#C8D3DF" onclick="closeContactModal()">Отмена</button>
  </div>
</div>`;

function openContactModal(){
  if(!document.getElementById('contact-modal')){
    document.body.insertAdjacentHTML('beforeend', CONTACT_MODAL_HTML);
  }
  document.getElementById('contact-modal-overlay').style.display='block';
  document.getElementById('contact-modal').style.display='block';
  document.body.style.overflow='hidden';
}
function closeContactModal(){
  const ov=document.getElementById('contact-modal-overlay');
  const m=document.getElementById('contact-modal');
  if(ov)ov.style.display='none';
  if(m)m.style.display='none';
  document.body.style.overflow='';
}
function submitContactModal(btn){
  btn.textContent='✓ Заявка отправлена!';
  btn.style.background='#27AE60';
  setTimeout(()=>{
    closeContactModal();
    btn.textContent='Отправить заявку';
    btn.style.background='linear-gradient(135deg,#0E5C8B,#1B8FB0)';
  },2200);
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeContactModal();});

const NAV_HTML = `
<div class="util"><div class="wrap">
  <div class="util-l">
    <a href="tel:+74959680280">+7 (495) 968-02-80</a>
    <span class="pipe">|</span>
    <a href="mailto:erma@ermasoft.ru">erma@ermasoft.ru</a>
    <span class="pipe">|</span>
    <a href="about.html">О компании</a>
    <a href="index.html#news">Актуально</a>
    <a href="index.html#contact">Контакты</a>
  </div>
  <div class="util-r">
    <a href="tel:+74959680280">Пн–Пт 9:00–18:00 МСК</a>
  </div>
</div></div>

<header class="nav" id="mainNav">
  <div class="wrap">
    <a href="index.html" class="logo">
      ${LOGO_SVG}
    </a>
    <nav><ul class="nav-items">

      <li class="nav-item" data-section="geoanalysis">
        <a href="geoanalysis.html" class="nav-link">Геоанализ${CHEVRON}</a>
        <div class="dd">
          <a href="geoanalysis-sales.html">Анализ продаж</a>
          <a href="geoanalysis-reps.html">Управление торговыми представителями</a>
          <a href="geoanalysis-competition.html">Анализ конкурентной среды</a>
        </div>
      </li>

      <li class="nav-item" data-section="buildings">
        <a href="buildings.html" class="nav-link">ГИС «Здания/территория»${CHEVRON}</a>
        <div class="dd" style="min-width:240px">
          <a href="buildings-main.html">Основные подсистемы</a>
          <a href="buildings-exploitation.html">Управление эксплуатацией</a>
          <a href="buildings-requests.html">Контроль исполнения заявок</a>
          <a href="buildings-placement.html">Управление размещением</a>
          <a href="buildings-rent.html">Управление арендой</a>
          <div class="dd-sep"></div>
          <a href="buildings-networks.html">Инженерные сети</a>
          <a href="buildings-security.html">Обеспечение безопасности</a>
          <a href="buildings-archive.html">Электронный архив</a>
          <a href="buildings-support.html">Техническая поддержка</a>
        </div>
      </li>

      <li class="nav-item" data-section="municipal">
        <a href="municipal.html" class="nav-link">Муниципальные ГИС${CHEVRON}</a>
        <div class="dd">
          <a href="municipal-geoarm.html">Реализованные ГеоАРМ</a>
          <a href="municipal-analytics.html">Аналитические возможности</a>
        </div>
      </li>

      <li class="nav-item" data-section="transport">
        <a href="transport.html" class="nav-link">Транспортная логистика${CHEVRON}</a>
        <div class="dd" style="min-width:270px">
          <a href="transport-city.html">СИТИ-Доставка. Маршрутизация в мегаполисе</a>
          <a href="transport-oil.html">СИТИ-Доставка НП. Доставка нефтепродуктов</a>
          <a href="transport-incasso.html">СИТИ-Инкассация. Управление инкассацией</a>
          <a href="transport-logistics.html">ПФК-Логистика. Междугородние перевозки</a>
          <div class="dd-sep"></div>
          <a href="transport-geomonitor.html">ГеоМониторинг. Анализ и контроль ТС</a>
          <a href="transport-trade.html">СИТИ-Трейд. Управление торговыми представителями</a>
          <a href="transport-mobile.html">Мобильные сервисы</a>
          <a href="transport-complex.html">Комплексная автоматизация</a>
          <a href="transport-support.html">Техническая поддержка</a>
        </div>
      </li>

      <li class="nav-item" data-section="situation">
        <a href="situation.html" class="nav-link">Ситуационное управление${CHEVRON}</a>
        <div class="dd" style="min-width:240px">
          <a href="situation-infra.html">Инфраструктура территории</a>
          <a href="situation-passport.html">Паспортизация объектов</a>
          <a href="situation-events.html">Регистрация событий и мероприятий</a>
          <a href="situation-deviations.html">Выявление отклонений</a>
          <a href="situation-development.html">Развитие событий</a>
          <a href="situation-complex.html">Комплексная автоматизация</a>
        </div>
      </li>

      <li class="nav-item" data-section="cartography">
        <a href="cartography.html" class="nav-link">Картография</a>
      </li>

      <li class="nav-item" data-section="about">
        <a href="about.html" class="nav-link">О компании${CHEVRON}</a>
        <div class="dd">
          <a href="about-company.html">О компании ЭРМА СОФТ</a>
          <a href="about-directions.html">Направления деятельности</a>
          <a href="about-solutions.html">Реализованные решения</a>
          <a href="about-registry.html">Реестр РФ</a>
          <a href="about-contacts.html">Контакты и реквизиты</a>
        </div>
      </li>

    </ul></nav>
    <div class="nav-right">
      <button type="button" onclick="openContactModal()" class="btn" style="font-size:12px;padding:8px 16px;background:linear-gradient(135deg,#0E5C8B,#1B8FB0);color:white;border-radius:8px;font-weight:700;border:none">Написать нам</button>
      <button class="hbg" id="hbg"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>

<div class="mob-nav" id="mobNav">
  <a href="geoanalysis.html">Геоанализ</a>
  <a href="buildings.html">ГИС «Здания/территория»</a>
  <a href="municipal.html">Муниципальные ГИС</a>
  <a href="transport.html">Транспортная логистика</a>
  <a href="situation.html">Ситуационное управление</a>
  <a href="cartography.html">Картография</a>
  <a href="about.html">О компании</a>
  <button type="button" onclick="openContactModal()" class="btn" style="display:block;width:100%;text-align:center;background:#0E5C8B;color:white;padding:10px;border-radius:8px;font-weight:700;margin-top:14px;border:none">Запросить демо</button>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="wrap">
    <div class="ft-grid">
      <div class="ft-brand">
        <a href="index.html" class="logo" style="text-decoration:none">
          ${LOGO_SVG}
        </a>
        <p class="ft-tag">Стабильная российская компания. Разработчик ГИС-систем для управления территорией с 2002 года.</p>
        <div class="ft-soc">
          <a href="#" class="soc-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.89 8.23-1.83 8.63c-.14.63-.5.78-1.02.49l-2.82-2.08-1.36 1.3c-.15.15-.28.27-.57.27l.2-2.88 5.27-4.76c.23-.2-.05-.31-.35-.11L6.87 13.6 4.1 12.74c-.63-.2-.64-.62.13-.92l11.53-4.45c.52-.19.98.12.13.86z"/></svg></a>
          <a href="#" class="soc-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.785 16.241s.288-.032.435-.193c.135-.148.131-.422.131-.422s-.019-1.295.586-1.488c.595-.19 1.36 1.265 2.17 1.825.612.422 1.079.33 1.079.33l2.16-.03s1.131-.07.594-.96c-.04-.075-.31-.66-1.6-1.86-1.353-1.256-1.171-1.053.456-3.222.99-1.323 1.387-2.13 1.262-2.474-.117-.328-.846-.241-.846-.241l-2.43.015s-.18-.025-.314.055c-.131.078-.215.262-.215.262s-.387 1.025-.9 1.898c-1.085 1.84-1.519 1.938-1.697 1.825-.412-.265-.31-1.066-.31-1.635 0-1.778.27-2.518-.526-2.706-.265-.063-.46-.105-1.137-.111-.866-.01-1.6.003-2.015.207-.276.135-.49.436-.36.453.16.022.523.099.715.36.249.336.24 1.092.24 1.092s.144 2.094-.336 2.355c-.327.18-.776-.187-1.747-1.876-.499-.866-.875-1.823-.875-1.823s-.072-.176-.2-.27c-.155-.114-.373-.15-.373-.15l-2.318.015s-.34.01-.466.158C2.066 7.504 4.05 11.36 6.395 14.4c2.16 2.804 4.605 2.62 6.39 2.5z"/></svg></a>
          <a href="mailto:erma@ermasoft.ru" class="soc-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></a>
        </div>
      </div>
      <div class="ft-col"><h4>Продукты и решения</h4><ul>
        <li><a href="geoanalysis.html">Геоанализ</a></li>
        <li><a href="buildings.html">ГИС «Здания/территория»</a></li>
        <li><a href="municipal.html">Муниципальные ГИС</a></li>
        <li><a href="transport.html">Транспортная логистика</a></li>
        <li><a href="situation.html">Ситуационное управление</a></li>
        <li><a href="cartography.html">Картография</a></li>
      </ul></div>
      <div class="ft-col"><h4>Сервисы</h4><ul>
        <li><a href="about-directions.html">ИТ и ГИС консалтинг</a></li>
        <li><a href="about-directions.html">Разработка ПО</a></li>
        <li><a href="about-directions.html">Внедрение систем</a></li>
        <li><a href="transport-support.html">Техническая поддержка</a></li>
        <li><a href="cartography.html">Картографические работы</a></li>
        <li><a href="about-directions.html">Обучение пользователей</a></li>
      </ul></div>
      <div class="ft-col"><h4>Актуально</h4><ul>
        <li><a href="index.html#news">Новости компании</a></li>
        <li><a href="about-solutions.html">Реализованные проекты</a></li>
        <li><a href="index.html#news">Мероприятия</a></li>
        <li><a href="about-registry.html">Реестр РФ</a></li>
      </ul></div>
      <div class="ft-col"><h4>Контакты</h4>
        <div style="display:flex;flex-direction:column;gap:12px;font-size:13px">
          <div><a href="tel:+74959680280" style="color:var(--cyan)">+7 (495) 968-02-80</a><div style="font-size:11px;color:rgba(255,255,255,.38);margin-top:2px">Пн–Пт 9:00–18:00 МСК</div></div>
          <div><a href="mailto:erma@ermasoft.ru" style="color:var(--cyan)">erma@ermasoft.ru</a></div>
          <div style="color:rgba(255,255,255,.58)">Москва, Россия</div>
        </div>
      </div>
    </div>
    <div class="ft-bot">
      <span>© 2002–2026 ООО «ЭРМА СОФТ Менеджмент» · Реестр российского ПО · Лицензия Роскартографии № РК-10608К</span>
      <div class="ft-bot-links"><a href="about-contacts.html">Политика конфиденциальности</a><a href="about-contacts.html">Карта сайта</a></div>
    </div>
  </div>
</footer>`;

function initNav() {
  const ph = document.getElementById('nav-placeholder');
  if (!ph) return;
  ph.outerHTML = NAV_HTML;

  // Highlight active section
  const path = window.location.pathname;
  document.querySelectorAll('.nav-item[data-section]').forEach(item => {
    const s = item.dataset.section;
    if (path.includes(s)) item.querySelector('.nav-link').classList.add('active');
  });

  // Nav scroll effect
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
      const btt = document.getElementById('btt');
      if (btt) btt.classList.toggle('show', window.scrollY > 500);
    }, {passive: true});
  }

  // Mobile nav - use display toggle (more reliable than transform)
  const hbg = document.getElementById('hbg');
  const mob = document.getElementById('mobNav');
  if (hbg && mob) {
    // Position mob-nav correctly below the header
    function positionMob() {
      const nav = document.getElementById('mainNav');
      const util = document.querySelector('.util');
      const top = (util ? util.offsetHeight : 38) + (nav ? nav.offsetHeight : 68);
      mob.style.top = top + 'px';
    }
    hbg.addEventListener('click', () => {
      const isOpen = mob.classList.contains('open');
      if (isOpen) {
        mob.classList.remove('open');
        hbg.classList.remove('open');
      } else {
        positionMob();
        mob.classList.add('open');
        hbg.classList.add('open');
      }
    });
    mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mob.classList.remove('open');
      hbg.classList.remove('open');
    }));
  }
}

function initFooter() {
  const ph = document.getElementById('footer-placeholder');
  if (ph) ph.outerHTML = FOOTER_HTML;
}

// Sidebar active tracking
function initSidebarTracking() {
  const sections = document.querySelectorAll('.content-section[id]');
  if (!sections.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        document.querySelectorAll('.sb-link').forEach(l => l.classList.remove('active'));
        const link = document.querySelector(`.sb-link[href="#${e.target.id}"]`);
        if (link) link.classList.add('active');
      }
    });
  }, {threshold: 0.4, rootMargin: '-80px 0px -60% 0px'});
  sections.forEach(s => io.observe(s));
}

// Reveal animations
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }});
  }, {threshold: .08, rootMargin: '0px 0px -40px 0px'});
  document.querySelectorAll('.fi:not(.in)').forEach(el => io.observe(el));
}

// Image fallbacks

function initLightbox(){
  setTimeout(function(){
    document.querySelectorAll('.cs-img img').forEach(function(img){
      img.style.cursor='zoom-in';
      img.addEventListener('click',function(){
        var ov=document.createElement('div');
        ov.className='lb-overlay';
        var i=document.createElement('img');
        i.className='lb-img';i.src=this.src;
        var cls=document.createElement('button');
        cls.className='lb-close';cls.innerHTML='&times;';
        cls.onclick=function(){ov.remove()};
        ov.appendChild(i);ov.appendChild(cls);
        document.body.appendChild(ov);
        ov.addEventListener('click',function(e){if(e.target===ov)ov.remove()});
        document.addEventListener('keydown',function k(e){if(e.key==='Escape'){ov.remove();document.removeEventListener('keydown',k)}});
      });
    });
  }, 300);
}

// Scroll progress bar
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  document.body.prepend(bar);
  function update() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', update, {passive: true});
  update();
}

// Cursor-tracking spotlight glow on cards
function initCardGlow() {
  document.querySelectorAll('.feat-item, .subsys-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });
}

function initFallbacks() {
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => { img.style.display='none'; if(img.parentElement) img.parentElement.style.background='linear-gradient(135deg,#073F62,#0E5C8B)'; });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initFooter();
  initSidebarTracking();
  initReveal();
  initFallbacks();
  initLightbox();
  initScrollProgress();
  initCardGlow();
});

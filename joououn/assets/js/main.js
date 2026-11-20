/* Dependencies: none. Menu, carousel, scroll state, original-video dialog. */
(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const header = $('#header'), topLink = $('.back-to-top'), nav = $('#navbar'), toggle = $('.menu-toggle');
  const closeMenu = () => { nav.classList.remove('nav-open'); toggle.setAttribute('aria-expanded','false'); toggle.setAttribute('aria-label','메뉴 열기'); };
  toggle.addEventListener('click', () => { const open = nav.classList.toggle('nav-open'); toggle.setAttribute('aria-expanded',String(open)); toggle.setAttribute('aria-label',open ? '메뉴 닫기' : '메뉴 열기'); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('click',e => { if(!nav.contains(e.target)) closeMenu(); });
  document.addEventListener('keydown',e => { if(e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize',() => { if(window.innerWidth > 991) closeMenu(); });
  const syncScroll = () => { header.classList.toggle('header-scrolled',window.scrollY > 50); topLink.classList.toggle('active',window.scrollY > 400); };
  window.addEventListener('scroll',syncScroll,{passive:true}); syncScroll();
  const slides = [...document.querySelectorAll('.hero-slide')], dots = [...document.querySelectorAll('.hero-pagination button:not(.slide-pause)')], pause = $('.slide-pause');
  let current = 0, timer = null, userPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const show = (index) => { current = (index + slides.length) % slides.length; slides.forEach((slide,i) => { slide.hidden = i !== current; slide.classList.toggle('active',i === current); dots[i].classList.toggle('active',i === current); dots[i].setAttribute('aria-pressed',String(i === current)); }); };
  const stop = () => { clearInterval(timer); timer = null; };
  const start = () => { stop(); if(!userPaused && !document.hidden) timer = setInterval(() => show(current + 1),6500); };
  $('.hero-control.prev').addEventListener('click',() => { show(current - 1); start(); });
  $('.hero-control.next').addEventListener('click',() => { show(current + 1); start(); });
  dots.forEach((dot,i) => dot.addEventListener('click',() => { show(i); start(); }));
  const syncPause = () => { pause.textContent = userPaused ? '▶' : 'Ⅱ'; pause.setAttribute('aria-label',userPaused ? '자동 슬라이드 재생' : '자동 슬라이드 정지'); };
  pause.addEventListener('click',() => { userPaused = !userPaused; syncPause(); start(); });
  $('#hero').addEventListener('mouseenter',stop); $('#hero').addEventListener('mouseleave',start);
  $('#hero').addEventListener('focusin',stop); $('#hero').addEventListener('focusout',e => { if(!$('#hero').contains(e.relatedTarget)) start(); });
  document.addEventListener('visibilitychange',start); syncPause(); start();
  if('IntersectionObserver' in window) {
    const activeObserver = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) { nav.querySelectorAll('a[href^="#"]').forEach(a => a.classList.toggle('active',a.getAttribute('href') === '#' + entry.target.id)); } }); }, {rootMargin:'-20% 0px -55% 0px'});
    ['company','business','recruit','contact'].forEach(id => activeObserver.observe(document.getElementById(id)));
    if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches) { const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); } }),{threshold:0.08}); document.querySelectorAll('.business-card,.vision-content,.project-row,.recruit-copy').forEach(el => { el.classList.add('reveal-ready'); revealObserver.observe(el); }); }
  }
  const dialog = $('#video-dialog'), frame = $('.video-frame');
  $('.play-btn').addEventListener('click',() => { frame.innerHTML = '<iframe src="https://www.youtube.com/embed/M0I6hrmpm3k?autoplay=1&rel=0" title="두 번째 사이트 원본 배경 영상" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>'; dialog.showModal(); });
  $('.video-close').addEventListener('click',() => dialog.close());
  dialog.addEventListener('close',() => { frame.innerHTML = ''; });
  dialog.addEventListener('click',e => { if(e.target === dialog) { const r = dialog.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close(); } });
})();

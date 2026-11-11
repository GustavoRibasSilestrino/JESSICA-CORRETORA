/* Jessica Albuquerque
   1) liga o scroll à câmera: aproxima da casa, abre a porta, entra
   2) revela as seções
   3) monta a mensagem do WhatsApp */
(() => {
  const root = document.documentElement;
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const still = root.classList.contains('still');

  /* ---------- WhatsApp: um único lugar para trocar o número (data-whatsapp no <body>) ---------- */
  const numero = (document.body.dataset.whatsapp || '').replace(/\D/g, '');
  const wa = (texto) => `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
  $$('a[data-wa]').forEach((a) => {
    const atual = new URL(a.href);
    a.href = wa(atual.searchParams.get('text') || 'Olá, Jessica. Vim pelo site e gostaria de conversar.');
    a.target = '_blank';
    a.rel = 'noopener';
  });

  const form = $('#form');
  if (form) {
    const nome = form.elements.nome;
    const erro = $('#f-nome-erro');
    nome.addEventListener('input', () => { erro.hidden = true; nome.removeAttribute('aria-invalid'); });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const n = nome.value.trim();
      if (!n) {
        erro.hidden = false;
        nome.setAttribute('aria-invalid', 'true');
        nome.focus();
        return;
      }
      const interesse = form.elements.interesse.value;
      const msg = form.elements.mensagem.value.trim();
      const texto = `Olá, Jessica. Meu nome é ${n}. Vim pelo site e gostaria de ${interesse}.${msg ? ' ' + msg : ''}`;
      window.open(wa(texto), '_blank', 'noopener');
    });
  }

  /* ---------- revelações ---------- */
  const alvos = $$('.rv-img');
  if (still || !('IntersectionObserver' in window)) {
    alvos.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entradas) => {
      entradas.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -6% 0px' });
    alvos.forEach((el) => io.observe(el));
  }

  const intro = $('.intro');
  const stage = $('.stage');
  const hero = $('.hero');
  const top = $('.top');
  if (!intro || !stage) return;

  // o topo é claro sobre a foto da sala e ganha fundo quando a página segue
  const topo = () => top.classList.toggle('solid', window.scrollY > intro.offsetTop + intro.offsetHeight - top.offsetHeight - 1);

  if (still) {
    topo();
    window.addEventListener('scroll', topo, { passive: true });
    window.addEventListener('resize', topo);
    return;
  }

  /* ---------- câmera ----------
     A foto tem 1672 x 941. A porta ocupa 8,553% da largura e 27,74% da altura,
     e é o ponto de fuga: tudo cresce a partir dela. */
  const FOTO = 941 / 1672;
  const PORTA_L = 0.08553;
  const PORTA_A = 0.2774;

  const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
  const suave = (t) => t * t * (3 - 2 * t);
  const vaiEVem = (t) => (t < 0.5 ? 2 * t * t : 1 - 2 * (1 - t) * (1 - t));

  const P_CHEGA = 0.62;  // chega diante da porta
  const P_ABRE = 0.76;   // porta aberta
  const P_DENTRO = 0.9;  // atravessou
  let sAbre = 3, sFim = 12, introTop = 0, range = 1, vh = 1;

  const medir = () => {
    vh = stage.clientHeight;
    const vw = stage.clientWidth;
    const largura = Math.max(vw, 1.02 * vh);   // mesma conta do --w no CSS
    const portaA = largura * FOTO * PORTA_A;
    const portaL = largura * PORTA_L;
    sAbre = Math.max(1.7, (0.66 * vh) / portaA);                               // porta com 2/3 da altura da tela
    sFim = Math.max((vw * 1.3) / portaL, (vh * 1.2) / portaA, sAbre * 2.4);    // o vão cobre a tela inteira
    introTop = intro.offsetTop;
    range = Math.max(1, intro.offsetHeight - vh);
  };

  // andar a passo constante em direção a um plano faz a escala crescer como 1 / (1 - u)
  const escala = (p) => {
    if (p <= P_CHEGA) return 1 / (1 - (1 - 1 / sAbre) * vaiEVem(p / P_CHEGA));
    if (p <= P_ABRE) return sAbre * (1 + 0.12 * ((p - P_CHEGA) / (P_ABRE - P_CHEGA)));
    const t = clamp01((p - P_ABRE) / (P_DENTRO - P_ABRE));
    const a = sAbre * 1.12;
    return a * Math.pow(sFim / a, 0.25 * t + 0.75 * t * t);
  };

  let alvo = 0, atual = -1, raf = 0;
  const desenhar = (p) => {
    const s = stage.style;
    s.setProperty('--p', p.toFixed(4));
    s.setProperty('--s', escala(p).toFixed(4));
    s.setProperty('--open', suave(clamp01((p - 0.63) / 0.13)).toFixed(3));
    s.setProperty('--in', clamp01((p - 0.86) / 0.06).toFixed(3));
    s.setProperty('--in2', suave(clamp01((p - 0.9) / 0.06)).toFixed(3));
    const heroOn = p > 0.895;
    stage.classList.toggle('heroon', heroOn);
    stage.classList.toggle('inside', p > 0.93);
    hero.inert = !heroOn;
    root.classList.toggle('site-on', p > 0.955);
  };
  const quadro = () => {
    raf = 0;
    const dif = alvo - atual;
    atual = Math.abs(dif) < 0.0004 ? alvo : atual + dif * 0.16;
    desenhar(atual);
    if (atual !== alvo) raf = requestAnimationFrame(quadro);
  };
  const aoRolar = () => {
    const y = window.scrollY - introTop;
    alvo = clamp01(y / range);
    topo();
    if (!raf) raf = requestAnimationFrame(quadro);
  };

  medir();
  atual = clamp01((window.scrollY - introTop) / range);
  aoRolar();
  desenhar(atual);
  window.addEventListener('scroll', aoRolar, { passive: true });
  window.addEventListener('resize', () => { medir(); aoRolar(); desenhar(atual); });

  $('.skipintro').addEventListener('click', () => {
    window.scrollTo({ top: introTop + range + 1, behavior: 'instant' });
    hero.inert = false;
    const h1 = $('h1', hero);
    h1.setAttribute('tabindex', '-1');
    h1.focus({ preventScroll: true });
  });
})();

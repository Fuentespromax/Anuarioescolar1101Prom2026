/* ==========================================================
   JAVASCRIPT DEL LIBRO
   1) Armar las páginas desde datos.js   2) Ajustar textos largos
   3) Índice y buscador                  4) Pasar páginas
   Para cambiar un texto, edita datos.js. Para cambiar el diseño, styles.css.
   ========================================================== */

const FOTO_VACIA = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 400"><rect width="300" height="400" fill="#d9d9d4"/>' +
  '<circle cx="150" cy="150" r="55" fill="#b9b9b2"/><path d="M50 400c0-90 45-140 100-140s100 50 100 140z" fill="#b9b9b2"/></svg>');
const FIRMA_VACIA = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100"><rect width="350" height="100" fill="#fff"/></svg>');

const $ = (sel, raiz = document) => raiz.querySelector(sel);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const contenedor   = $('#paginas');
const btnAnterior  = $('#btn-anterior');
const btnSiguiente = $('#btn-siguiente');
const indicador    = $('#indicador');
const reducirMovimiento = matchMedia('(prefers-reduced-motion: reduce)');
const movil = matchMedia('(max-width: 700px)');

/* ---------- 1) PIEZAS REUTILIZABLES ---------- */
const ICONOS = {
  persona: '<circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  corazon: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
  estrella: '<path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z"/>',
  diana: '<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/><path d="M13 11l8-8M17 3h4v4"/>',
  manos: '<path d="M11 17l2 2a1 1 0 1 0 3-3"/><path d="M14 14l2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a2 2 0 0 0 1.4.2L21 4"/><path d="M21 3l1 11h-2"/><path d="M3 3L2 14l6.5 6.5a1 1 0 1 0 3-3"/><path d="M3 4h8"/>',
  lapiz: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5z"/><path d="M15 5l4 4"/>',
  libro: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5M9 7h6"/>'
};
const icono = k => `<span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONOS[k]}</svg></span>`;
const rotulo = (ico, texto, color) => `<h3 class="rotulo">${icono(ico)}<span class="pincel ${color}">${esc(texto)}</span></h3>`;

const decoracion = (rasgado = true) =>
  `<div class="d d-esquina"><svg viewBox="848 0 176 125" aria-hidden="true"><path fill="#0f4a2e" d="M850 0H925L1024 70V125Z"/><path fill="#f6d12b" d="M925 0H975L1024 36V70Z"/><path fill="#d42a22" d="M975 0H1024V36Z"/></svg></div>` +
  `<div class="d d-onda"><svg viewBox="0 1406 1024 130" preserveAspectRatio="none" aria-hidden="true"><use href="#g-onda"/></svg></div>` +
  (rasgado ? `<div class="d d-rasgado"><svg viewBox="0 1170 290 366" aria-hidden="true"><use href="#g-rasgado"/></svg></div>` : '');

const cabecera = () => `
  <header class="cabecera">
    <svg class="cab-deco" viewBox="0 0 1024 400" aria-hidden="true">
      <g fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M105 214Q300 174 505 150" stroke="#f6d12b" stroke-width="9"/>
        <path d="M262 308Q380 288 480 274" stroke="#f6d12b" stroke-width="7"/>
        <path d="M190 389Q290 381 380 353" stroke="#0f4a2e" stroke-width="6"/>
        <path d="M300 376Q380 366 440 352" stroke="#f6d12b" stroke-width="5"/>
        <path d="M386 360L440 348" stroke="#d42a22" stroke-width="4"/>
        <g stroke="#0f4a2e" stroke-width="3.6">
          <path d="M52 42l6 56M34 120l14 8"/>
          <path d="M478 244l5-38 17 20 10-30 12 30 15-18-4 36z"/>
        </g>
      </g>
    </svg>
    <p class="institucion">${esc(LIBRO.colegio)}</p>
    <p class="titulo" aria-hidden="true"><span class="t1">Promoción</span><span class="t2">2026</span></p>
    <p class="subtitulo">${esc(LIBRO.lema)}</p>
    <img class="escudo" src="img/escudo.png" alt="Escudo de la ${esc(LIBRO.colegio)}">
  </header>`;

const marcoFoto = (src, alt, claseImg) => `
  <figure class="marco">
    <span class="franja"></span>
    <div class="foto"><img class="${claseImg}" src="${esc(src)}" alt="${esc(alt)}"></div>
    <span class="cinta cinta-amarilla"></span><span class="cinta cinta-roja"></span>
  </figure>`;

/* ---------- 2) PÁGINAS ---------- */
function paginaPortada() {
  return `<header class="hoja portada" id="portada">
    ${decoracion()}${cabecera()}
    <div class="cuerpo">
      ${marcoFoto('img/grado-grupal.jpg', 'Foto grupal de la promoción 1101', 'foto-grupal')}
      <div class="portada-pie">
        <p class="portada-colegio">${esc(LIBRO.titulo)}</p>
        <p class="portada-anuario"><span class="pincel amarillo">${esc(LIBRO.grupo)} · Generación 2026</span></p>
        <p class="portada-grado">${esc(LIBRO.piefoto)}</p>
      </div>
    </div>
  </header>`;
}

function paginaPersona(p, i) {
  const doc = p.rol === 'docente';
  const aspiraciones = p.aspiraciones.length > 1
    ? `<ul class="lista${p.aspiraciones.length > 3 && p.aspiraciones.every(a => a.length < 44) ? ' dos' : ''}">${p.aspiraciones.map(a => `<li>${esc(a)}</li>`).join('')}</ul>`
    : `<p>${esc(p.aspiraciones[0] || '')}</p>`;
  const agradecimientos = p.agradecimientos.split(/\n\n+/).map(t => `<p>${esc(t)}</p>`).join('');
  return `<article class="hoja persona" id="persona-${i + 1}" data-nombre="${esc(p.nombre)}">
    ${decoracion()}${cabecera()}
    <div class="cuerpo">
      <div class="garabatos"><svg viewBox="0 0 1024 1536" aria-hidden="true"><use href="#g-garabatos"/></svg></div>
      ${marcoFoto('img/' + p.foto, 'Foto de ' + p.nombre, 'persona-foto')}
      <div class="cuadros"><i></i><i></i><i></i></div>
      <p class="lema-mano">${esc(LIBRO.frasePagina)}</p>
      <div class="col">
        <section class="campo campo-nombre">
          ${rotulo('persona', doc ? 'Nombre del docente' : 'Nombre', 'amarillo')}
          <h2 class="nombre-texto">${esc(p.nombre)}</h2>
        </section>
        <section class="campo campo-flex" style="--g:162">
          ${rotulo('corazon', 'Frase favorita', 'verde')}
          <div class="caja caja-frase"><p class="frase">${esc(p.frase)}</p></div>
        </section>
        <section class="campo campo-flex campo-recuerdo" style="--g:154">
          ${rotulo('estrella', 'Mejor recuerdo', 'amarillo')}
          <div class="caja"><p>${esc(p.recuerdo)}</p></div>
        </section>
        <section class="campo campo-flex" style="--g:157">
          ${rotulo('diana', 'Aspiraciones a futuro', 'verde')}
          <div class="caja">${aspiraciones}</div>
        </section>
        <section class="campo campo-flex campo-agradecimientos" style="--g:192">
          ${rotulo('manos', 'Agradecimientos', 'amarillo')}
          <div class="caja">${agradecimientos}</div>
          <button type="button" class="mas" hidden>Leer completo</button>
        </section>
        <section class="campo campo-firma">
          ${rotulo('lapiz', doc ? 'Firma del docente' : 'Firma del estudiante', 'verde')}
          <div class="firma-linea"><img class="persona-firma" src="img/${esc(p.firma)}" alt="Firma de ${esc(p.nombre)}"></div>
        </section>
      </div>
    </div>
    <p class="folio"></p>
  </article>`;
}

const paginaIndice = () => `<section class="hoja" id="indice">
  ${decoracion()}${cabecera()}
  <div class="cuerpo"><div class="seccion">
    ${rotulo('libro', 'Índice', 'amarillo')}
    <ol class="indice-lista" id="indice-lista"></ol>
  </div></div>
  <p class="folio"></p>
</section>`;

const paginaMensaje = () => `<section class="hoja" id="mensaje" data-titulo="Mensaje final">
  ${decoracion()}${cabecera()}
  <div class="cuerpo"><div class="seccion">
    ${rotulo('corazon', 'Mensaje final', 'verde')}
    <h2 class="mensaje-titulo">${esc(LIBRO.mensaje.titulo)}</h2>
    <p class="mensaje-saludo">${esc(LIBRO.mensaje.saludo)}</p>
    ${LIBRO.mensaje.parrafos.map(t => `<p class="texto-mensaje">${esc(t)}</p>`).join('')}
    <p class="mensaje-firma">${esc(LIBRO.mensaje.firma)}</p>
  </div></div>
  <p class="folio"></p>
</section>`;

const paginaContra = () => `<footer class="hoja contra" id="contraportada">
  ${decoracion(false)}
  <div class="cuerpo">
    <img class="escudo-g" src="img/escudo-dorado.png" alt="Escudo dorado de la ${esc(LIBRO.colegio)}">
    <p class="c-esc">Institución Educativa</p>
    <p class="c-nom">Eugenio Ferro Falla</p>
    <div class="c-bar"><i></i><i></i><i></i></div>
    <p class="c-pie">${esc(LIBRO.titulo)} · ${esc(LIBRO.grupo)}</p>
  </div>
</footer>`;

contenedor.insertAdjacentHTML('beforeend',
  paginaPortada() + paginaIndice() + PERSONAS.map(paginaPersona).join('') + paginaMensaje() + paginaContra());

const paginas = Array.from(contenedor.querySelectorAll('.hoja'));
paginas.forEach(p => p.classList.add('oculto'));
let actual = 0, animando = false;

/* Fotos y firmas de relleno si falta un archivo */
contenedor.querySelectorAll('.persona-foto').forEach(img => img.addEventListener('error', () => { img.src = FOTO_VACIA; }));
contenedor.querySelectorAll('.persona-firma').forEach(img => img.addEventListener('error', () => { img.src = FIRMA_VACIA; }));

/* Numerar: la portada es la página 1 y no lleva número */
paginas.forEach((p, i) => { const f = $('.folio', p); if (f) f.textContent = i + 1; });

/* ---------- 3) AJUSTE DE TEXTOS LARGOS ----------
   La hoja tiene un alto fijo. Si los textos no caben, primero se baja un poco el tamaño de
   letra; si aun así no caben, el cuadro de Agradecimientos se recorta y aparece "Leer completo". */
function ajustar(p) {
  if (!p.classList.contains('persona') || p.dataset.ajustado) return;
  const col = $('.col', p);
  const campo = $('.campo-agradecimientos', p);
  const boton = $('.mas', campo);
  const nom = $('.nombre-texto', p);
  const sobra = () => col.scrollHeight > col.clientHeight + 1;

  p.style.removeProperty('--fs'); p.style.removeProperty('--fn'); p.style.removeProperty('--ff');
  campo.classList.remove('recortado'); boton.hidden = true;
  if (movil.matches) return;                             // en el celular la hoja crece, no hace falta

  let fn = 36; nom.style.setProperty('--fn', fn);        // nombre: una sola línea
  while (nom.scrollWidth > nom.clientWidth + 1 && fn > 18) { fn -= 1; nom.style.setProperty('--fn', fn); }

  let fs = 25, ff = 38;                                  // textos 25 → 16 y frase 38 → 26 (unidades de plantilla)
  p.style.setProperty('--fs', fs); p.style.setProperty('--ff', ff);
  while (sobra() && (fs > 16 || ff > 26)) {
    if (ff > 26 && (ff - 26) / 12 >= (fs - 16) / 9) ff -= 1; else if (fs > 16) fs -= 0.5; else ff -= 1;
    p.style.setProperty('--fs', fs); p.style.setProperty('--ff', ff);
  }
  if (sobra()) {                                         // todavía no cabe: recortar Agradecimientos
    campo.classList.add('recortado');
    const caja = $('.caja', campo);
    boton.hidden = caja.scrollHeight <= caja.clientHeight + 1;
    if (boton.hidden) campo.classList.remove('recortado');
  }
  p.dataset.ajustado = '1';
}
function reajustarTodo() { paginas.forEach(p => delete p.dataset.ajustado); ajustar(paginas[actual]); }

const dialogo = $('#lectura');
contenedor.addEventListener('click', e => {
  const b = e.target.closest('.mas'); if (!b) return;
  const p = b.closest('.persona'); const datos = PERSONAS[Number(p.id.split('-')[1]) - 1];
  $('#lectura-sub').textContent = 'Agradecimientos';
  $('#lectura-nombre').textContent = datos.nombre;
  $('#lectura-texto').innerHTML = datos.agradecimientos.split(/\n\n+/).map(t => `<p>${esc(t)}</p>`).join('');
  dialogo.showModal();
});
dialogo.addEventListener('click', e => { if (e.target === dialogo) dialogo.close(); });

/* ---------- 4) ÍNDICE Y BUSCADOR ---------- */
const conIndice = paginas.filter(p => p.classList.contains('persona') || p.id === 'mensaje');
const nombreDe = p => p.dataset.nombre || p.dataset.titulo;
const lista = $('#indice-lista');
conIndice.forEach((p, i) => {
  const li = document.createElement('li'), b = document.createElement('button');
  b.type = 'button';
  b.innerHTML = '<span class="num"></span><span class="nom"></span><span class="puntos"></span><span class="pag"></span>';
  $('.num', b).textContent = String(i + 1).padStart(2, '0');
  $('.nom', b).textContent = nombreDe(p);
  $('.pag', b).textContent = paginas.indexOf(p) + 1;
  b.addEventListener('click', () => { const d = paginas.indexOf(p); mostrar(d, d > actual ? 1 : -1); });
  li.append(b); lista.append(li);
});

const buscador = $('#buscar'), contador = $('#contador');
const sinTildes = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
contador.textContent = PERSONAS.filter(p => p.rol === 'estudiante').length + ' estudiantes';
function buscar(siguiente) {
  const texto = sinTildes(buscador.value.trim());
  buscador.parentElement.classList.remove('sin-resultado');
  if (!texto) return;
  const hallados = conIndice.map(p => paginas.indexOf(p)).filter(i => sinTildes(nombreDe(paginas[i])).includes(texto));
  if (!hallados.length) { buscador.parentElement.classList.add('sin-resultado'); return; }
  const destino = siguiente ? (hallados.find(i => i > actual) ?? hallados[0]) : hallados[0];
  if (destino !== actual) mostrar(destino, destino > actual ? 1 : -1);
}
buscador.addEventListener('input', () => buscar(false));
buscador.addEventListener('keydown', e => { if (e.key === 'Enter') buscar(true); });

/* ---------- 5) PASAR PÁGINAS ----------
   Al pasar hacia adelante, la hoja actual gira sobre su borde izquierdo y deja ver la siguiente.
   Al volver, la hoja anterior vuelve a caer encima. En celular solo se desvanece. */
function actualizarVista() {
  const p = paginas[actual];
  indicador.textContent = actual === 0 ? 'Portada' : actual === paginas.length - 1 ? 'Contraportada' : 'Página ' + (actual + 1) + ' de ' + paginas.length;
  btnAnterior.disabled = actual === 0;
  btnSiguiente.disabled = actual === paginas.length - 1;
  document.title = (p.dataset.nombre ? p.dataset.nombre + ' · ' : '') + 'Anuario 2026 · PROM 1101';
  history.replaceState(null, '', actual === 0 ? location.pathname + location.search : '#' + p.id);
  ajustar(p);
}

function mostrar(nuevo, direccion) {
  nuevo = Math.max(0, Math.min(nuevo, paginas.length - 1));
  const vieja = paginas[actual], nueva = paginas[nuevo];
  if (!direccion || reducirMovimiento.matches || vieja === nueva) {
    paginas.forEach(p => p.classList.add('oculto'));
    nueva.classList.remove('oculto'); actual = nuevo; actualizarVista(); return;
  }
  if (animando) return;
  animando = true;
  const sig = direccion > 0;

  const terminar = () => {
    vieja.classList.add('oculto'); vieja.classList.remove('gira-sale', 'fade-sale');
    nueva.classList.remove('gira-entra', 'fade-entra');
    animando = false;
    if (movil.matches) window.scrollTo({ top: 0 });
  };
  if (movil.matches) {                                   // celular: se desvanece, una y luego la otra
    vieja.classList.add('fade-sale');
    setTimeout(() => {
      vieja.classList.add('oculto'); vieja.classList.remove('fade-sale');
      nueva.classList.remove('oculto'); nueva.classList.add('fade-entra');
      actual = nuevo; actualizarVista();
      setTimeout(terminar, 260);
    }, 170);
    return;
  }
  nueva.classList.remove('oculto'); actual = nuevo; actualizarVista();
  if (sig) { vieja.classList.add('gira-sale'); setTimeout(terminar, 780); }
  else     { nueva.classList.add('gira-entra'); setTimeout(terminar, 780); }
}

const pasar = paso => { const d = actual + paso; if (d >= 0 && d < paginas.length) mostrar(d, paso); };
btnSiguiente.addEventListener('click', () => pasar(1));
btnAnterior.addEventListener('click', () => pasar(-1));
document.addEventListener('keydown', e => {
  if (e.target.closest('input') || dialogo.open) return;
  if (e.key === 'ArrowRight') pasar(1);
  if (e.key === 'ArrowLeft') pasar(-1);
});
let toqueX = null, toqueY = null;                        // deslizar el dedo en el celular
document.addEventListener('touchstart', e => { toqueX = e.touches[0].clientX; toqueY = e.touches[0].clientY; }, { passive: true });
document.addEventListener('touchend', e => {
  if (toqueX === null) return;
  const dx = e.changedTouches[0].clientX - toqueX, dy = e.changedTouches[0].clientY - toqueY; toqueX = null;
  if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.6) pasar(dx < 0 ? 1 : -1);
}, { passive: true });

/* Cuando cargan las tipografías o cambia de celular a computador, se vuelve a ajustar */
if (document.fonts && document.fonts.ready) document.fonts.ready.then(reajustarTodo);
movil.addEventListener('change', reajustarTodo);

/* ---------- Inicio: abre la página del enlace (#persona-5) o la portada ---------- */
const inicio = paginas.findIndex(p => '#' + p.id === location.hash);
mostrar(inicio > 0 ? inicio : 0, 0);

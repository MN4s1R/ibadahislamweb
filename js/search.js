// search.js — lightweight client-side search (no backend needed)
// Each entry maps a searchable topic to the page + section anchor it lives on.
const SEARCH_INDEX = [
  { title: 'Maksud & Hukum Akikah', page: 'akikah.html#t1' },
  { title: 'Binatang Disyariatkan (Akikah)', page: 'akikah.html#t2' },
  { title: 'Syarat Sah Akikah', page: 'akikah.html#t3' },
  { title: 'Tempoh Sunat Akikah', page: 'akikah.html#t4' },
  { title: 'Pembahagian Daging Akikah', page: 'akikah.html#t5' },
  { title: 'Hikmah Akikah', page: 'akikah.html#t6' },

  { title: 'Maksud & Hukum Korban', page: 'korban.html#t1' },
  { title: 'Binatang Disyariatkan (Korban)', page: 'korban.html#t2' },
  { title: 'Syarat Sah Korban', page: 'korban.html#t3' },
  { title: 'Tempoh Masa Pelaksanaan Korban', page: 'korban.html#t4' },
  { title: 'Pembahagian Daging Korban', page: 'korban.html#t5' },
  { title: 'Hikmah Korban', page: 'korban.html#t6' },

  { title: 'Maksud & Hukum Sembelihan', page: 'sembelihan.html#t1' },
  { title: 'Rukun Sembelihan', page: 'sembelihan.html#t2' },
  { title: 'Syarat Sah Sembelihan', page: 'sembelihan.html#t3' },
  { title: 'Perkara Makruh Sembelihan', page: 'sembelihan.html#t4' },
  { title: 'Hikmah Sembelihan', page: 'sembelihan.html#t5' },
  { title: 'Info Lanjut (Ketetapan Fatwa)', page: 'sembelihan.html#t6' },

  { title: 'Tentang Laman Ini', page: 'about.html' },
  { title: 'Hubungi Kami', page: 'contact.html' },
];

document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.getElementById('searchWrap');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const toggleBtn = document.getElementById('searchToggle');
  if (!wrap || !input || !results || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    wrap.classList.toggle('open');
    if (wrap.classList.contains('open')) input.focus();
    else results.classList.remove('show');
  });

  const render = (query) => {
    const q = query.trim().toLowerCase();
    if (!q) { results.classList.remove('show'); results.innerHTML = ''; return; }

    const matches = SEARCH_INDEX.filter(item => item.title.toLowerCase().includes(q));
    results.innerHTML = matches.length
      ? matches.map(m => `<a href="${m.page}">${m.title}</a>`).join('')
      : '<div class="empty">Tiada hasil ditemui.</div>';
    results.classList.add('show');
  };

  input.addEventListener('input', (e) => render(e.target.value));

  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) results.classList.remove('show');
  });
});

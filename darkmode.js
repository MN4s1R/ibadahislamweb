// darkmode.js — theme toggle, remembers the user's choice
(() => {
  const STORAGE_KEY = 'panduan-ibadah-theme';
  const root = document.documentElement;

  // Apply saved theme immediately (before paint) to avoid a flash
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') root.setAttribute('data-theme', 'dark');

  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    const updateIcon = () => {
      btn.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
    };
    updateIcon();

    btn.addEventListener('click', () => {
      const isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        localStorage.setItem(STORAGE_KEY, 'light');
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem(STORAGE_KEY, 'dark');
      }
      updateIcon();
    });
  });
})();
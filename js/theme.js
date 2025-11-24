// theme.js — robusto: verifica existência, usa localStorage, aplica no load
(function(){
  const KEY = 'dn-theme';
  const btn = document.getElementById('theme-toggle');

  function setTheme(theme){
    document.body.classList.remove('light','dark','light-theme','dark-theme');
    if(theme === 'dark'){
      document.body.classList.add('dark');
      document.body.classList.add('dark-theme');
      if(btn) btn.textContent = '☀️';
    } else {
      document.body.classList.add('light');
      document.body.classList.add('light-theme');
      if(btn) btn.textContent = '🌙';
    }
    try{ localStorage.setItem(KEY, theme); }catch(e){}
  }

  // inicial
  const saved = (function(){ try{ return localStorage.getItem(KEY) }catch(e){return null} })() || 'light';
  setTheme(saved);

  // clique
  if(btn){
    btn.addEventListener('click', () => {
      const isDark = document.body.classList.contains('dark');
      setTheme(isDark ? 'light' : 'dark');
      // small animation
      btn.animate([{ transform:'scale(1)' },{ transform:'scale(.86) rotate(8deg)' },{ transform:'scale(1)' }], { duration:380 });
    });
  }
})();
const themeToggle = document.getElementById('theme-toggle');

// Checa tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

// Alterna tema
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

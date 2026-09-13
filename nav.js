(function(){
  var b=document.body, btn=document.getElementById('lang');
  if(localStorage.getItem('lang')==='fr'){b.classList.add('fr');}
  function sync(){var fr=b.classList.contains('fr');btn.textContent=fr?'EN':'FR';document.documentElement.lang=fr?'fr':'en';}
  sync();
  btn.onclick=function(){b.classList.toggle('fr');localStorage.setItem('lang',b.classList.contains('fr')?'fr':'en');sync();};
  var here=(location.pathname.split('/').pop()||'index.html');
  document.querySelectorAll('.site-nav a').forEach(function(a){
    if(a.getAttribute('href')===here) a.classList.add('on');
  });
})();

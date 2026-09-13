(function(){
  var b=document.body, btn=document.getElementById('lang');

  /* language */
  if(localStorage.getItem('lang')==='fr') b.classList.add('fr');
  function sync(){var fr=b.classList.contains('fr');btn.textContent=fr?'EN':'FR';
    document.documentElement.lang=fr?'fr':'en';}
  sync();
  btn.onclick=function(){b.classList.toggle('fr');
    localStorage.setItem('lang',b.classList.contains('fr')?'fr':'en');sync();};

  /* active nav */
  var here=(location.pathname.split('/').pop()||'index.html');
  document.querySelectorAll('.site-nav a').forEach(function(a){
    if(a.getAttribute('href')===here) a.classList.add('on');
  });

  /* reading progress */
  var bar=document.createElement('div'); bar.id='prog'; document.body.appendChild(bar);
  function prog(){
    var h=document.documentElement;
    var max=h.scrollHeight-h.clientHeight;
    bar.style.width=(max>0?(h.scrollTop/max*100):0)+'%';
  }
  addEventListener('scroll',prog,{passive:true}); prog();

  /* scroll reveal */
  var targets=document.querySelectorAll('main section, .teaser, .case, .pub, .row');
  targets.forEach(function(el,i){ el.classList.add('rise'); });
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.style.transitionDelay=(Math.min(e.target.dataset.i||0,4)*55)+'ms';
          e.target.classList.add('in'); io.unobserve(e.target);
        }
      });
    },{rootMargin:'0px 0px -8% 0px',threshold:.06});
    targets.forEach(function(el,i){ el.dataset.i=i%5; io.observe(el); });
  } else {
    targets.forEach(function(el){ el.classList.add('in'); });
  }
})();

(function(){
  var b=document.body, btn=document.getElementById('lang');
  if('IntersectionObserver' in window) document.documentElement.classList.add('js');
  if(localStorage.getItem('lang')==='fr') b.classList.add('fr');
  function sync(){var fr=b.classList.contains('fr');btn.textContent=fr?'EN':'FR';
    document.documentElement.lang=fr?'fr':'en';}
  sync();
  btn.onclick=function(){b.classList.toggle('fr');
    localStorage.setItem('lang',b.classList.contains('fr')?'fr':'en');sync();};

  var here=(location.pathname.split('/').pop()||'index.html');
  document.querySelectorAll('.nav a').forEach(function(a){
    if(a.getAttribute('href')===here) a.classList.add('on');});

  var bar=document.createElement('div');bar.id='prog';b.appendChild(bar);
  function prog(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight;
    bar.style.width=(m>0?h.scrollTop/m*100:0)+'%';}
  addEventListener('scroll',prog,{passive:true});prog();

  /* count-up stats */
  function countUp(el){
    if(el.dataset.done) return; el.dataset.done=1;
    var end=parseFloat(el.dataset.to), dec=(el.dataset.to.split('.')[1]||'').length,
        suf=el.dataset.suf||'', t0=null, dur=1100;
    function step(t){ if(!t0)t0=t; var p=Math.min((t-t0)/dur,1);
      var e=1-Math.pow(1-p,3);
      el.textContent=(end*e).toFixed(dec)+suf;
      if(p<1) requestAnimationFrame(step);
    } requestAnimationFrame(step);
  }

  var io;
  if('IntersectionObserver' in window){
    io=new IntersectionObserver(function(es){
      es.forEach(function(e){ if(!e.isIntersecting) return;
        e.target.classList.add('in');
        e.target.querySelectorAll('[data-to]').forEach(countUp);
        io.unobserve(e.target);
      });
    },{rootMargin:'0px 0px -6% 0px',threshold:.1});
    document.querySelectorAll('.rise,.fig,.stat').forEach(function(el,i){
      if(!el.classList.contains('stat')) el.classList.add('rise');
      el.style.transitionDelay=(i%4*70)+'ms'; io.observe(el);
    });
  } else {
    document.querySelectorAll('.rise').forEach(function(e){e.classList.add('in');});
  }
})();

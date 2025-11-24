// scroll.js — anima elementos com .fade-in e .fade-up usando IntersectionObserver
(function(){
  const items = document.querySelectorAll('.fade-in, .fade-up');
  if(!items || items.length === 0) return;

  // set animation paused inline so it won't run until visible
  items.forEach(i=>{
    i.style.animationPlayState = 'paused';
  });

  const obs = new IntersectionObserver((entries, o)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        try{
          e.target.style.animationPlayState = 'running';
          // add small delay based on index for nicer stagger
          // but keep idempotent:
          o.unobserve(e.target);
        }catch(err){}
      }
    });
  }, { threshold: 0.12 });

  items.forEach(i => obs.observe(i));
})();
function irParaSobre() {
  const sobreSection = document.getElementById("sobremim");
  if (sobreSection) {
    sobreSection.scrollIntoView({ behavior: "smooth" });
  }
}


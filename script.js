// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length > 1){
      const el = document.querySelector(href);
      if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
    }
  })
})

// Light/Dark toggle with localStorage
const toggle = document.getElementById('modeToggle');
const setMode = (on) => {
  document.body.classList.toggle('light', on);
  localStorage.setItem('ai-awareness-light', on ? '1' : '0');
};
toggle.addEventListener('change', (e)=> setMode(e.target.checked));
// Initial
try{ toggle.checked = localStorage.getItem('ai-awareness-light') === '1'; setMode(toggle.checked);}catch{ /* ignore */ }

// Quiz logic
const answers = { q1:'b', q2:'b', q3:'a' };
document.getElementById('quizForm').addEventListener('submit', function(e){
  e.preventDefault();
  let score = 0, total = Object.keys(answers).length;
  for(const k in answers){
    const sel = this.querySelector('input[name="'+k+'"]:checked');
    if(sel && sel.value === answers[k]) score++;
  }
  const msg = score === total ? `Perfect! ${score}/${total} 🎉` : `You scored ${score}/${total}. Keep exploring!`;
  document.getElementById('score').textContent = msg;
});

// Enhanced header animations
document.addEventListener('DOMContentLoaded', function() {
  // Add floating animation to logo
  const logo = document.querySelector('.brand .logo');
  if(logo) {
    logo.style.animation = 'logoFloat 3s ease-in-out infinite';
  }
  
  // Add slide-in animation to navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach((link, index) => {
    link.style.opacity = '0';
    link.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      link.style.transition = 'all 0.6s ease';
      link.style.opacity = '1';
      link.style.transform = 'translateY(0)';
    }, index * 100);
  });
  
  // Header background color animation
  const header = document.querySelector('header.nav');
  if(header) {
    header.style.background = `
      linear-gradient(45deg, 
        rgba(108, 139, 253, 0.2), 
        rgba(138, 91, 255, 0.2), 
        rgba(57, 217, 138, 0.2)
      )
    `;
    header.style.backgroundSize = '300% 300%';
    header.style.animation = 'gradientShift 8s ease infinite';
  }
});

export default function initScrollReveal() {
    ScrollReveal({
        //reset: true,
        distance: '60px',
        duration: 1500,
        delay: 200
      });
      
    ScrollReveal().reveal('.principal_right', { origin: 'right' });
    ScrollReveal().reveal('.img_about, .sobre', { origin: 'top' });
    ScrollReveal().reveal('#skill_descricao', { origin: 'left' });
    ScrollReveal().reveal('#skill_cards', { origin: 'left' });
    ScrollReveal().reveal('.CardsProjetos', { origin: 'bottom' });
    
}
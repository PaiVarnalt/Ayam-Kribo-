// JS for Scroll & Menu Toggle 

    // Mobile menu toggle
    document.getElementById('menu-toggle').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
  });

    // Navbar dynamic movement (unchanged)
    (() => {
      const navbar = document.getElementById('navbar');
      let lastScrollTop = 0;
      let targetY = 0, currentY = 0;
      const range = 15;

      window.addEventListener('scroll', () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;

        if (st < lastScrollTop) {
          document.addEventListener('mousemove', onMouseMove);
          navbar.classList.add('scrolled');
        } else {
          document.removeEventListener('mousemove', onMouseMove);
          navbar.style.transform = 'translateY(0)';
          navbar.classList.remove('scrolled');
        }

        lastScrollTop = st <= 0 ? 0 : st;
      }, { passive: true });

      function onMouseMove(e) {
        const vh = window.innerHeight;
        const mouseY = e.clientY;
        targetY = ((mouseY / vh) * 2 - 1) * range;
        if (!animationFrame) animationFrame = requestAnimationFrame(animate);
      }

      let animationFrame = null;
      function animate() {
        currentY += (targetY - currentY) * 0.15;
        navbar.style.transform = `translateY(${currentY}px)`;
        if (Math.abs(targetY - currentY) > 0.1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          animationFrame = null;
        }
      }
    })();


//geser button
      const scrollContainer = document.getElementById('scrollMenu');
      const scrollLeft = document.getElementById('scrollLeft');
      const scrollRight = document.getElementById('scrollRight');

      scrollLeft.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -250, behavior: 'smooth' });
      });
    
      scrollRight.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 250, behavior: 'smooth' });
      });

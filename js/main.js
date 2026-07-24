// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Gallery tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const galleryPanels = document.querySelectorAll('.gallery-panel');
  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabButtons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      galleryPanels.forEach((panel) => {
        panel.classList.toggle('active', panel.dataset.panel === btn.dataset.tab);
      });
    });
  });

  // Gallery filtering (scoped to the Dog Portraits panel only)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const dogPanel = document.querySelector('[data-panel="dogs"]');
  const filterableCards = dogPanel ? dogPanel.querySelectorAll('.gallery-card') : [];
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      filterableCards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });

  const galleryCards = document.querySelectorAll('.gallery-card');

  // Lightbox
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lightboxMedia = lightbox.querySelector('.lightbox-media');
    const lightboxTitle = lightbox.querySelector('.lightbox-title');
    const lightboxDesc = lightbox.querySelector('.lightbox-desc');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    galleryCards.forEach((card) => {
      card.addEventListener('click', () => {
        lightboxMedia.innerHTML = card.querySelector('img, svg').outerHTML;
        lightboxTitle.textContent = card.dataset.title || '';
        lightboxDesc.textContent = card.dataset.desc || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Commission form -> Formspree AJAX submit (avoids leaving the page)
  const form = document.querySelector('#commission-form');
  if (form) {
    const successMsg = document.querySelector('.form-success');
    const errorMsg = document.querySelector('.form-error');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      successMsg.style.display = 'none';
      errorMsg.style.display = 'none';

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });

        if (response.ok) {
          form.reset();
          successMsg.style.display = 'block';
          successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          errorMsg.style.display = 'block';
        }
      } catch (err) {
        errorMsg.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Commission Request';
      }
    });
  }
});

/**
 * form.js
 * Contact form handler.
 * Currently uses client-side only (no backend).
 * To wire up email: replace the simulateSend function
 * with a fetch() call to Formspree, EmailJS, or your own API.
 *
 * Formspree example (free):
 *   1. Go to https://formspree.io → create form → get endpoint
 *   2. Replace simulateSend with:
 *      fetch('https://formspree.io/f/YOUR_ID', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify({ name, email, message })
 *      });
 */

(function () {
  const form      = document.getElementById('contactForm');
  const submitBtn = form ? form.querySelector('.btn-submit') : null;

  if (!form || !submitBtn) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = form.querySelector('#name').value.trim();
    const email   = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    /* Basic client-side validation */
    if (!name || !email || !message) {
      shakeForm();
      return;
    }
    if (!isValidEmail(email)) {
      shakeInput(form.querySelector('#email'));
      return;
    }

    /* Disable button during send */
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      await simulateSend({ name, email, message }); // ← swap this with real fetch()
      onSuccess();
    } catch (err) {
      onError();
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function simulateSend(data) {
    /* Simulates a 1.2s network call. Replace with real fetch. */
    return new Promise((resolve) => setTimeout(resolve, 1200));
  }

  function onSuccess() {
    submitBtn.textContent = 'Message Sent! ✓';
    submitBtn.classList.add('sent');
    submitBtn.disabled = false;
    form.reset();
    setTimeout(() => {
      submitBtn.textContent = 'Send Message →';
      submitBtn.classList.remove('sent');
    }, 4000);
  }

  function onError() {
    submitBtn.textContent = 'Failed — Try Again';
    submitBtn.style.background = 'linear-gradient(135deg,#ff2d78,#a00)';
    submitBtn.disabled = false;
    setTimeout(() => {
      submitBtn.textContent = 'Send Message →';
      submitBtn.style.background = '';
    }, 3000);
  }

  function shakeForm() {
    form.style.animation = 'none';
    form.style.transform = 'translateX(-6px)';
    setTimeout(() => { form.style.transform = ''; }, 150);
  }

  function shakeInput(input) {
    input.style.borderColor = '#ff2d78';
    input.style.boxShadow = '0 0 0 3px rgba(255,45,120,0.2)';
    input.focus();
    setTimeout(() => {
      input.style.borderColor = '';
      input.style.boxShadow = '';
    }, 2000);
  }
})();

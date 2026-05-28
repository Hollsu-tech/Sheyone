// Disable smooth scroll on hash landing to prevent header jump
if (window.location.hash) {
  document.documentElement.style.scrollBehavior = 'auto';
  window.addEventListener('load', () => {
    const target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView({ block: 'start' });
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = '';
    });
  }, { once: true });
}

// Header scroll effect — class reserved for future styling; no layout change
const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');
if (mobileToggle && nav) {
  mobileToggle.addEventListener('click', () => {
    nav.classList.toggle('mobile-open');
  });
}

// Solution tabs
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(tabId);
    if (target) target.classList.add('active');
  });
});

// Performance category tabs
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const catId = btn.dataset.cat;
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.cat-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(catId);
    if (target) target.classList.add('active');
  });
});

// Counter animation
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

const statsSection = document.querySelector('.stats-bar');
if (statsSection) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(statsSection);
}

// Contact form — Web3Forms email delivery
function sheyoneFormT(key) {
  if (window.sheyoneT && window.sheyoneGetLang) {
    return sheyoneT(sheyoneGetLang(), key);
  }
  const fallbacks = {
    'form.alert': '문의가 접수되었습니다. SHEYONE 담당자가 빠른 시일 내에 연락드리겠습니다.',
    'form.sending': '전송 중…',
    'form.error': '전송에 실패했습니다. 잠시 후 다시 시도하거나 sheyonevn@gmail.com 으로 직접 문의해 주세요.',
    'form.configError': '문의 폼 설정이 완료되지 않았습니다. 관리자에게 문의해 주세요.',
    'btn.submit': '작성 완료'
  };
  return fallbacks[key] || key;
}

function sheyoneGetSelectLabel(selectEl) {
  if (!selectEl || selectEl.selectedIndex < 0) return '';
  return selectEl.options[selectEl.selectedIndex].textContent.trim();
}

function sheyoneSetFormStatus(form, message, type) {
  const statusEl = form.querySelector('.form-status');
  if (!statusEl) return;
  if (!message) {
    statusEl.hidden = true;
    statusEl.textContent = '';
    statusEl.className = 'form-status';
    return;
  }
  statusEl.hidden = false;
  statusEl.textContent = message;
  statusEl.className = `form-status form-status--${type}`;
}

function sheyoneSetFormSubmitting(form, isSubmitting) {
  const submitBtn = form.querySelector('.contact-form-submit');
  if (!submitBtn) return;
  if (!submitBtn.dataset.defaultLabel) {
    submitBtn.dataset.defaultLabel = submitBtn.textContent.trim();
  }
  submitBtn.disabled = isSubmitting;
  submitBtn.setAttribute('aria-busy', isSubmitting ? 'true' : 'false');
  submitBtn.textContent = isSubmitting ? sheyoneFormT('form.sending') : submitBtn.dataset.defaultLabel;
}

async function sheyoneSubmitContactForm(form) {
  const config = window.SHEYONE_FORM;
  if (!config?.accessKey || config.accessKey === 'YOUR_ACCESS_KEY_HERE') {
    alert(sheyoneFormT('form.configError'));
    return;
  }

  const honeypot = form.querySelector('[name="botcheck"]');
  if (honeypot?.checked) return;

  const name = form.querySelector('[name="name"]')?.value.trim() || '';
  const phone = form.querySelector('[name="phone"]')?.value.trim() || '';
  const inquirySelect = form.querySelector('[name="inquiry_type"]');
  const inquiryType = inquirySelect?.value || '';
  const inquiryLabel = sheyoneGetSelectLabel(inquirySelect);
  const region = form.querySelector('[name="region"]')?.value.trim() || '';
  const message = form.querySelector('[name="message"]')?.value.trim() || '';
  const email = form.querySelector('[name="email"]')?.value.trim() || '';
  const page = form.closest('#contact') ? 'home' : 'contact';

  if (!name || !phone || !inquiryType) {
    form.reportValidity();
    return;
  }

  const bodyLines = [
    `문의 페이지: ${page === 'home' ? 'Home' : 'Contact'}`,
    `문의항목: ${inquiryLabel || inquiryType}`,
    `성함 / 기업명: ${name}`,
    `연락처: ${phone}`
  ];
  if (region) bodyLines.push(`지역 / 주소: ${region}`);
  if (email) bodyLines.push(`이메일: ${email}`);
  bodyLines.push('', '문의내용:', message || '(없음)');

  const payload = {
    access_key: config.accessKey,
    subject: `[SHEYONE] 온라인 문의 — ${inquiryLabel || inquiryType}`,
    from_name: name,
    name,
    phone,
    inquiry_type: inquiryLabel || inquiryType,
    region,
    message: bodyLines.join('\n'),
    page
  };

  if (email) {
    payload.email = email;
    payload.replyto = email;
  }

  sheyoneSetFormSubmitting(form, true);
  sheyoneSetFormStatus(form, sheyoneFormT('form.sending'), 'loading');

  try {
    const response = await fetch(config.endpoint || 'https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success === false) {
      throw new Error(result.message || 'Submit failed');
    }

    sheyoneSetFormStatus(form, sheyoneFormT('form.alert'), 'success');
    form.reset();
    alert(sheyoneFormT('form.alert'));
  } catch (err) {
    console.error('Contact form submit failed:', err);
    sheyoneSetFormStatus(form, sheyoneFormT('form.error'), 'error');
    alert(sheyoneFormT('form.error'));
  } finally {
    sheyoneSetFormSubmitting(form, false);
  }
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    sheyoneSubmitContactForm(contactForm);
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (nav) nav.classList.remove('mobile-open');
    }
  });
});

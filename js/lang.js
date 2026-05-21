const SHEYONE_LANG_KEY = 'sheyone-lang';
const SHEYONE_LANGS = ['ko', 'en', 'vi'];

function sheyoneGetLang() {
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param && SHEYONE_LANGS.includes(param)) return param;
  const stored = localStorage.getItem(SHEYONE_LANG_KEY);
  if (stored && SHEYONE_LANGS.includes(stored)) return stored;
  return 'ko';
}

function sheyoneT(lang, key) {
  const dict = window.SHEYONE_I18N?.[lang] || window.SHEYONE_I18N?.ko || {};
  const fallback = window.SHEYONE_I18N?.ko || {};
  return dict[key] ?? fallback[key] ?? key;
}

function sheyoneApplyLang(lang) {
  if (!window.SHEYONE_I18N?.[lang]) lang = 'ko';

  document.documentElement.lang = lang === 'vi' ? 'vi' : lang === 'en' ? 'en' : 'ko';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = sheyoneT(lang, el.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = sheyoneT(lang, el.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = sheyoneT(lang, el.dataset.i18nPlaceholder);
  });

  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    const label = sheyoneT(lang, el.dataset.i18nLabel);
    if (el.tagName === 'OPTGROUP') el.label = label;
    else el.setAttribute('aria-label', label);
  });

  document.querySelectorAll('option[data-i18n]').forEach(el => {
    el.textContent = sheyoneT(lang, el.dataset.i18n);
  });

  const titleKey = document.body?.dataset.i18nTitle;
  if (titleKey) document.title = sheyoneT(lang, titleKey);

  const metaDesc = document.querySelector('meta[name="description"]');
  const descKey = document.body?.dataset.i18nDesc;
  if (metaDesc && descKey) metaDesc.content = sheyoneT(lang, descKey);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  window.SHEYONE_CURRENT_LANG = lang;
}

function sheyoneSetLang(lang) {
  if (!SHEYONE_LANGS.includes(lang)) return;
  localStorage.setItem(SHEYONE_LANG_KEY, lang);
  sheyoneApplyLang(lang);
}

function sheyoneInitLang() {
  sheyoneApplyLang(sheyoneGetLang());

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      sheyoneSetLang(btn.dataset.lang);
    });
  });
}

document.addEventListener('DOMContentLoaded', sheyoneInitLang);

window.sheyoneT = sheyoneT;
window.sheyoneSetLang = sheyoneSetLang;
window.sheyoneGetLang = sheyoneGetLang;

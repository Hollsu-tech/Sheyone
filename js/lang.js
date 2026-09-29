const SHEYONE_LANG_KEY = 'sheyone-lang';
const SHEYONE_LANGS = ['vi', 'ko', 'en'];

/** Vietnamese phrases that must not break across lines (longest first). */
const SHEYONE_VI_KEEP_TOGETHER = [
  'giảm thiểu sai sót do xử lý thủ công',
  'Lĩnh vực kinh doanh cốt lõi',
  'công nghệ nhận diện biển số tích hợp AI',
  'Tự động tính phí và thanh toán không người qua dữ liệu LPR',
  'Tự động tính phí qua LPR',
  'Triển khai hệ thống điều khiển bãi đỗ',
  'Quản lý thời gian thực dữ liệu sử dụng và thu phí qua ứng dụng',
  'Nhân viên tính phí thủ công gây sai sót và chậm trễ',
  'Nhận diện AI thời gian thực',
  'nhận diện biển số tích hợp AI',
  'nhận diện biển số AI',
  'nhận diện biển số',
  'công nghệ cốt lõi tạo khác biệt',
  'công nghệ cốt lõi',
  'giá trị cốt lõi',
  'kinh doanh cốt lõi',
  'xử lý thủ công',
  'tính phí thủ công',
  'thao tác thủ công',
  'thời gian thực',
  'thanh toán không người trực',
  'thanh toán không người',
  'vận hành không người trực',
  'vận hành không người',
  'không người trực',
  'không người',
  'bãi đỗ xe thông minh',
  'bãi đỗ thông minh',
  'hệ thống bãi đỗ xe',
  'hệ thống bãi đỗ',
  'hệ thống đỗ xe',
  'đỗ xe thông minh',
  'nền tảng đỗ xe thông minh',
  'bãi đỗ công cộng',
  'bãi công cộng',
  'bãi đỗ xe',
  'bãi đỗ',
  'đỗ xe',
  'quản lý từ xa',
  'điều hành từ xa',
  'giám sát từ xa',
  'điều khiển từ xa',
  'tổng đài 24 giờ',
  'tổng đài 24/7',
  'Tổng đài 24H',
  'cloud server',
  'ứng dụng di động',
  'app di động',
  'App di động',
  'liên kết ứng dụng',
  'thành phố thông minh',
  'smart city',
  'smart mobility',
  'chia sẻ doanh thu',
  'cơ cấu doanh thu',
  'mô hình doanh thu',
  'doanh thu triển khai',
  'doanh thu vận hành',
  'doanh thu nền tảng',
  'dịch vụ gia tăng',
  'mô hình kinh doanh',
  'môi trường kinh doanh',
  'chiến lược kinh doanh',
  'thị trường Việt Nam',
  'Việt Nam',
  'Tầm nhìn & Sứ mệnh',
  'Chất lượng & Hỗ trợ',
  'Tổng quan công ty',
  'Giới thiệu công ty',
  'Cơ cấu tổ chức',
  'Phạm vi nghiệp vụ',
  'Lĩnh vực kinh doanh',
  'Yêu cầu báo giá',
  'Dự án hoàn thành',
  'Dự án tiêu biểu',
  'Kết quả vận hành',
  'Hỗ trợ khách hàng',
  'Thông điệp CEO',
  'Hồ sơ doanh nghiệp',
  'Người đại diện',
  'Vốn điều lệ',
  'Địa chỉ trụ sở',
  'Liên hệ chính',
  'Ngành nghề chính',
  'Năng lực tổ chức',
  'Hoạch định chiến lược',
  'Phát triển công nghệ',
  'Vận hành hiện trường',
  'Chiến lược mở rộng',
  'Mở rộng khu vực',
  'Đa dạng hóa dịch vụ',
  'Nâng cấp nền tảng',
  'Hệ sinh thái đối tác',
  'Chuẩn hóa vận hành',
  'Giải pháp tích hợp',
  'Giải pháp bãi đỗ',
  'Thanh toán tự động',
  'Nền tảng dữ liệu',
  'Nền tảng phân tích dữ liệu',
  'Thanh toán QR',
  'tính phí và ra cổng tự động',
  'ra cổng tự động',
  'Tối ưu mức quá tải · chính sách giá',
  'chính sách giá',
  'mức quá tải',
  'quỹ đất nhàn rỗi',
  'dẫn đường hình ảnh',
  'dẫn đường siêu âm',
  'Lắp đặt dẫn đường',
  'Hàn Quốc',
  'Starlake City',
  'Lợi thế cạnh tranh',
  'Yêu cầu dự án',
  'Tổng Giám đốc',
  'trải nghiệm người dùng',
  'tăng trưởng bền vững',
  'phản hồi khách hàng',
  'quản trị chất lượng',
  'dựa trên dữ liệu',
  'chuyển đổi số',
  'chuyển đổi vận hành',
  'hợp tác công nghệ',
  'tư vấn triển khai',
  'công trường xây dựng',
  'tòa nhà mới',
  'ủy thác vận hành',
  'hạ tầng sạc',
  'sạc xe điện',
  'xe điện',
  'sạc EV',
  'ven đường',
  'ngoài trời',
  'thủ công',
  'cốt lõi',
  'kinh doanh',
  'doanh nghiệp',
  'doanh thu',
  'công nghệ',
  'công ty',
  'hệ thống',
  'quản lý',
  'vận hành',
  'triển khai',
  'giải pháp',
  'tích hợp',
  'thông minh',
  'nhận diện',
  'biển số',
  'tính phí',
  'thu phí',
  'tự động',
  'thời gian',
  'người dùng',
  'khách hàng',
  'nền tảng',
  'thiết bị',
  'điều hành',
  'giám sát',
  'phát triển',
  'ứng dụng',
  'di động',
  'bảo trì',
  'hậu mãi',
  'liên hệ',
  'báo giá',
  'công cộng',
  'chung cư',
  'văn phòng',
  'hình ảnh',
  'siêu âm',
  'dẫn đường',
  'hiện trường',
  'địa phương',
  'thị trường',
  'biểu phí',
  'quá tải',
  'sai sót',
  'hiệu quả',
  'an toàn',
  'bền vững',
  'chuyên nghiệp',
  'trách nhiệm',
  'tăng trưởng',
  'đổi mới',
  'thông tin',
  'bảo mật',
  'cá nhân',
  'yêu cầu',
  'công trường',
  'tòa nhà',
  'quỹ đất',
  'nhàn rỗi',
  'chia sẻ',
  'tiết kiệm',
  'năng lượng',
  'thành phố',
  'trực tuyến',
  'gia tăng',
  'thuê bao',
  'quảng cáo',
  'thành viên',
  'đa dạng',
  'chuẩn hóa',
  'tổng đài',
  'từ xa',
  'hợp tác',
  'đối tác',
  'dự án',
  'mở rộng',
  'tư vấn',
  'điều khiển',
  'khu vực',
  'địa chỉ',
  'hoàn thành',
  'tiêu biểu',
  'tổng quan',
  'cơ cấu',
  'phạm vi',
  'nghiệp vụ',
  'lĩnh vực',
  'mô hình',
  'tầm nhìn',
  'sứ mệnh',
  'giá trị',
  'năng lực',
  'chiến lược',
  'giảm thiểu',
  'xử lý',
  'tối ưu',
  'tình trạng',
  'đặt chỗ',
  'barrier tự động',
  'máy thu phí'
];

const SHEYONE_EN_KEEP_TOGETHER = [
  'An integrated parking control solution for entry/exit management, license plate recognition, and fee settlement.',
];

const SHEYONE_EN_KEEP_SORTED = [...SHEYONE_EN_KEEP_TOGETHER].sort((a, b) => b.length - a.length);

function sheyoneEnKeepTogether(text) {
  if (!text || typeof text !== 'string') return text;

  let result = text
    .replace(/\s*&\s*/g, '\u00A0&\u00A0')
    .replace(/\s*\/\s*/g, '/');

  for (const phrase of SHEYONE_EN_KEEP_SORTED) {
    const nbspPhrase = phrase.replace(/ /g, '\u00A0');
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(escaped.replace(/ /g, '\\s+'), 'g');
    result = result.replace(re, nbspPhrase);
  }

  return result;
}

const SHEYONE_VI_KEEP_SORTED = [...SHEYONE_VI_KEEP_TOGETHER].sort((a, b) => b.length - a.length);

function sheyoneViKeepTogether(text) {
  if (!text || typeof text !== 'string') return text;

  let result = text
    .replace(/\s*&\s*/g, '\u00A0&\u00A0')
    .replace(/\s*·\s*/g, '\u00A0·\u00A0')
    .replace(/\s*—\s*/g, '\u00A0—\u00A0');

  // On phones, long keep-together runs are wider than the screen and would be
  // force-broken mid-word; keep only short phrases together there.
  const narrow = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;

  for (const phrase of SHEYONE_VI_KEEP_SORTED) {
    if (narrow && phrase.length > 24) continue;
    const nbspPhrase = phrase.replace(/ /g, '\u00A0').replace(/\s*&\s*/g, '\u00A0&\u00A0');
    const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\\&/g, '&');
    const re = new RegExp(escaped.replace(/ /g, '\\s+'), 'gi');
    result = result.replace(re, match => {
      if (match === match.toUpperCase()) return nbspPhrase.toUpperCase();
      if (match.charAt(0) === match.charAt(0).toUpperCase()) {
        return nbspPhrase.charAt(0).toUpperCase() + nbspPhrase.slice(1);
      }
      return nbspPhrase;
    });
  }

  return result;
}

function sheyoneFormatText(lang, text) {
  if (lang === 'vi') return sheyoneViKeepTogether(text);
  if (lang === 'en') return sheyoneEnKeepTogether(text);
  return text;
}

(function sheyoneSetEarlyLangAttr() {
  const param = new URLSearchParams(window.location.search).get('lang');
  const stored = localStorage.getItem(SHEYONE_LANG_KEY);
  let lang = 'vi';
  if (param && SHEYONE_LANGS.includes(param)) lang = param;
  else if (stored && SHEYONE_LANGS.includes(stored)) lang = stored;
  document.documentElement.lang = lang === 'vi' ? 'vi' : lang === 'en' ? 'en' : 'ko';

  if (window.location.hash) {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }
})();

function sheyoneGetLang() {
  const param = new URLSearchParams(window.location.search).get('lang');
  if (param && SHEYONE_LANGS.includes(param)) return param;
  const stored = localStorage.getItem(SHEYONE_LANG_KEY);
  if (stored && SHEYONE_LANGS.includes(stored)) return stored;
  return 'vi';
}

function sheyoneT(lang, key) {
  const dict = window.SHEYONE_I18N?.[lang] || window.SHEYONE_I18N?.ko || {};
  const fallback = window.SHEYONE_I18N?.ko || {};
  const text = dict[key] ?? fallback[key] ?? key;
  return sheyoneFormatText(lang, text);
}

function sheyoneStabilizeLatinChrome() {
  document.querySelectorAll(
    '.section-label, .hero h1 .sub, .stat-item .number, .card-num, .solution-num'
  ).forEach(el => {
    if (!el.getAttribute('lang')) el.setAttribute('lang', 'en');
  });
}

function sheyonePrepareLangSwitch() {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const root = document.documentElement;
  root.classList.add('lang-switching');

  const lockTargets = document.querySelectorAll('.hero, .stats-bar, .section, .page-header, .footer');
  const locked = [];

  lockTargets.forEach(el => {
    locked.push({ el, minHeight: el.style.minHeight });
    el.style.minHeight = `${Math.ceil(el.getBoundingClientRect().height)}px`;
  });

  const visionGrid = document.querySelector('#vision .vision-triangle-grid');
  if (visionGrid && !window.matchMedia('(max-width: 768px)').matches) {
    locked.push({ el: visionGrid, minHeight: visionGrid.style.minHeight, height: visionGrid.style.height });
    visionGrid.style.minHeight = `${visionGrid.offsetHeight}px`;
    visionGrid.style.height = `${visionGrid.offsetHeight}px`;
  }

  return function sheyoneFinishLangSwitch() {
    locked.forEach(({ el, minHeight, height }) => {
      el.style.minHeight = minHeight;
      if (height !== undefined) el.style.height = height;
    });
    root.classList.remove('lang-switching');

    window.sheyoneRelayoutVisionTriangle?.();

    if (window.sheyoneScrollToHash?.('smooth')) return;

    window.scrollTo(scrollX, scrollY);
  };
}

function sheyoneApplyLang(lang) {
  if (!window.SHEYONE_I18N?.[lang]) lang = 'vi';

  const finish = sheyonePrepareLangSwitch();

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
  sheyoneStabilizeLatinChrome();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      finish();
    });
  });
}

function sheyoneSetLang(lang) {
  if (!SHEYONE_LANGS.includes(lang)) return;
  localStorage.setItem(SHEYONE_LANG_KEY, lang);
  sheyoneApplyLang(lang);
}

function sheyoneInitLang() {
  sheyoneStabilizeLatinChrome();
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

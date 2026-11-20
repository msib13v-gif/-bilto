P.landing=()=>({full:1,h:`
<div class="bl" dir="rtl">
  <header class="bl-header"><div class="bl-wrap bl-nav"><a class="bl-logo" onclick="go('landing')" aria-label="بیلتو"><img src="bilto-logo-transparent.svg" alt="لوگوی بیلتو"></a></div></header>
  <section class="bl-hero"><div class="bl-wrap bl-hero-grid"><div><h1>از زمین تا خانه،<br><span>با خیال راحت بساز!</span> 🏗️✨</h1><p class="bl-lead">برآورد هزینه، بررسی مصالح و آشنایی با پیمانکاران ساختمانی؛ همه‌چیز در یک پلتفرم برای مدیریت ساده‌تر پروژه.</p><form class="bl-form bl-signup" id="start" onsubmit="startLandingSignup(event)"><h2>شروع با بیلتو</h2><input id="landing-name" name="name" autocomplete="name" placeholder="نام و نام خانوادگی" aria-label="نام و نام خانوادگی" required><input id="landing-phone" name="phone" autocomplete="tel" inputmode="tel" placeholder="شماره موبایل" aria-label="شماره موبایل" required><button class="bl-button" type="submit">شروع</button></form><div class="bl-actions bl-portals"><a class="bl-button outline" onclick="go('login')">ورود به پنل مالکان</a><a class="bl-button outline" onclick="go('login')">ورود به پنل پیمانکاران</a></div></div><div class="bl-visual house-image" role="img" aria-label="ساختمان مسکونی مدرن"><div class="bl-float"><b>⌂ پروژه شما، قدم به قدم</b><small>از برنامه‌ریزی تا ساخت</small></div></div></div></section>
  <div class="bl-wrap bl-trust"><div class="bl-stats"><div class="bl-stat"><b>در حال توسعه</b><span>آمار پروژه‌های برآوردشده</span></div><div class="bl-stat"><b>به‌زودی</b><span>اتصال به قیمت روز مصالح</span></div><div class="bl-stat"><b>در انتظار داده</b><span>آمار رضایت کاربران</span></div></div></div>
  <section class="bl-section" id="features"><div class="bl-wrap"><div class="bl-heading"><h2>برای ساختن، تنها نیستید</h2></div><div class="bl-cards">
  <article class="bl-card"><div class="bl-card-icon">💰</div><h3>برآورد هوشمند هزینه</h3></article>
  <article class="bl-card"><div class="bl-card-icon">🧱</div><h3>قیمت و مقایسه مصالح</h3></article>
  <article class="bl-card"><div class="bl-card-icon">👷</div><h3>پیمانکاران ساختمانی</h3></article>
  </div></div></section>
  <footer class="bl-footer"><div class="bl-wrap"><span>از زمین تا خانه، قدم‌به‌قدم در کنار شما.</span></div></footer>
</div>`});
function startLandingSignup(event){
  event.preventDefault();
  const name=$('#landing-name').value.trim(),phone=$('#landing-phone').value.trim();
  if(!name||phone.replace(/[^\d۰-۹]/g,'').length<10)return toast('نام و شماره موبایل معتبر وارد کنید');
  S.user={...(S.user||{}),fullName:name,phone};save();go('otp');
}

const landingWithSignupForm = P.landing;
P.landing = () => {
  const page = landingWithSignupForm();
  page.h = page.h.replace(/<form class="bl-form bl-signup"[\s\S]*?<\/form>/, '<button class="bl-button bl-start-button" type="button" onclick="go(\'signup\')">شروع</button>')
    .replace(/<div class="bl-actions bl-portals">[\s\S]*?<\/div>/, '')
    .replace(/<p class="bl-lead">[\s\S]*?<\/p>/, '')
    .replace(' 🏗️✨', '');
  return page;
};
P.signup = () => {
  let form = landingWithSignupForm().h.match(/<form class="bl-form bl-signup"[\s\S]*?<\/form>/)[0]
    .replace('name="name"', `name="name" value="${esc(S.signupEditingPhone ? fullName() : '')}"`);
  S.signupEditingPhone = false;
  const portals = landingWithSignupForm().h.match(/<div class="bl-actions bl-portals">[\s\S]*?<\/div>/)[0];
  return { full: 1, h: `<div class="bl bl-signup-page" dir="rtl"><div class="bl-wrap bl-signup-content"><h1 class="bl-signup-slogan">از زمین تا خانه،<br><span>با خیال راحت بساز!</span></h1>${form}${portals}</div></div>` };
};
const otpWithEditLink = P.otp;
const signupSlogan = '<h1 class="bl-signup-slogan">از زمین تا خانه،<br><span>با خیال راحت بساز!</span></h1>';
P.otp = () => {
  const page = otpWithEditLink();
  page.h = page.h.replace("onclick=\"go('signup')\"", 'onclick="editSignupPhone()"').replace('<div class="ctr">', `<div class="ctr">${signupSlogan}`);
  return page;
};
const onboardWithoutSlogan = P.onboard;
P.onboard = () => {
  const page = onboardWithoutSlogan();
  page.h = page.h.replace('<div class="ctr">', `<div class="ctr">${signupSlogan}`);
  return page;
};
function editSignupPhone(){
  S.signupEditingPhone = true;
  go('signup');
}
const profileWithoutLogoutDialog = P.profile;
P.profile = () => {
  const page = profileWithoutLogoutDialog();
  page.h = page.h.replace("onclick=\"S.in=0;go('landing')\"", 'onclick="showLogoutConfirmation()"');
  return page;
};
function showLogoutConfirmation(){
  let dialog = document.getElementById('logout-confirmation');
  if (!dialog) {
    dialog = document.createElement('dialog');
    dialog.id = 'logout-confirmation';
    dialog.className = 'logout-dialog';
    dialog.setAttribute('aria-labelledby', 'logout-question');
    dialog.innerHTML = '<h2 id="logout-question">مطمئنی که می‌خواهی خارج شوی؟</h2><div class="logout-actions"><button type="button" class="logout-cancel" onclick="document.getElementById(\'logout-confirmation\').close()" autofocus>نه</button><button type="button" class="logout-confirm" onclick="confirmLogout()">بله</button></div>';
    document.body.appendChild(dialog);
  }
  dialog.showModal();
}
function confirmLogout(){
  document.getElementById('logout-confirmation').close();
  S.in = 0;
  save();
  go('landing');
}

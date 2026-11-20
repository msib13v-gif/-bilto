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

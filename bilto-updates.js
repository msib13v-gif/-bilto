const updatedMaterialGroups = {
  'میلگرد': ['میلگرد ساده', ...materialGroups['میلگرد']],
  'سیمان': ['سیمان پرتلند نوع ۱','سیمان پرتلند نوع ۲','سیمان پرتلند نوع ۳','سیمان پرتلند نوع ۴','سیمان پرتلند نوع ۵','سیمان سفید','سیمان رنگی','سیمان پوزولانی','سیمان پرتلند پوزولانی','سیمان سرباره‌ای','سیمان پرتلند سرباره‌ای','سیمان ضدسولفات','سیمان بنایی','سیمان آهکی','سیمان زودگیر','سیمان کم‌حرارت','سیمان پرمقاومت','سیمان آب‌گریز','سیمان منبسط‌شونده','سیمان آلومیناتی','سیمان نسوز','سیمان چاه نفت'],
  'تیرآهن': ['تیرآهن معمولی IPE','تیرآهن بال‌پهن IPB (هاش)','تیرآهن باریک‌بال IPN','تیرآهن بال‌پهن سبک HEA','تیرآهن بال‌پهن سنگین HEB','تیرآهن بال‌پهن فوق‌سنگین HEM','تیرآهن لانه‌زنبوری','تیرآهن دوبل','تیرآهن جفت','تیرآهن تقویت‌شده'],
  'آجر': ['آجر فشاری','آجر ماشینی','آجر سفالی','آجر لفتون','آجر سه‌گل','آجر قزاقی','آجر نسوز','آجر نما','آجر شیل','آجر ماسه‌آهکی','آجر سیمانی','آجر رسی','آجر توپر','آجر سوراخ‌دار','آجر توخالی','آجر عایق حرارتی','آجر عایق صوتی','آجر کف‌فرش','آجر مهندسی','آجر ضداسید'],
  'بلوک سیمانی': ['بلوک سیمانی سنگین','بلوک سیمانی سبک','بلوک سیمانی نیمه‌سبک','بلوک سیمانی توپر','بلوک سیمانی توخالی','بلوک سیمانی دیواری','بلوک سیمانی تیغه‌ای','بلوک سیمانی سقفی','بلوک سیمانی باربر','بلوک سیمانی غیرباربر','بلوک سیمانی لیکا','بلوک سیمانی پوکه‌ای','بلوک سیمانی معدنی','بلوک سیمانی پرلیتی','بلوک سیمانی عایق حرارتی','بلوک سیمانی عایق صوتی','بلوک سیمانی باغی','بلوک سیمانی جدول‌دار','بلوک سیمانی نمادار','بلوک سیمانی مسلح'],
  'شن': ['شن نخودی','شن بادامی'],
  'ماسه': ['ماسه شسته','ماسه شکسته'],
  'گچ': ['گچ سفیدکاری','گچ زیرکار','گچ خاک','گچ میکرونیزه','گچ ساتن','گچ پلیمری','گچ پاششی','گچ سیوا','گچ گیپتون','گچ ضدآب','گچ دیرگیر','گچ زودگیر','گچ بتونه','گچ مخصوص قالب‌گیری','گچ صنعتی'],
  'سنگ و نما': ['سنگ تراورتن','سنگ گرانیت','سنگ مرمر','سنگ مرمریت','سنگ چینی','سنگ کریستال','سنگ آنتیک','سنگ لایم‌استون','سنگ سنداستون','سنگ اسلیت','سنگ کوارتزیت','سنگ بازالت','سنگ ترامیت','سنگ تیشه‌ای','سنگ مالون','سنگ لاشه','سنگ قواره','سنگ بادبر','سنگ پلاک','سنگ اسلب','سنگ طولی','سنگ پله','سنگ کف','سنگ دیوار','سنگ نمای رومی','سنگ نمای مدرن','سنگ جدول','سنگ فرش','سنگ دور محوطه','سنگ زیرکار نما'],
  'کاشی': ['کاشی دیواری','کاشی کف','کاشی پرسلانی','کاشی سرامیکی','کاشی لعاب‌دار','کاشی بدون لعاب','کاشی موزاییکی','کاشی شیشه‌ای','کاشی استخری','کاشی ضداسید','کاشی ضدلغزش','کاشی سه‌بعدی','کاشی طرح سنگ','کاشی طرح چوب','کاشی طرح بتن','کاشی دست‌ساز','کاشی دکوراتیو','کاشی بین‌کابینتی','کاشی حمام و سرویس بهداشتی','کاشی صنعتی'],
  'سرامیک': ['سرامیک کف','سرامیک دیواری','سرامیک پرسلانی','سرامیک لعاب‌دار','سرامیک بدون لعاب','سرامیک مات','سرامیک براق','سرامیک پولیش','سرامیک فول پولیش','سرامیک نیمه‌پولیش','سرامیک اسلب','سرامیک سایز بزرگ','سرامیک ضدلغزش','سرامیک ضداسید','سرامیک طرح سنگ','سرامیک طرح چوب','سرامیک طرح بتن','سرامیک سه‌بعدی','سرامیک استخری','سرامیک صنعتی','سرامیک نما','سرامیک پله'],
  'کف‌پوش': ['کف‌پوش سرامیکی','کف‌پوش پرسلانی','کف‌پوش سنگی','کف‌پوش مرمری','کف‌پوش گرانیتی','کف‌پوش تراورتنی','کف‌پوش موزاییکی','کف‌پوش سیمانی','کف‌پوش بتنی','کف‌پوش اپوکسی','کف‌پوش پلی‌یورتان','کف‌پوش PVC','کف‌پوش وینیل','کف‌پوش لمینت','کف‌پوش پارکت چوبی','کف‌پوش چوبی مهندسی‌شده','کف‌پوش ترمووود','کف‌پوش موکت','کف‌پوش لاستیکی','کف‌پوش گرانولی','کف‌پوش سه‌بعدی','کف‌پوش آنتی‌استاتیک','کف‌پوش ضداسید','کف‌پوش صنعتی','کف‌پوش فضای باز','کف‌پوش چمن مصنوعی']
};
M.splice(0, M.length, ...Object.entries(updatedMaterialGroups).flatMap(([category,names])=>names.map(name=>[name,'مشخص نشده',0,category,'t2'])));
CATS.splice(0,CATS.length,'همه',...Object.keys(updatedMaterialGroups));
for(const type of ['۱','۲','۳','۵']) cementInfo['سیمان پرتلند نوع '+type]=cementInfo['سیمان تیپ '+type];

const contractorNames = {
  'پیمانکاران مسکونی': ['شرکت ساختمانی آ.س.پ','عمران و مسکن‌سازان ایران','شرکت نبرد پی','توسعه مسکن تهران','سرمایه‌گذاری مسکن تهران','توسعه و عمران امید','بین‌المللی توسعه ساختمان','سرمایه‌گذاری مسکن جنوب','عمران آذرستان','انبوه‌سازان ایستا','تهران گاردن','مدرن ویلا','هلدینگ اویسی','بسازکو','انبوه‌سازان مدرن سازه','آرکا ورجاوند پی چین','توسعه مسکن آبادگران یکم','انبوه‌سازان مقاوم قربانی','تهران الاستیک'],
  'پیمانکاران تجاری': ['درنا آوند','تچراسازان پارسه جنوب','پی سابان','عمران اطلس ایرانیان','توسعه و عمران بهناد بنا','شرکت ساختمان گارنو','شرکت رس','مبنا پارس','ستاره اطلس پارس','گروه توسعه مهندسی بام','شرکت آژام','شرکت رزان','گروه تخصصی آلوسیسی','مهندسین مترا','شرکت اولبریش','پیشگامان سازه تجارت پارس','بین‌المللی توسعه','شرکت وپکو'],
  'پیمانکاران صنعتی': ['شرکت فراب','شرکت طراحی و ساختمان نفت','گروه مپنا','شرکت جهاد نصر','هیربد نیرو','شرکت مهندسی و ساختمان صنایع نفت','جهانپارس','نرگان','پترو پارس','استیم مهندسی و صنعتی','ایرانیان صنعت انبیه','ارکو','پترو تک سان','اشکو سازه گستر','ناموران فولاد ایرانیان','سازوار سازه آذرستان','طرح ساخت بینا','ساختمانی آسمان‌خراش','ایرانیان صعود صنعت']
};
C.splice(0,C.length,...Object.entries(contractorNames).flatMap(([category,names])=>names.map(name=>[name,category])));
for(const project of S.projects) if(typeof project.contractor==='number'){project.legacyContractor=project.contractor;delete project.contractor}
const contractorCategory = project=>({'مسکونی':'پیمانکاران مسکونی','تجاری':'پیمانکاران تجاری','صنعتی':'پیمانکاران صنعتی'}[project.type]);
const contractorChatKey = index=>'contractor:'+C[index][1]+':'+C[index][0];

function projectExpenses(project, breakdown){
  return `<div class="c"><b>هزینه‌های روزانه پروژه</b><label for="expense-amount">مبلغ (تومان)</label><input class="in" id="expense-amount" inputmode="numeric" placeholder="مبلغ"><label for="expense-category">دسته‌بندی</label><select class="in" id="expense-category"><option>مصالح</option><option>دستمزد</option><option>سایر هزینه‌ها</option></select><label>تاریخ شمسی</label><div dir="rtl" style="display:flex;gap:8px"><input class="in" id="expense-day" inputmode="numeric" placeholder="روز" aria-label="روز" maxlength="2"><input class="in" id="expense-month" inputmode="numeric" placeholder="ماه" aria-label="ماه" maxlength="2"><input class="in" id="expense-year" inputmode="numeric" placeholder="سال" aria-label="سال" maxlength="4"></div><button class="btn" onclick="addExpense()">ثبت هزینه</button></div><div class="c"><b>هزینه‌های ثبت‌شده: ${fa(spentFor(project))} تومان</b>${(project.expenses||[]).map(expense=>`<div class="row" style="padding:8px 0"><span>${esc(expense.title||expense.category)} <small class="mu">${expense.title?esc(expense.category)+' · ':''}${esc(expense.date)}</small></span><span>${fa(expense.amount)} تومان <button onclick="deleteExpense(${expense.id})" aria-label="حذف هزینه">✕</button></span></div>`).join('')||'<p class="mu">هنوز هزینه‌ای ثبت نشده است.</p>'}</div><div class="c"><b>تفکیک برآورد نمایشی</b>${[['مصالح',breakdown.m],['دستمزد',breakdown.l],['سایر هزینه‌ها',breakdown.o]].map(item=>`<div class="row" style="padding:8px 0"><span class="mu">${item[0]}</span><b>${fa(item[1])} تومان</b></div>`).join('')}</div>`;
}
function projectMaterials(project){
  const groups=['میلگرد','تیرآهن','سیمان','شن','ماسه','آجر','بلوک سیمانی','گچ','سنگ و نما','کاشی','سرامیک','کف‌پوش'];
  return `<div class="c"><b>مصالح پیشنهادی پروژه ${esc(project.type)}</b><p class="mu">این فهرست به‌صورت خودکار برای مراحل متداول ساخت تهیه شده است. نوع، مقدار و ضرورت هر مصالح با نقشه و شرایط پروژه تعیین می‌شود؛ برای فهرست قطعی به بررسی متخصص نیاز است.</p><p class="mu">مرحله فعلی: ${esc(ST[project.stage]||'نامشخص')}</p>${groups.map(group=>`<div class="row" style="padding:8px 0;border-bottom:1px solid #edf1f7"><span>${esc(group)}</span><button onclick="sc('${group}');go('prices')">مشاهده دسته</button></div>`).join('')}</div>`;
}
function projectContractors(project){
  const category=contractorCategory(project);
  return `<div class="c"><b>انتخاب پیمانکار پروژه</b><p class="mu">پیمانکاران دسته ${esc(project.type)} نمایش داده می‌شوند. نام‌ها و دسته‌بندی بر اساس اطلاعات ارائه‌شده هستند و سابقه، پروژه‌ها و صلاحیت آن‌ها تأیید نشده است؛ پیش از انتخاب بررسی کنید.</p><p>${typeof project.contractor==='string'?'پیمانکار انتخاب‌شده: <b>'+esc(project.contractor)+'</b>':'هنوز پیمانکاری انتخاب نشده است.'}</p></div>${C.map((contractor,index)=>({contractor,index})).filter(item=>item.contractor[1]===category).map(({contractor,index})=>`<div class="c"><b>${esc(contractor[0])}</b><p class="mu">${esc(contractor[1])} · سابقه و امتیاز تأیید نشده</p><div class="row"><button onclick="go('cp${index}')">مشاهده پروفایل</button><button onclick="selectProjectContractor(${index})">انتخاب برای پروژه</button></div></div>`).join('')}`;
}
selectProjectContractor=function(index){if(!C[index]||C[index][1]!==contractorCategory(cur()))return;cur().contractor=C[index][0];save();toast('پیمانکار برای پروژه انتخاب شد');R(1)};
sendChat=function(){const text=$('#chat-message').value.trim();if(!text)return toast('متن پیام را وارد کنید');if(!C[S.chatContractor])return;const key=contractorChatKey(S.chatContractor);S.messages=S.messages||{};S.messages[key]=S.messages[key]||[];S.messages[key].push({role:S.chatRole==='contractor'?'contractor':'owner',text});save();R(1)};
const originalChat=P.chat;
P.chat=()=>{const index=S.chatContractor;if(!C[index])return P.contractors();const old=S.messages;S.messages={...(old||{}),[index]:(old||{})[contractorChatKey(index)]||[]};const page=originalChat();S.messages=old;return page};

const jalaliFormatter=new Intl.DateTimeFormat('en-US-u-ca-persian-nu-latn',{year:'numeric',month:'numeric',day:'numeric',timeZone:'UTC'});
function validJalali(year,month,day){
  if(!Number.isInteger(year)||year<1200||year>1600||!Number.isInteger(month)||month<1||month>12||!Number.isInteger(day)||day<1||day>31)return false;
  for(let date=new Date(Date.UTC(year+621,0,1));date.getUTCFullYear()<=year+622;date.setUTCDate(date.getUTCDate()+1)){
    const parts=Object.fromEntries(jalaliFormatter.formatToParts(date).map(part=>[part.type,part.value]));
    if(+parts.year===year&&+parts.month===month&&+parts.day===day)return true;
  }
  return false;
}
addExpense=function(){
  const amount=num($('#expense-amount').value),year=num($('#expense-year').value),month=num($('#expense-month').value),day=num($('#expense-day').value),category=$('#expense-category').value;
  if(!Number.isFinite(amount)||amount<=0)return toast('مبلغ معتبر وارد کنید');
  if(!validJalali(year,month,day))return toast('روز، ماه و سال شمسی معتبر وارد کنید');
  const persian=value=>String(value).replace(/[0-9]/g,digit=>'۰۱۲۳۴۵۶۷۸۹'[digit]);
  const project=cur();project.expenses=project.expenses||[];project.expenses.push({id:Date.now(),amount,category,date:persian(year)+'/'+persian(String(month).padStart(2,'0'))+'/'+persian(String(day).padStart(2,'0')),calendar:'jalali'});save();toast('هزینه ثبت شد');R(1);
};

P.contractors=()=>({n:3,h:`${pageTop('پیمانکاران')}<p class="mu">نام‌ها و دسته‌بندی‌ها بر اساس فهرست ارائه‌شده‌اند و صلاحیت و سوابق شرکت‌ها تأیید نشده‌اند.</p>${srch('جستجوی پیمانکار...',S.cq,'cq')}${chips(CT,S.cs,'cs')}${contractorDescriptions[S.cs]?`<p class="c">${contractorDescriptions[S.cs]}</p>`:''}<div id="lst">${C.map((contractor,index)=>({contractor,index})).filter(({contractor})=>(S.cs==='همه'||contractor[1]===S.cs)&&contractor[0].includes(S.cq)).map(({contractor,index})=>contractorCard(contractor,index)).join('')||'<p class="ctr mu">موردی پیدا نشد</p>'}</div>`});
function contractorCard(contractor,index){return `<a class="c it" href="#cp${index}"><div class="th">🏗</div><div class="g"><b>${esc(contractor[0])}</b><div class="mu">${esc(contractor[1])}</div><div class="mu">سابقه و صلاحیت تأیید نشده</div></div><span class="btn o" style="width:auto;padding:5px 12px;font-size:11px">مشاهده پروفایل</span></a>`}
P.cp=index=>{const contractor=C[index];if(!contractor)return P.contractors();return {n:3,h:`${pageTop('پروفایل پیمانکار')}<div class="c"><h3>${esc(contractor[0])}</h3><p>${esc(contractor[1])}</p><p class="mu">نام و دسته‌بندی توسط کاربر ارائه شده و هویت، صلاحیت، سابقه و امتیاز این پیمانکار هنوز بررسی نشده است.</p></div><button class="btn" onclick="openChat(${index})">پیام به پیمانکار</button><p class="mu">پیام‌رسانی فقط نمایشی است و پیامی برای پیمانکار ارسال نمی‌شود.</p>`}};

const originalPrices=P.prices;
P.prices=()=>{const page=originalPrices();page.h=page.h.replace('<p class="mu">','<button class="btn o" onclick="go(\'dailyprices\')">قیمت روز مصالح</button><p class="mu">');return page};
P.dailyprices=()=>({n:1,h:`${pageTop('قیمت روز مصالح')}<div class="c"><b>قیمت روز هنوز در دسترس نیست</b><p class="mu">اتصال به منبع معتبر قیمت هنوز راه‌اندازی نشده است؛ در حال حاضر قیمتی به عنوان قیمت روز نمایش داده نمی‌شود.</p><button class="btn o" onclick="go('prices')">مشاهده فهرست مصالح</button></div>`});
const originalProfile=P.profile;
P.profile=()=>{const page=originalProfile();page.h=page.h.replace('طرح‌های اشتراک','اشتراک من');return page};
const originalSubscription=P.subscription;
P.subscription=()=>{const page=originalSubscription();page.h=page.h.replace('طرح‌های اشتراک','اشتراک من');if(!S.subscriptionDemo?.plan)page.h=page.h.replace('<div class="c">','<div class="c"><b>شما اشتراکی ندارید</b></div><div class="c">');return page};
const originalDash=P.dash;
P.dash=()=>{const page=originalDash();if(!S.subscriptionDemo?.plan)page.h=page.h.replace('<div class="demo-note">','<div class="demo-note">شما اشتراکی ندارید. <a onclick="go(\'subscription\')">اشتراک من</a></div><div class="demo-note">');return page};
const originalAnswerMaterialQuestion=answerMaterialQuestion;
answerMaterialQuestion=function(){originalAnswerMaterialQuestion();const first=M[Number(S.compareFirst)],second=M[Number(S.compareSecond)],question=S.compareQuestion||'';if(first?.[3]==='سیمان'&&[first,second].every(item=>cementInfo[item?.[0]])){if(/سولفات/.test(question)&&/شدید|زیاد|بالا/.test(question)&&[first[0],second[0]].includes('سیمان پرتلند نوع ۵'))S.compareReply='برای مواجهه شدید با سولفات، نوع ۵ گزینه مناسب‌تری برای بررسی است. انتخاب نهایی به آزمایش خاک و آب و تأیید طراح نیاز دارد.';else if(/مقاومت اولیه|زودرس|سریع|زود/.test(question)&&[first[0],second[0]].includes('سیمان پرتلند نوع ۳'))S.compareReply='برای کسب مقاومت اولیه سریع، نوع ۳ گزینه مناسب‌تری برای بررسی است. طرح اختلاط باید توسط متخصص تأیید شود.';R()}};

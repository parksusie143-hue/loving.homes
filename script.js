// 1. قاعدة البيانات الشاملة
const translations = {
    ar: {
        nav_home: "الرئيسية", nav_fac: "المرافق", nav_pack: "الحزم", nav_groom: "صالة الحلاقة",
        nav_faq: "الأسئلة الشائعة", nav_contact: "تواصل معنا", nav_booking: "الحجز", nav_about: "عنا",
        footer_text: "© 2026 فندق Loving Homes للكلاب - هونج كونج. جميع الحقوق محفوظة.",
        main_title: "أهلاً بكم في فندق الكلاب الأول في هونج كونج",
        main_desc: "نحن نوفر تجربة إقامة فاخرة وآمنة لحيواناتكم الأليفة.",
        feature_1: "غرف فاخرة", feature_1_desc: "غرف مزودة بتدفئة وتبريد تحت الأرضية وتلفزيون خاص.",
        feature_2: "رعاية بيطرية", feature_2_desc: "خدمات بيطرية متاحة على مدار 24 ساعة لضمان السلامة.",
        feature_3: "نشاط وحيوية", feature_3_desc: "تمشية في الغابات، مساحات عشب خاصة، وحظيرة لعب داخلية.",
        fac_title: "مرافقنا المتميزة",
        fac_subtitle: "كل ما يحتاجه أليفك ليشعر وكأنه في منزله الثاني.",
        fac_rooms_h: "غرف مكيفة فاخرة", fac_rooms_p: "تتميز غرفنا بنظام تدفئة وتبريد تحت الأرضية، مع شاشات تلفاز خاصة لعرض برامج مخصصة للكلاب لتقليل التوتر.",
        fac_grass_h: "مراعي عشبية واسعة", fac_grass_p: "مساحات خارجية آمنة ومسورة بالكامل تسمح للكلاب بالركض واللعب بحرية تحت إشراف طاقمنا المختص.",
        fac_play_h: "حظيرة اللعب الداخلية", fac_play_p: "منطقة ألعاب داخلية مجهزة بأرضيات مطاطية وألعاب تفاعلية، مثالية للعب في الأيام الممطرة أو الحارة جداً.",
        pack_title: "حزم الإقامة والأسعار", pack_subtitle: "اختر الحزمة التي تناسب احتياجات كلبك وميزانيتك.",
        pack_basic_h: "الأساسية (Standard)", pack_basic_price: "250 HKD", day: "/ يوم",
        pack_basic_l1: "غرفة خاصة مريحة", pack_basic_l2: "وجبتين يومياً", pack_basic_l3: "وقت لعب جماعي",
        pack_vip_h: "المميزة (VIP)", pack_vip_price: "450 HKD", pack_best: "الأكثر طلباً",
        pack_vip_l1: "غرفة مكيفة مع تلفاز", pack_vip_l2: "3 وجبات فاخرة", pack_vip_l3: "تمشية خاصة في الغابة", pack_vip_l4: "تحديثات فيديو يومية",
        pack_deluxe_h: "الفاخرة (Deluxe)", pack_deluxe_price: "700 HKD",
        pack_deluxe_l1: "جناح ملكي واسع", pack_deluxe_l2: "نظام غذائي مخصص", pack_deluxe_l3: "جلسة حلاقة مجانية", pack_deluxe_l4: "خدمة توصيل مجانية",
        groom_title: "صالة الحلاقة والمنتجع الصحي", groom_subtitle: "تجربة تدليل متكاملة لأليفك باستخدام أفضل المستحضرات العالمية والتقنيات الحديثة.",
        groom_s1_h: "قص الشعر الكامل", groom_s1_p: "قص فني واحترافي يشمل غسيل الشعر، تنظيف الأذنين، وقص الأظافر وتصفيف الشعر حسب السلالة.",
        groom_s2_h: "الحمام الطبي والعلاجي", groom_s2_p: "استخدام شامبو مخصص للحساسية أو القشرة مع بلسم لترطيب الفراء وحماية البشرة الحساسة.",
        groom_s3_h: "تنظيف الأسنان والأذن", groom_s3_p: "إزالة الجير السطحي وتعطير الفم، مع تنظيف عميق وآمن للأذنين لمنع الالتهابات.",
        groom_s4_h: "جلسة التدليك والاسترخاء", groom_s4_p: "جلسة تدليك لتقليل التوتر وتحسين الدورة الدموية، مثالية للكلاب الكبيرة في السن أو القلقة.",
        groom_s5_h: "اللمسة النهائية (Spa)", groom_s5_p: "تقليم وتنعيم الأظافر، تنظيف الغدد، ورشة عطر مخصص للحيوانات لإطلالة ملكية.",
        groom_s6_h: "غسيل سريع (Express)", groom_s6_p: "خيار مثالي للكلاب النشيطة؛ غسيل وتجفيف سريع لإعادة الانتعاش في وقت قياسي.",
        groom_cta_h: "هل يستحق أليفك بعض التدليل؟", groom_cta_p: "احجز موعداً الآن في صالون Loving Homes ودع الخبراء يهتمون بالباقي.",
        con_address_t: "عنواننا", con_address_p: "هونج كونج، شارع الكلاب الذهبي",
        con_phone_t: "اتصل بنا", con_email_t: "البريد الإلكتروني",
        con_label_name: "الاسم الكامل:", con_label_email: "البريد الإلكتروني:", con_label_msg: "رسالتك:",
        con_send: "إرسال الرسالة الآن",
        ph_con_name: "أدخل اسمك هنا...", ph_con_email: "example@mail.com", ph_con_msg: "اكتب رسالتك بالتفصيل هنا...",
        toast_title: "تم الإرسال!", toast_desc: "شكراً لتواصلك معنا، سنرد عليك قريباً.",
        book_owner: "اسم صاحب الكلب:", book_dog: "اسم الكلب:",
        ph_owner: "ضع اسمك هنا", ph_dog: "ضع اسم كلبك هنا",
        book_in: "تاريخ الوصول:", book_out: "تاريخ المغادرة:",
        book_package: "الحزمة المختارة:", book_confirm: "تأكيد الحجز",
        opt_standard: "الأساسية (Standard)", opt_vip: "المميزة (VIP)", opt_deluxe: "الفاخرة (Deluxe)",
        map_title: "موقعنا في هونج كونج",
        q1: "هل يجب أن يكون كلبي مطعماً؟", a1: "نعم، يجب تقديم شهادة تطعيم سارية المفعول قبل الحجز لضمان سلامة الجميع.",
        q2: "ما هي سياسة الإلغاء؟", a2: "يمكنك الإلغاء مجاناً قبل 48 ساعة من موعد الحجز.",
        q3: "هل توفرون طعاماً للكلاب أم يجب إحضاره؟", a3: "نحن نوفر وجبات عالية الجودة، ولكن نوصي بإحضار طعام كلبك المعتاد لتجنب اضطراب المعدة.",
        q4: "ما هي أوقات تسجيل الوصول والمغادرة؟", a4: "تسجيل الوصول من 10 صباحاً والمغادرة حتى 6 مساءً.",
        q5: "هل يمكنني مراقبة كلبي عبر الكاميرا؟", a5: "نعم، نوفر تحديثات فيديو يومية وصور عبر الواتساب في باقات VIP و Deluxe.",
        q6: "هل تقبلون جميع سلالات الكلاب؟", a6: "نقبل جميع السلالات بشرط أن تكون اجتماعية وغير عدوانية تجاه الموظفين أو الكلاب الأخرى.",
        q7: "ماذا يحدث إذا مرض كلبي أثناء الإقامة؟", a7: "لدينا طبيب بيطري متاح 24/7 وسنقوم بالاتصال بك فوراً لاتخاذ الإجراء اللازم.",
        q8: "هل يتم تمشية الكلاب يومياً؟", a8: "بالتأكيد، يتم تمشية جميع الكلاب مرتين يومياً في مساحاتنا الخضراء الخاصة.",
        q9: "هل توفرون خدمة التوصيل؟", a9: "نعم، تتوفر خدمة التوصيل من وإلى المنزل داخل هونج كونج في باقة Deluxe.",
        q10: "هل يمكن لكلبي اللعب مع كلاب أخرى؟", a10: "نعم، نوفر وقت لعب جماعي خاضع لإشراف دقيق فقط للكلاب التي تحب اللعب مع الآخرين.",
        about_desc: "في Loving Homes، نجمع بين الخبرة العلمية والحب الصادق للحيوانات لنقدم أفضل تجربة فندقية في هونج كونج.",
        team_title: "فريق العمل والخبراء",
        role_lilia: "خبيرة سلوك الحيوان", bio_lilia: "متخصصة في تحليل لغة جسد الكلاب وضمان تواصل هادئ ومريح لهم خلال فترة الإقامة.",
        role_mark: "مدير العمليات", bio_mark: "المسؤول عن جودة الخدمات والجدول الزمني للأنشطة اليومية لضمان أعلى معايير الرفاهية.",
        role_lux: "كبير أخصائيي العناية", bio_lux: "خبير في قص الشعر الفني والعناية بالبشرة للكلاب باستخدام منتجات عضوية وآمنة.",
        typing: ["مرحباً بكم في Loving Homes", "عناية فائقة بكلبك", "أفضل فندق للكلاب"]
    },
    en: {
        nav_home: "Home", nav_fac: "Facilities", nav_pack: "Packages", nav_groom: "Grooming",
        nav_faq: "FAQ", nav_contact: "Contact Us", nav_booking: "Booking", nav_about: "About",
        footer_text: "© 2026 Loving Homes Dog Hotel - Hong Kong. All Rights Reserved.",
        main_title: "Welcome to HK's Premier Dog Hotel",
        main_desc: "We provide a luxury and safe boarding experience for your beloved pets.",
        feature_1: "Luxury Rooms", feature_1_desc: "Rooms with underfloor heating/cooling and private TV.",
        feature_2: "Vet Care", feature_2_desc: "24/7 veterinary services for safety.",
        feature_3: "Active Life", feature_3_desc: "Forest walks, grass areas, and indoor play barn.",
        fac_title: "Our Premium Facilities",
        fac_subtitle: "Everything your pet needs to feel at home.",
        fac_rooms_h: "Luxury AC Rooms", fac_rooms_p: "Underfloor climate control with private TVs for dog-friendly content to reduce stress.",
        fac_grass_h: "Wide Green Pastures", fac_grass_p: "Safe, fully fenced outdoor spaces under expert supervision.",
        fac_play_h: "Indoor Play Barn", fac_play_p: "Indoor play area with rubber flooring and interactive toys.",
        pack_title: "Packages & Pricing", pack_subtitle: "Choose the package that fits your dog's needs.",
        pack_basic_h: "Standard", pack_basic_price: "250 HKD", day: "/ Day",
        pack_basic_l1: "Comfortable private room", pack_basic_l2: "Two meals per day", pack_basic_l3: "Group playtime",
        pack_vip_h: "VIP", pack_vip_price: "450 HKD", pack_best: "Most Popular",
        pack_vip_l1: "AC room with TV", pack_vip_l2: "3 Premium meals", pack_vip_l3: "Private forest walk", pack_vip_l4: "Daily video updates",
        pack_deluxe_h: "Deluxe", pack_deluxe_price: "700 HKD",
        pack_deluxe_l1: "Spacious Royal Suite", pack_deluxe_l2: "Customized diet", pack_deluxe_l3: "Free grooming session", pack_deluxe_l4: "Free pickup service",
        groom_title: "Grooming & Spa Salon", groom_subtitle: "Professional care using premium products and modern techniques.",
        groom_s1_h: "Full Haircut", groom_s1_p: "Artistic styling including bath, ear cleaning, and breed-specific cuts.",
        groom_s2_h: "Medicated Bath", groom_s2_p: "Specialized shampoos for allergies with hydrating conditioners.",
        groom_s3_h: "Teeth & Ear Care", groom_s3_p: "Tartar removal and safe ear cleaning to prevent infections.",
        groom_s4_h: "Massage Therapy", groom_s4_p: "Stress-relief sessions to improve circulation and relaxation.",
        groom_s5_h: "Spa Touch", groom_s5_p: "Nail grinding, gland cleaning, and pet-safe perfume.",
        groom_s6_h: "Express Wash", groom_s6_p: "Quick wash and dry for active dogs to feel fresh instantly.",
        groom_cta_h: "Does your pet deserve a treat?", groom_cta_p: "Book an appointment today and let our experts handle the rest.",
        con_address_t: "Our Address", con_address_p: "Golden Dog Street, Hong Kong",
        con_phone_t: "Call Us", con_email_t: "Email",
        con_label_name: "Full Name:", con_label_email: "Email Address:", con_label_msg: "Your Message:",
        con_send: "Send Message Now",
        ph_con_name: "Enter your name here...", ph_con_email: "example@mail.com", ph_con_msg: "Write your message in detail here...",
        toast_title: "Sent!", toast_desc: "Thank you for contacting us, we will reply soon.",
        book_owner: "Owner's Name:", book_dog: "Dog's Name:",
        ph_owner: "Put your name here", ph_dog: "Put your dog's name here",
        book_in: "Check-in Date:", book_out: "Check-out Date:",
        book_package: "Selected Package:", book_confirm: "Confirm Booking",
        opt_standard: "Standard", opt_vip: "VIP", opt_deluxe: "Deluxe",
        map_title: "Our Location in Hong Kong",
        q1: "Should my dog be vaccinated?", a1: "Yes, a valid vaccination certificate is required for safety.",
        q2: "What is the cancellation policy?", a2: "You can cancel for free up to 48 hours before the booking.",
        q3: "Do you provide food or should I bring mine?", a3: "We provide premium food, but we recommend bringing yours to avoid stomach upset.",
        q4: "What are the check-in and check-out times?", a4: "Check-in from 10 AM and check-out until 6 PM.",
        q5: "Can I monitor my dog via camera?", a5: "Yes, we provide daily video and photo updates via WhatsApp for VIP and Deluxe packages.",
        q6: "Do you accept all dog breeds?", a6: "We accept all breeds provided they are social and non-aggressive towards staff or others.",
        q7: "What if my dog gets sick during stay?", a7: "We have a 24/7 vet on call and will contact you immediately.",
        q8: "Are dogs walked daily?", a8: "Absolutely, all dogs are walked twice daily in our private green areas.",
        q9: "Do you offer a pick-up service?", a9: "Yes, home pick-up and drop-off are available within HK in the Deluxe package.",
        q10: "Can my dog play with others?", a10: "Yes, we offer supervised group play sessions only for dogs that enjoy socializing.",
        about_desc: "At Loving Homes, we combine scientific expertise with sincere love for animals.",
        team_title: "Our Team & Experts",
        role_lilia: "Animal Behaviorist", bio_lilia: "Specialized in dog body language to ensure a stress-free stay.",
        role_mark: "Operations Manager", bio_mark: "Responsible for service quality and daily activity schedules.",
        role_lux: "Senior Groomer", bio_lux: "Expert in artistic clipping and organic skin care.",
        typing: ["Welcome to Loving Homes", "The Ultimate Care for Your Dog", "The Best Dog Hotel in HK"]
    }
};

// --- المحرك الأساسي ---
let currentLang = localStorage.getItem('lang') || 'ar';

function applySettings() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = (currentLang === 'ar') ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });

    // ترجمة الـ Placeholders
    const inputs = {
        'ownerName': 'ph_owner',
        'dogName': 'ph_dog',
        'con_name': 'ph_con_name',
        'con_email': 'ph_con_email',
        'con_message': 'ph_con_msg'
    };

    for (let id in inputs) {
        const el = document.getElementById(id);
        if (el) el.placeholder = translations[currentLang][inputs[id]];
    }

    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.innerText = (currentLang === 'ar') ? "English" : "العربية";
}

function switchLang() {
    currentLang = (currentLang === 'ar') ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    applySettings();
    cIdx = 0; deleting = false;
    buildFAQ();
}

// الزوم
function changeZoom(type) {
    let currentScale = parseFloat(localStorage.getItem('pageScale') || '1');
    if (type === 'plus' && currentScale < 1.3) currentScale += 0.05;
    if (type === 'minus' && currentScale > 0.8) currentScale -= 0.05;
    document.body.style.zoom = currentScale; 
    localStorage.setItem('pageScale', currentScale);
}

// تأثير الكتابة
let tIdx = 0, cIdx = 0, deleting = false;
function typeEffect() {
    const el = document.getElementById("dynamic-text");
    if (!el) return;
    const texts = translations[currentLang].typing;
    const full = texts[tIdx];
    el.innerText = full.substring(0, deleting ? cIdx - 1 : cIdx + 1);
    cIdx = deleting ? cIdx - 1 : cIdx + 1;
    let speed = deleting ? 50 : 150;
    if (!deleting && cIdx === full.length) { speed = 2000; deleting = true; }
    else if (deleting && cIdx === 0) { deleting = false; tIdx = (tIdx + 1) % texts.length; speed = 500; }
    setTimeout(typeEffect, speed);
}

// الأسئلة الشائعة
function buildFAQ() {
    const faqList = document.getElementById('faq-list');
    if (!faqList) return;
    if (faqList.children.length === 0) {
        for (let i = 1; i <= 10; i++) {
            const item = document.createElement('div');
            item.className = 'faq-item';
            item.innerHTML = `
                <button class="faq-question" onclick="this.parentElement.classList.toggle('active')">
                    <span data-key="q${i}"></span>
                </button>
                <div class="faq-answer"><p data-key="a${i}"></p></div>`;
            faqList.appendChild(item);
        }
    }
    applySettings();
}

// --- معالج النماذج (تم الإصلاح لمنع اختفاء الزر) ---
function setupFormHandlers() {
    // نستخدم Event Delegation على مستوى الـ document لضمان عدم ضياع المستمع حتى لو تغير الـ DOM
    document.addEventListener('submit', function(e) {
        if (e.target.tagName === 'FORM') {
            e.preventDefault();
            const form = e.target;
            const toast = document.getElementById('toastNotification');
            const sound = document.getElementById('successSound');

            // إظهار النجاح
            if (toast) {
                toast.querySelector('strong').innerText = translations[currentLang].toast_title;
                toast.querySelector('p').innerText = translations[currentLang].toast_desc;
                toast.classList.add('show');
                if (sound) sound.play().catch(()=>{});
                setTimeout(() => toast.classList.remove('show'), 4000);
            }
            form.reset();
        }
    });
}

// التشغيل
window.onload = () => {
    applySettings();
    typeEffect();
    buildFAQ();
    setupFormHandlers(); // استدعاء المعالج مرة واحدة فقط
    document.body.style.zoom = localStorage.getItem('pageScale') || '1';
};

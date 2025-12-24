(() => {
    const STORAGE_KEY = "portfolio.lang";

    const translations = {
        en: {
            "nav.home": "Home",
            "nav.features": "Features",
            "nav.portfolio": "Portfolio",
            "nav.resume": "Resume",
            "nav.clients": "Clients",
            "nav.pricing": "Pricing",
            "nav.blog": "Blog",
            "nav.contact": "Contact",
            "cta.buyNow": "BUY NOW | WhatsApp Me",
            "hero.welcome": "Full Stack .NET & Angular Developer",
            "hero.greeting": "Hi, I’m",
            "hero.prefix": "a ",
            "hero.role1": ".NET & Angular Developer.",
            "hero.role2": "ASP.NET Core API Dev.",
            "hero.role3": "Enterprise Web Apps.",
            "hero.findWithMe": "find with me",
            "hero.bestSkillOn": "best skill on",
            "hero.description": "I’m a full-stack developer with 2+ years of professional experience building and modernizing enterprise web applications. I specialize in ASP.NET Core Web APIs, Angular (18–19), and SQL Server, with a strong focus on transforming legacy systems into scalable, maintainable architectures."
            ,
            "features.subtitle": "Features",
            "features.title": "What I Do Best",
            "service.web.title": "Enterprise Web Applications",
            "service.web.desc": "ERP, HR, e-commerce, institute & property systems.",
            "service.app.title": "Backend Engineering",
            "service.app.desc": "ASP.NET Core APIs, authentication, RBAC, and performance optimization.",
            "service.cyber.title": "Frontend Development",
            "service.cyber.desc": "Angular (18–19), Bootstrap, responsive UI, and dashboards.",
            "service.software.title": "Legacy Modernization",
            "service.software.desc": "VB.NET / Web Forms → ASP.NET Core Web API + Angular.",
            "service.social.title": "System Design",
            "service.social.desc": "Modular services, role-based permissions, and clean API contracts.",
            "service.wordpress.title": "Problem Solving",
            "service.wordpress.desc": "Debugging, refactoring, and improving existing codebases.",
            "service.teams.title": "Git & GitHub",
            "service.teams.desc": "Branching, pull requests, and team collaboration.",
            "service.frameworks.title": "Basic DevOps Awareness",
            "service.frameworks.desc": "Deployment awareness, environment configuration, and a production-ready mindset.",
            "portfolio.subtitle": "Selected projects",
            "portfolio.title": "Portfolio",
            "resume.viewCv": "View CV",
            "resume.openInCanva": "Open in Canva",
            "testimonial.subtitle": "What Clients Say",
            "testimonial.title": "Testimonial",
            "clients.subtitle": "Popular Clients",
            "clients.title": "Awesome Clients",
            "pricing.subtitle": "Pricing",
            "pricing.title": "My Pricing",
            "pricing.tab.static": "Static",
            "pricing.tab.standard": "Standard",
            "pricing.tab.premium": "Premium",
            "blog.subtitle": "Visit my blog and keep your feedback",
            "blog.title": "My Blog",
            "blog.leaveReply": "Leave a Reply",
            "blog.submitNow": "SUBMIT NOW",
            "contact.subtitle": "Contact",
            "contact.title": "Contact With Me",
            "contact.available": "I am available for freelance work. Connect with me via and call in to my account.",
            "contact.phone": "Phone:",
            "contact.email": "Email:",
            "contact.sendMessage": "SEND MESSAGE",
            "form.name": "Name",
            "form.email": "Email",
            "form.website": "Website",
            "form.comment": "Comment",
            "footer.rights": "All rights reserved by",
            "hero.Osama": "Osama Algumaei"
        },
        ar: {
            "nav.home": "الرئيسية",
            "nav.features": "الخدمات",
            "nav.portfolio": "الأعمال",
            "nav.resume": "السيرة الذاتية",
            "nav.clients": "العملاء",
            "nav.pricing": "الأسعار",
            "nav.blog": "المدونة",
            "nav.contact": "تواصل معي",
            "cta.buyNow": " اشتري الان | تواصل واتساب",
            "hero.welcome": "مطور .NET وأنجولار متكامل",
            "hero.greeting": "مرحبًا، أنا",
            "hero.prefix": "",
            "hero.role1": "مطور .NET وأنجولار.",
            "hero.role2": "مطور ASP.NET Core API",
            "hero.role3": "تطبيقات مؤسسية.",
            "hero.findWithMe": "تواصل معي",
            "hero.bestSkillOn": "أفضل مهاراتي",
            "hero.description": "أنا مطور Full Stack بخبرة احترافية تزيد عن سنتين في بناء وتحديث تطبيقات ويب مؤسسية. أتخصص في ASP.NET Core Web APIs وAngular (18–19) وSQL Server، مع تركيز قوي على تحويل الأنظمة القديمة إلى بنى قابلة للتوسع وسهلة الصيانة."
            ,
            "features.subtitle": "المميزات",
            "features.title": "ماذا أقدم بشكل أفضل",
            "service.web.title": "تطبيقات ويب مؤسسية",
            "service.web.desc": "أنظمة ERP وHR والتجارة الإلكترونية والمعاهد والعقارات.",
            "service.app.title": "هندسة الخلفية",
            "service.app.desc": "واجهات ASP.NET Core، المصادقة، RBAC، وتحسين الأداء.",
            "service.cyber.title": "تطوير الواجهة الأمامية",
            "service.cyber.desc": "Angular (18–19)، Bootstrap، واجهات متجاوبة ولوحات تحكم.",
            "service.software.title": "تحديث الأنظمة القديمة",
            "service.software.desc": "VB.NET / Web Forms → ASP.NET Core Web API + Angular.",
            "service.social.title": "تصميم الأنظمة",
            "service.social.desc": "خدمات معيارية، صلاحيات حسب الدور، وعقود API نظيفة.",
            "service.wordpress.title": "حل المشكلات",
            "service.wordpress.desc": "تصحيح الأخطاء، إعادة الهيكلة، وتحسين قواعد الكود الحالية.",
            "service.teams.title": "Git وGitHub",
            "service.teams.desc": "الفروع، طلبات الدمج (PRs)، والتعاون ضمن الفريق.",
            "service.frameworks.title": "أساسيات DevOps",
            "service.frameworks.desc": "وعي بالنشر، ضبط البيئات، وعقلية جاهزة للإنتاج.",
            "portfolio.subtitle": "مشاريع مختارة",
            "portfolio.title": "الأعمال",
            "resume.viewCv": "عرض السيرة الذاتية",
            "resume.openInCanva": "فتح في Canva",
            "testimonial.subtitle": "ماذا يقول العملاء",
            "testimonial.title": "آراء العملاء",
            "clients.subtitle": "عملاء مميزون",
            "clients.title": "عملاء رائعون",
            "pricing.subtitle": "الأسعار",
            "pricing.title": "خطط الأسعار",
            "pricing.tab.static": "ثابت",
            "pricing.tab.standard": "قياسي",
            "pricing.tab.premium": "مميز",
            "blog.subtitle": "اقرأ المدونة وشارك رأيك",
            "blog.title": "المدونة",
            "blog.leaveReply": "اترك تعليقًا",
            "blog.submitNow": "إرسال الآن",
            "contact.subtitle": "تواصل",
            "contact.title": "تواصل معي",
            "contact.available": "أنا متاح للعمل الحر. تواصل معي عبر القنوات التالية.",
            "contact.phone": "الهاتف:",
            "contact.email": "البريد الإلكتروني:",
            "contact.sendMessage": "إرسال الرسالة",
            "form.name": "الاسم",
            "form.email": "البريد الإلكتروني",
            "form.website": "الموقع",
            "form.comment": "التعليق",
            "footer.rights": "جميع الحقوق محفوظة لدى",
            "hero.Osama": "أسامة الجماعي"
        },
    };

    const normalizeLang = (value) => {
        if (value === "ar" || value === "en") return value;
        return null;
    };

    const getInitialLang = () => {
        const saved = normalizeLang(localStorage.getItem(STORAGE_KEY));
        if (saved) return saved;

        const htmlLang = (document.documentElement.getAttribute("lang") || "").toLowerCase();
        if (htmlLang.startsWith("ar")) return "ar";
        if (htmlLang.startsWith("en")) return "en";

        const browser = (navigator.language || "en").toLowerCase();
        if (browser.startsWith("ar")) return "ar";

        return "en";
    };

    const applyDirection = (lang) => {
        document.documentElement.setAttribute("lang", lang);
        if (lang === "ar") {
            document.documentElement.setAttribute("dir", "rtl");
            document.body.classList.add("rtl");
        } else {
            document.documentElement.setAttribute("dir", "ltr");
            document.body.classList.remove("rtl");
        }
    };

    const applyTranslations = (lang) => {
        const dict = translations[lang] || {};
        const nodes = document.querySelectorAll("[data-i18n]");

        nodes.forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (!key) return;

            const translated = dict[key];
            if (typeof translated !== "string") return;

            el.textContent = translated;
        });

        const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
        placeholderNodes.forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (!key) return;

            const translated = dict[key];
            if (typeof translated !== "string") return;

            el.setAttribute("placeholder", translated);
        });
    };

    const updateLanguageButtons = (lang) => {
        const buttons = document.querySelectorAll("[data-lang-switch][data-lang]");
        buttons.forEach((btn) => {
            const btnLang = normalizeLang(btn.getAttribute("data-lang"));
            const active = btnLang === lang;
            btn.setAttribute("aria-pressed", active ? "true" : "false");

            // Optional: Bootstrap-style active state
            btn.classList.toggle("active", active);
        });
    };

    const setLanguage = (lang) => {
        const normalized = normalizeLang(lang) || "en";
        localStorage.setItem(STORAGE_KEY, normalized);

        applyDirection(normalized);
        applyTranslations(normalized);
        updateLanguageButtons(normalized);
    };

    const wireEvents = () => {
        document.addEventListener("click", (e) => {
            const target = e.target;
            if (!(target instanceof Element)) return;

            const btn = target.closest("[data-lang-switch][data-lang]");
            if (!btn) return;

            e.preventDefault();
            const lang = btn.getAttribute("data-lang");
            setLanguage(lang);
        });
    };

    const init = () => {
        const initial = getInitialLang();
        wireEvents();
        setLanguage(initial);
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();

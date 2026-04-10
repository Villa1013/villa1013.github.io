(function () {
    var translations = {
      en: {
        "ui.lang_toggle": "ES",
        "seo.title": "William Villalba — Web Development | Villa1013",
        "seo.description":
          "William Villalba — software development, UI, and digital products. Open for projects. Colombia.",
        "nav.menu": "Menu",
        "nav.social": "Social Network",
        "nav.home": "Home",
        "nav.experience": "Experience",
        "nav.works": "Selected Works",
        "nav.works_short": "Works",
        "nav.services": "Services",
        "nav.about": "About",
        "nav.testimonial": "Testimonial",
        "nav.partners": "Partners",
        "nav.pricing": "Pricing",
        "nav.contact": "Contact",
        "sidebar.available": "Available for",
        "sidebar.new_projects": "new projects",
        "sidebar.role_location": "Frontend Developer / Colombia",
        "common.get_started": "Get Started",
        "hero.loading_location": "Loading location...",
        "hero.introduction": "Introduction",
        "hero.title":
          "Innovation improves the <br> lives of many companies and people.",
        "hero.description":
          "<b>Senior Frontend Developer & Junior Full Stack Developer</b> with over 10 years of experience in developing scalable web and mobile applications based on technologies such as <b>React, TypeScript, React Native, JavaScript, Node.js and more.</b>",
        "hero.tag_web": "Web Development",
        "hero.tag_mobile": "Mobile Development",
        "hero.projects_worked": "Projects Worked",
        "hero.success_rate": "Success Rate",
        "contact.heading": "Contact For <br> Work",
        "contact.your_name": "Your Name",
        "contact.your_email": "Your Email",
        "contact.your_phone": "Your Phone",
        "contact.message": "Message",
        "contact.ph_name": "Enter your name",
        "contact.ph_email": "Enter the Email",
        "contact.ph_phone": "Enter your phone number",
        "footer.book_call": "Book A Call",
        "landing.subtitle": "Maintenance Mode",
        "landing.title": "Website under construction",
        "landing.message":
          "We are making updates to deliver a better experience. The final portfolio will be available soon.",
        "landing.cta_email": "Contact by email",
        "landing.cta_portfolio": "View current portfolio",
      },
      es: {
        "ui.lang_toggle": "EN",
        "seo.title": "William Villalba — Desarrollo Web | Villa1013",
        "seo.description":
          "William Villalba — desarrollo de software, interfaces y productos digitales. Disponible para proyectos. Colombia.",
        "nav.menu": "Menú",
        "nav.social": "Redes sociales",
        "nav.home": "Inicio",
        "nav.experience": "Experiencia",
        "nav.works": "Trabajos destacados",
        "nav.works_short": "Trabajos",
        "nav.services": "Servicios",
        "nav.about": "Acerca de",
        "nav.testimonial": "Testimonios",
        "nav.partners": "Aliados",
        "nav.pricing": "Precios",
        "nav.contact": "Contacto",
        "sidebar.available": "Disponible para",
        "sidebar.new_projects": "nuevos proyectos",
        "sidebar.role_location": "Desarrollador Frontend / Colombia",
        "common.get_started": "Comenzar",
        "hero.loading_location": "Cargando ubicación...",
        "hero.introduction": "Introducción",
        "hero.title":
          "La innovación mejora la <br> vida de muchas empresas y personas.",
        "hero.description":
          "<b>Senior Frontend Developer & Junior Full Stack Developer</b> con más de 10 años de experiencia creando aplicaciones web y móviles escalables con tecnologías como <b>React, TypeScript, React Native, JavaScript, Node.js y más.</b>",
        "hero.tag_web": "Desarrollo Web",
        "hero.tag_mobile": "Desarrollo Móvil",
        "hero.projects_worked": "Proyectos trabajados",
        "hero.success_rate": "Tasa de éxito",
        "contact.heading": "Contacto para <br> trabajar",
        "contact.your_name": "Tu nombre",
        "contact.your_email": "Tu correo",
        "contact.your_phone": "Tu teléfono",
        "contact.message": "Mensaje",
        "contact.ph_name": "Escribe tu nombre",
        "contact.ph_email": "Escribe tu correo",
        "contact.ph_phone": "Escribe tu teléfono",
        "footer.book_call": "Agendar llamada",
        "landing.subtitle": "Modo mantenimiento",
        "landing.title": "Sitio en construcción",
        "landing.message":
          "Estamos realizando actualizaciones para ofrecer una mejor experiencia. El portafolio final estará disponible pronto.",
        "landing.cta_email": "Contactar por correo",
        "landing.cta_portfolio": "Ver portafolio actual",
      },
    };

    var STORAGE_KEY = "site_lang";

    function getInitialLang() {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") return saved;
      return navigator.language && navigator.language.toLowerCase().startsWith("es")
        ? "es"
        : "en";
    }

    function t(lang, key) {
      return (translations[lang] && translations[lang][key]) || key;
    }

    function applyLang(lang) {
      document.documentElement.lang = lang === "es" ? "es-CO" : "en-US";

      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (key) el.textContent = t(lang, key);
      });

      document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
        var key = el.getAttribute("data-i18n-html");
        if (key) el.innerHTML = t(lang, key);
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
        var key = el.getAttribute("data-i18n-placeholder");
        if (key) el.setAttribute("placeholder", t(lang, key));
      });

      document.title = t(lang, "seo.title");
      var desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", t(lang, "seo.description"));
      var ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", t(lang, "seo.title"));
      var ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", t(lang, "seo.description"));
      var twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", t(lang, "seo.title"));
      var twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", t(lang, "seo.description"));
    }

    var currentLang = getInitialLang();
    applyLang(currentLang);

    var toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "es" : "en";
        localStorage.setItem(STORAGE_KEY, currentLang);
        applyLang(currentLang);
      });
    }
  })();
document.addEventListener("DOMContentLoaded", () => {
    let currentLanguage = "fr";
  
    // Initialize Typed.js for dynamic text in the Accueil section
    const typedOptions = {
      strings: [
        "Expert en Cybersécurité",
        "Ethical Hacker",
        "Dev. Python & PowerShell",
        "Spécialiste Virtualisation"
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true
    };
    let typed = new Typed(".typed-text", typedOptions);
  
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const targetID = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetID);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth"
          });
        }
      });
    });
  
    // Language translations object
    const translations = {
      fr: {
        nav_home: "Accueil",
        nav_about: "À Propos",
        nav_projects: "Projets",
        nav_skills: "Compétences",
        nav_experience: "Expériences",
        nav_education: "Formation",
        nav_contact: "Contact",
        header_name: "Seifeddine Hassen",
        header_title: "Ingénieur Cybersécurité",
        header_desc: "Passion. Rigueur. Innovation.",
        about_title: "À Propos",
        about_text:
          "Cybersécurité. Analyse. Protection. Je mets en œuvre des solutions de pointe pour sécuriser l'information.",
        projects_title: "Mes Projets",
        project_alpha_desc: "Scan vulnérabilités conforme ANSSI.",
        project_beta_desc: "Automatisation des règles de pare-feu.",
        project_gamma_desc: "Implémentation d’un SIEM ISO 27001.",
        skills_title: "Compétences",
        experience_title: "Expériences",
        exp_ge_vernova: "General Electric VERNOVA",
        exp_ge_desc:
          "Scan vulnérabilités. Supervision réseau. Automatisation des déploiements.",
        exp_ge_digital: "General Electric DIGITAL",
        exp_ge_stage: "Automatisation des règles de pare-feu.",
        education_title: "Formation",
        edu_ynov: "YNOV PARIS",
        edu_cned: "CNED",
        edu_mistral: "Lycée Mistral",
        contact_title: "Contact",
        contact_name_label: "Nom :",
        contact_email_label: "Email :",
        contact_location_label: "Localisation :",
        contact_language_label: "Langues :"
      },
      en: {
        nav_home: "Home",
        nav_about: "About",
        nav_projects: "Projects",
        nav_skills: "Skills",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_contact: "Contact",
        header_name: "Seifeddine Hassen",
        header_title: "Cybersecurity Engineer",
        header_desc: "Passion. Precision. Innovation.",
        about_title: "About",
        about_text:
          "Cybersecurity. Analysis. Protection. I implement cutting-edge solutions to secure information.",
        projects_title: "My Projects",
        project_alpha_desc: "Vulnerability scan compliant with ANSSI.",
        project_beta_desc: "Firewall rule automation.",
        project_gamma_desc: "Implementation of a SIEM for ISO 27001.",
        skills_title: "Skills",
        experience_title: "Experience",
        exp_ge_vernova: "General Electric VERNOVA",
        exp_ge_desc:
          "Vulnerability scan. Network monitoring. Deployment automation.",
        exp_ge_digital: "General Electric DIGITAL",
        exp_ge_stage: "Firewall rule automation.",
        education_title: "Education",
        edu_ynov: "YNOV PARIS",
        edu_cned: "CNED",
        edu_mistral: "Lycée Mistral",
        contact_title: "Contact",
        contact_name_label: "Name:",
        contact_email_label: "Email:",
        contact_location_label: "Location:",
        contact_language_label: "Languages:"
      }
    };
  
    // Function to update static text based on the current language
    function updateLanguage() {
      const elements = document.querySelectorAll("[data-key]");
      elements.forEach(el => {
        const key = el.getAttribute("data-key");
        el.textContent = translations[currentLanguage][key];
      });
  
      // Update project details and titles in project items (if needed)
      document.querySelectorAll(".project-item h3").forEach((h3, index) => {
        // Check current language and update project title if necessary.
        // If we need to update titles, we could leave them as originally
        // set in the HTML or update dynamically here.
      });
  
      // Update Typed.js strings for header dynamic text
      typed.destroy();
      typed = new Typed(".typed-text", {
        strings:
          currentLanguage === "fr"
            ? [
                "Expert en Cybersécurité",
                "Ethical Hacker",
                "Dev.Python & PowerShell",
                "Spécialiste Virtualisation"
              ]
            : [
                "Cybersecurity Expert",
                "Ethical Hacker",
                "Python & PowerShell Dev.",
                "Virtualization Specialist"
              ],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 2000,
        loop: true
      });
    }
  
    // Language toggle button event
    const langToggle = document.getElementById("lang-toggle");
    langToggle.addEventListener("click", () => {
      currentLanguage = currentLanguage === "fr" ? "en" : "fr";
      langToggle.textContent = currentLanguage === "fr" ? "EN" : "FR";
      updateLanguage();
    });
  
    // Project modal
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDetails = document.getElementById("modal-details");
    const closeModal = document.querySelector(".modal .close");
  
    // Add dynamic visual feedback when a project-item is clicked and show modal with details
    const projectItems = document.querySelectorAll(".project-item");
    projectItems.forEach(item => {
      item.addEventListener("click", () => {
        // Add active class for visual effect and remove it after a short time
        item.classList.add("active");
        setTimeout(() => {
          item.classList.remove("active");
        }, 300);
        
        const title =
          currentLanguage === "fr"
            ? item.getAttribute("data-title-fr")
            : item.getAttribute("data-title-en");
        const detail =
          currentLanguage === "fr"
            ? item.getAttribute("data-detail-fr")
            : item.getAttribute("data-detail-en");
        modalTitle.textContent = title;
        modalDetails.textContent = detail;
        modal.style.display = "block";
      });
    });
  
    // When the close button is clicked, hide modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // When clicking outside the modal-content, hide the modal
    window.addEventListener("click", e => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
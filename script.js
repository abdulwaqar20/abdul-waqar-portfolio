// Project data source
const projectsData = [
  {
    title: "Hate Speech & Cyberbullying Detection",
    category: "ai-ml",
    tags: ["Python", "NLP", "Scikit-learn", "Streamlit"],
    image: "assets/hate_speech.png",
    description: "Developed a robust NLP classifier capable of categorizing text as Hate Speech, Cyberbullying, or Neutral. The system is designed to combat toxicity online using machine learning and keyword hybrid methodologies.",
    highlights: [
      "Built an AI classifier using TF-IDF text representation and Logistic Regression (achieved 82% overall accuracy, and 93.8% precision for hate speech).",
      "Combined standard machine learning inference with rule-based keyword filters to handle low-confidence boundary predictions.",
      "Developed a custom Streamlit web interface with real-time text analysis, confidence meters, and interactive confusion matrices."
    ],
    repoLink: "https://github.com/abdulwaqar20/Hate-Speech-And-Cyber-Bullying-Detection"
  },
  {
    title: "Smart Park - Object Detection",
    category: "cv",
    tags: ["Python", "YOLO", "OpenCV", "Streamlit"],
    image: "assets/smart_park.png",
    description: "Designed a real-time parking space monitoring system using deep learning to automate space detection. The solution processes images or video streams to detect vehicle slots and output occupancies.",
    highlights: [
      "Deployed YOLO (You Only Look Once) neural network configurations to classify filled and empty parking spaces.",
      "Implemented confidence threshold tuning and color-coded green (free) and red (occupied) bounding boxes.",
      "Created a Streamlit interface supporting media file uploads and real-time inference displays."
    ],
    repoLink: "https://github.com/abdulwaqar20/Smart-Park"
  },
  {
    title: "Library Recommendation System",
    category: "ai-ml",
    tags: ["Python", "NLP", "TF-IDF", "Streamlit"],
    image: "assets/library.png",
    description: "Built a content-based book recommendation system leveraging text processing and item similarities to recommend books based on summaries and titles.",
    highlights: [
      "Vectorized book descriptions using TF-IDF and calculated cosine similarities to recommend related items.",
      "Integrated fuzzy string matching algorithms to handle typos and spelling mistakes in user search queries.",
      "Embedded Plotly charts in a Streamlit web application to visualize recommendations and group ratings."
    ],
    repoLink: "https://github.com/abdulwaqar20/Library-Recommendation-System"
  },
    {
    title: "General Health Query Chatbot",
    category: "ai-ml",
    tags: ["Python", "Groq API", "GPT-OSS 20B", "Streamlit"],
    image: "assets/chatbot.png",
    description: "A conversational health information assistant built with Groq's GPT-OSS 20B and a Streamlit interface. It gives general educational answers on common health topics, with safety rules that prevent diagnosis and personalized treatment advice.",
    highlights: [
      "Built a multi-turn Streamlit chat app with session conversation history, powered by GPT-OSS 20B through the Groq API.",
      "Engineered a safety-focused system prompt that avoids diagnosis, blocks personalized medication advice, and flags emergency symptoms.",
      "Added self-harm safety handling that refuses method requests and gives supportive guidance instead.",
      "Appended the medical disclaimer in Python code rather than relying on the LLM, so every response includes it."
    ],
    repoLink: "https://github.com/abdulwaqar20/General-Health-Query-Chatbot"
  },
  {
    title: "Smart Patient Care",
    category: "ai-ml",
    tags: ["Python", "LLM", "RAG", "MIMIC-IV"],
    image: "assets/smart_patient_care.png",
    description: "Built during the 48-hour SGTDP Hackathon 2026 by Sofstica Solutions. A structured patient timeline and evidence retrieval system on the MIMIC-IV Clinical Database Demo v2.2, designed so the AI answers from reliable data instead of making things up.",
    highlights: [
      "Displays a patient's full hospital timeline in one place, with patient-specific chat history for continued conversations.",
      "Answers plain-English questions about patient records by retrieving data first, then generating the response from that evidence.",
      "Traces every answer back to the exact source table, field, and row for full transparency.",
      "Built solo in 48 hours, focusing on system design, data flow, testing, and reliability."
    ],
    repoLink: "https://github.com/abdulwaqar20/Smart-Patient-Care"
  }
];

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  lucide.createIcons();
  
  // Typing Effect
  initTypingEffect();
  
  // Theme Toggle Setup
  initThemeToggle();
  
  // Setup Reveal on Scroll Observer
  initScrollAnimations();
  
  // Setup Projects Interactions (Filters, Modals, Search)
  initProjects();
  
  // Setup Smooth Scroll Link Tracking
  initActiveNavTracking();
  
  // Add mobile menu toggle
  initMobileMenu();
});

// Mobile menu toggle
function initMobileMenu() {
  const burger = document.getElementById("burger-menu");
  const menu = document.getElementById("nav-menu");
  const links = document.querySelectorAll(".nav-link");
  
  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("active");
      const icon = burger.querySelector("i");
      if (menu.classList.contains("active")) {
        icon.setAttribute("data-lucide", "x");
      } else {
        icon.setAttribute("data-lucide", "menu");
      }
      lucide.createIcons();
    });
    
    links.forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
        const icon = burger.querySelector("i");
        icon.setAttribute("data-lucide", "menu");
        lucide.createIcons();
      });
    });
  }
}

// 1. Typing Effect Logic
function initTypingEffect() {
  const words = [
    "AI Engineer",
    "Machine Learning Specialist",
    "Computer Vision Developer",
    "Certified GenAI Developer",
    "BS Computer Science Graduate"
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById("typing-element");
  
  if (!typingElement) return;
  
  function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 30 : 75;
    
    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500; // Pause before typing next word
    }
    
    setTimeout(type, typeSpeed);
  }
  
  type();
}

// 2. Theme Toggle
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  
  // Set theme from local storage, fallback to dark
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      const nextTheme = currentTheme === "dark" ? "light" : "dark";
      
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("theme", nextTheme);
    });
  }
}

// 3. Scroll Reveal and Stats/Skills counters
function initScrollAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        
        // Trigger specific sub-animations if relevant
        if (entry.target.classList.contains("stats-grid")) {
          animateStats();
        }
        
        if (entry.target.classList.contains("skills-grid") || entry.target.id === "skills") {
          animateProgressBars();
        }
        
        if (entry.target.id === "certs" || entry.target.querySelector(".languages-box")) {
          animateLanguageCircles();
        }
        
        // Unobserve once shown
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });
  
  reveals.forEach(reveal => revealObserver.observe(reveal));
}

// Stats Counter animation
function animateStats() {
  const counters = document.querySelectorAll(".stat-number");
  
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute("data-target"));
    const decimals = parseInt(counter.getAttribute("data-decimals")) || 0;
    const duration = 1500; // ms
    const startTime = performance.now();
    
    function updateCount(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing curve (quadOut)
      const easeProgress = progress * (2 - progress);
      const currentVal = easeProgress * target;
      
      counter.textContent = currentVal.toFixed(decimals);
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        counter.textContent = target.toFixed(decimals);
      }
    }
    
    requestAnimationFrame(updateCount);
  });
}

// Skills Progress bars animation
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".skill-progress-bar");
  progressBars.forEach(bar => {
    const progress = bar.getAttribute("data-progress");
    bar.style.width = progress;
  });
}

// Languages Circular progress animation
function animateLanguageCircles() {
  const circles = document.querySelectorAll(".lang-circle");
  circles.forEach(circle => {
    const percent = parseInt(circle.getAttribute("data-percent"));
    const progressCircle = circle.querySelector(".circle-progress");
    
    if (progressCircle) {
      const radius = progressCircle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius; // ~201
      const offset = circumference - (percent / 100) * circumference;
      
      // Force repaint
      progressCircle.style.strokeDashoffset = circumference;
      setTimeout(() => {
        progressCircle.style.strokeDashoffset = offset;
      }, 50);
    }
  });
}

// 4. Timeline Swapping
function switchTimeline(type) {
  const expTab = document.getElementById("tab-experience");
  const eduTab = document.getElementById("tab-education");
  const expContainer = document.getElementById("timeline-experience");
  const eduContainer = document.getElementById("timeline-education");
  
  if (type === "experience") {
    expTab.classList.add("active");
    eduTab.classList.remove("active");
    expContainer.classList.add("active");
    eduContainer.classList.remove("active");
  } else {
    eduTab.classList.add("active");
    expTab.classList.remove("active");
    eduContainer.classList.add("active");
    expContainer.classList.remove("active");
  }
}

// 5. Projects filtering, search and modals
function initProjects() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");
  const searchInput = document.getElementById("project-search");
  
  let currentFilter = "all";
  let searchQuery = "";
  
  // Filter Button Clicks
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      applyFilters();
    });
  });
  
  // Search Keyup
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      applyFilters();
    });
  }
  
  function applyFilters() {
    projectCards.forEach(card => {
      const idx = card.getAttribute("data-index");
      const proj = projectsData[idx];
      const category = card.getAttribute("data-category");
      
      const categoryMatch = currentFilter === "all" || category === currentFilter || 
                            (currentFilter === "ai-ml" && (category === "ai-ml" || category === "cv"));
      
      const searchMatch = !searchQuery || 
                          proj.title.toLowerCase().includes(searchQuery) ||
                          proj.description.toLowerCase().includes(searchQuery) ||
                          proj.tags.some(tag => tag.toLowerCase().includes(searchQuery));
                          
      if (categoryMatch && searchMatch) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }
  
  // Card click triggers modal
  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const idx = card.getAttribute("data-index");
      openModal(idx);
    });
  });
}

// Modal handling
function openModal(index) {
  const proj = projectsData[index];
  const modal = document.getElementById("project-modal");
  
  if (!modal || !proj) return;
  
  document.getElementById("modal-img").src = proj.image;
  document.getElementById("modal-title").textContent = proj.title;
  
  // Render tags
  const tagsContainer = document.getElementById("modal-tags");
  tagsContainer.innerHTML = proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("");
  
  document.getElementById("modal-desc").textContent = proj.description;
  
  // Render highlights
  const highlightsContainer = document.getElementById("modal-highlights");
  highlightsContainer.innerHTML = proj.highlights.map(pt => `<li>${pt}</li>`).join("");
  
  // Demo link hook
  const demoBtn = document.getElementById("modal-demo-btn");
  if (demoBtn) {
    demoBtn.href = proj.demoLink;
  }

  const repoBtn = document.getElementById("modal-repo-btn");
  if (repoBtn) {
    repoBtn.href = proj.repoLink || "https://github.com/abdulwaqar20";
  }
  
  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
  
  lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Re-enable scroll
  }
}

// 6. Navigation Active Tracking
function initActiveNavTracking() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const header = document.querySelector(".navbar");
  
  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY;
    
    // Scrolled header background
    if (header) {
      if (scrollPos > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
    
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = id;
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

// 7. Form Submission

async function handleFormSubmit(event) {

  // Stop the page from refreshing
  event.preventDefault();

  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const name = document.getElementById("form-name").value;

  if (!form || !submitBtn) return;


  // Show loading state
  submitBtn.disabled = true;

  submitBtn.innerHTML = `
    Sending...
    <i
      data-lucide="loader-2"
      class="spin-slow"
      style="width:16px;"
    ></i>
  `;

  lucide.createIcons();


  try {

    // Send form data to Formspree
    const response = await fetch(
      "https://formspree.io/f/mppaeeor",
      {
        method: "POST",
        body: new FormData(form),
        headers: {
          "Accept": "application/json"
        }
      }
    );


    // Check if Formspree accepted the message
    if (response.ok) {

      // Reset button
      submitBtn.disabled = false;

      submitBtn.innerHTML = `
        Send Message
        <i
          data-lucide="send"
          style="width:16px;"
        ></i>
      `;

      lucide.createIcons();


      // Show your existing toast
      showToast(
        `Thank you, ${name}! Your message was sent successfully.`
      );


      // Clear form
      form.reset();

    } else {

      // Formspree returned an error
      submitBtn.disabled = false;

      submitBtn.innerHTML = `
        Send Message
        <i
          data-lucide="send"
          style="width:16px;"
        ></i>
      `;

      lucide.createIcons();

      showToast(
        "Sorry, your message could not be sent. Please try again."
      );

    }

  } catch (error) {

    console.error("Form submission error:", error);


    // Reset button
    submitBtn.disabled = false;

    submitBtn.innerHTML = `
      Send Message
      <i
        data-lucide="send"
        style="width:16px;"
      ></i>
    `;
    lucide.createIcons();
    // Show error
    showToast(
      "Something went wrong. Please check your internet connection and try again."
    );
  }
}

// Toast Alert System
function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <i data-lucide="check-circle" class="toast-icon"></i>
    <span class="toast-text">${message}</span>
  `;
  
  container.appendChild(toast);
  lucide.createIcons();
  
  // Trigger transition
  setTimeout(() => {
    toast.classList.add("show");
  }, 10);
  
  // Remove toast after delay
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 4000);
}

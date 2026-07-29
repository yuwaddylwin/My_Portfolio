// Projects Data
const projects = [
    {
        id: 1,
        title: "UniMarket",
        description: "A Full-Stack WebApp for University Students to list, browse, and purchase second-hand items. With a real-time messaging, secure auth, and a user-friendly interface.",
        image: "./assets/UniMarket.png",
        technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "JavaScript"],
        link: "https://github.com/yuwaddylwin/UniMarket",
        liveLink: "https://unimarket-web.onrender.com"
    },
    {
        id: 2,
        title: "Bankly",
        description: "A Full-Stack digital banking WebApp built to simulate modern mobile banking features with secure authentication, money transfers, QR payments, and transaction tracking.",       
        image: "./assets/Bankly.png",
        technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "JavaScript", "Tailwind CSS"],
        link: "https://github.com/yuwaddylwin/Bankly"
    },
    {
        id: 3,
        title: "Movie Review Website",
        description: "A Movie Review Website built to practice backend routing and data handling.",
        image: "./assets/MovieReview.png",
        technologies: ["JavaScript", "HTML", "CSS", "Express", "JSON"],
        link: "https://github.com/yuwaddylwin/Movie-Review-Website",
        liveLink: "https://movie-reviews-lce6.onrender.com"
    },
    {
        id: 4,
        title: "Brand-Sentiment Analyzer",
        description: "A Sentiment Monitoring Project that processes social media comments, visualizes trends, and highlights potential reputation risks using Streamlit and VADER.",
        image: "./assets/Sentiment.png",
        technologies: ["Python", "Pandas", "Streamlit", "VADER"],
        link: "https://github.com/yuwaddylwin/Brand-Sentiment-Monitor"
    },
    {
        id: 5,
        title: "Online Shopping Database",
        description: "Designed a structured E-commerce database system with modules for customers, products, orders, and payments. Created entity relationships and optimized queries.",
        image: "./assets/E-commerce.png",
        technologies: ["SQL", "Microsoft Access", "Database Design"],
        link: "https://github.com/yuwaddylwin/Online-Shopping-DB"
    },
    {
        id: 6,
        title: "Health Care System",
        description: "A Web-based healthcare system designed to manage appointments and medical records, supporting different user roles and built with Express, EJS, and Java.",
        image: "./assets/HCMS.png",
        technologies: ["JavaScript", "Express", "EJS"],
        link: "https://github.com/yuwaddylwin/HealthCare-System"
    }
];

const experiences = [
    {
        company: "Fuzik Connex Co., Ltd.",
        position: "Full Stack Developer Intern",
        period: "June 2026 – Present (4 months)",
        website: "https://www.fuzik.co",
        logo: "./assets/F_logo.png",
        description:
            "Working on a music collaboration platform, contributing to both frontend and backend features while learning modern full-stack development in an agile environment.",
        technologies: [
            "Vue.js",
            "Nuxt 4",
            "Tailwind CSS",
            "Django",
            "PHP",
            "SQLite",
            "Supabase",
            "YouTube API",
            "Git"
        ]
    }
];

const experiencesGrid = document.getElementById('experience-grid');
const projectsGrid = document.getElementById('projects-grid');

function getExperienceUrl(url) {
    if (!url) return '#';
    const trimmedUrl = url.trim();
    return /^https?:\/\//i.test(trimmedUrl) ? trimmedUrl : `https://${trimmedUrl}`;
}

function renderExperienceCards(container, items) {
    if (!container) return;

    items.forEach(item => {
        const card = document.createElement('article');
        card.className = 'project-card experience-card';
        const experienceUrl = getExperienceUrl(item.website);

        card.innerHTML = `
            <div class="project-image experience-image">
                ${item.logo ? `<img src="${item.logo}" alt="${item.company} logo" class="experience-logo" loading="lazy">` : `<div class="experience-badge">${item.company.split(' ').map(word => word[0]).slice(0, 2).join('').toUpperCase()}</div>`}
            </div>
            <div class="project-content experience-content">
                <div class="experience-header">
                    <div>
                        <p class="experience-period">${item.period}</p>
                        <h3 class="experience-company"><a href="${experienceUrl}" target="_blank" rel="noopener noreferrer">${item.company}</a></h3>
                        <h4 class="experience-position">${item.position}</h4>
                    </div>
                    <a href="${experienceUrl}" target="_blank" rel="noopener noreferrer" class="experience-link" aria-label="Visit ${item.company} website">Visit Website <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
                </div>
                <p class="experience-description">${item.description}</p>
                <div class="project-tech">
                    ${item.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

function renderProjectCards(container, items) {
    if (!container) return;

    items.forEach(project => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project-card';

        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title} project preview" loading="lazy">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links" aria-label="${project.title} links">
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="project-link" aria-label="View ${project.title} source code on GitHub">
                        <i class="fab fa-github" aria-hidden="true"></i>
                        <span>GitHub</span>
                    </a>
                    ${project.liveLink ? `
                    <a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="project-link project-link--primary" aria-label="Open ${project.title} live demo">
                        <i class="fas fa-arrow-up-right-from-square" aria-hidden="true"></i>
                        <span>Live Demo</span>
                    </a>` : ''}
                </div>
            </div>
        `;

        container.appendChild(projectCard);
    });
}

renderExperienceCards(experiencesGrid, experiences);
renderProjectCards(projectsGrid, projects);

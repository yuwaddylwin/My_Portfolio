// Projects Data
const projects = [
    {
        id: 1,
        title: "UniMarket",
        description: "A Full-Stack WebApp for University Students to list, browse, and purchase second-hand items. With a real-time messaging, secure auth, and a user-friendly interface.",
        image: "../assets/UniMarket.png",
        technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "JavaScript"],
        link: "https://github.com/yuwaddylwin/UniMarket"
    },
    {
        id: 2,
        title: "Movie Review Website",
        description: "A Movie Review Website built to practice backend routing and data handling.",
        image: "../assets/MovieReview.png",
        technologies: ["JavaScript", "HTML", "CSS", "Express", "JSON"],
        link: "https://github.com/yuwaddylwin/Movie-Review-Website"
    },
    {
        id: 3,
        title: "Brand-Sentiment Analyzer",
        description: "A Sentiment Monitoring Project that processes social media comments, visualizes trends, and highlights potential reputation risks using Streamlit and VADER.",
        image: "../assets/Sentiment.png",
        technologies: ["Python", "Pandas", "Streamlit", "VADER"],
        link: "https://github.com/yuwaddylwin/Brand-Sentiment-Monitor"
    },
    {
        id: 4,
        title: "Online Shopping Database",
        description: "Designed a structured E-commerce database system with modules for customers, products, orders, and payments. Created entity relationships and optimized queries.",
        image: "../assets/E-commerce.png",
        technologies: ["SQL", "Microsoft Access", "Database Design"],
        link: "https://github.com/yuwaddylwin"
    },
    {
        id: 5,
        title: "Health Care System",
        description: "A Web-based healthcare system designed to manage appointments and medical records, supporting different user roles and built with Express, EJS, and Java.",
        image: "../assets/HCMS.png",
        technologies: ["JavaScript", "Express", "EJS"],
        link: "https://github.com/yuwaddylwin/HealthCare-System"
    },
    {
        id: 6,
        title: "Flash Card",
        description: "A small flash card project built with React to practice components, state handling, and interactive UI behavior.",
        image: "../assets/FlashCard.png",
        technologies: ["JavaScript", "HTML", "CSS" ,"React"],
        link: "https://github.com/yuwaddylwin/React-Practice-Flashcards"
    }
];

// Render Projects
const projectsGrid = document.getElementById('projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-overlay">
                    <h3>${project.title}</h3>
                    <a href="${project.link}" target="_blank" class="overlay-btn"><i class="fab fa-github"></i> GitHub</a>
                </div>
            </div>
            <div class="project-content">
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard); // append inside the loop
    });


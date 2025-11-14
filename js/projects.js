// Projects Data
const projects = [
    {
        id: 1,
        title: "UniMarket",
        description: "A full-stack web application for university students to list, browse, and purchase second-hand items. Built with ReactJS, NodeJS, Express, and MongoDB.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        technologies: ["ReactJS", "NodeJS", "Express", "MongoDB", "JavaScript"],
        link: "https://github.com/yuwaddylwin/UniMarket"
    },
    {
        id: 2,
        title: "Food Delivery System",
        description: "A Python-based food delivery system using Binary Search Trees to manage orders efficiently, with built-in order processing and payment functionality.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=781&q=80",
        technologies: ["Python", "Data Structures", "BST"],
        link: "https://github.com/yuwaddylwin"
    },
    {
        id: 3,
        title: "Student Management System",
        description: "A Python program that manages student records using CSV files with full CRUD operations. Focused on implementing core functionality and smooth program logic.",
        image: "./assests/Python_project.png",
        technologies: ["Python", "CSV", "File Handling"],
        link: "https://github.com/yuwaddylwin"
    },
    {
        id: 4,
        title: "Online Shopping Database",
        description: "Designed a structured e-commerce database system with modules for customers, products, orders, and payments. Created entity relationships and optimized queries.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        technologies: ["SQL", "Microsoft Access", "Database Design"],
        link: "https://github.com/yuwaddylwin"
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
        </div>
        <div class="project-content">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.link}" target="_blank" class="btn btn-outline">
                    <i class="fab fa-github"></i> View 
                </a>
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
});


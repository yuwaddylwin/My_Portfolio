// =========================
// Certificates Data
// =========================
const certificates = [
    {
        title: "Responsive Web Design Certificate",
        issuer: "FreeCodeCamp",
        date: "2025",
        description:
            "Completed a comprehensive course covering responsive layouts, Flexbox, CSS Grid, and modern web design principles.",
        src: "../assets/Responsive Web Certificate.png",
        link: "https://www.freecodecamp.org/certification/Yu_Waddy_Lwin/responsive-web-design"
    },

    {
        title: "Introduction to Python Programming",
        issuer: "University of Pennsylvania (Coursera)",
        date: "2023",
        description:
            "Learned Python fundamentals including problem-solving, data structures, loops, functions, and programming concepts.",
        src: "../assets/My python certificate 2-1.png",
        link: "https://www.coursera.org/account/accomplishments/verify/P4QR5QVMGH8M"
    }
];

// =========================
// Events Data
// =========================
const events = [
    {
        title: "Agoda Open House 2025",
        organizer: "Agoda",
        date: "Nov 2025",
        src: "../assets/Agoda.jpg",
        description:
            "Attended a tech sharing session featuring engineers and professionals discussing software engineering, career growth, and industry trends.",
        link: "https://www.linkedin.com/posts/yuwaddylwin_agoda-internshipfair-openhouse-ugcPost-7392602092034527232-VL7J/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAF0W0zcBYgZLv3GKti5jmF3By9n0mvFIlsE"
    }
];

// =========================
// Render Certificates
// =========================
function renderCertificates() {

    const certificateContainer =
        document.getElementById("certificate-list");

    certificates.forEach(cert => {

        const card = document.createElement("div");
        card.className = "other-card";

        card.innerHTML = `
            <div class="other-image">
                <img src="${cert.src}" alt="${cert.title}">
            </div>

            <div class="other-content">

                <div class="other-top">
                    <h3>${cert.title}</h3>

                    <span>
                        ${cert.issuer} • ${cert.date}
                    </span>
                </div>

                <p>${cert.description}</p>

                <a href="${cert.link}"
                   target="_blank"
                   class="card-btn">

                    <i class="fas fa-arrow-up-right-from-square"></i>
                    View Certificate
                </a>
            </div>
        `;

        certificateContainer.appendChild(card);
    });
}

// =========================
// Render Events
// =========================
function renderEvents() {

    const eventContainer =
        document.getElementById("event-list");

    events.forEach(event => {

        const card = document.createElement("div");
        card.className = "other-card";

        card.innerHTML = `
            <div class="other-image">
                <img src="${event.src}" alt="${event.title}">
            </div>

            <div class="other-content">

                <div class="other-top">
                    <h3>${event.title}</h3>

                    <span>
                        ${event.organizer} • ${event.date}
                    </span>
                </div>

                <p>${event.description}</p>

                <a href="${event.link}"
                   target="_blank"
                   class="card-btn">

                    <i class="fas fa-arrow-up-right-from-square"></i>
                    More
                </a>
            </div>
        `;

        eventContainer.appendChild(card);
    });
}

// =========================
// Initialize
// =========================
document.addEventListener("DOMContentLoaded", () => {

    renderCertificates();
    renderEvents();

});
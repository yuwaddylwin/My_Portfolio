const header = document.getElementById("header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navAnchors = [...document.querySelectorAll(".nav-links a")];

function setMenuState(isOpen) {
    menuToggle.classList.toggle("active", isOpen);
    navLinks.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
    setMenuState(!navLinks.classList.contains("active"));
});

navAnchors.forEach(link => {
    link.addEventListener("click", () => setMenuState(false));
});

document.addEventListener("click", event => {
    if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
        setMenuState(false);
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        setMenuState(false);
        menuToggle.focus();
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setMenuState(false);
});

function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 12);
}

const navTargets = navAnchors
    .map(link => ({
        link,
        target: document.querySelector(link.getAttribute("href"))
    }))
    .filter(item => item.target);

let navigationFrame;

function updateActiveNavigation() {
    const activationPoint = window.scrollY + (window.innerHeight * 0.38);
    let activeItem = navTargets[0];

    navTargets.forEach(item => {
        const targetTop = item.target.getBoundingClientRect().top + window.scrollY;
        if (targetTop <= activationPoint) {
            activeItem = item;
        }
    });

    navTargets.forEach(item => {
        item.link.classList.toggle("active", item === activeItem);
    });
}

function handleScroll() {
    updateHeader();

    if (navigationFrame) return;
    navigationFrame = window.requestAnimationFrame(() => {
        updateActiveNavigation();
        navigationFrame = null;
    });
}

window.addEventListener("scroll", handleScroll, { passive: true });
updateHeader();
updateActiveNavigation();

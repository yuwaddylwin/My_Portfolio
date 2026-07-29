function initializeRevealAnimations() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
        return;
    }

    const revealGroups = [
        {
            selector: ".section-header, .about-left, .about-right, .others-title, .contact-info, .contact-form",
            variant: "reveal--default",
            stagger: 0,
            cycle: 1
        },
        {
            selector: ".skill-group",
            children: ".skill-card",
            variant: "reveal--skill",
            stagger: 55,
            cycle: 8
        },
        {
            selector: ".projects-grid",
            children: ".project-card",
            variant: "reveal--project",
            stagger: 90,
            cycle: 3
        },
        {
            selector: "#certificate-list",
            children: ".other-card",
            variant: "reveal--certificate",
            stagger: 90,
            cycle: 3
        },
        {
            selector: "#event-list",
            children: ".other-card",
            variant: "reveal--event",
            stagger: 90,
            cycle: 3
        }
    ];

    const revealElements = [];

    revealGroups.forEach(group => {
        if (group.children) {
            document.querySelectorAll(group.selector).forEach(container => {
                container.querySelectorAll(group.children).forEach((element, index) => {
                    prepareReveal(element, group, index);
                    revealElements.push(element);
                });
            });
            return;
        }

        document.querySelectorAll(group.selector).forEach((element, index) => {
            prepareReveal(element, group, index);
            revealElements.push(element);
        });
    });

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const element = entry.target;
            const delay = Number.parseInt(element.style.getPropertyValue("--reveal-delay"), 10) || 0;

            element.classList.add("is-visible");
            revealObserver.unobserve(entry.target);

            // Remove entry-only styles after the reveal so 250ms hover transitions
            // are not forced to inherit the slower entrance timing.
            window.setTimeout(() => {
                element.classList.remove(
                    "reveal",
                    "reveal--default",
                    "reveal--skill",
                    "reveal--project",
                    "reveal--certificate",
                    "reveal--event",
                    "is-visible"
                );
                element.style.removeProperty("--reveal-delay");
            }, 620 + delay);
        });
    }, {
        rootMargin: "0px 0px -7% 0px",
        threshold: 0.1
    });

    revealElements.forEach(element => revealObserver.observe(element));

    function prepareReveal(element, group, index) {
        const staggerIndex = index % group.cycle;
        element.classList.add("reveal", group.variant);
        element.style.setProperty("--reveal-delay", `${staggerIndex * group.stagger}ms`);
    }
}

document.addEventListener("DOMContentLoaded", initializeRevealAnimations);

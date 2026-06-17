document.addEventListener("DOMContentLoaded", () => {
    
    // 1. DYNAMIC EXPERIENCE COUNTER LOGIC
    const experienceElement = document.getElementById("experience");
    
    if (experienceElement) {
        // Enclosing in a clean string format avoids strict browser octal syntax issues
        const startDate = new Date("2019-10-14"); 
        const today = new Date();

        let years = today.getFullYear() - startDate.getFullYear();
        let months = today.getMonth() - startDate.getMonth();
        let days = today.getDate() - startDate.getDate();

        if (days < 0) {
            months--;
            const previousMonth = new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            );
            days += previousMonth.getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        experienceElement.innerHTML = 
            years + " Years " + 
            months + " Months " + 
            days + " Days";
    }

    // 2. SCROLL HIGHLIGHT / ACTIVE MENU LOGIC
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar ul li a");

    const observerOptions = {
        root: null,
        rootMargin: "-10% 0px -40% 0px", // Triggers active class right as a section hits the upper viewport
        threshold: 0.05
    };

    const observer = new Intersection Observer((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                
                navLinks.forEach((link) => {
                    const href = link.getAttribute("href").replace("#", "");
                    
                    // Matches exact navbar links or handles custom variations safely
                    if (href === currentId || 
                        (currentId === "experience-section" && href === "experience") ||
                        (currentId === "experience" && href === "experience-section")) {
                        
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
});

// 3. DOWNLOAD CV FUNCTION
function downloadCV() {
    window.open('resume.pdf', '_blank'); 
}
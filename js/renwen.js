// Initialize AOS library
function initializeAnimations() {
    AOS.init({
        duration: 1000,
        once: false
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from("h1", {
        duration: 1,
        y: -50,
        opacity: 0,
        ease: "bounce.out"
    });

    gsap.utils.toArray(".video-container, .photos-container img, .history").forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
                scrub: true
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
}

// Initial animation setup
initializeAnimations();

// Monitor scroll position and reinitialize animations upon returning to the top
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        // Reinitialize AOS and GSAP animations
        AOS.refresh();
        ScrollTrigger.refresh();
        initializeAnimations();
    }
});
document.addEventListener("DOMContentLoaded", () => {
    gsap.to("#rolling-text", { 
        x: "-100%", 
        duration: 10, 
        ease: "linear", 
        repeat: -1 
    });

    gsap.from("#title", { opacity: 0, y: -50, duration: 1 });
    gsap.from("#subtitle", { opacity: 0, y: 20, delay: 0.5, duration: 1 });
    gsap.from(".project", { opacity: 0, stagger: 0.3, y: 50, duration: 1 });
});

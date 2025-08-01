// Professional website interactivity for The Classified Files
class ClassifiedFilesWebsite {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupScrollEffects();
        this.setupGameCards();
        this.setupParticleEffects();
        this.setupIntersectionObserver();
        this.setupSmoothScrolling();
        this.setupMobileMenu();
    }

    // Navigation functionality
    setupNavigation() {
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Update active navigation link based on scroll position
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            
            // Add/remove navbar background based on scroll
            if (scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
                navbar.style.borderBottom = '1px solid rgba(59, 130, 246, 0.2)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
                navbar.style.borderBottom = '1px solid rgba(51, 65, 85, 1)';
            }
            
            // Update active nav link
            const sections = document.querySelectorAll('section[id]');
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    // Mobile menu functionality
    setupMobileMenu() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Close menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navToggle.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    // Smooth scrolling for navigation links
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Game card interactions
    setupGameCards() {
        const gameCards = document.querySelectorAll('.game-card');
        
        gameCards.forEach(card => {
            // Add hover sound effect simulation
            card.addEventListener('mouseenter', () => {
                this.playHoverEffect(card);
            });
            
            // Add click tracking for available games
            const playButton = card.querySelector('.game-btn:not(.disabled)');
            if (playButton) {
                playButton.addEventListener('click', (e) => {
                    this.trackGameClick(card.dataset.game);
                    this.showGameLaunchEffect(card);
                });
            }
            
            // Add particle effect on hover for featured cards
            if (card.classList.contains('featured')) {
                this.addCardParticles(card);
            }
        });
    }

    // Visual hover effects for game cards
    playHoverEffect(card) {
        const icon = card.querySelector('.game-icon');
        const glow = card.querySelector('.icon-glow');
        
        if (icon && glow) {
            icon.style.transform = 'scale(1.1) rotateY(10deg)';
            glow.style.opacity = '0.6';
            glow.style.transform = 'scale(1.2)';
            
            setTimeout(() => {
                icon.style.transform = '';
                glow.style.opacity = '';
                glow.style.transform = '';
            }, 300);
        }
    }

    // Track game launches for analytics
    trackGameClick(gameName) {
        console.log(`Game launched: ${gameName}`);
        // Could integrate with analytics here
    }

    // Visual effect when launching a game
    showGameLaunchEffect(card) {
        const button = card.querySelector('.game-btn');
        const originalText = button.innerHTML;
        
        button.innerHTML = '<span>Loading...</span>';
        button.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 2000);
    }

    // Add particle effects to featured cards
    addCardParticles(card) {
        const particleContainer = document.createElement('div');
        particleContainer.className = 'card-particles';
        particleContainer.style.cssText = `
            position: absolute;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            border-radius: 20px;
        `;
        
        card.appendChild(particleContainer);
        
        // Create floating particles
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                this.createParticle(particleContainer);
            }, i * 800);
        }
        
        // Continue creating particles on interval
        setInterval(() => {
            if (card.matches(':hover')) {
                this.createParticle(particleContainer);
            }
        }, 1200);
    }

    // Create individual floating particles
    createParticle(container) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        const startX = Math.random() * 100;
        const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${startX}%;
            bottom: -10px;
            opacity: 0.6;
            animation: floatUp 3s ease-out forwards;
            box-shadow: 0 0 10px ${color}40;
        `;
        
        // Add keyframes if not already added
        if (!document.querySelector('#particle-animations')) {
            const style = document.createElement('style');
            style.id = 'particle-animations';
            style.textContent = `
                @keyframes floatUp {
                    0% {
                        transform: translateY(0) translateX(0) scale(0);
                        opacity: 0.6;
                    }
                    20% {
                        opacity: 1;
                        transform: scale(1);
                    }
                    100% {
                        transform: translateY(-400px) translateX(${Math.random() * 100 - 50}px) scale(0);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        container.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 3000);
    }

    // Enhanced particle effects for hero section
    setupParticleEffects() {
        const heroParticles = document.querySelector('.hero-particles');
        
        if (heroParticles) {
            this.createHeroParticles(heroParticles);
            
            // Add mouse movement effect
            document.addEventListener('mousemove', (e) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                
                const xPercent = (clientX / innerWidth) * 100;
                const yPercent = (clientY / innerHeight) * 100;
                
                heroParticles.style.background = `
                    radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                    radial-gradient(circle at ${100 - xPercent}% ${100 - yPercent}%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)
                `;
            });
        }
    }

    // Create animated particles for hero section
    createHeroParticles(container) {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                this.createHeroParticle(container);
            }, i * 200);
        }
        
        // Continue creating particles
        setInterval(() => {
            this.createHeroParticle(container);
        }, 2000);
    }

    createHeroParticle(container) {
        const particle = document.createElement('div');
        const size = Math.random() * 3 + 1;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const colors = ['rgba(59, 130, 246, 0.4)', 'rgba(16, 185, 129, 0.4)', 'rgba(255, 255, 255, 0.2)'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            left: ${startX}%;
            top: ${startY}%;
            animation: heroFloat 8s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        
        // Add hero particle keyframes
        if (!document.querySelector('#hero-particle-animations')) {
            const style = document.createElement('style');
            style.id = 'hero-particle-animations';
            style.textContent = `
                @keyframes heroFloat {
                    0%, 100% {
                        transform: translateY(0) translateX(0) scale(1);
                        opacity: 0.6;
                    }
                    25% {
                        transform: translateY(-20px) translateX(10px) scale(1.1);
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(-40px) translateX(-5px) scale(0.9);
                        opacity: 0.8;
                    }
                    75% {
                        transform: translateY(-20px) translateX(-10px) scale(1.05);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        container.appendChild(particle);
        
        // Remove particle after a while
        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 8000);
    }

    // Intersection Observer for scroll animations
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    this.animateCounters(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements for animation
        document.querySelectorAll('.game-card, .feature-card, .visual-card, .stat').forEach(el => {
            observer.observe(el);
        });
    }

    // Animate number counters
    animateCounters(element) {
        const counters = element.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = counter.textContent;
            if (target === '∞') return; // Skip infinity symbol
            
            const numericTarget = parseInt(target.replace(/[^\d]/g, ''));
            if (isNaN(numericTarget)) return;
            
            let current = 0;
            const increment = numericTarget / 60;
            const suffix = target.includes('+') ? '+' : target.includes('%') ? '%' : '';
            
            const updateCounter = () => {
                current += increment;
                if (current < numericTarget) {
                    counter.textContent = Math.floor(current) + suffix;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = numericTarget + suffix;
                }
            };
            
            updateCounter();
        });
    }

    // Scroll-based effects
    setupScrollEffects() {
        let ticking = false;
        
        const updateScrollEffects = () => {
            const scrollY = window.pageYOffset;
            
            // Parallax effect for hero background
            const heroGrid = document.querySelector('.hero-grid');
            if (heroGrid) {
                const speed = scrollY * 0.5;
                heroGrid.style.transform = `translate(${speed * 0.1}px, ${speed * 0.2}px)`;
            }
            
            // Update hero particles based on scroll
            const heroParticles = document.querySelector('.hero-particles');
            if (heroParticles) {
                const opacity = Math.max(0, 1 - scrollY / 500);
                heroParticles.style.opacity = opacity;
            }
            
            ticking = false;
        };
        
        const requestScrollUpdate = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };
        
        window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    }
}

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ClassifiedFilesWebsite();
});

// Add CSS for scroll animations
const scrollAnimationsCSS = `
    .game-card,
    .feature-card,
    .visual-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .game-card.animate-in,
    .feature-card.animate-in,
    .visual-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .nav-link.active {
        color: #60a5fa;
        background: rgba(59, 130, 246, 0.15);
    }
    
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 72px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 72px);
            background: rgba(15, 23, 42, 0.98);
            backdrop-filter: blur(12px);
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 60px;
            transition: left 0.3s ease;
            border-right: 1px solid rgba(51, 65, 85, 1);
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-toggle.active .bar:nth-child(1) {
            transform: rotate(-45deg) translate(-6px, 6px);
        }
        
        .nav-toggle.active .bar:nth-child(2) {
            opacity: 0;
        }
        
        .nav-toggle.active .bar:nth-child(3) {
            transform: rotate(45deg) translate(-6px, -6px);
        }
    }
`;

// Inject scroll animations CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = scrollAnimationsCSS;
document.head.appendChild(styleSheet);
// Custom Cursor
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const hoverElements = document.querySelectorAll('a, button, .blog-card');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Blog Card Focus Mode
    const cards = document.querySelectorAll('.blog-card');

    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // If clicking a link inside, don't toggle focus
            if (e.target.tagName === 'A' || e.target.closest('a')) return;

            // Toggle active state
            if (card.classList.contains('active')) {
                card.classList.remove('active');
                document.body.classList.remove('focus-mode');
            } else {
                // Remove active from others
                cards.forEach(c => c.classList.remove('active'));

                card.classList.add('active');
                document.body.classList.add('focus-mode');
            }
        });
    });

    // Close focus mode when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.blog-card') && document.body.classList.contains('focus-mode')) {
            cards.forEach(c => c.classList.remove('active'));
            document.body.classList.remove('focus-mode');
        }
    });

    // --- Search Logic ---
    const searchInput = document.querySelector('.search-input');
    const searchDropdown = document.getElementById('searchDropdown');
    let fuse;

    // Initialize Fuse
    if (typeof Fuse !== 'undefined' && typeof searchData !== 'undefined') {
        const options = {
            includeScore: true,
            keys: ['title', 'content', 'category'],
            threshold: 0.4, // Fuzzy matching sensitivity
            ignoreLocation: true
        };
        fuse = new Fuse(searchData, options);
    }

    // Debounce Function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    if (searchInput && searchDropdown) {
        const handleSearch = debounce((e) => {
            const searchTerm = e.target.value.trim();
            searchDropdown.innerHTML = ''; // Clear previous results

            if (searchTerm.length === 0) {
                searchDropdown.style.display = 'none';
                return;
            }

            if (fuse) {
                const results = fuse.search(searchTerm);

                if (results.length > 0) {
                    searchDropdown.style.display = 'block';
                    results.forEach(result => {
                        const item = result.item;
                        const resultEl = document.createElement('div');
                        resultEl.className = 'search-result-item';
                        resultEl.innerHTML = `
                            <div class="result-img">
                                <img src="${item.image}" alt="${item.title}">
                            </div>
                            <div class="result-info">
                                <h4>${item.title}</h4>
                                <span class="result-category">${item.category}</span>
                            </div>
                        `;
                        resultEl.addEventListener('click', () => {
                            window.location.href = item.url;
                        });
                        searchDropdown.appendChild(resultEl);
                    });
                } else {
                    searchDropdown.style.display = 'block';
                    searchDropdown.innerHTML = '<div class="no-results">No stories found.</div>';
                }
            }
        }, 300); // 300ms delay

        searchInput.addEventListener('input', handleSearch);

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.style.display = 'none';
            }
        });
    }

    // --- Filter Logic ---
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            const cards = document.querySelectorAll('.blog-card');

            cards.forEach(card => {
                // Reset animation
                card.classList.remove('animating');
                void card.offsetWidth; // Trigger reflow

                if (filterValue === '*') {
                    card.classList.remove('is-hidden');
                    card.classList.add('animating');
                } else {
                    if (card.classList.contains(filterValue.substring(1))) { // Remove dot
                        card.classList.remove('is-hidden');
                        card.classList.add('animating');
                    } else {
                        card.classList.add('is-hidden');
                    }
                }
            });
        });
    });
});
// --- Intro Animation ---
window.addEventListener('load', () => {
    const overlay = document.getElementById('intro-overlay');

    // Fade out overlay
    setTimeout(() => {
        if (overlay) {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.remove();
            }, 800);
        }

        // Candy Explosion!
        if (typeof confetti !== 'undefined') {
            const duration = 2000;
            const end = Date.now() + duration;

            // Brand colors
            const colors = ['#ff0099', '#00e5ff', '#ffff00', '#9d00ff'];

            (function frame() {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors,
                    shapes: ['circle', 'square']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors,
                    shapes: ['circle', 'square']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());

            // Big Center Burst
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 },
                colors: colors,
                disableForReducedMotion: true
            });
        }
    }, 500); // Slight delay after load for effect
});

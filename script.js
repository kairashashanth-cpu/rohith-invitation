// ========================================
// ROHITH FUTURE TECH WORKSHOP INVITATION
// Vanilla JavaScript Functions
// ========================================

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    generateStars();
    setupEventListeners();
});

// ========================================
// GENERATE ANIMATED STARS
// ========================================

function generateStars() {
    const starsContainer = document.querySelector('.stars-container');
    const numberOfStars = Math.floor(window.innerWidth / 10);

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        // Random star size
        const sizeType = Math.random();
        if (sizeType < 0.5) {
            star.classList.add('small');
        } else if (sizeType < 0.8) {
            star.classList.add('medium');
        } else {
            star.classList.add('large');
        }

        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';

        // Random duration for twinkling animation
        const duration = Math.random() * 3 + 2;
        star.style.setProperty('--duration', duration + 's');

        starsContainer.appendChild(star);
    }
}

// ========================================
// SETUP EVENT LISTENERS
// ========================================

function setupEventListeners() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    const copyBtn = document.getElementById('copyBtn');

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', shareWhatsApp);
    }

    if (copyBtn) {
        copyBtn.addEventListener('click', copyInvitation);
    }
}

// ========================================
// WHATSAPP SHARING FUNCTION
// ========================================

function shareWhatsApp() {
    // Invitation message
    const message = `🎉 You're Invited, Rohith! 👋

🚀 Future Tech Workshop

📅 Saturday, October 10, 2026
⏰ 10:00 AM – 1:00 PM
📍 College Innovation Lab

Come with your curiosity.
Leave with new ideas. 💡

See you there! 🚀`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp Web URL
    const whatsappURL = `https://wa.me/?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
}

// ========================================
// COPY INVITATION LINK FUNCTION
// ========================================

function copyInvitation() {
    const currentURL = window.location.href;

    // Check if clipboard API is available
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentURL)
            .then(() => {
                showCopyNotification();
            })
            .catch(() => {
                fallbackCopyToClipboard(currentURL);
            });
    } else {
        // Fallback for older browsers
        fallbackCopyToClipboard(currentURL);
    }
}

// ========================================
// FALLBACK COPY FUNCTION
// ========================================

function fallbackCopyToClipboard(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';

    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showCopyNotification();
    } catch (err) {
        showFallbackMessage();
    }

    document.body.removeChild(textarea);
}

// ========================================
// SHOW COPY NOTIFICATION
// ========================================

function showCopyNotification() {
    const notification = document.getElementById('copyNotification');

    if (notification) {
        notification.classList.add('show');

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
}

// ========================================
// FALLBACK MESSAGE (for clipboard unavailable)
// ========================================

function showFallbackMessage() {
    const notification = document.getElementById('copyNotification');

    if (notification) {
        const originalText = notification.textContent;

        notification.textContent = '📋 Copy the URL from your browser.';
        notification.classList.add('show');

        // Restore original text after 4 seconds
        setTimeout(() => {
            notification.textContent = originalText;
            notification.classList.remove('show');
        }, 4000);
    }
}

// ========================================
// REGENERATE STARS ON WINDOW RESIZE
// ========================================

window.addEventListener('resize', () => {
    // Optional: Regenerate stars on resize
    // Uncomment below if you want responsive star generation
    // const starsContainer = document.querySelector('.stars-container');
    // starsContainer.innerHTML = '';
    // generateStars();
});

// ========================================
// SMOOTH SCROLL BEHAVIOR
// ========================================

// Already defined in CSS with scroll-behavior: smooth;

// ========================================
// KEYBOARD ACCESSIBILITY
// ========================================

// Buttons are already keyboard accessible due to semantic HTML
// and CSS :focus-visible styling
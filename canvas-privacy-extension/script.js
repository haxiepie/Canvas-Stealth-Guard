// script.js
(() => {
  // Create the starry background
  const createStars = () => {
    const starsContainer = document.createElement('div');
    starsContainer.classList.add('stars');
    document.body.appendChild(starsContainer);

    const starCount = 200; // Adjust the number of stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`;
      star.style.background = `rgba(255, 255, 255, ${0.5 + Math.random() * 0.5})`;
      starsContainer.appendChild(star);
    }
  };

  // Add CSS for stars and animations
  const addStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      .stars {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
      }
      .star {
        position: absolute;
        width: 2px;
        height: 2px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        animation: twinkle 3s infinite ease-in-out;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      }
      @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);
  };

  // Toggle functionality
  const setupToggle = () => {
    const toggleSwitch = document.getElementById('toggle-switch');
    if (!toggleSwitch) return;

    // Load saved state
    chrome.storage.local.get('extensionEnabled', (data) => {
      toggleSwitch.checked = data.extensionEnabled !== false; // Default to true
    });

    // Save state on toggle
    toggleSwitch.addEventListener('change', () => {
      chrome.storage.local.set({ extensionEnabled: toggleSwitch.checked }, () => {
        // Send message to content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { enabled: toggleSwitch.checked });
        });
      });
    });
  };

  // Initialize everything
  const init = () => {
    addStyles();
    createStars();
    setupToggle();
  };

  // Run on DOM load
  document.addEventListener('DOMContentLoaded', init);
})();
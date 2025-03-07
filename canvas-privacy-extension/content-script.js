// Hello, this script was created by @haxiepie
// This script is licensed under the MIT License
// You are free to use this script in your projects, but please give credit to the author (ME!) and do not claim it as your own.
// You may not sell this script or any modified version of it.
// You may not remove or alter this license from the script.
// This script is not for use in any malicious, illegal, or unethical activities.
// This script is primarily intended for educational purposes and should not be used to cheat on assignments, quizzes, exams, or tests.
// The author does not condone cheating, and any consequences resulting from misuse of this script are the sole responsibility of the user.
// Use this script responsibly!
// DO NOT engage in any activity that violates the rights or privacy of others.
// If you have any questions, concerns, or need clarification, contact me on GitHub or Discord:
// GitHub: https://github.com/haxiepie
// Discord: _haxiee

// content-script.js
(() => {
  const overrideVisibility = () => {
    try {
      // Single source of truth for visibility overrides
      Object.defineProperty(document, 'visibilityState', {
        get: () => 'visible',
        configurable: true
      });

      Object.defineProperty(document, 'hidden', {
        get: () => false,
        configurable: true
      });
    } catch (e) { console.debug('Visibility override failed:', e); }
  };

  const spoofFocus = () => {
    try {
      // Correct hasFocus override
      const originalHasFocus = document.hasFocus;
      Object.defineProperty(document, 'hasFocus', {
        get: () => {
          try { return originalHasFocus.call(document); }
          finally { return true; }
        },
        configurable: true
      });

      // Window focus override
      Object.defineProperty(window, 'hasFocus', {
        get: () => true,
        configurable: true
      });
    } catch (e) { console.debug('Focus override failed:', e); }
  };

  const nuclearOverride = () => {
    overrideVisibility();
    spoofFocus();
    
    // Event listener blocking (optimized)
    const block = (type) => {
      try {
        window.addEventListener(type, e => e.stopImmediatePropagation(), true);
        document.addEventListener(type, e => e.stopImmediatePropagation(), true);
      } catch (e) {}
    };

    ['visibilitychange', 'blur', 'focus', 'pagehide'].forEach(block);
  };

  // Initial override
  nuclearOverride();

  // Persistent protection
  const reinforcer = () => {
    try {
      nuclearOverride();
      document.dispatchEvent(new Event('visibilitychange'));
      window.dispatchEvent(new Event('focus'));
    } catch (e) {}
  };

  setInterval(reinforcer, 500);
  document.addEventListener('DOMContentLoaded', reinforcer);
  window.addEventListener('load', reinforcer);
})();
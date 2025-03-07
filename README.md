![image](https://github.com/user-attachments/assets/45b5bac3-b2c3-48fe-8e0d-8f81715740e6)


![image](https://github.com/user-attachments/assets/7e97c1a2-30c8-4e57-992b-e110c1bc32fc)


### Overview

This script was created to enhance the user experience on Canvas-based platforms by preventing the page from losing focus or visibility. Specifically, it overrides the browser's default behavior to block visibility and focus change events, ensuring that the page remains active and in focus, even when users switch tabs or minimize the browser window.

### Purpose

The primary goal of this script is to maintain a consistent user experience on  Canvas, where it may be important for the page to appear as "always active" for tracking or testing purposes. This script works by:
- **Spoofing Focus:** Ensures the document and window always appear focused, even if the user navigates away or minimizes the browser.
- **Overriding Visibility:** Keeps the page's visibility state always "visible," preventing it from being marked as hidden or inactive.
- **Blocking Events:** Prevents specific browser events (e.g., `focus`, `blur`, `visibilitychange`) from triggering, which could interfere with platform functionality.

### How It Works

- **Visibility Override:** The script overrides the `document.visibilityState` and `document.hidden` properties to always return values indicating the page is visible and active.
- **Focus Spoofing:** By modifying `document.hasFocus()` and `window.hasFocus()`, it prevents the platform from detecting when the user switches tabs or windows.
- **Event Blocking:** Blocks events like `visibilitychange`, `blur`, `focus`, and `pagehide`, which are commonly used to detect when a user navigates away from the page.

### Use Cases

- **Canvas and Other Educational Platforms:** This script can be particularly useful for preventing activity tracking issues, ensuring that your page always appears focused and active during testing or quiz-taking on platforms like Canvas.
- **Preventing Unwanted Interruptions:** It can be used to ensure that web apps don’t mistakenly think the user has navigated away from the page, preventing interruptions and improving the overall user experience.

### Usage

To use the script, simply include it as a content script in your web page, and it will automatically begin overriding visibility and focus events to maintain an active state. When you do not need it, go to extensions, and turn it off.

If you have any questions or need further clarification, feel free to reach out via GitHub or Discord.


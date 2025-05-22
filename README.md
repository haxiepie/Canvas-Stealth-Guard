![image](https://github.com/user-attachments/assets/45b5bac3-b2c3-48fe-8e0d-8f81715740e6)


![image](https://github.com/user-attachments/assets/7e97c1a2-30c8-4e57-992b-e110c1bc32fc)


### Overview

This script was created to enhance the user experience on Canvas-based platforms by preventing the page from losing focus or visibility. Specifically, it overrides the browser's default behavior to block visibility and focus change events, ensuring that the page remains active and in focus, even when users switch tabs or minimize the browser window.

### Purpose

Sometimes Canvas (or other platforms) freak out if you stop paying attention, it might pause stuff or flag you as inactive. This script makes sure your page *always* looks active, so you don’t get interrupted or accidentally kicked out. Here’s what it does:

* **Fakes Focus:** Makes the page act like it’s always got your attention, even if you’re not looking.
* **Visibility Hack:** Keeps the page saying “I’m still here!” so it doesn’t get hidden or paused.
* **Block Events:** Stops those annoying browser events that tell the page you switched tabs or left.

### How It Works

* It tricks the browser’s `document.visibilityState` and `document.hidden` so they always say the page is visible.
* It fakes `document.hasFocus()` and `window.hasFocus()` to make the site think you never left.
* It blocks events like `visibilitychange`, `blur`, and `focus` so the site can’t tell when you go AFK.

### When Would You Use This?

* Taking quizzes or tests on Canvas and want to avoid getting flagged for leaving the page.
* Using web apps that pause or block stuff when you switch tabs, this keeps them running smoothly.
* Basically anytime you want the site to think you’re glued to the screen, even if you’re not.

### How To Use It

Just install it as an extension or include it on your page, and boom, it’ll keep everything “active” for you. When you don’t need it, just toggle it off.

Questions? Hit me up on GitHub or Discord!

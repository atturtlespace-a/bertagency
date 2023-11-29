//only works for Desktop 

document.addEventListener("DOMContentLoaded", function () {
  // Get the global navigation element
  const globalNav = document.querySelector("[navnew]");

  if (globalNav) {
    // Get the screen width
    const screenWidth = window.innerWidth;
    const isLargeScreen = screenWidth > 768;

    if (isLargeScreen) {
      // Variables for tracking scroll direction and position
      let isScrollingUp = false;
      let lastScrollPosition = 0;

      // Function to update menu and empty space heights
      function updateMenuAndEmptyHeight() {
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 0) {
          isScrollingUp = scrollPosition < lastScrollPosition;
          lastScrollPosition = scrollPosition;

          // Perform the animation
          if (typeof gsap !== "undefined") {
            gsap.to(globalNav, {
              translateY: isScrollingUp ? 0 : -globalNav.clientHeight,
              ease: "power2.easeInOut",
              duration: 1
            });
          }
        }
      }

      if (typeof gsap !== "undefined") {
        window.addEventListener("scroll", updateMenuAndEmptyHeight);
      }
    }
  }
});

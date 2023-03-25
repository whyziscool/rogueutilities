function animateAndRedirect(event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Add an animation class to the clicked link
  event.target.classList.add("animate");

  // Wait for the animation to finish
  setTimeout(() => {
    // Redirect to the page corresponding to the clicked link
    const linkId = event.target.getAttribute("id");
    if (linkId === "home-link") {
      window.location.href = "index.html";
    } else if (linkId === "downloads-link") {
      window.location.href = "downloads.html";
    } else if (linkId === "about-link") {
      window.location.href = "about.html";
    }
  }, 1000); // Change the delay as needed (in milliseconds)
}

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => link.addEventListener("click", animateAndRedirect));

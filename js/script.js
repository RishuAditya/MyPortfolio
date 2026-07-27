document.addEventListener("DOMContentLoaded", () => {
  // Typewriter
  const typedTarget = document.getElementById("typed");
  const roles = ["DEVELOPER", "MCA STUDENT", "TECH ENTHUSIAST"];
  let r = 0,
    c = 0,
    isDel = false;

  function type() {
    const full = roles[r];
    typedTarget.textContent = isDel
      ? full.substring(0, c - 1)
      : full.substring(0, c + 1);
    c += isDel ? -1 : 1;
    if (!isDel && c === full.length) {
      isDel = true;
      setTimeout(type, 2000);
      return;
    }
    if (isDel && c === 0) {
      isDel = false;
      r = (r + 1) % roles.length;
      setTimeout(type, 500);
      return;
    }
    setTimeout(type, isDel ? 80 : 150);
  }
  type();

  // Tabs logic
  const navLinks = document.querySelectorAll(".nav-link");
  const tabPanes = document.querySelectorAll(".tab-pane");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("data-tab");
      navLinks.forEach((l) => l.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));
      link.classList.add("active");
      document.getElementById(targetId).classList.add("active");
    });
  });
});

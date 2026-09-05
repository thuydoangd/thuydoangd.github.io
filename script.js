// Năm hiện tại ở footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menu trên thiết bị di động
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  links.classList.toggle("open");
});

// Đóng menu khi bấm vào một liên kết
links.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => links.classList.remove("open"));
});

// Hiệu ứng xuất hiện khi cuộn trang
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".section, .hero-content, .hero-avatar").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

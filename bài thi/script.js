const carousel = document.getElementById("carousel");
const images = document.querySelectorAll(".carousel img");

// Khi đưa chuột vào 1 hình → dừng đèn
images.forEach(img => {
    img.addEventListener("mouseenter", () => {
        carousel.style.animationPlayState = "paused";
    });

    // Rê chuột ra → quay tiếp
    img.addEventListener("mouseleave", () => {
        carousel.style.animationPlayState = "running";
    });
});


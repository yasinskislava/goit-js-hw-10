const images = document.querySelectorAll("img");

const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    for (const entry of entries) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
    }
});

for (const img of images) {
    observer.observe(img);
}
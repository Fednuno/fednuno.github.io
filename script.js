document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({ top: target.offsetTop - 50, behavior: "smooth" });
        });
    });
});


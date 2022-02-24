document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll('.space-item').forEach(item => {
        const speed = item.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed) / 10
        const y = (window.innerHeight - e.pageY * speed) / 10

        item.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}
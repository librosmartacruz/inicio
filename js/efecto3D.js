document.querySelectorAll('.portada-container').forEach(container => {
    container.addEventListener('mousemove', (e) => {
        const img = container.querySelector('.portada');
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        img.style.transform = `rotateY(${x / 10}deg) rotateX(${-y / 10}deg)`;
        img.style.boxShadow = `${x / 5}px ${y / 5}px 30px rgba(0, 0, 0, 0.7)`;
    });

    container.addEventListener('mouseleave', () => {
        const img = container.querySelector('.portada');
        img.style.transform = `rotateY(0) rotateX(0)`;
        img.style.boxShadow = `0 0 10px rgba(0, 0, 0, 0.5)`;
    });
});

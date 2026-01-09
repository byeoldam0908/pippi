document.addEventListener("DOMContentLoaded", () => {

    /* 카드 효과 */
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        const overlay = container.querySelector('.overlay');

        container.addEventListener('mousemove', e => {
            const x = e.offsetX;
            const y = e.offsetY;

            const rotateY = -x / 5 + 20;
            const rotateX = y / 7 - 20;

            overlay.style.backgroundPosition = `${x/5 + y/5}%`;
            overlay.style.opacity = x / 200;

            container.style.transform =
                `perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        container.addEventListener('mouseout', () => {
            overlay.style.opacity = 0;
            container.style.transform =
                'perspective(350px) rotateX(0deg) rotateY(0deg)';
        });
    });

    /* 다크모드 */
    const toggleBtn = document.getElementById("dark-mode-toggle");
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    /* 댓글 */
    const input = document.getElementById("comment-input");
    const btn = document.getElementById("comment-button");
    const list = document.getElementById("comment-list");

    btn.addEventListener("click", () => {
        if (!input.value.trim()) return;
        const li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    });

});

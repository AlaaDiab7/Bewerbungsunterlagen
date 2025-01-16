document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    let currentIndex;

    function showModal(index) {
        const img = galleryItems[index];
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
                <div class="modal-caption">${img.alt}</div>
                <div class="arrow left">&#10094;</div>
                <div class="arrow right">&#10095;</div>
                <div class="more-details"><a href="details.html?model=${img.alt}" target="_blank">Mehr Details</a></div>
            </div>
        `;
        document.body.appendChild(modal);

        const closeModal = modal.querySelector('.close');
        const leftArrow = modal.querySelector('.arrow.left');
        const rightArrow = modal.querySelector('.arrow.right');

        closeModal.addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        leftArrow.addEventListener('click', () => navigate(-1));
        rightArrow.addEventListener('click', () => navigate(1));

        function navigate(direction) {
            modal.remove();
            currentIndex = (index + direction + galleryItems.length) % galleryItems.length;
            showModal(currentIndex);
        }
    }

    galleryItems.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentIndex = index;
            showModal(currentIndex);
        });
    });
});

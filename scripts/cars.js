const filterButtons = document.querySelectorAll('.filter-btn');
const carItems = document.querySelectorAll('.car-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        carItems.forEach(item => {
            item.style.display = (category === 'all' || item.getAttribute('data-category') === category) ? 'block' : 'none';
        });
    });
});
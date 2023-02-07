const animatedElements = document.querySelectorAll('.animated');
// use the IntersectionObserver API to check if the element is in the viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
});

animatedElements.forEach(element => {
    observer.observe(element);
});
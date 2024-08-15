document.addEventListener("DOMContentLoaded", function() {
    var highlights = document.querySelectorAll('.highlight');

    function handleScroll() {
        highlights.forEach(function(highlight) {
            var highlightPosition = highlight.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;

            if (highlightPosition < windowHeight) {
                highlight.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始调用以处理页面加载时的可见项
});
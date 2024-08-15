// fenzu.js
document.addEventListener('DOMContentLoaded', function () {
    // 获取所有的导航链接
    var links = document.querySelectorAll('#droplist li a');

    // 为每个链接添加点击事件监听器
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // 阻止默认行为，即不会跳转到链接的href位置
            event.preventDefault();

            // 获取链接的href属性，即目标元素的ID
            var targetId = this.getAttribute('href');

            // 获取目标元素
            var targetElement = document.querySelector(targetId);

            // 使用window.scrollTo方法滚动到目标元素的位置
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });
});
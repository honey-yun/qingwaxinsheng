// about.js
window.addEventListener('scroll', function() {
    var stickyBanner = document.getElementById('sticky-banner');
    // 检查滚动位置是否到达或超过了页面内容的底部
    var contentHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= contentHeight) {
        stickyBanner.classList.add('show'); // 添加.show类以显示横幅并触发动画
    } else {
        stickyBanner.classList.remove('show'); // 移除.show类以隐藏横幅
    }
});
// 添加或移除 'scrolled' 类以更改导航栏样式
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // 滚动距离大于50px时添加类
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
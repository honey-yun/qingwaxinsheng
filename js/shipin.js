const videosPerPage = 6; // 每页显示的视频数量
let currentPage = 1;

// 视频文件列表（示例）
const videoFiles = [
    'videos/180283-863760534_large.mp4',
    'videos/video2.mp4',
    'videos/video3.mp4',
    'videos/video4.mp4',
    'videos/video5.mp4',
    'videos/video6.mp4',
    'videos/video7.mp4',
    'videos/video8.mp4',
    'videos/video9.mp4',
    'videos/video10.mp4',
    'videos/video11.mp4',
    'videos/video12.mp4',
    'videos/video13.mp4',
    'videos/video14.mp4',
    'videos/video15.mp4',
    'videos/video16.mp4',
    'videos/video17.mp4',
    'videos/video18.mp4',
    'videos/video19.mp4',
    'videos/video20.mp4'
];

// 生成视频卡片内容
function createVideoCard(src) {
    return `
        <div class="video-card">
            <h2>视频</h2>
            <div class="video-container">
                <video controls>
                    <source src="${src}" type="video/mp4">
                    您的浏览器不支持视频标签。
                </video>
            </div>
            <div class="description">
                <h3>描述</h3>
                <p>这是视频的描述。</p >
            </div>
        </div>
    `;
}

// 显示当前页的视频
function showPage(page) {
    const start = (page - 1) * videosPerPage;
    const end = Math.min(start + videosPerPage, videoFiles.length);

    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = '';

    for (let i = start; i < end; i++) {
        videoContainer.innerHTML += createVideoCard(videoFiles[i]);
    }

    document.getElementById('prev-button').disabled = page === 1;
    document.getElementById('next-button').disabled = page === Math.ceil(videoFiles.length / videosPerPage);
}

// 事件监听
document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    if (currentPage < Math.ceil(videoFiles.length / videosPerPage)) {
        currentPage++;
        showPage(currentPage);
    }
});

// 初始化显示第一页
showPage(currentPage);
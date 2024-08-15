const videosPerPage = 6; // 每页显示的视频数量
let currentPage = 1;

// 视频文件列表（示例）
const videoFiles = [
    'shipin1/0e200549744c125a5a0418dfc0c79e52_raw.mp4',
    'shipin1/1a4245837672716babb668f5c52b4fa2.mp4',
    'shipin1/1c71a565d48d4b2b29955b80f730fe6b.mp4',
    'shipin1/2e5ee2bbe550c51263f49629b6f44d5e.mp4',
    'shipin1/3c82232e6383235bd2d3804548eaef49.mp4',
    'shipin1/4f1f9dcf2eba8e47f1a73c38a89a30ae.mp4',
    'shipin1/13a8000845957e0cb213fc13b6491ddc.mp4',
    'shipin1/57e3dff2a4d70d4bec06c98687377e07.mp4',
    'shipin1/75cd4cf8fc47c6a69d93d49afda924c3.mp4',
    'shipin1/78b0b55e659e927600502a8c7f894493.mp4',
    'shipin1/92f2389ace5d4b6fc03b1564393dbf6a_raw.mp4',
    'shipin1/223b5720de0aed376a3fee058bbe2f45.mp4',

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
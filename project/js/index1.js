// 确保 DOM 加载完成
document.addEventListener('DOMContentLoaded', function () {

    // 获取切换按钮和侧边栏
    const toggleButton = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.admin-sidebar');

    // 添加点击事件监听器
    if (toggleButton && sidebar) {
        toggleButton.addEventListener('click', function () {
            // 切换侧边栏的 'open' 类
            sidebar.classList.toggle('open');
        });
    }

    // 初始化 LuLu UI 组件（如果需要）
    // LuLu UI Edge 通常基于 HTML 属性自动初始化，但如果需要手动触发或有特殊需求，可以在这里处理
    // 例如，如果使用了 Web Components，可能需要确保它们被正确加载和定义
    // 由于 LuLu UI Edge 使用原生 JS，通常不需要像 Vue/React 那样显式调用初始化函数
    // 但你可以在这里添加任何需要在页面加载后执行的逻辑

    console.log("LuLu UI Edge 后台模板 JS 已加载");
});
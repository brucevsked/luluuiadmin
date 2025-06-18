"use strict"

class Login {
    initUI() {
        $('#username').focus();
        // 绑定登录按钮点击事件
        $('#loginBtn').on('click', () => {
            const username = $('#username').val().trim();
            const password = $('#password').val().trim();
            this.login(username, password);
        });
    }

    login(username, password) {
        const url = '/system/user/session';

        window.location.href = 'index.html';

        // $.post(url, { username, password }, (response) => {
        //     if (response && response.code === 200) {
        //         // 登录成功，跳转到 index.html
        //         window.location.href = 'index.html';
        //     } else {
        //         // 显示错误提示
        //         new Dialog().alert(response.msg || '登录失败，请检查用户名或密码');
        //     }
        // }).fail((xhr, status, error) => {
        //     // 网络错误或其他异常
        //     new Dialog().alert('请求失败: ' + error);
        // });
    }
}

$(document).ready(function () {
    const login = new Login();
    login.initUI();

    $('form').on('reset', function () {
        // 延迟执行以确保表单重置完成
        setTimeout(() => {
            $('#username').focus();
        }, 0);
    });
});
"use strict"

class Index {
    initUI() {
        this.initMock();
        this.checkLogin();
    }

initMock() {
    // 使用 Mock.js 模拟数据
    const mockData = Mock.mock({
        'list|20': [{
            'id|+1': 10001,
            'amount|100-1000': 100,
            'name': '@cname',
            'createTime': '@datetime("yyyy-MM-dd HH:mm")',
            'status|1': ['已支付', '待支付', '已取消']
        }]
    });

    const tbody = document.querySelector('#table-body');
    const paginationDiv = document.getElementById('pagination');

    let currentPage = 1;
    const itemsPerPage = 5;

    const renderTable = (page) => {
        tbody.innerHTML = ''; // 清空旧数据

        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const paginatedItems = mockData.list.slice(start, end);

        paginatedItems.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.id}</td>
                <td>￥${item.amount.toFixed(2)}</td>
                <td>${item.name}</td>
                <td>${item.createTime}</td>
                <td>${item.status}</td>
            `;

            // 隔行换色
            if (index % 2 === 0) {
                row.style.backgroundColor = '#f9f9f9';
            } else {
                row.style.backgroundColor = '#eaeaea';
            }

            // 点击选中行
            row.addEventListener('click', () => {
                document.querySelectorAll('#payment-table tr.selected').forEach(tr => tr.classList.remove('selected'));
                row.classList.add('selected');
            });

            tbody.appendChild(row);
        });
    };

    const renderPagination = () => {
        const totalPages = Math.ceil(mockData.list.length / itemsPerPage);
        paginationDiv.innerHTML = '';

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            btn.className = 'ui-button' + (i === currentPage ? ' active' : '');
            btn.onclick = () => {
                currentPage = i;
                renderTable(currentPage);
                renderPagination();
            };
            paginationDiv.appendChild(btn);
        }
    };

    renderTable(currentPage);
    renderPagination();
}

    checkLogin() {
        console.log(" you has login ")
    }
}

$(document).ready(function () {
    const index = new Index();
    index.initUI();
});
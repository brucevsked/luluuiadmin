"use strict"

class TableDemo {
    initUI() {
        this.initMock();
        this.initTable();
        this.checkLogin();
    }

    initMock() {
    // 使用 Mock.js 模拟 /api/list 接口数据
    Mock.mock(RegExp('/api/list.*'), 'get', () => {
        var Random = Mock.Random;
        var rsArry = new Array();
        for (var i = 0; i < 10; i++) {
          var Random = Mock.Random;
          rsArry.push({
            id: Random.id(),
            amount:Random.integer(20, 2000),
            man: Random.cname(),
            createTime: Random.datetime(),
            state:Random.string('已未', 1)            
          });
        }

        return {
            error: 0,
            data: {
                total: 50,
                data: rsArry
            }
        };
    });

        let myTable = document.querySelector('table[is="ui-table"]');
        myTable.params.list = [10, 15, 20, 30, 50, 100];
        myTable.params.ajax.url = '/api/list';
        // myTable.params.page.current=1;
        // console.log('---------'+myTable.params.page.per)
        // myTable.params.page.per=10;
        myTable.params.page.keyMap={total:'total',current: 'current',per: 'per'};
        myTable.ajax({
            url:'/api/list',
            success: function (data) {
                console.log('ajax success');
            }
        });

    }

    initTable() { 
        // 插入完表格内容后执行
const table = document.querySelector('.ui-table');
void table.offsetWidth; // 强制重排，让浏览器重新计算样式
    }

    checkLogin() {
        console.log(" you has login ")
    }
}

$(document).ready(function () {
    const tableDemo = new TableDemo();
    tableDemo.initUI();
});
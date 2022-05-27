
export default [
    {
        url: "/api/getUsers",
        method: "get",
        response: () => {
            return {
                code: 0,
                message: "ok",
                data: ["云柱", "火柱"],
            }
        }
    },
    {
        url: "/api/dashboard",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "dashboard 数据",
                data: {
                    // 待做事项
                    todoList: [
                        {
                            title: "今天要修复100个bug",
                            status: false,
                        },
                        {
                            title: "今天要修复101个bug",
                            status: false,
                        },
                        {
                            title: "今天要写102行代码加几个bug吧",
                            status: true,
                        },
                        {
                            title: "今天要修复103个bug",
                            status: false,
                        },
                        {
                            title: "今天要修复104个bug",
                            status: true,
                        },
                        {
                            title: "今天要写105行代码加几个bug吧",
                            status: true,
                        },
                        {
                            title: "今天要修复100个bug",
                            status: false,
                        },
                        {
                            title: "今天要修复101个bug",
                            status: false,
                        },
                        {
                            title: "今天要写102行代码加几个bug吧",
                            status: true,
                        },
                        {
                            title: "今天要修复103个bug",
                            status: false,
                        },
                        {
                            title: "今天要修复104个bug",
                            status: true,
                        },
                        {
                            title: "今天要写105行代码加几个bug吧",
                            status: true,
                        },
                    ],
                    options1: {
                        type: "bar",
                        title: {
                          text: "最近一周各品类销售图",
                        },
                        xRorate: 0,
                        labels: ["周一", "周二", "周三", "周四", "周五"],
                        datasets: [
                          {
                            label: "家电",
                            data: [234, 278, 270, 190, 230],
                          },
                          {
                            label: "百货",
                            data: [164, 178, 190, 135, 160],
                          },
                          {
                            label: "食品",
                            data: [144, 198, 150, 235, 120],
                          },
                        ],
                    },
                    options2: {
                        type: "line",
                        title: {
                            text: "最近几个月各品类销售趋势图",
                        },
                        labels: ["6月", "7月", "8月", "9月", "10月"],
                        datasets: [
                            {
                            label: "家电",
                            data: [234, 278, 270, 190, 230],
                            },
                            {
                            label: "百货",
                            data: [164, 178, 150, 135, 160],
                            },
                            {
                            label: "食品",
                            data: [74, 118, 200, 235, 90],
                            },
                        ],
                    },



                }
            }
        }
    }
    
]

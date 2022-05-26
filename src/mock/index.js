
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
                    ],
                    

                }
            }
        }
    }
    
]

export default [
    {
        url: "/api/postbasetable",
        method: "post",
        response: (payload) => {
            console.log(payload.body.obj)
            let obj = {
                list: [{
                        "id": 1,
                        "name": "张三",
                        "money": 123,
                        "address": "广东省东莞市长安镇",
                        "state": "成功",
                        "date": "2019-11-1",
                        "thumb": "https://lin-xin.gitee.io/images/post/wms.png"
                    },
                    {
                        "id": 2,
                        "name": "李四",
                        "money": 456,
                        "address": "广东省广州市白云区",
                        "state": "成功",
                        "date": "2019-10-11",
                        "thumb": "https://lin-xin.gitee.io/images/post/node3.png"
                    },
                    {
                        "id": 3,
                        "name": "王五",
                        "money": 789,
                        "address": "湖南省长沙市",
                        "state": "失败",
                        "date": "2019-11-11",
                        "thumb": "https://lin-xin.gitee.io/images/post/parcel.png"
                    },
                    {
                        "id": 4,
                        "name": "赵六",
                        "money": 1011,
                        "address": "福建省厦门市鼓浪屿",
                        "state": "成功",
                        "date": "2019-10-20",
                        "thumb": "https://lin-xin.gitee.io/images/post/notice.png"
                    }
                ],
                pageTotal: 4
            }
            try {
                let object = payload.body.obj
                if(!object) return obj
                else {
                    obj.list.push(object)
                    return obj
                }

            } catch (error) {
                return {
                    code: 'error',
                    message: '出现错误！'
                }
            }
            
        }
    },
    {
        url: "/api/getbasetable",
        method: "get",
        response: () => {
            return {
                list: [{
                        "id": 1,
                        "name": "张三",
                        "money": 123,
                        "address": "广东省东莞市长安镇",
                        "state": "成功",
                        "date": "2019-11-1",
                        "thumb": "https://lin-xin.gitee.io/images/post/wms.png"
                    },
                    {
                        "id": 2,
                        "name": "李四",
                        "money": 456,
                        "address": "广东省广州市白云区",
                        "state": "成功",
                        "date": "2019-10-11",
                        "thumb": "https://lin-xin.gitee.io/images/post/node3.png"
                    },
                    {
                        "id": 3,
                        "name": "王五",
                        "money": 789,
                        "address": "湖南省长沙市",
                        "state": "失败",
                        "date": "2019-11-11",
                        "thumb": "https://lin-xin.gitee.io/images/post/parcel.png"
                    },
                    {
                        "id": 4,
                        "name": "赵六",
                        "money": 1011,
                        "address": "福建省厦门市鼓浪屿",
                        "state": "成功",
                        "date": "2019-10-20",
                        "thumb": "https://lin-xin.gitee.io/images/post/notice.png"
                    }
                ],
                pageTotal: 4
            }
        }
    },
    {
        url: "/api/geticons",
        method: "get",
        response: () => {
            return {
                code: 200,
                message: "所有图标",
                data: [
                    "attentionforbid",
                    "attentionforbidfill",
                    "attention",
                    "attentionfill",
                    "tag",
                    "tagfill",
                    "people",
                    "peoplefill",
                    "notice",
                    "noticefill",
                    "mobile",
                    "mobilefill",
                    "voice",
                    "voicefill",
                    "unlock",
                    "lock",
                    "home",
                    "homefill",
                    "delete",
                    "deletefill",
                    "notification",
                    "notificationfill",
                    "notificationforbidfill",
                    "like",
                    "likefill",
                    "comment",
                    "commentfill",
                    "camera",
                    "camerafill",
                    "warn",
                    "warnfill",
                    "time",
                    "timefill",
                    "location",
                    "locationfill",
                    "favor",
                    "favorfill",
                    "skin",
                    "skinfill",
                    "news",
                    "newsfill",
                    "record",
                    "recordfill",
                    "emoji",
                    "emojifill",
                    "message",
                    "messagefill",
                    "goods",
                    "goodsfill",
                    "crown",
                    "crownfill",
                    "move",
                    "add",
                    "hot",
                    "hotfill",
                    "service",
                    "servicefill",
                    "present",
                    "presentfill",
                    "pic",
                    "picfill",
                    "rank",
                    "rankfill",
                    "male",
                    "female",
                    "down",
                    "top",
                    "recharge",
                    "rechargefill",
                    "forward",
                    "forwardfill",
                    "info",
                    "infofill",
                    "redpacket",
                    "redpacket_fill",
                    "roundadd",
                    "roundaddfill",
                    "friendadd",
                    "friendaddfill",
                    "cart",
                    "cartfill",
                    "more",
                    "moreandroid",
                    "back",
                    "right",
                    "shop",
                    "shopfill",
                    "question",
                    "questionfill",
                    "roundclose",
                    "roundclosefill",
                    "roundcheck",
                    "roundcheckfill",
                    "global",
                    "mail",
                    "punch",
                    "exit",
                    "upload",
                    "read",
                    "file",
                    "link",
                    "full",
                    "group",
                    "friend",
                    "profile",
                    "addressbook",
                    "calendar",
                    "text",
                    "copy",
                    "share",
                    "wifi",
                    "vipcard",
                    "weibo",
                    "remind",
                    "refresh",
                    "filter",
                    "settings",
                    "scan",
                    "qrcode",
                    "cascades",
                    "apps",
                    "sort",
                    "searchlist",
                    "search",
                    "edit",
                ],
            }
        }
    },
    {
        url: "/api/getUsers",
        method: "get",
        response: () => {
            return {
                code: 200,
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
                        {   index: 1,
                            title: "今天要修复100个bug",
                            status: false,
                        },
                        {
                            index: 2,
                            title: "今天要修复101个bug",
                            status: false,
                        },
                        {
                            index: 3,
                            title: "今天要写102行代码加几个bug吧",
                            status: true,
                        },
                        {
                            index: 4,
                            title: "今天要修复103个bug",
                            status: false,
                        },
                        {
                            index: 5,
                            title: "今天要修复104个bug",
                            status: true,
                        },
                        {
                            index: 6,
                            title: "今天要写105行代码加几个bug吧",
                            status: true,
                        },
                        {
                            index: 7,
                            title: "今天要修复100个bug",
                            status: false,
                        },
                        {
                            index: 8,
                            title: "今天要修复101个bug",
                            status: false,
                        },
                        {
                            index: 9,
                            title: "今天要写102行代码加几个bug吧",
                            status: true,
                        },
                        {
                            index: 10,
                            title: "今天要修复103个bug",
                            status: false,
                        },
                        {
                            index: 11,
                            title: "今天要修复104个bug",
                            status: true,
                        },
                        {
                            index: 12,
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

  

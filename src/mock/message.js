import Mock from 'mockjs';
import qs from 'querystring'
// 评论数据
Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
    const query = qs.parse(options.url);
    return Mock.mock({
        "code": 0,
        "msg": "",
        "data": {
            total: 50,
            [`rows|${query.limit || 10}`]: [{
                "id": "@uuid",
                nickname: "@cname",
                content: "@cparagraph(1, 5)",
                createDate: "@DATETIME('yyy-MM-dd')",
                avatar: Mock.Random.image("100x100", "#abcdef", "#fcc", "@nickname"),
            }]
        }
    })
});
Mock.mock("/api/message", "post", {
    code: 0,
    msg: "",
    data: {
        id: "@guid",
        nickname: "@cname",
        content: "@cparagraph(1, 10)",
        createDate: "@DATETIME('yyy-MM-dd')",
        avatar: Mock.Random.image("100x100", "#abcdef", "#fcc", "@nickname")
    }
});
import Mock from 'mockjs';
Mock.mock("/api/setting", "get", {
    "code": 0,
    "msg": "",
    data: {
        avatar: "/assets/my-avatar.jpg",
        siteTitle: "CodeGorgeous",
        githubName: "CodeGorgeous",
        github: "https://github.com/CodeGorgeous",
        qq: "2460481461",
        qqQrCode: "/assets/my-qq.png",
        weixin: "CodeGorgeous",
        weixinQrCode: "/assets/my-wechat.png",
        mail: "2460481461@qq.com",
        icp: "暂无",
        githubName: "CodeGorgeous",
        favicon: "/assets/my-avatar.ico",
    }
});
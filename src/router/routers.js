import notFound from '@/components/404'
import "nprogress/nprogress.css"
import { start, done, configure } from "nprogress"
// 配置nprogress
configure({
    trickleSpeed: 15,
    showSpinner: false
});

function asyncImport(fn) {
    return async() => {
        start();
        const resp = await fn();
        done();
        return resp;
    }
}

export default [
    // 当路径为/时，匹配组件为Home
    {
        path: "/index.html",
        redirect: { name: "Home" }
    },
    {
        name: "Home",
        path: "/",
        component: asyncImport(() =>
            import ( /*webpackChunkName: "Home"*/ "@/views/Home")),
        meta: {
            title: "欢迎来到CodeGorgeous的博客"
        }
    },
    // {
    //     name: "Home",
    //     path: "/",
    //     component: () =>
    //         ({
    //             // 需要加载的组件
    //             component: import ( /*webpackChunkName: "Home"*/ "@/views/Home"),
    //             // // 异步加载组件时，暂时使用什么组件进行展示
    //             // loading: import (),
    //             // // 加载组件失败的时候使用什么组件展示
    //             // error: import (),
    //             // // 展示加载组件的延时时间   默认值是200ms
    //             // delay: 200,
    //             // // 在规定时间内如果没有加载成功则算为加载失败   默认值为Infinity
    //             // timeout: 3000
    //         }),
    //     meta: {
    //         title: "欢迎来到CodeGorgeous的博客"
    //     }
    // },
    {
        name: "Blog",
        path: "/blog",
        component: asyncImport(() =>
            import ( /*webpackChunkName: "Blog"*/ "@/views/Blog")),
        meta: {
            title: "博客文章"
        }
    },
    {
        name: "BlogChildren",
        path: "/blog/cate/:categoryId",
        component: asyncImport(() =>
            import ( /*webpackChunkName: "Blog"*/ "@/views/Blog")),
        meta: {
            title: "博客分类"
        }
    },
    {
        name: "BlogDetails",
        path: "/blog/:id",
        component: asyncImport(() =>
            import ( /*webpackChunkName: "BlogDetails"*/ "@/components/BlogDetailsFramework")),
        meta: {
            title: "博客详情"
        }
    },
    {
        name: "About",
        path: "/about",
        component: asyncImport(() =>
            import ( /*webpackChunkName: "About"*/ "@/views/About")),
        meta: {
            title: "关于作者"
        }
    },
    {
        name: "Project",
        path: "/project",
        component: asyncImport(() =>
            import ( /*webpackChunkName: "Project"*/ "@/views/Project")),
        meta: {
            title: "项目&&效果"
        }
    },
    {
        name: "Message",
        path: "/message",
        component: asyncImport(() =>
            import ( /*webpackChunkName: "Message"*/ "@/views/Message")),
        meta: {
            title: "留言板"
        }
    },
    {
        name: "404",
        path: "*",
        component: notFound
    }
]
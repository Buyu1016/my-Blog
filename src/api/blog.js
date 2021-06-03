import ins from "./request.js";
/**
 *  分页获取博客
 * @param {*} page  第几页的数据 
 * @param {*} limit 每页的页容量
 * @param {*} categoryid 所属的分类
 * @returns 
 */
export async function getBlogs(page = 1, limit = 10, categoryid = -1) {
    return await ins.get("/api/blog", {
        params: {
            page,
            limit,
            categoryid,
        },
    });
}
/**
 * 获取所有博客种类
 * @returns 
 */
export async function getBlogTypes() {
    return await ins.get("/api/blogtype");
}
/**
 * 获取单页博客
 * @param {*} id    博客的id 
 * @returns 
 */
export async function getBlogMessages(id) {
    return await ins.get(`/api/blog/${id}`);
}
/**
 * 提交评论
 * @param {*} comment   评论内容对象  
 * @returns 
 */
export async function postComments(comment) {
    return await ins.post("/api/comment", comment);
}

export async function getPageComments(page = 1, limit = 10, blogid) {
    return await ins.get("/api/comment", {
        params: {
            page, // 当前页码
            limit, // 页容量
            blogid // 博客的id
        }
    });
}
import ins from "./request.js";
export async function getMessageData(page = 1, limit = 10) {
    return await ins.get("/api/message", {
        params: {
            page,
            limit
        }
    });
}
export async function postMessage(info) {
    return await ins.post("/api/message", info)
}
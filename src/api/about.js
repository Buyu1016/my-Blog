import ins from "./request.js";
export async function getAboutData() {
    return await ins.get("/api/about");
}
import ins from "./request.js";
export async function getNewData() {
    return await ins.get("/api/banner");
}
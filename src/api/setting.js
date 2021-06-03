import ins from "./request.js";
export default async function() {
    return await ins.get("/api/setting");
}
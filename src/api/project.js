import ins from "./request.js";
export async function getProjectData() {
    return await ins.get("/api/project");
}
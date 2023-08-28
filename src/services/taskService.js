import { httpAxios } from "@/helper/httpHelper";

// ADDING TASK TO DATABASE
export async function Addtaskservice(task)
{
    const result = await httpAxios.post("/api/tasks", task).then((response)=>response.data)
    return result;
}

// EXTRACTING TASK OF A PARTICULAR USER WITH THE HELP OF USER ID
export async function getTaskofUser(userId)
{
    const result = await httpAxios.get(`/api/users/${userId}/tasks`).then(response=>response.data);
    return result;
}

// DELETEING TASK OF PARTICULAR USER WITH HELP OF TASK ID

export async function delteTaskofUser(taskId)
{
    const result = await httpAxios.delete(`/api/tasks/${taskId}`).then(response=>response.data);
    return result;
}
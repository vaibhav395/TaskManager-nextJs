import { httpAxios } from "@/helper/httpHelper";

const CurrentUserService = async ()=>{
    const result = await httpAxios.get("/api/current").then(response=>response.data)
    return result;
}

export default CurrentUserService;
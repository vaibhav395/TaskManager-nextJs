import { httpAxios } from "@/helper/httpHelper";

const AdduserService = async (data)=>{
    const result = await httpAxios.post("/api/users", data).then(response=>response.data);
    return result;
}

export default AdduserService;
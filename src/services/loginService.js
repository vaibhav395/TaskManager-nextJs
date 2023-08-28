import { httpAxios } from "@/helper/httpHelper";

const loginUser = async (loginData)=>{
    const result = await httpAxios.post("/api/login", loginData).then(response=>response.data);
    return result;
}

export default loginUser; 
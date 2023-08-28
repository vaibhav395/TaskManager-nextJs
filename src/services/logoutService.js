import { httpAxios } from "@/helper/httpHelper";

const Logout = async ()=>{
    const result = await httpAxios.post("/api/logout").then((response)=>response.data);
    return result;
}

export default Logout;
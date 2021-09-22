import axiosClient from "../axiosClient";

 const testAPI = {
    getJobs(){
        const URL = "/jobs";
        return axiosClient.get(URL);
    }
}
export default testAPI;
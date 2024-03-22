import axios from "axios";

class UserService{
    private static serverurl:string | undefined = "http://127.0.0.1:8000/users";


    public static getAllUsers(){
        return axios.get(`${this.serverurl}`);
    }

    public static getARoles(){
        return axios.get(`${this.serverurl}/roles`);
    }

    public static addUser(users:any){
        return axios.get(`${this.serverurl}/insert`,users);
    }

}

export default UserService;
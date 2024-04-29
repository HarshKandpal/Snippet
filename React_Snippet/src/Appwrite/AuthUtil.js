import {Client, Account} from "appwrite"
import authConfig from "./AuthConfig";
class AuthUtil{

    constructor(){
         this.client = new Client()
        .setEndpoint(authConfig.endpoint_url) // Your API Endpoint
        .setProject(authConfig.project_id);               //
    
        this.account = new Account(this.client);
    }
    async Login(email,password){
        try{
            return await this.account.createEmailSession(email,password)
        }
        catch(ex){
            console.log(ex)
            return false;
        }
    }
    async Logout(){
        try{
            return await this.account.deleteSessions()
        }
        catch(ex){
                console.log(ex)
        }
    }

}

const auth=new AuthUtil()

export default auth
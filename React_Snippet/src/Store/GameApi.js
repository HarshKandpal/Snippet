import {useEffect, useState} from "react"
import config from "../env_conf/env_config";
function IgdbApi(method
,body,requestUrl="https://api.igdb.com/v4/games"){
   const[data,setData]=useState({})
    const myHeaders = new Headers();
    myHeaders.append("Client-ID", config.ApiClientId);
    myHeaders.append("Accept", config.ApiAccept);
    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("Authorization", config.ApiToken);
    
    
    const requestOptions = {
      method: method,
      headers: myHeaders,
      body: body,
      redirect: "follow"
    };
    
    fetch(requestUrl, requestOptions)
    .then((res)=>res.json())
    .then((res)=>setData(res))
    // .then((res)=>console.log(res))
    return data

}
export default IgdbApi
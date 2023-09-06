
import axios from 'axios'
import { getalluser_user_fail, getalluser_user_request, getalluser_user_sucess, register_user_fail, register_user_request, register_user_sucess } from './userConstants'


const backend_url="https://studentdatacollection.onrender.com"

export const register_user=(data)=>async(dispatch)=>{
    const{name,address}=data;

    try {
    dispatch({type:register_user_request})

        
        const config = { headers: {"Content-Type": "application/json"}};
console.log("hree")
    const {data}=await axios.post(`${backend_url}/api/v1/register`,{name,address},config)
    dispatch({type:register_user_sucess,payload:data.sucess});
    console.log("hree2")

    } catch (error) {
    dispatch({type:register_user_fail,payload:error.response.data.message});
        
    }
}

export const getall_user=()=>async(dispatch)=>{
    try {

    dispatch({type:getalluser_user_request})
    const {data}=await axios.post(`${backend_url}/api/v1/getalluser`)
    dispatch({type:getalluser_user_sucess,payload:data.users});

    } catch (error) {
    dispatch({type:getalluser_user_fail,payload:error.response.data.message});
        
    }
}
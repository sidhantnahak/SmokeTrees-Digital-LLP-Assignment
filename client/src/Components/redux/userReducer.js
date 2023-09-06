import { getalluser_user_fail, getalluser_user_request, getalluser_user_sucess, register_user_fail, register_user_request, register_user_reset, register_user_sucess } from "./userConstants";


export const userReducer = (state = { user: {} }, action) => {

    switch (action.type) {
        case register_user_request:
        case getalluser_user_request:  
            return{
                loading:true,
            }
            
        case register_user_sucess:
            return{
                ...state,
                loading:false,
                sucess:action.payload
            }
        case getalluser_user_sucess:
            return{
                ...state,
                loading:false,
                users:action.payload
            }
        case register_user_fail:
        case getalluser_user_fail:
            return{
                ...state,
                error:action.payload,
                loading:false,
            }
        case register_user_reset:
            return{
                ...state,
                sucess:false
            }
        default:
            return{
                ...state
            }
    }

}
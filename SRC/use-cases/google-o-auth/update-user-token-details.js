module.exports= function updateUserTokenDetail({updateUserTokenQuerydb}){

    return async function updateUserTokenDetailAction({access_token,token_update_at,id}){
        try {
            // if(error){
            //     throw error
            // }
            // else{
                return await updateUserTokenQuerydb({access_token,token_update_at,id})
            // }
        } catch (error) {
            throw error
        }
    }
}
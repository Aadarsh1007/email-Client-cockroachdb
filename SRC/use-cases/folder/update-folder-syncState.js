module.exports= function updateUserTokenDetail({getAllFolder}){

    return async function updateUserTokenDetailAction({provider_id,user_id,next_page_token,sync_state}){
        try {
                return await getAllFolder.updateFolderSyncStateQuerydb({provider_id,user_id,next_page_token,sync_state})
        } catch (error) {
            throw error
        }
    }
}
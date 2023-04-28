module.exports= function updateUserTokenDetail({getAllFolder}){

    return async function updateUserTokenDetailAction({id,folderName,databaseName}){
        try {
                return await getAllFolder.deleteFolderByNameQuerydb({id,folderName,databaseName})
        } catch (error) {
            throw error
        }
    }
}
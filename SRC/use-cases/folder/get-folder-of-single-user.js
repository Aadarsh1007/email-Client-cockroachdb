module.exports= function updateUserTokenDetail({getAllFolder}){

    return async function updateUserTokenDetailAction({id,databaseName}){
        try {
                return await getAllFolder.getFoldersOfSingleUserQuerydb({id,databaseName})
        } catch (error) {
            throw error
        }
    }
}
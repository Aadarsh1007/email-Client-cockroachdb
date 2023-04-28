module.exports=function getAllFolder({getAllFolder}){
    return async function getAllFolderUseCase({databaseName}){
        return await getAllFolder.getAllFolderQuerydb({databaseName})
    }
}
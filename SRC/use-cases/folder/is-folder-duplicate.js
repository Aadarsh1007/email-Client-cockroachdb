module.exports=function isFolderDuplicate({getAllFolder}){
    return async function isFolderDuplicateAction({id,folderName,databaseName}){
        return await getAllFolder.isFolderDuplicateQuerydb({id,folderName,databaseName})
    }
}
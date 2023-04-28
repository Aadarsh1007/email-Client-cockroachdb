module.exports=function createFolder({createFolderQuerydb}){
    return async function createFolderAction({id,databaseName}){
        arrayOfDefaultFolder=['inbox','sent','archieved','outbox','trash']
        arrayOfDefaultFolder.forEach(async function(folderName){
            return await createFolderQuerydb({id,folderName,databaseName})
        })
    }
}
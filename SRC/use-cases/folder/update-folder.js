module.exports=function updateFolder({getAllFolder,Joi}){

    const schema = Joi.object({
        folderid: Joi.number().unsafe(),
        folderName: Joi.string().min(1).required()
    });

    return async function updateFolderAction({folderid,folderName,databaseName}){
        try {
            const { error, value } = schema.validate( {folderid, folderName} );
            if(error){
                throw error
            }
            else{
                return await getAllFolder.updateFolderQuerydb({folderid,folderName,databaseName})
            }
        } catch (error) {
            throw error
        }
    }
}
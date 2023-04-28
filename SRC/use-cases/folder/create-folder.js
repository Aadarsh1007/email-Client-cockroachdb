module.exports=function createFolder({getAllFolder,Joi}){

    const schema = Joi.object({
        id: Joi.number().unsafe(),
        folderName: Joi.string().min(1).required()
    });

    return async function createFolderAction({id,folderName,provider_id,databaseName,preference}){
        try {
            const {error,value} = schema.validate({folderName,id})
            if(error){
                throw error
            }
            else{
                return await getAllFolder.createFolderQuerydb({id,folderName,provider_id,databaseName,preference})
            }
        } catch (error) {
            throw error
        }
    }
}
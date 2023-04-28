module.exports= function getFolder({getAllFolder,Joi}){

    const schema = Joi.object({
        // password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        // email_id: Joi.string().email().required(),
        id: Joi.number().unsafe()
        // dob: Joi.date().max('now'),
    });

    return async function getFolderAction({id,databaseName}){
        try {
            const{error,value} = schema.validate({id})
            if(error){
                throw error
            }
            else{
                return await getAllFolder.getFolderQuerydb({id,databaseName})
            }
        } catch (error) {
            throw error
        }
    }
}
module.exports=function updateUser({getUsers,Joi}){
    
    const schema = Joi.object({
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        // email_id: Joi.string().email().required(),
        id: Joi.number().unsafe(),
        contactDetails: Joi.string().pattern(/^\d{10}$/),
    });

    return async function updateUserAction({password,contactDetails,id,databaseName}){
        // const {password,contact_details}=fields
        try {
            const { error, value } = schema.validate( {id, password, contactDetails} );
            if(error){
                throw error
            }
            else{
                return await getUsers.updateUserQuerydb({password,contactDetails,id,databaseName})
            }
        } catch (error) {
                throw error
        }
    }
}
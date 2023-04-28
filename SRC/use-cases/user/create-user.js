module.exports=function createUser({getUsers,Joi}){

    const schema = Joi.object({
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        emailId: Joi.string().email().required(),
        contactDetails: Joi.string().pattern(/^\d{10}$/),
        // dob: Joi.date().max('now'),
    });

    return async function createUserAction({emailId,password,contactDetails,databaseName,access_token,refresh_token}){
        try {
            const { error, value } = schema.validate({emailId,password,contactDetails});
            if(error){
                throw error
            }
            else{
                return await getUsers.createUserQuerydb({emailId,password,contactDetails,databaseName,access_token,refresh_token})
            }
        } catch (error) {
            throw error
        }
    }
}
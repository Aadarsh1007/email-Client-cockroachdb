module.exports = function updateUser({ updateUserUseCase,Joi }) {

    const schema = Joi.object({
        id: Joi.number().unsafe(),
        password: Joi.string(),
        contactDetails: Joi.string().pattern(/^\d{10}$/),
    });
    return async function updateUserAction(req, res) {
        try {
            const id=req.params.id
            const password=req.body.password
            const contactDetails=req.body.contactDetails
            const { error, value } = schema.validate({id,password,contactDetails});
            if (error) {
                res.status(400).send({ error: error.details[0].message });
            }
            else {
                // const fields = req.body
                // const password =req.body.password
                // const contactDetails=req.body.contactDetails
                // const id = req.params.id
                const databaseName=req.headers.database
                const data = await updateUserUseCase({password,contactDetails, id,databaseName})
                if(data.affectedRows==0){
                    res.status(400).send('invalid id')        
                }
                else{
                    res.status(202).send(data)
                }
            }
        } catch (error) {
            res.status(400).send(error)
        }
    }
}
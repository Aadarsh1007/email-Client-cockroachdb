module.exports = function createUser({ createUserUseCase, createDefaultFolder, Joi, kafka, handler }) {

    const schema = Joi.object({
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
        emailId: Joi.string().email().required(),
        contactDetails: Joi.string().pattern(/^\d{10}$/),
        // dob: Joi.date().max('now'),
    });
    return async function createUserAction(req, res) {
        try {
            const { error, value } = schema.validate(req.body);
            if (error) {
                res.status(400).send({ error: error.details[0].message });
            }
            else {
                // const fields = req.body
                const emailId=req.body.emailId
                const password=req.body.password
                const contactDetails=req.body.contactDetails
                let access_token=req.body.access_token
                let refresh_token=req.body.refresh_token
                let databaseName=req.headers.database
                const data = await createUserUseCase({emailId,password,contactDetails,databaseName,access_token,refresh_token})
                const id =data.id  //userId
                // await createDefaultFolder({id,databaseName})

                // const producer = kafka.producer()
                // await producer.connect()
                // await producer.send({
                //     topic: 'country',
                //     messages: [
                //         { value: `${[id,databaseName]}` },
                //     ],
                // })
                
                // await producer.disconnect()

                res.status(201).send(data)
            }
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

} 
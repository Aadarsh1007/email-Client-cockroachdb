module.exports = function getFolder({ getFolderUseCases,Joi }) {

    const schema = Joi.object({
        id: Joi.number().unsafe()
    });
    return async function getFolderAction(req, res) {
        try {
            const { error, value } = schema.validate(req.params);
            if (error) {
                res.status(400).send({ error: error.details[0].message });
            }
            else {
                const id = req.params.id
                let databaseName=req.headers.database
                const data = await getFolderUseCases({id,databaseName})
                if (data.length == 1) {
                    res.status(200).send(data)
                }
                else {
                    res.status(400).send('enter valid id')
                }
            }
        } catch (error) {
            res.status(400).send(error)
        }
    }
}
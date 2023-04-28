module.exports = function createFolder({ createFolderUseCase, isFolderDuplicateUseCase, Joi }) {

    const schema = Joi.object({
        userid: Joi.number().unsafe(),
        folderName: Joi.string().min(1).required()
    });
    return async function createFolderAction(req, res) {
        try {
            const userid=req.params.userid
            const folderName=req.body.folderName
            const { error, value } = schema.validate({folderName,userid} );
            if (error) {
                res.status(400).send({ error: error });
            }
            else {
                const id = req.params.userid
                // const folderName = req.body.folderName
                const databaseName=req.headers.database
                const isDuplicate = await isFolderDuplicateUseCase({id, folderName,databaseName})
                if (isDuplicate == 0) {
                    const data = await createFolderUseCase({id, folderName,databaseName})
                    res.status(201).send(data.rows)
                }
                else {
                    res.status(400).send('duplicate folder')
                }
            }
        } catch (error) {
            res.status(400).send(error)
        }
    }
}
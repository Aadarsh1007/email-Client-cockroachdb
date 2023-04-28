module.exports = function createFolder({ updateFolderUseCase, isFolderDuplicateUseCase,Joi }) {

    const schema = Joi.object({
        id: Joi.number().unsafe(),
        folderid: Joi.string().required(),
        folderName: Joi.string().min(1).required()
    });
    return async function createFolderAction(req, res) {
        try {
            const folderid = req.params.id
            const id=req.params.userid
            const folderName=req.body.folderName
            let databaseName=req.headers.database
            const { error, value } = schema.validate({id,folderName,folderid});
            if (error) {
                res.status(400).send({ error: error.details[0].message });
            }
            else{
            const isDuplicate = await isFolderDuplicateUseCase({id,folderName,databaseName})
            if (isDuplicate==0) {
                const data = await updateFolderUseCase({folderid, folderName,databaseName})
                res.status(202).send(data.rows)
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
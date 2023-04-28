module.exports=function getAllFolder({getAllFolderUsecases}){
    return async function getAllFolderReturn(req,res){
        try {
            let databaseName=req.headers.database
            const folder=await getAllFolderUsecases({databaseName})
            res.status(200).send(folder)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}
module.exports=function getAllUserAction({getAllUserUseCase}){
    return async function getAllUserAcionReturn(req,res){
        try {
            let databaseName=req.headers.database
            const users=await getAllUserUseCase({databaseName})
            res.status(200).send(users)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}
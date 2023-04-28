module.exports=function getAllUserusecases({getUserTokenUpdateQueryDb}){
    return async function getAllUserAction({databaseName}){
        return await getUserTokenUpdateQueryDb({databaseName})
    }
}
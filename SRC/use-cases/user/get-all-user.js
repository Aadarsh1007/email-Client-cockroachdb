module.exports=function getAllUserusecases({getUsers}){
    return async function getAllUserAction({databaseName}){
        return await getUsers.getAllUserQuerydb({databaseName})
    }
}
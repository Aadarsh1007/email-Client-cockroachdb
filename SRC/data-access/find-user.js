function findUser({db}) {
    return Object.freeze({
        getAllUserQuerydb,
        getOneUserQuerydb,
        createUserQuerydb,
        deleteUserQuerydb,
        updateUserQuerydb,
        updateUserTokenQuerydb,
        getUserTokenUpdateQueryDb
    })
    async function getAllUserQuerydb({databaseName}) {
        try {
            const {rows}=await db.query(`SELECT * from ${databaseName}.users`)
            return rows
        } catch (error) {
            throw(error)
        }
    }
    async function getOneUserQuerydb({id,databaseName}){
        try {
            console.log(id,databaseName);
            const {rows}=await db.query((`SELECT * from ${databaseName}.users where id= $1 `),[id])
            console.log(rows);
            console.log(rows);
            return rows
        } catch (error) {
            throw(error)
        }
    }
    async function createUserQuerydb({emailId,password,contactDetails,databaseName,access_token,refresh_token}){
        try {
            const result = await db.query((`insert into ${databaseName}.users (email_id,password,access_token,refresh_token) values ($1, $2, $3, $4) RETURNING id`),[emailId,password,access_token,refresh_token])
            const result1=result.rows[0]
            return result1
        } catch (error) {
            throw(error)
        }
    }
    async function deleteUserQuerydb({id,databaseName}){
        try {
            const result= await db.query((`delete from ${databaseName}.users where id= $1 RETURNING *`),[id])
            // console.log(result,'rooowww');
            return result
        } catch (error) {
            throw(error)            
        }
    }
    async function updateUserQuerydb({password,contactDetails,id,databaseName}){
        try {
            const {rows} = await db.query((`UPDATE ${databaseName}.users SET contact_details = $1,password = $2 WHERE id = $3 RETURNING id`),[contactDetails,password,id])
            return rows
        } catch (error) {
            throw(error)
        }
    }
    async function updateUserTokenQuerydb({access_token,token_update_at,id}){
        databaseName='cockroach_1'
        try {
            const {rows} = await db.query((`UPDATE ${databaseName}.users SET access_token = $1,token_update_at = $2 WHERE id = $3 RETURNING id`),[access_token,token_update_at,id])
            return rows
        } catch (error) {
            throw(error)
        }
    }
    async function getUserTokenUpdateQueryDb({databaseName}){
        try {
            const result = await db.query((`SELECT * FROM ${databaseName}.users WHERE created_at BETWEEN NOW() - INTERVAL '0 minutes' AND NOW() - INTERVAL '30 minutes' RETURNING *`),[databaseName])
            return rows
        } catch (error) {
            throw error
        }
    }
}

module.exports= findUser

function findAllFolder({ db }) {
    return Object.freeze({
        getAllFolderQuerydb,
        getFolderQuerydb,
        createFolderQuerydb,
        deleteFolderQuerydb,
        isFolderDuplicateQuerydb,
        updateFolderQuerydb,
        getFoldersOfSingleUserQuerydb,
        deleteFolderByNameQuerydb,
        updateFolderSyncStateQuerydb
    })
    async function getAllFolderQuerydb({ databaseName }) {
        try {
            const { rows } = await db.query(`SELECT * from ${databaseName}.Folder`)
            return rows
        } catch (error) {
            throw (error)
        }
    }
    async function getFoldersOfSingleUserQuerydb({ id, databaseName }) {
        try {
            const { rows } = await db.query((`SELECT * from ${databaseName}.Folder where user_id= $1`), [id])
            return rows
        } catch (error) {
            throw (error)
        }
    }
    async function deleteFolderByNameQuerydb({ id, folderName, databaseName }) {
        try {
            const { rows } = await db.query((`delete from ${databaseName}.Folder where user_id= $1 and folder_name= $2`), [id, folderName])
            return rows
        } catch (error) {
            throw (error)
        }
    }
    async function getFolderQuerydb({ id, databaseName }) {
        try {
            const { rows } = await db.query((`select * From ${databaseName}.Folder where id= $1 `), [id])
            return rows
        } catch (error) {
            throw (error)
        }
    }
    async function createFolderQuerydb({ id, folderName, provider_id, databaseName, preference }) {
        try {
            const result = await db.query((`insert into ${databaseName}.Folder (folder_name,user_id,provider_id,preference) values ($1,$2,$3,$4) RETURNING *`), [folderName, id, provider_id, preference])
            return result
        } catch (error) {
            throw (error)
        }
    }
    async function deleteFolderQuerydb({ id, databaseName }) {
        try {
            const result = await db.query((`delete from ${databaseName}.Folder where id= $1 RETURNING *`), [id])
            return result
        } catch (error) {
            throw (error)
        }
    }
    async function isFolderDuplicateQuerydb({ id, folderName, databaseName }) {
        try {
            const { rows } = await db.query((`select * from ${databaseName}.Folder where folder_name = $1 and user_id= $2`), [folderName, id])
            return rows
        } catch (error) {
            throw (error)
        }
    }
    async function updateFolderQuerydb({ folderid, folderName, databaseName }) {
        try {
            const result = await db.query((`UPDATE ${databaseName}.Folder SET folder_name = $1 WHERE id = $2 RETURNING *`), [folderName, folderid])
            return result
        } catch (error) {
            throw (error)
        }
    }
    async function updateFolderSyncStateQuerydb({ provider_id,user_id,next_page_token,sync_state }) {
        databaseName='cockroach_1'
        try {
            // console.log(provider_id,user_id,next_page_token,sync_state);
            // const result = await db.query((`UPDATE ${databaseName}.Folder SET next_page_token = $1, sync_state = $2 WHERE provider_id = $3 AND user_id = $4 RETURNING *`), [next_page_token,sync_state,provider_id,user_id])
            // return result
        } catch (error) {
            throw (error)
        }
    }
}

module.exports = findAllFolder

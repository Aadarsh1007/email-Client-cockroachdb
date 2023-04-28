module.exports = function userAuthFolder({ fetchUserAuthFolderUseCase, getAllUserUseCase,createFolderUseCase }) {

    return async function userAuthFolderAction(req, res) {

        const userData=await getAllUserUseCase({databaseName:'cockroach_1'})
        userData.forEach(async element => {
            const fetchedFolder=await fetchUserAuthFolderUseCase({access_token:element.access_token})
            fetchedFolder.labels.forEach(async elementFolder=>{
                var priority=0
                if(elementFolder.name=='INBOX'){
                    priority=1
                }
                else if(elementFolder.name=='SENT'){
                    priority=2
                }
                else if(elementFolder.name=='IMPORTANT'){
                    priority=3
                }
                else if(elementFolder.name=='STARRED'){
                    priority=4
                }
                await createFolderUseCase({id:element.id,folderName:elementFolder.name,provider_id:elementFolder.id,databaseName:'cockroach_1',preference:priority})
            })
        });
    }
};
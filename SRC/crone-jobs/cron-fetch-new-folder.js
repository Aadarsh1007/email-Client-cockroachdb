module.exports = function cronJobHandler({ getAllUserUseCase,createFolderUseCase, fetchUserAuthFolderUseCase,deleteFolderByNameUseCase, getFoldersOfSingleUserUseCase, cron }) {

    return async function cronJobHandlerAction() {

        cron.schedule(`*/5 * * * *`, async () => {
        const userDetails = await getAllUserUseCase({ databaseName: 'cockroach_1' })
        userDetails.forEach(async element => {
            const currentFetchedFolder = await fetchUserAuthFolderUseCase({ access_token: element.access_token })
            const databaseFetchedFolder = await getFoldersOfSingleUserUseCase({ databaseName: 'cockroach_1', id: element.id })

            const storedIds = databaseFetchedFolder.map(folder => folder.provider_id);
            const gmailIds = currentFetchedFolder.labels.map(label => label.id);

            const storedNames = databaseFetchedFolder.map(folder => folder.folder_name);
            const gmailNames = currentFetchedFolder.labels.map(label => label.name);


            const newFolderIds = gmailIds.filter(id => !storedIds.includes(id));
            const newFolderNames = gmailNames.filter(names => !storedNames.includes(names));

            const deletedFolderIds = storedIds.filter(id=> !gmailIds.includes(id));
            const deletedFolderNames = storedNames.filter(names=> !gmailNames.includes(names))

            for (var i = 0; i < newFolderIds.length; i++) {
                // console.log(newFolderIds[i], newFolderNames[i]);
                const updatedFolder=await createFolderUseCase({id:element.id,folderName:newFolderNames[i],provider_id:newFolderIds[i],databaseName:'cockroach_1'})
                console.log('new folder added to database');
            }

            for (var i = 0; i < deletedFolderIds.length; i++) {
                const updatedFolder=await deleteFolderByNameUseCase({id:element.id,folderName:deletedFolderNames[i],databaseName:'cockroach_1'})
                console.log('folder deleted from database');
            }
        })
    })

    }
}
module.exports = function userAuthFolder({ getAllUserUseCase, fetchUserAuthMessageIdUseCase, getFoldersOfSingleUserUseCase, fetchUserAuthEmailUseCase, updateFolderSyncStateUseCase, getDateBeforeUseCase }) {

    return async function userAuthFolderAction(req, res) {

        const userData = await getAllUserUseCase({ databaseName: 'cockroach_1' })
        userData.forEach(async element => {
            const before60Daysdate = await getDateBeforeUseCase()
            const fetchedFolder = await getFoldersOfSingleUserUseCase({ id: element.id, databaseName: 'cockroach_1' })
            fetchedFolder.sort((a, b) => a.preference - b.preference);
            fetchedFolder.forEach(async folderId => {
                if (folderId.preference != 0) {
                    const fetchedMessageIds = await fetchUserAuthMessageIdUseCase({ access_token: element.access_token, dateBefore60Days: before60Daysdate, folderId: folderId.provider_id })
                    var next_page_token = String(fetchedMessageIds.nextPageToken)
                    if (next_page_token == 'undefined') {
                        next_page_token = '-'
                    }

                    fetchedMessageIds.messages.forEach(async userMessageId => {
                        // console.log(userMessageId.id,element.email_id,folderId.provider_id);
                        // const fetchedEmail = await fetchUserAuthEmailUseCase({ access_token: element.access_token, message_id: userMessageId.id })
                        // console.log(fetchedEmail);
                        // const headers = fetchedEmail.payload.headers

                        // const messageId = fetchedEmail.id
                        // const subject = headers.filter(headers => headers.name = 'subject')

                        // console.log(subject, element.email_id);
                    })

                    const updateSyncStatus = await updateFolderSyncStateUseCase({ provider_id: folderId.provider_id, user_id: element.id, next_page_token: next_page_token, sync_state: 'fetched' })
                }
            })
        });
    }
};
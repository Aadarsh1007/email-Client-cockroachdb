module.exports = function cronJobHandler({ getUserTokenUpdateUseCase, getAllUserUseCase,kafka,handler, cron }) {

    return async function cronJobHandlerAction() {

        cron.schedule(`*/29 * * * *`, async () => {
            const userDetails = await getAllUserUseCase({ databaseName: 'cockroach_1' })
            // console.log(userDetails);
            userDetails.forEach(async element => {
                const id=element.id
                const refresh_token=element.refresh_token

                const producer = kafka.producer()
                await producer.connect()
                await producer.send({
                    topic: 'refreshToken',
                    messages: [
                        { value: `${[id, refresh_token]}` },
                    ],
                })
                await producer.disconnect()
            });
        });

        //     const userDetails = await getAllUserUseCase({ databaseName: 'cockroach_1' })
        //     // console.log(userDetails);

        //     userDetails.forEach(element => {
        //         const datetimeString = element.created_at;
        //         const datetime = new Date(datetimeString);
        //         const minute = datetime.getMinutes();
        //         const hour = datetime.getHours();
        //         // console.log(`Minute: ${minute}, Hour: ${hour}`);
        //         // cron.schedule(`${minute} */50 ${hour}-23,0-15 * * *`, () => {
        //             cron.schedule(`* * * * *`, () => {
        //             updateToken({ refresh_token: element.refresh_token, id: element.id })
        //         });
        //     });

        //     // async function updateToken({refresh_token,id}) {
        //     //     const updatedAccessToken = await updateAccessTokenUseCase({ refresh_token, id })
        //     //     // console.log(updatedAccessToken.access_token, '    updatedtoken           ');

        //     //     const date = new Date();
        //     //     const isoDateString = date.toISOString();

        //     //     const updatedUserDetails = await updateUserTokenDetailsUseCase({ access_token: updatedAccessToken.access_token, token_update_at: isoDateString, id:id })
        //     //     console.log(updatedUserDetails);
        //     // }
    }
}
module.exports = function googleAuthHandler({ googleAuthTokenUseCase, getGoogleUserUseCase, createUserUseCase }) {

    return async function googleAuthHandlerAction(req, res) {
        const code = req.query.code
        // console.log(code);
        const { id_token, access_token, refresh_token } = await googleAuthTokenUseCase({ code })
        // console.log('          id_token           ', id_token, '        access_token         ', access_token, '        refresh_token     ', refresh_token);

        const googleUser = await getGoogleUserUseCase({ id_token, access_token })
        // console.log({ googleUser });

        const emailId = googleUser.email
        const password = 'aaa333'
        const contactDetails = '1234567890'
        const databaseName = 'cockroach_1'

        const createdUserData = await createUserUseCase({ emailId, password, contactDetails, databaseName, access_token, refresh_token })
        res.send(createdUserData)
    }
}
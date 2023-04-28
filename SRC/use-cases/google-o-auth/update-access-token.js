module.exports = function updateAccessTokenUse({ axios }) {

    return async function googleAuthHandlerAccess({ refresh_token }) {
        const url = "https://oauth2.googleapis.com/token";

        const values = {
            
            client_id: '697724540183-f93at503m45q9gqe1bsjqjcb2b5ej2uq.apps.googleusercontent.com',
            client_secret: "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",
            // redirect_uri: "http://localhost:3000/api/session/oauth/google",
            grant_type: 'refresh_token',
            refresh_token
            // client_id: clientId,
            // client_secret: clientSecret
        };

        try {
            const res = await axios.post(
                url, values,
                // {
                //     headers: {
                //         "Content-Type": "application/x-www-form-urlencoded",
                //     },
                // }
            );
            return res.data;
        } catch (error) {
            // console.log(error);
            console.error(error.response.data.error);
            console.error(error, "Failed to fetch Google Oauth Tokens");
            throw new Error(error.message);
        }
    }
}
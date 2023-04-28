module.exports = function getGoogleAuthTokenUse({axios}) {

    return async function googleAuthHandlerAccess({id_token,access_token}) {
        try {
            const res = await axios.get(
              `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                },
              }
            );
            return res.data;
          } catch (error) {
            log.error(error, "Error fetching Google user");
            throw new Error(error.message);
          }
    }
} 
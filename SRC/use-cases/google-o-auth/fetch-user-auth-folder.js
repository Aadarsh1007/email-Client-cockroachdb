module.exports = function updateAccessTokenUse({ axios }) {

    return async function googleAuthHandlerAccess({ access_token }) {
        try {
            const res = await axios.get(
              `https://gmail.googleapis.com/gmail/v1/users/me/labels`,
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                },
              }
            );
            return res.data;
          } catch (error) {
            console.log(error, "Error fetching Google user's folders");
            throw new Error(error.message);
          }
    }
}
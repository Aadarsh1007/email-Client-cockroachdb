module.exports = function updateAccessTokenUse({ axios }) {

    return async function googleAuthHandlerAccess({ access_token,dateBefore60Days,folderId }) {
        try {
            const res = await axios.get(
              `https://gmail.googleapis.com/gmail/v1/users/me/messages?q=after:${dateBefore60Days}&maxResults=250&labelIds=${folderId}`,
              {
                headers: {
                  Authorization: `Bearer ${access_token}`,
                },
              }
            );
            return res.data;
          } catch (error) {
            console.log(error, "Error fetching Google user's messageId");
            throw new Error(error.message);
          }
    }
}
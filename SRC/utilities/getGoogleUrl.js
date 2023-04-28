// function getGoogleOAuthURL() {
//     const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  
//     const options = {
//       redirect_uri: 'http://localhost:3000/api/sessions/oauth/google',
//       client_id: '697724540183-992dglosjah88mfub5ahptrpg3gpgh6o.apps.googleusercontent.com',
//       access_type: "offline",
//       response_type: "code",
//       prompt: "consent",
//       scope: [
//         "https://www.googleapis.com/auth/userinfo.profile",
//         "https://www.googleapis.com/auth/userinfo.email",
//       ].join(" "),
//     };
  
//     const qs = new URLSearchParams(options);

//     console.log({qs});
  
//     return `${rootUrl}?${qs.toString()}`;
//   }
//   module.exports = getGoogleOAuthURL;
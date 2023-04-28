const userControllers=require('./user')
const folderControllers=require('./folder')
const googleOAuthController=require('./google-o-auth')


const allControllers=Object.freeze({
    userControllers,
    folderControllers,
    googleOAuthController
})

module.exports = allControllers;
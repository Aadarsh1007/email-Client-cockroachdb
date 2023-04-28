// const run=require('./controllers')
const express=require('express');
const app=express()

const controllers = require('./controllers');

const cron=require('./crone-jobs')
cron.croneUpdateTokenAction()
cron.cronFetchNewFolderAction()


const{
    userControllers,
    folderControllers,
    googleOAuthController
} = controllers

function init(){
    initUserRoutes();
    initFolderRoutes();
}

function initUserRoutes(){
    app.get('/userSignUp',function(req,res){res.render('./index1.ejs')})
    app.get('/api/session/oauth/google',googleOAuthController.googleAuthHandlerAction)
    app.get('/api/session/oauth/folder',googleOAuthController.fetchUserAuthFolderAction)
    app.get('/api/session/oauth/email',googleOAuthController.fetchUserAuthEmailAction)
    app.get('/user',userControllers.getAllUserAction)
    app.get('/user/:id',userControllers.getOneUserAction)
    app.post('/user',userControllers.createUserAction)
    app.delete('/user/:id',userControllers.deleteUserAction)
    app.put('/user/:id',userControllers.updateUserAction)
}

function initFolderRoutes(){
    app.get('/folder',folderControllers.getAllFolderAction)
    app.get('/folder/:id',folderControllers.getFolderAction)
    app.post('/folder/:userid',folderControllers.createFolderAction)
    app.delete('/folder/:id',folderControllers.deleteFolderAction)
    app.put('/folder/:id/:userid',folderControllers.updateFolderAction)
}
init()

module.exports = app;
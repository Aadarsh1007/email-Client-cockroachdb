// const Joi=require('joi')
// const { Kafka} = require('kafkajs')
const {googleOAuthUseCase,userUseCases,folderUseCases}=require('../../use-cases')
const cron=require('node-cron')
// const handler=require('../../handlers/handler')

const {
    googleAuthTokenUseCase,
    getGoogleUserUseCase,
    updateAccessTokenUseCase,
    updateUserTokenDetailsUseCase,
    fetchUserAuthFolderUseCase,
    fetchUserAuthMessageIdUseCase,
    fetchUserAuthEmailUseCase,
    getDateBeforeUseCase
} = googleOAuthUseCase

const {
    createUserUseCase,
    getAllUserUseCase
}=userUseCases

const {
    createFolderUseCase,
    getFoldersOfSingleUserUseCase,
    updateFolderSyncStateUseCase
}=folderUseCases

const googleAuthHandler=require('./google-auth-handler')
const googleAuthHandlerAction=googleAuthHandler({googleAuthTokenUseCase,getGoogleUserUseCase,createUserUseCase,updateAccessTokenUseCase,updateUserTokenDetailsUseCase,cron})

const fetchUserAuthFolder=require('./fetch-user-auth-folder')
const fetchUserAuthFolderAction=fetchUserAuthFolder({fetchUserAuthFolderUseCase,getAllUserUseCase,createFolderUseCase})

const fetchUserAuthEmail=require('./fetch-user-auth-email')
const fetchUserAuthEmailAction=fetchUserAuthEmail({getAllUserUseCase,fetchUserAuthMessageIdUseCase,fetchUserAuthEmailUseCase,getFoldersOfSingleUserUseCase,updateFolderSyncStateUseCase,getDateBeforeUseCase})

const googleOAuthController=Object.freeze({
    googleAuthHandlerAction,
    fetchUserAuthFolderAction,
    fetchUserAuthEmailAction
})

module.exports=googleOAuthController
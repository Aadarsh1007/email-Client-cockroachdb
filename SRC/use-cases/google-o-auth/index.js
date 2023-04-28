const axios=require('axios')
const {getUsers}=require('../../data-access')

const {
    updateUserTokenQuerydb,
    getUserTokenUpdateQueryDb
} = getUsers


const googleAuthTokenUse=require('./get-google-auth-token-use')
const googleAuthTokenUseCase=googleAuthTokenUse({axios})

const getGoogleUserUse=require('./get-google-user')
const getGoogleUserUseCase=getGoogleUserUse({axios})

const updateAccessTokenUse=require('./update-access-token')
const updateAccessTokenUseCase=updateAccessTokenUse({axios})

const updateUserTokenDetailsUse=require('./update-user-token-details')
const updateUserTokenDetailsUseCase=updateUserTokenDetailsUse({updateUserTokenQuerydb})

const getUserTokenUpdateUse=require('./get-user-token-update')
const getUserTokenUpdateUseCase=getUserTokenUpdateUse({getUserTokenUpdateQueryDb})

const fetchUserAuthFolderUse=require('./fetch-user-auth-folder')
const fetchUserAuthFolderUseCase=fetchUserAuthFolderUse({axios})

const fetchUserAuthMessageIdUse=require('./fetch-user-auth-messageid')
const fetchUserAuthMessageIdUseCase=fetchUserAuthMessageIdUse({axios})

const fetchUserAuthEmailUse=require('./fetch-user-auth-email')
const fetchUserAuthEmailUseCase=fetchUserAuthEmailUse({axios})

const getDateBeforeUse=require('./get-date-before')
const getDateBeforeUseCase=getDateBeforeUse()

const googleOAuthUseCases=Object.freeze({
    googleAuthTokenUseCase,
    getGoogleUserUseCase,
    updateAccessTokenUseCase,
    updateUserTokenDetailsUseCase,
    getUserTokenUpdateUseCase,
    fetchUserAuthFolderUseCase,
    fetchUserAuthMessageIdUseCase,
    fetchUserAuthEmailUseCase,
    getDateBeforeUseCase
    
})

module.exports=googleOAuthUseCases
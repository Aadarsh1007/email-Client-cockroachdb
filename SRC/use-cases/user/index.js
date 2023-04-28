const Joi=require('joi')
const {getUsers,getAllFolder}=require('../../data-access')

// const {
//     getAllUserQuerydb,
//     getOneUserQuerydb,
//     createUserQuerydb,
//     deleteUserQuerydb,
//     updateUserQuerydb
// } = getUsers

const {
    createFolderQuerydb
} = getAllFolder


const getAllUserUse=require('./get-all-user')
const getAllUserUseCase=getAllUserUse({getUsers})

const getOneUserUse=require('./get-one-user')
const getOneUserUseCase=getOneUserUse({getUsers,Joi})

const createUserUse = require('./create-user')
const createUserUseCase=createUserUse({getUsers,Joi})

const deleteUserUse=require('./delete-user')
const deleteUserUseCase=deleteUserUse({getUsers,Joi})

const createDefaultFolders=require('../folder/create-default-folder')
const createDefaultFolder=createDefaultFolders({createFolderQuerydb})

const updateUserUse=require('./update-user')
const updateUserUseCase=updateUserUse({getUsers,Joi})


const userUseCase=Object.freeze({
    getAllUserUseCase,
    getOneUserUseCase,
    createUserUseCase,
    deleteUserUseCase,
    createDefaultFolder,
    updateUserUseCase,
})

module.exports=userUseCase
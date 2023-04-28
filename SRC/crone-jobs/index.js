// const Joi=require('joi')
// const { Kafka} = require('kafkajs')
const { googleOAuthUseCase, userUseCases,folderUseCases } = require('../use-cases')
const cron = require('node-cron')
const { Kafka} = require('kafkajs')
const handler=require('../handlers/update-user-token')

const {
    getUserTokenUpdateUseCase,
    fetchUserAuthFolderUseCase
} = googleOAuthUseCase

const { 
    getAllUserUseCase ,
} = userUseCases

const {
    getFoldersOfSingleUserUseCase,
    createFolderUseCase,
    deleteFolderByNameUseCase
}=folderUseCases

const kafka = new Kafka({
    clientId: 'console-consumer',
    brokers: ['localhost:9092']
})

const croneUpdateToken = require('./crone-update-access-token')
const croneUpdateTokenAction = croneUpdateToken({ getUserTokenUpdateUseCase, getAllUserUseCase,handler,kafka, cron })

const cronFetchNewFolder=require('./cron-fetch-new-folder')
const cronFetchNewFolderAction=cronFetchNewFolder({getAllUserUseCase,createFolderUseCase,fetchUserAuthFolderUseCase,getFoldersOfSingleUserUseCase,deleteFolderByNameUseCase,cron})

const croneJobController = Object.freeze({
    croneUpdateTokenAction,
    cronFetchNewFolderAction
})

module.exports = croneJobController
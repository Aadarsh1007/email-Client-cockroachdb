const Joi=require('joi')
const { Kafka} = require('kafkajs')
const {userUseCases}=require('../../use-cases')
const handler=require('../../handlers/handler')

const {
    getAllUserUseCase,
    getOneUserUseCase,
    createUserUseCase,
    deleteUserUseCase,
    createDefaultFolder,
    updateUserUseCase,
} = userUseCases

const kafka = new Kafka({
  clientId: 'console-consumer',
  brokers: ['localhost:9092']
})


const getAllUsers=require('./get-all-user')
const getAllUserAction=getAllUsers({getAllUserUseCase})

const getOneUser=require('./get-one-user')
const getOneUserAction=getOneUser({getOneUserUseCase,Joi})

const createUser=require('./create-user')
const createUserAction=createUser({createUserUseCase,createDefaultFolder,Joi,kafka,handler})

const deleteUser=require('./delete-user')
const deleteUserAction=deleteUser({deleteUserUseCase,Joi})

const updateUser=require('./update-user')
const updateUserAction=updateUser({updateUserUseCase,Joi})

const userControllers=Object.freeze({
    getAllUserAction,
    getOneUserAction,
    createUserAction,
    deleteUserAction,
    updateUserAction,
})

module.exports=userControllers